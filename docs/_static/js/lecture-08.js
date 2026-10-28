/* Lecture 08 SVG diagrams. No external library or network dependency. */
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
    paleBlue: "#edf3f5",
    palePlum: "#f2eff4"
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
      cx: x,
      cy: y,
      r: radius,
      fill: open ? "#fff" : color,
      stroke: color,
      "stroke-width": open ? 1.6 : .8
    });
  }

  function polyline(parent, points, color = C.blue, width = 1.8, dash) {
    if (points.length < 2) return;
    const d = points.map(([x, y], index) =>
      (index ? "L" : "M") + x.toFixed(2) + "," + y.toFixed(2)
    ).join(" ");
    return el(parent, "path", {
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
    line(svg, left, y0, right, y0, C.axis, 1.1);
    line(svg, x0, top, x0, bottom, C.axis, 1.1);
  }

  function drawBolzano(root) {
    const svg = root.querySelector("svg");
    const left = 62, right = 748, top = 22, bottom = 225;
    const xmin = -1.5, xmax = 1.5, ymin = -1.55, ymax = 1.55;
    const px = x => left + (x - xmin) / (xmax - xmin) * (right - left);
    const py = y => bottom - (y - ymin) / (ymax - ymin) * (bottom - top);
    const f = x => .42 * x * x * x + .65 * x - .12;

    axes(svg, px(0), py(0), left, right, top, bottom);
    label(svg, right - 3, py(0) - 7, "x", "end");
    label(svg, px(0) + 8, top + 13, "f(x)");
    label(svg, px(0) - 7, py(0) + 17, "0", "end");

    const graph = [];
    for (let i = 0; i <= 480; i += 1) {
      const x = xmin + (xmax - xmin) * i / 480;
      graph.push([px(x), py(f(x))]);
    }
    polyline(svg, graph, C.ink, 1.9);

    let a = -1.35, b = 1.35;
    const brackets = [];
    for (let level = 0; level < 6; level += 1) {
      brackets.push([a, b]);
      const middle = (a + b) / 2;
      if (f(a) * f(middle) <= 0) b = middle;
      else a = middle;
    }

    brackets.forEach(([aLevel, bLevel], level) => {
      const y = 260 + level * 18;
      const color = level % 2 ? C.plum : C.blue;
      label(svg, 38, y + 4, "I" + level, "end", color);
      line(svg, px(aLevel), y, px(bLevel), y, color, 3);
      line(svg, px(aLevel), y - 5, px(aLevel), y + 5, color, 1.3);
      line(svg, px(bLevel), y - 5, px(bLevel), y + 5, color, 1.3);
    });

    const c = (a + b) / 2;
    line(svg, px(c), top, px(c), 352, C.muted, 1, "4 5");
    label(svg, px(c) + 7, 352, "c");
    circle(svg, px(-1.35), py(f(-1.35)), 3.5, C.plum);
    circle(svg, px(1.35), py(f(1.35)), 3.5, C.blue);
    label(svg, px(-1.35), py(f(-1.35)) + 20, "f(a)<0", "middle", C.plum);
    label(svg, px(1.35), py(f(1.35)) - 10, "f(b)>0", "middle", C.blue);
  }

  function drawStep(svg) {
    const left = 35, right = 350, top = 20, bottom = 220;
    const px = x => left + (x + 1.25) / 2.5 * (right - left);
    const py = y => bottom - (y + 1.35) / 2.7 * (bottom - top);
    axes(svg, px(0), py(0), left, right, top, bottom);
    line(svg, left, py(-1), px(0), py(-1), C.plum, 2);
    line(svg, px(0), py(1), right, py(1), C.blue, 2);
    circle(svg, px(0), py(-1), 4, C.plum, true);
    circle(svg, px(0), py(1), 4, C.blue);
    circle(svg, px(0), py(0), 3.2, C.ink);
    line(svg, left, py(.5), right, py(.5), C.muted, 1, "5 5");
    label(svg, right - 4, py(.5) - 6, "y=1/2", "end", C.muted);
    label(svg, right - 4, py(0) + 17, "x", "end");
    label(svg, px(0) + 7, top + 13, "f(x)");
  }

  function drawOscillation(svg) {
    const left = 35, right = 350, top = 20, bottom = 220;
    const px = x => left + (x + 1) / 2 * (right - left);
    const py = y => bottom - (y + 1.25) / 2.5 * (bottom - top);
    axes(svg, px(0), py(0), left, right, top, bottom);
    line(svg, left, py(1), right, py(1), C.grid, 1, "4 5");
    line(svg, left, py(-1), right, py(-1), C.grid, 1, "4 5");

    for (const sign of [-1, 1]) {
      const points = [];
      for (let i = 0; i <= 1200; i += 1) {
        const distance = .018 + (.98 - .018) * i / 1200;
        const x = sign * distance;
        points.push([px(x), py(Math.sin(1 / x))]);
      }
      polyline(svg, points, sign < 0 ? C.plum : C.blue, 1.25);
    }

    circle(svg, px(0), py(0), 3.2, C.ink);
    line(svg, left, py(.45), right, py(.45), C.muted, 1, "5 5");
    label(svg, right - 4, py(.45) - 6, "y", "end", C.muted);
    label(svg, right - 4, py(0) + 17, "x", "end");
    label(svg, px(0) + 7, top + 13, "f(x)");
  }

  function drawDarboux(root) {
    drawStep(root.querySelector("[data-l8-step]"));
    drawOscillation(root.querySelector("[data-l8-oscillation]"));
  }

  function drawOpen(root) {
    const svg = root.querySelector("svg");

    label(svg, 198, 28, "Nyílt halmaz ℝ-ben", "middle", C.ink, 14);
    line(svg, 48, 155, 350, 155, C.axis, 1.2);
    line(svg, 105, 155, 308, 155, C.blue, 5);
    circle(svg, 105, 155, 5, C.blue, true);
    circle(svg, 308, 155, 5, C.blue, true);
    const x = 215, radius = 48;
    line(svg, x - radius, 120, x + radius, 120, C.plum, 2.2);
    circle(svg, x - radius, 120, 4, C.plum, true);
    circle(svg, x + radius, 120, 4, C.plum, true);
    circle(svg, x, 155, 4, C.ink);
    line(svg, x, 151, x, 123, C.grid, 1, "3 4");
    label(svg, 105, 178, "a", "middle");
    label(svg, 308, 178, "b", "middle");
    label(svg, x, 178, "x", "middle");
    label(svg, x, 108, "Bε(x)", "middle", C.plum);
    label(svg, 207, 210, "Bε(x) ⊂ G=(a,b)", "middle", C.muted);

    label(svg, 600, 28, "Nyílt halmaz ℝ²-ben", "middle", C.ink, 14);
    const blob = [
      "M", 477, 89,
      "C", 510, 43, 597, 52, 632, 77,
      "C", 689, 62, 752, 107, 744, 163,
      "C", 758, 220, 695, 273, 636, 260,
      "C", 588, 292, 502, 263, 480, 211,
      "C", 441, 176, 447, 119, 477, 89, "Z"
    ].join(" ");
    el(svg, "path", {
      d: blob,
      fill: C.paleBlue,
      stroke: C.blue,
      "stroke-width": 1.6
    });
    const px = 610, py = 166, r = 49;
    el(svg, "circle", {
      cx: px, cy: py, r,
      fill: C.palePlum,
      stroke: C.plum,
      "stroke-width": 1.5
    });
    circle(svg, px, py, 4, C.ink);
    line(svg, px, py, px + r, py, C.plum, 1.3);
    label(svg, px + r / 2, py - 8, "ε", "middle", C.plum);
    label(svg, px - 7, py + 19, "p", "end");
    label(svg, 704, 238, "G", "middle", C.blue, 16);
    label(svg, 601, 309, "Bε(p) ⊂ G", "middle", C.muted);
  }

  function drawCompact(root) {
    const svg = root.querySelector("svg");
    const left = 170, right = 746;
    const row = (y, title) => {
      label(svg, 145, y + 5, title, "end", C.ink);
      line(svg, left, y, right, y, C.axis, 1.1);
    };

    row(60, "véges halmaz");
    [235, 325, 490, 665].forEach(x => circle(svg, x, 60, 4, C.blue));
    label(svg, 725, 45, "kompakt", "end", C.blue);

    row(150, "ℕ");
    for (let n = 1; n <= 9; n += 1) {
      circle(svg, left + 45 + n * 48, 150, 3.8, C.plum);
    }
    line(svg, 690, 150, 738, 150, C.plum, 1.4);
    el(svg, "path", {
      d: "M738,150 L727,145 L727,155 Z",
      fill: C.plum
    });
    label(svg, 725, 135, "nem korlátos", "end", C.plum);

    const xmap = value => left + 35 + value * 505;
    row(245, "{1/n}");
    circle(svg, xmap(0), 245, 5, C.plum, true);
    for (let n = 1; n <= 12; n += 1) {
      circle(svg, xmap(1 / n), 245, n < 6 ? 4 : 3, C.plum);
    }
    label(svg, xmap(0), 268, "0", "middle");
    label(svg, 725, 230, "nem zárt", "end", C.plum);

    row(340, "{0}∪{1/n}");
    circle(svg, xmap(0), 340, 4.5, C.blue);
    for (let n = 1; n <= 12; n += 1) {
      circle(svg, xmap(1 / n), 340, n < 6 ? 4 : 3, C.blue);
    }
    label(svg, xmap(0), 363, "0", "middle");
    label(svg, 725, 325, "kompakt", "end", C.blue);
  }

  function drawLeibniz(root) {
    const svg = root.querySelector("svg");
    const left = 66, right = 746, top = 25, bottom = 335;
    const xmin = -1.6, xmax = 1.55, ymin = -.35, ymax = 1.65;
    const px = value => left + (value - xmin) / (xmax - xmin) * (right - left);
    const py = value => bottom - (value - ymin) / (ymax - ymin) * (bottom - top);
    const f = value => .45 * value * value + .18;
    const u = -.72, x = 1.02, slope = .9 * u;
    const tangent = value => f(u) + slope * (value - u);

    axes(svg, px(0), py(0), left, right, top, bottom);
    const graph = [];
    for (let i = 0; i <= 420; i += 1) {
      const value = xmin + (xmax - xmin) * i / 420;
      graph.push([px(value), py(f(value))]);
    }
    polyline(svg, graph, C.ink, 1.9);

    const tangentPoints = [
      [px(-1.4), py(tangent(-1.4))],
      [px(1.4), py(tangent(1.4))]
    ];
    polyline(svg, tangentPoints, C.blue, 1.5);

    const p = [px(u), py(f(u))];
    const base = [px(x), py(f(u))];
    const t = [px(x), py(tangent(x))];
    const q = [px(x), py(f(x))];

    line(svg, p[0], p[1], base[0], base[1], C.plum, 1.5);
    line(svg, base[0], base[1], t[0], t[1], C.blue, 2);
    line(svg, t[0], t[1], q[0], q[1], C.plum, 2);
    line(svg, p[0], p[1], q[0], q[1], C.muted, 1.2, "5 5");

    circle(svg, p[0], p[1], 4, C.blue);
    circle(svg, q[0], q[1], 4, C.ink);
    circle(svg, t[0], t[1], 3.2, C.plum, true);

    label(svg, p[0] - 8, p[1] - 11, "(u,f(u))", "end");
    label(svg, q[0] + 8, q[1] - 8, "(x,f(x))");
    label(svg, (p[0] + base[0]) / 2, base[1] + 22, "x−u", "middle", C.plum);
    label(svg, base[0] + 10, (base[1] + t[1]) / 2, "m(x−u)", "start", C.blue);
    label(svg, t[0] + 10, (t[1] + q[1]) / 2,
      "ε(x)(x−u)", "start", C.plum);
    label(svg, 615, 373,
      "f(x)−f(u)=m(x−u)+ε(x)(x−u)", "middle", C.muted);
  }

  document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll("[data-l8-bolzano]").forEach(drawBolzano);
    document.querySelectorAll("[data-l8-darboux]").forEach(drawDarboux);
    document.querySelectorAll("[data-l8-open]").forEach(drawOpen);
    document.querySelectorAll("[data-l8-compact]").forEach(drawCompact);
    document.querySelectorAll("[data-l8-leibniz]").forEach(drawLeibniz);
  });
})();
