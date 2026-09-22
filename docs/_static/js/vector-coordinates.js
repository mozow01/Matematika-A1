"use strict";

(() => {
  const p = (x, y) => ({ x, y });
  const add = (u, v) => p(u.x + v.x, u.y + v.y);
  const sub = (u, v) => p(u.x - v.x, u.y - v.y);
  const scale = (u, s) => p(u.x * s, u.y * s);
  const midpoint = (u, v) => scale(add(u, v), 0.5);

  function defs(prefix) {
    return `
      <defs>
        <marker id="${prefix}-slate" markerWidth="9" markerHeight="9" refX="8" refY="4.5" orient="auto" markerUnits="strokeWidth">
          <path d="M0,0 L9,4.5 L0,9 z" fill="#42677c"></path>
        </marker>
        <marker id="${prefix}-green" markerWidth="9" markerHeight="9" refX="8" refY="4.5" orient="auto" markerUnits="strokeWidth">
          <path d="M0,0 L9,4.5 L0,9 z" fill="#426b5a"></path>
        </marker>
        <marker id="${prefix}-red" markerWidth="9" markerHeight="9" refX="8" refY="4.5" orient="auto" markerUnits="strokeWidth">
          <path d="M0,0 L9,4.5 L0,9 z" fill="#a85e46"></path>
        </marker>
        <marker id="${prefix}-ink" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto" markerUnits="strokeWidth">
          <path d="M0,0 L8,4 L0,8 z" fill="#26343a"></path>
        </marker>
      </defs>`;
  }

  function line(from, to, className = "shape-line", extra = "") {
    return `<line class="${className}" x1="${from.x}" y1="${from.y}" x2="${to.x}" y2="${to.y}" ${extra}></line>`;
  }

  function arrow(prefix, from, to, className, color) {
    return line(from, to, className, `marker-end="url(#${prefix}-${color})"`);
  }

  function label(value, at, className = "math-label", anchor = "middle") {
    return `<text class="${className}" x="${at.x}" y="${at.y}" text-anchor="${anchor}">${value}</text>`;
  }

  function indexedLabel(base, index, at) {
    return `<text class="math-label" x="${at.x}" y="${at.y}" text-anchor="middle">${base}<tspan class="small-label" baseline-shift="sub">${index}</tspan></text>`;
  }

  function dot(at, name, offset = p(0, -12), anchor = "middle") {
    return `<circle class="point-dot" cx="${at.x}" cy="${at.y}" r="4"></circle>${label(name, add(at, offset), "math-label", anchor)}`;
  }

  function polygon(points, className) {
    return `<polygon class="${className}" points="${points.map(q => `${q.x},${q.y}`).join(" ")}"></polygon>`;
  }

  function initOrthocenter() {
    const svg = document.querySelector("#coordinate-orthocenter-svg");
    if (!svg) return;

    const o = p(380, 235);
    const a = p(352, 77);
    const b = p(241, 315);
    const c = p(530, 290);
    const m = add(o, add(sub(a, o), add(sub(b, o), sub(c, o))));

    const altitude = (vertex, factor, index, textAt) => {
      const direction = sub(m, vertex);
      const start = add(vertex, scale(direction, -0.12));
      const end = add(vertex, scale(direction, factor));
      return line(start, end, "guide-line") + indexedLabel("m", index, textAt);
    };

    let content = defs("orth");
    content += `<circle class="circumcircle" cx="${o.x}" cy="${o.y}" r="160"></circle>`;
    content += polygon([a, b, c], "triangle-fill");
    content += line(a, b) + line(b, c) + line(c, a);
    content += altitude(a, 2.05, "a", p(375, 370));
    content += altitude(b, 1.62, "b", p(465, 110));
    content += altitude(c, 1.72, "c", p(280, 115));
    content += arrow("orth", o, a, "vector-a", "slate");
    content += arrow("orth", o, b, "vector-b", "green");
    content += arrow("orth", o, c, "vector-result", "red");
    content += arrow("orth", o, m, "component-line", "ink");
    content += label("a", add(midpoint(o, a), p(-16, -2)));
    content += label("b", add(midpoint(o, b), p(-12, 14)));
    content += label("c", add(midpoint(o, c), p(10, 16)));
    content += label("m", add(midpoint(o, m), p(15, -3)));
    content += dot(o, "O", p(12, 25), "start");
    content += dot(a, "A", p(0, -13));
    content += dot(b, "B", p(-12, 20));
    content += dot(c, "C", p(12, 19));
    content += dot(m, "M", p(-11, -13), "end");
    svg.innerHTML = content;
  }

  function initCosineTheorem() {
    const svg = document.querySelector("#coordinate-cosine-svg");
    if (!svg) return;

    const aPoint = p(145, 325);
    const bPoint = p(565, 325);
    const cPoint = p(350, 75);
    const arcStart = p(205, 325);
    const arcEnd = p(183, 279);

    let content = defs("cos");
    content += polygon([aPoint, bPoint, cPoint], "triangle-fill");
    content += arrow("cos", aPoint, bPoint, "vector-a", "slate");
    content += arrow("cos", aPoint, cPoint, "vector-b", "green");
    content += arrow("cos", bPoint, cPoint, "vector-result", "red");
    content += `<path class="angle-arc" d="M${arcStart.x},${arcStart.y} A60,60 0 0 0 ${arcEnd.x},${arcEnd.y}"></path>`;
    content += label("γ", p(211, 291), "math-label");
    content += label("u", p(355, 352));
    content += label("v", p(226, 187));
    content += label("w = v − u", p(490, 187));
    content += label("c = |u|", p(355, 382), "small-label");
    content += label("b = |v|", p(207, 156), "small-label");
    content += label("a = |w|", p(520, 156), "small-label");
    content += dot(aPoint, "A", p(-15, 20));
    content += dot(bPoint, "B", p(15, 20));
    content += dot(cPoint, "C", p(0, -14));
    svg.innerHTML = content;
  }

  function initVolume() {
    const svg = document.querySelector("#coordinate-volume-svg");
    if (!svg) return;

    const o = p(205, 385);
    const b = p(500, 345);
    const c = p(315, 245);
    const bc = add(b, sub(c, o));
    const a = p(160, 225);
    const ab = add(a, sub(b, o));
    const ac = add(a, sub(c, o));
    const abc = add(ab, sub(c, o));
    const foot = p(260, 315);
    const baseCenter = scale(add(add(o, b), add(c, bc)), 0.25);
    const normalEnd = add(baseCenter, p(-36, -112));

    let content = defs("vol");
    content += polygon([o, b, bc, c], "fill-green");
    content += polygon([a, ab, abc, ac], "fill-paper");
    content += line(o, b) + line(b, bc) + line(bc, c) + line(c, o);
    content += line(a, ab) + line(ab, abc) + line(abc, ac) + line(ac, a);
    content += line(o, a) + line(b, ab) + line(c, ac) + line(bc, abc);
    content += line(a, foot, "guide-line");
    content += arrow("vol", o, a, "vector-a", "slate");
    content += arrow("vol", o, b, "vector-b", "green");
    content += arrow("vol", o, c, "vector-result", "red");
    content += arrow("vol", baseCenter, normalEnd, "vector-result", "red");
    content += label("a", p(168, 294));
    content += label("b", p(355, 385));
    content += label("c", p(242, 300));
    content += label("b × c", add(normalEnd, p(8, -9)), "math-label", "start");
    content += label("h", p(221, 266), "math-label");
    content += label("alap: b, c", p(455, 285), "small-label");
    content += dot(o, "O", p(-12, 20));
    svg.innerHTML = content;
  }

  function initBasis() {
    const svg = document.querySelector("#coordinate-basis-svg");
    if (!svg) return;

    const o = p(300, 355);
    const iEnd = p(560, 385);
    const jEnd = p(125, 275);
    const kEnd = p(300, 105);
    const xStep = p(465, 374);
    const xyStep = p(360, 326);
    const vEnd = p(360, 155);

    let content = defs("basis3");
    content += arrow("basis3", o, iEnd, "vector-a", "slate");
    content += arrow("basis3", o, jEnd, "vector-b", "green");
    content += arrow("basis3", o, kEnd, "vector-result", "red");
    content += line(xStep, xyStep, "guide-line");
    content += line(xyStep, vEnd, "guide-line");
    content += line(o, xStep, "component-line");
    content += line(xStep, xyStep, "component-line");
    content += line(xyStep, vEnd, "component-line");
    content += arrow("basis3", o, vEnd, "vector-result", "red");
    content += label("i", add(iEnd, p(16, 4)), "math-label", "start");
    content += label("j", add(jEnd, p(-8, -8)), "math-label", "end");
    content += label("k", add(kEnd, p(0, -12)));
    content += label("x i", midpoint(o, xStep), "small-label");
    content += label("y j", add(midpoint(xStep, xyStep), p(-8, -8)), "small-label");
    content += label("z k", add(midpoint(xyStep, vEnd), p(18, 0)), "small-label");
    content += label("v", add(vEnd, p(18, -8)), "math-label", "start");
    content += dot(o, "O", p(-12, 21));
    svg.innerHTML = content;
  }

  function initCrossProduct() {
    const svg = document.querySelector("#coordinate-cross-svg");
    if (!svg) return;

    const o = p(330, 345);
    const iEnd = p(575, 375);
    const jEnd = p(145, 260);
    const kEnd = p(330, 95);
    const a = p(500, 330);
    const b = p(245, 205);
    const sum = add(a, sub(b, o));
    const normal = p(330, 125);

    let content = defs("cross3");
    content += line(o, iEnd, "axis-line", `marker-end="url(#cross3-ink)"`);
    content += line(o, jEnd, "axis-line", `marker-end="url(#cross3-ink)"`);
    content += line(o, kEnd, "axis-line", `marker-end="url(#cross3-ink)"`);
    content += polygon([o, a, sum, b], "fill-green");
    content += line(a, sum, "guide-line") + line(b, sum, "guide-line");
    content += arrow("cross3", o, a, "vector-a", "slate");
    content += arrow("cross3", o, b, "vector-b", "green");
    content += arrow("cross3", o, normal, "vector-result", "red");
    content += label("a", add(midpoint(o, a), p(3, -12)));
    content += label("b", add(midpoint(o, b), p(-15, -2)));
    content += label("a × b", add(normal, p(15, -7)), "math-label", "start");
    content += label("i", add(iEnd, p(14, 5)), "math-label", "start");
    content += label("j", add(jEnd, p(-9, -8)), "math-label", "end");
    content += label("k", add(kEnd, p(0, -12)));
    content += label("a és b síkja", p(485, 245), "small-label");
    content += dot(o, "O", p(-12, 21));
    svg.innerHTML = content;
  }

  function initVectorCoordinates() {
    initOrthocenter();
    initCosineTheorem();
    initVolume();
    initBasis();
    initCrossProduct();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initVectorCoordinates);
  } else {
    initVectorCoordinates();
  }
})();
