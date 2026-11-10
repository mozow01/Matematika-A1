/* Lecture 10 SVG diagrams. No external dependency. */
(() => {
  "use strict";

  const NS = "http://www.w3.org/2000/svg";
  const C = {
    ink: "#46535e",
    muted: "#75828b",
    axis: "#b8c1c7",
    grid: "#e8ecef",
    blue: "#688b9c",
    plum: "#8f7c98",
    sage: "#769487",
    paleBlue: "#edf3f5",
    palePlum: "#f2eff4",
    paleSage: "#eef4f0"
  };

  function el(parent, tag, attrs = {}, text) {
    const node = document.createElementNS(NS, tag);
    Object.entries(attrs).forEach(([key, value]) => {
      node.setAttribute(key, String(value));
    });
    if (text !== undefined) node.textContent = text;
    parent.appendChild(node);
    return node;
  }

  function line(parent, x1, y1, x2, y2, color = C.axis, width = 1.2, dash) {
    return el(parent, "line", {
      x1, y1, x2, y2,
      stroke: color,
      "stroke-width": width,
      "stroke-linecap": "round",
      ...(dash ? {"stroke-dasharray": dash} : {})
    });
  }

  function label(parent, x, y, text, anchor = "start", color = C.ink, size) {
    return el(parent, "text", {
      x, y,
      "text-anchor": anchor,
      fill: color,
      ...(size ? {"font-size": size} : {})
    }, text);
  }

  function circle(parent, x, y, radius, color = C.blue, open = false) {
    return el(parent, "circle", {
      cx: x, cy: y, r: radius,
      fill: open ? "#fff" : color,
      stroke: color,
      "stroke-width": open ? 1.5 : .7
    });
  }

  function pathFromPoints(parent, points, color = C.blue, width = 1.8, dash) {
    if (points.length < 2) return;
    const d = points.map(([x, y], index) =>
      (index ? "L" : "M") + x.toFixed(2) + "," + y.toFixed(2)
    ).join(" ");
    el(parent, "path", {
      d,
      fill: "none",
      stroke: color,
      "stroke-width": width,
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      ...(dash ? {"stroke-dasharray": dash} : {})
    });
  }

  function axes(svg, x0, y0, left, right, top, bottom) {
    line(svg, left, y0, right, y0, C.axis, 1.05);
    line(svg, x0, top, x0, bottom, C.axis, 1.05);
  }

  function sample(parent, fn, xmin, xmax, px, py, steps, color, width) {
    const points = [];
    for (let i = 0; i <= steps; i += 1) {
      const x = xmin + (xmax - xmin) * i / steps;
      const y = fn(x);
      if (Number.isFinite(y)) points.push([px(x), py(y)]);
    }
    pathFromPoints(parent, points, color, width);
  }

  function sampleClipped(parent, fn, xmin, xmax, ymin, ymax, px, py, steps, color) {
    let points = [];
    function flush() {
      pathFromPoints(parent, points, color, 1.35);
      points = [];
    }
    for (let i = 0; i <= steps; i += 1) {
      const x = xmin + (xmax - xmin) * i / steps;
      const y = fn(x);
      if (!Number.isFinite(y) || y < ymin || y > ymax) {
        flush();
      } else {
        const point = [px(x), py(y)];
        if (points.length && Math.abs(point[1] - points[points.length - 1][1]) > 45) {
          flush();
        }
        points.push(point);
      }
    }
    flush();
  }

  function arrow(parent, x1, y1, x2, y2, color = C.ink, width = 1.3) {
    line(parent, x1, y1, x2, y2, color, width);
    const angle = Math.atan2(y2 - y1, x2 - x1);
    const size = 6;
    const a1 = angle + Math.PI * .82;
    const a2 = angle - Math.PI * .82;
    el(parent, "path", {
      d: "M" + x2 + "," + y2 +
        " L" + (x2 + size * Math.cos(a1)) + "," + (y2 + size * Math.sin(a1)) +
        " L" + (x2 + size * Math.cos(a2)) + "," + (y2 + size * Math.sin(a2)) + " Z",
      fill: color
    });
  }

  function drawLipschitz(root) {
    const svg = root.querySelector("svg");
    const left = 62, right = 760, top = 28, bottom = 312;
    const xmin = -3.2, xmax = 3.2, ymin = -3, ymax = 3;
    const px = x => left + (x - xmin) / (xmax - xmin) * (right - left);
    const py = y => bottom - (y - ymin) / (ymax - ymin) * (bottom - top);
    const fn = x => .45 * Math.sin(1.2 * x) + .2 * x;
    const x0 = .35, y0 = fn(x0), L = .9;

    const upper = [], lower = [];
    for (let i = 0; i <= 100; i += 1) {
      const x = xmin + (xmax - xmin) * i / 100;
      upper.push([px(x), py(y0 + L * Math.abs(x - x0))]);
      lower.push([px(x), py(y0 - L * Math.abs(x - x0))]);
    }
    const polygon = upper.concat(lower.reverse()).map(point => point.join(",")).join(" ");
    el(svg, "polygon", {points: polygon, fill: C.paleBlue});

    axes(svg, px(0), py(0), left, right, top, bottom);
    pathFromPoints(svg, upper, C.blue, 1.1, "5 5");
    pathFromPoints(svg, lower.slice().reverse(), C.blue, 1.1, "5 5");
    sample(svg, fn, xmin, xmax, px, py, 400, C.ink, 2);
    circle(svg, px(x0), py(y0), 4.3, C.plum);
    line(svg, px(x0), py(y0), px(2.5), py(y0 + L * (2.5 - x0)), C.blue, 1.2);
    line(svg, px(x0), py(y0), px(2.5), py(y0 - L * (2.5 - x0)), C.blue, 1.2);
    label(svg, px(x0) + 9, py(y0) - 10, "(s,y(s))", "start", C.plum, 11);
    label(svg, px(2.2), py(y0 + L * (2.2 - x0)) - 8, "meredekség L", "middle", C.blue, 11);
    label(svg, px(2.2), py(y0 - L * (2.2 - x0)) + 18, "meredekség −L", "middle", C.blue, 11);
    label(svg, (left + right) / 2, 350, "|y(t)−y(s)| ≤ L|t−s|", "middle", C.muted, 14);
  }

  function drawDerivativeExamples(root) {
    const svg = root.querySelector("svg");

    function panel(offset, kind) {
      const left = offset + 38, right = offset + 374, top = 42, bottom = 310;
      const xmin = -.5, xmax = .5;
      const ymin = kind === "bounded" ? -2.1 : -8;
      const ymax = kind === "bounded" ? 2.1 : 8;
      const px = x => left + (x - xmin) / (xmax - xmin) * (right - left);
      const py = y => bottom - (y - ymin) / (ymax - ymin) * (bottom - top);
      const fn = kind === "bounded"
        ? x => 2 * x * Math.sin(1 / x) - Math.cos(1 / x)
        : x => 2 * x * Math.sin(1 / (x * x)) - 2 / x * Math.cos(1 / (x * x));
      const cutoff = kind === "bounded" ? .008 : .105;
      const color = kind === "bounded" ? C.blue : C.plum;

      el(svg, "rect", {
        x: left, y: top, width: right - left, height: bottom - top,
        fill: kind === "bounded" ? C.paleBlue : C.palePlum
      });
      axes(svg, px(0), py(0), left, right, top, bottom);
      sampleClipped(svg, fn, xmin, -cutoff, ymin, ymax, px, py, 1000, color);
      sampleClipped(svg, fn, cutoff, xmax, ymin, ymax, px, py, 1000, color);
      circle(svg, px(0), py(0), 3.7, color);
      label(svg, (left + right) / 2, 24,
        kind === "bounded" ? "p′: szakadásos, de korlátos" : "q′: szakadásos és nem korlátos",
        "middle", C.ink, 14);
      label(svg, px(0) + 7, py(0) - 8,
        kind === "bounded" ? "p′(0)=0" : "q′(0)=0", "start", color, 10);
      if (kind !== "bounded") {
        arrow(svg, px(-.035), py(2), px(-.035), top + 8, C.plum);
        arrow(svg, px(.035), py(-2), px(.035), bottom - 8, C.plum);
        label(svg, (left + right) / 2, bottom + 24, "az amplitúdó → ∞", "middle", C.plum, 11);
      } else {
        line(svg, left, py(1.5), right, py(1.5), C.muted, .8, "3 5");
        line(svg, left, py(-1.5), right, py(-1.5), C.muted, .8, "3 5");
        label(svg, right - 4, py(1.5) - 6, "korlátos sáv", "end", C.muted, 10);
      }
    }

    panel(0, "bounded");
    panel(410, "unbounded");
    line(svg, 410, 25, 410, 350, C.grid, 1);
  }

  function drawDarboux(root) {
    const svg = root.querySelector("svg");
    const left = 66, right = 754, top = 28, bottom = 300;
    const xmin = -1.25, xmax = 1.25, ymin = -.75, ymax = 1.5;
    const px = x => left + (x - xmin) / (xmax - xmin) * (right - left);
    const py = y => bottom - (y - ymin) / (ymax - ymin) * (bottom - top);
    const g = x => x * x + .15 * x * x * x;
    const a = -1, b = 1, xi = 0;

    axes(svg, px(0), py(0), left, right, top, bottom);
    sample(svg, g, xmin, xmax, px, py, 360, C.ink, 2);
    circle(svg, px(a), py(g(a)), 4, C.plum);
    circle(svg, px(b), py(g(b)), 4, C.blue);
    circle(svg, px(xi), py(g(xi)), 4.3, C.sage);
    line(svg, px(-.35), py(0), px(.35), py(0), C.sage, 1.35);
    arrow(svg, px(a), py(g(a)) - 12, px(a) + 34, py(g(a)) + 16, C.plum);
    arrow(svg, px(b), py(g(b)) - 12, px(b) - 34, py(g(b)) + 16, C.blue);
    label(svg, px(a), py(g(a)) - 20, "g′(a)<0", "middle", C.plum, 11);
    label(svg, px(b), py(g(b)) - 20, "g′(b)>0", "middle", C.blue, 11);
    label(svg, px(xi) + 10, py(0) - 12, "belső minimum: g′(ξ)=0", "start", C.sage, 11);
    label(svg, (left + right) / 2, 342, "g(x)=f(x)−mx  ⇒  g′(ξ)=0 ⇔ f′(ξ)=m",
      "middle", C.muted, 14);
  }

  function drawUniform(root) {
    const svg = root.querySelector("svg");

    function leftPanel() {
      const left = 35, right = 390, top = 42, bottom = 310;
      const xmin = .035, xmax = .42, ymin = -1.3, ymax = 1.3;
      const px = x => left + (x - xmin) / (xmax - xmin) * (right - left);
      const py = y => bottom - (y - ymin) / (ymax - ymin) * (bottom - top);
      const fn = x => Math.sin(1 / x);
      axes(svg, px(0), py(0), left, right, top, bottom);
      sample(svg, fn, xmin, xmax, px, py, 1700, C.plum, 1.25);
      const n = 3;
      const x = 1 / (Math.PI / 2 + 2 * Math.PI * n);
      const y = 1 / (3 * Math.PI / 2 + 2 * Math.PI * n);
      circle(svg, px(x), py(1), 3.8, C.plum);
      circle(svg, px(y), py(-1), 3.8, C.plum);
      line(svg, px(x), py(1), px(y), py(-1), C.muted, 1, "3 4");
      label(svg, (left + right) / 2, 24, "folytonos, de nem egyenletesen", "middle", C.ink, 13);
      label(svg, (px(x) + px(y)) / 2 + 8, py(0), "|xₙ−yₙ|→0", "start", C.muted, 10);
    }

    function rightPanel() {
      const left = 430, right = 785, top = 42, bottom = 310;
      const xmin = 0, xmax = 6, ymin = -.9, ymax = 1.5;
      const px = x => left + (x - xmin) / (xmax - xmin) * (right - left);
      const py = y => bottom - (y - ymin) / (ymax - ymin) * (bottom - top);
      const fn = x => .55 * Math.sin(x) + .12 * x;
      const delta = .42;
      axes(svg, px(0), py(0), left, right, top, bottom);
      sample(svg, fn, xmin, xmax, px, py, 400, C.blue, 1.9);
      [1.2, 4.25].forEach(x => {
        el(svg, "rect", {
          x: px(x - delta), y: top, width: px(x + delta) - px(x - delta),
          height: bottom - top, fill: C.paleBlue, opacity: .65
        });
        sample(svg, fn, x - delta, x + delta, px, py, 80, C.blue, 1.9);
        circle(svg, px(x), py(fn(x)), 3.8, C.blue);
      });
      label(svg, (left + right) / 2, 24, "ugyanaz a δ minden pontban", "middle", C.ink, 13);
      line(svg, px(1.2 - delta), bottom - 15, px(1.2 + delta), bottom - 15, C.sage, 1.3);
      label(svg, px(1.2), bottom - 22, "2δ", "middle", C.sage, 10);
    }

    leftPanel();
    rightPanel();
    line(svg, 410, 25, 410, 350, C.grid, 1);
  }

  function drawHeineBorel(root) {
    const svg = root.querySelector("svg");
    const left = 70, right = 750;
    const a = 0, b = 1;
    const px = x => left + x * (right - left);
    const intervals = [
      [0, 1, "I₀"],
      [.5, 1, "I₁"],
      [.5, .75, "I₂"],
      [.625, .75, "I₃"],
      [.625, .6875, "I₄"]
    ];
    const c = .66;

    label(svg, 410, 24, "mindig a végesen nem lefedhető felet választjuk", "middle", C.ink, 14);
    intervals.forEach(([x1, x2, name], index) => {
      const y = 70 + index * 55;
      const color = index % 2 ? C.plum : C.blue;
      line(svg, px(a), y, px(b), y, C.grid, 1);
      line(svg, px(x1), y, px(x2), y, color, 4);
      circle(svg, px(x1), y, 3.5, color);
      circle(svg, px(x2), y, 3.5, color);
      label(svg, px(x1) - 8, y + 5, name, "end", color, 12);
      label(svg, px(x2) + 8, y + 5,
        index ? "|I" + index + "|=(b−a)/2^" + index : "[a,b]",
        "start", C.muted, 10);
    });

    const uLeft = .59, uRight = .73;
    el(svg, "rect", {
      x: px(uLeft), y: 42, width: px(uRight) - px(uLeft), height: 280,
      fill: C.paleSage, "fill-opacity": .55,
      stroke: C.sage, "stroke-width": 1, rx: 5
    });
    line(svg, px(c), 42, px(c), 330, C.sage, 1.1, "4 4");
    circle(svg, px(c), 330, 4, C.sage);
    label(svg, px(c), 350, "c", "middle", C.sage, 13);
    label(svg, (px(uLeft) + px(uRight)) / 2, 55, "U ∈ 𝒰 nyílt", "middle", C.sage, 11);
    label(svg, 410, 378, "elég nagy n-re Iₙ ⊂ U — ellentmondás", "middle", C.muted, 13);
  }

  function drawCubeRoot(root) {
    const svg = root.querySelector("svg");
    const left = 64, right = 760, top = 28, bottom = 295;
    const xmin = -8, xmax = 8, ymin = -1.2, ymax = 1.2;
    const px = x => left + (x - xmin) / (xmax - xmin) * (right - left);
    const py = y => bottom - (y - ymin) / (ymax - ymin) * (bottom - top);
    const cbrt = x => Math.sign(x) * Math.pow(Math.abs(x), 1 / 3);
    const fn = x => Math.sin(cbrt(x));

    axes(svg, px(0), py(0), left, right, top, bottom);
    sample(svg, fn, xmin, xmax, px, py, 650, C.ink, 2);
    const t = .48, h = t * t * t;
    circle(svg, px(0), py(0), 4, C.sage);
    circle(svg, px(h), py(Math.sin(t)), 4, C.plum);
    line(svg, px(0), py(0), px(h), py(Math.sin(t)), C.plum, 1.45);
    line(svg, px(-h), py(-Math.sin(t)), px(h), py(Math.sin(t)), C.plum, 1.1, "4 4");
    label(svg, px(h) + 10, py(Math.sin(t)) - 8, "h=t³", "start", C.plum, 11);
    label(svg, px(.65), py(.9), "a szelők meredeksége → ∞", "start", C.plum, 11);
    label(svg, 410, 333,
      "|F(x)−F(y)| ≤ ∛4 · |x−y|^(1/3)",
      "middle", C.muted, 14);
  }

  document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll("[data-l10-lipschitz]").forEach(drawLipschitz);
    document.querySelectorAll("[data-l10-derivative-examples]").forEach(drawDerivativeExamples);
    document.querySelectorAll("[data-l10-darboux]").forEach(drawDarboux);
    document.querySelectorAll("[data-l10-uniform]").forEach(drawUniform);
    document.querySelectorAll("[data-l10-heine-borel]").forEach(drawHeineBorel);
    document.querySelectorAll("[data-l10-cuberoot]").forEach(drawCubeRoot);
  });
})();

