/* Lecture 06 interactive SVGs. No library or network dependency. */
(() => {
  "use strict";
  const NS = "http://www.w3.org/2000/svg";
  const C = {
    axis: "#b6c0c7", grid: "#e9edef", ink: "#46535e",
    blue: "#6c91a0", plum: "#98849f", pale: "#f2f0f5"
  };
  function node(parent, tag, attrs = {}, value) {
    const child = document.createElementNS(NS, tag);
    for (const [name, val] of Object.entries(attrs))
      child.setAttribute(name, String(val));
    if (value !== undefined) child.textContent = value;
    parent.appendChild(child);
    return child;
  }
  function line(parent, x1, y1, x2, y2, color=C.axis, width=1.2, dash) {
    return node(parent, "line", {
      x1, y1, x2, y2, stroke: color, "stroke-width": width,
      ...(dash ? {"stroke-dasharray": dash} : {})
    });
  }
  function label(parent, x, y, value, anchor="start", color=C.ink) {
    return node(parent, "text", {x, y, "text-anchor": anchor, fill: color}, value);
  }
  function dot(parent, x, y, color, open=false, radius=3.2) {
    return node(parent, "circle", {
      cx:x, cy:y, r:radius, fill:open ? "white" : color,
      stroke:color, "stroke-width":open ? 1.5 : .8
    });
  }
  function path(parent, points, color=C.blue, width=1.8) {
    if (points.length < 2) return;
    const d=points.map(([x,y],i) =>
      (i ? "L" : "M")+x.toFixed(2)+","+y.toFixed(2)).join(" ");
    node(parent,"path",{d,fill:"none",stroke:color,
      "stroke-width":width,"stroke-linecap":"round",
      "stroke-linejoin":"round"});
  }
  function clear(svg) {
    while (svg.firstChild) svg.removeChild(svg.firstChild);
  }
  const format = v => Number.isInteger(v) ? String(v) :
    Number(v).toFixed(1).replace(".", ",");
  function controls(root, redraw) {
    root.querySelectorAll("input[type=range]").forEach(input => {
      input.addEventListener("input", redraw);
    });
    return key => {
      const input=root.querySelector('[data-sl-input="'+key+'"]');
      const value=Number(input.value);
      const output=root.querySelector('[data-sl-out="'+key+'"]');
      if (output) output.textContent=format(value);
      return value;
    };
  }

  function sequence(root, kind) {
    const svg=root.querySelector("svg");
    let get;
    const render=() => {
      const nMax=get("count");
      const p=get("power");
      const S=kind==="monotone" ? get("limit") : 0;
      const mu=kind==="clusters" ? get("center") : 0;
      const gap=kind==="clusters" ? get("gap") : 0;
      const values=[];
      for(let n=1;n<=nMax;n++) {
        let value;
        if(kind==="monotone") value=S-2/Math.pow(n+1,p);
        else if(kind==="alternating") value=(n%2?-1:1)/Math.pow(n,p);
        else value=mu+(n%2?-1:1)*(gap+1/Math.pow(n,p));
        values.push(value);
      }
      const limits=kind==="monotone" ? [S] :
        kind==="alternating" ? [0] : [mu-gap,mu+gap];
      const ymin=Math.min(0,...values,...limits);
      const ymax=Math.max(0,...values,...limits);
      const pad=Math.max(.22,(ymax-ymin)*.15);
      const low=ymin-pad, high=ymax+pad;
      const px=n=>53+(n-1)*(610/Math.max(1,nMax-1));
      const py=y=>232-(y-low)*(194/(high-low));
      clear(svg);
      line(svg,53,232,663,232,C.axis,1.1);
      line(svg,53,24,53,232,C.axis,1.1);
      const zero=py(0);
      if(zero>24&&zero<232) line(svg,53,zero,663,zero,C.grid,1);
      label(svg,46,19,"aₙ","end");
      label(svg,685,250,"n");
      label(svg,53,250,"1","middle");
      label(svg,663,250,String(nMax),"middle");
      limits.forEach((v,i)=>{
        const color=kind==="clusters" && limits.length===2 ?
          (i===0?C.plum:C.blue) : C.plum;
        line(svg,53,py(v),663,py(v),color,1.1,"5 5");
        const name=kind==="monotone" ? "S="+format(v) :
          kind==="alternating" ? "0" :
          (i===0?"μ−d=":"μ+d=")+format(v);
        label(svg,60,py(v)-5,name);
      });
      values.forEach((v,i)=>{
        const color=kind==="monotone" ? C.blue :
          (i%2===0 ? C.plum : C.blue);
        dot(svg,px(i+1),py(v),color,false,nMax>32?2.8:3.2);
      });
    };
    get=controls(root,render);
    render();
  }

  const specs={
    cos:{range:[-.12,.85],f:x=>(1-Math.cos(x))/(x*x)},
    sign:{range:[-1.4,1.4],f:x=>Math.sign(x)},
    exp:{range:[-.25,3.2],f:x=>Math.exp(1/x)},
    sin:{range:[-1.25,1.25],f:x=>Math.sin(1/x)},
    reciprocal:{range:[-3.1,3.1],f:x=>1/x},
    square:{range:[-.3,3.2],f:x=>1/(x*x)}
  };
  function oneSided(root) {
    let get;
    const draw=()=>{
      const zoom=get("zoom");
      root.querySelectorAll("svg[data-sl-fn]").forEach(svg=>{
        const kind=svg.dataset.slFn, spec=specs[kind];
        const lo=kind==="reciprocal" ? -Math.max(3.1,1.4/zoom) : spec.range[0];
        const hi=kind==="exp" ? Math.max(3.2,1.3*Math.exp(1/zoom)) :
          kind==="reciprocal" ? Math.max(3.1,1.4/zoom) :
          kind==="square" ? Math.max(3.2,1.4/(zoom*zoom)) : spec.range[1];
        const xmap=x=>28+(x+zoom)/ (2*zoom)*274;
        const ymap=y=>167-(y-lo)/(hi-lo)*142;
        clear(svg);
        const yzero=ymap(0);
        line(svg,28,yzero,302,yzero,C.axis,1.1);
        line(svg,165,19,165,167,C.axis,1.1);
        label(svg,165,183,"0","middle");
        label(svg,299,Math.min(181,yzero+15),"x","end");
        label(svg,172,28,"y");
        const stop=Math.min(zoom/75,.02);
        for(const sign of [-1,1]) {
          const points=[];
          for(let i=0;i<=460;i++){
            const abs=stop+(zoom-stop)*i/460;
            const x=sign*abs, y=spec.f(x);
            if(Number.isFinite(y)&&y>=lo&&y<=hi)
              points.push([xmap(x),ymap(y)]);
            else if(points.length) {
              path(svg,points,sign<0?C.plum:C.blue);
              points.length=0;
            }
          }
          path(svg,points,sign<0?C.plum:C.blue);
        }
        if(kind==="cos") dot(svg,165,ymap(.5),C.blue,true,3.4);
        if(kind==="sign") {
          dot(svg,165,ymap(-1),C.plum,true,3.4);
          dot(svg,165,ymap(1),C.blue,true,3.4);
          dot(svg,165,ymap(0),C.ink,false,2.8);
        }
        if(kind==="sin"){
          node(svg,"rect",{x:157,y:ymap(1),width:16,
            height:ymap(-1)-ymap(1),fill:C.pale,opacity:.8});
          label(svg,178,43,"±1");
        }
      });
    };
    get=controls(root,draw);
    draw();
  }
  function counterexample(root) {
    const svg=root.querySelector("svg");
    const kind=root.dataset.slCounterexample;
    clear(svg);
    const ymap=y=>130-76*y;
    const xmap=kind==="sign" ? x=>350+260*x : x=>90+560*x/.7;
    const xzero=xmap(0);
    line(svg,65,ymap(0),650,ymap(0),C.axis,1.1);
    line(svg,xzero,27,xzero,235,C.axis,1.1);
    for(const y of [-1,1]) {
      line(svg,65,ymap(y),650,ymap(y),C.grid,1,"4 5");
      label(svg,xzero+8,ymap(y)-6,y===1?"+1":"−1");
    }
    label(svg,650,ymap(0)+18,"x","end");
    label(svg,xzero+7,33,"f(x)");
    label(svg,xzero-7,ymap(0)+18,"0","end");
    if(kind==="sign") {
      line(svg,65,ymap(-1),xzero,ymap(-1),C.plum,1.8);
      line(svg,xzero,ymap(1),650,ymap(1),C.blue,1.8);
      dot(svg,xzero,ymap(-1),C.plum,true,4);
      dot(svg,xzero,ymap(1),C.blue,true,4);
      dot(svg,xzero,ymap(0),C.ink,false,3.5);
      for(let n=1;n<=8;n++) {
        dot(svg,xmap(1/n),ymap(1),C.blue,false,3.7);
        dot(svg,xmap(-1/n),ymap(-1),C.plum,false,3.7);
      }
      label(svg,500,42,"xₙ = 1/n");
      label(svg,115,222,"yₙ = −1/n");
    } else {
      const points=[];
      const start=1/.69, end=1/.008;
      for(let i=0;i<=2600;i++) {
        const t=start+(end-start)*i/2600;
        points.push([xmap(1/t),ymap(Math.sin(t))]);
      }
      path(svg,points,C.ink,1.35);
      for(let n=0;n<=5;n++) {
        const a=1/(Math.PI/2+2*Math.PI*n);
        const b=1/(3*Math.PI/2+2*Math.PI*n);
        dot(svg,xmap(a),ymap(1),C.blue,false,4);
        dot(svg,xmap(b),ymap(-1),C.plum,false,4);
      }
      label(svg,490,42,"f(xₙ) = +1");
      label(svg,425,223,"f(yₙ) = −1");
      label(svg,145,249,"xₙ, yₙ → 0⁺");
    }
  }
  document.addEventListener("DOMContentLoaded",()=>{
    document.querySelectorAll("[data-sl-monotone]").forEach(r=>sequence(r,"monotone"));
    document.querySelectorAll("[data-sl-alternating]").forEach(r=>sequence(r,"alternating"));
    document.querySelectorAll("[data-sl-clusters]").forEach(r=>sequence(r,"clusters"));
    document.querySelectorAll("[data-sl-one-sided]").forEach(oneSided);
    document.querySelectorAll("[data-sl-counterexample]").forEach(counterexample);
  });
})();
