/* Lecture 09 SVG diagrams. No external library or network dependency. */
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

  function clear(svg) {
    while (svg.firstChild) svg.removeChild(svg.firstChild);
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

  function arrow(parent, x1, y1, x2, y2, color = C.ink, width = 1.4) {
    line(parent, x1, y1, x2, y2, color, width);
    const angle = Math.atan2(y2 - y1, x2 - x1);
    const size = 7;
    const a1 = angle + Math.PI * .82;
    const a2 = angle - Math.PI * .82;
    el(parent, "path", {
      d: "M" + x2 + "," + y2 +
         " L" + (x2 + size * Math.cos(a1)) + "," + (y2 + size * Math.sin(a1)) +
         " L" + (x2 + size * Math.cos(a2)) + "," + (y2 + size * Math.sin(a2)) + " Z",
      fill: color
    });
  }

  function axes(svg, x0, y0, left, right, top, bottom) {
    line(svg, left, y0, right, y0, C.axis, 1.05);
    line(svg, x0, top, x0, bottom, C.axis, 1.05);
  }

  function samplePlot(parent, fn, xmin, xmax, px, py, steps, color, width) {
    const points = [];
    for (let i = 0; i <= steps; i += 1) {
      const x = xmin + (xmax - xmin) * i / steps;
      const y = fn(x);
      if (Number.isFinite(y)) points.push([px(x), py(y)]);
    }
    polyline(parent, points, color, width);
  }

  function drawDescartes(root) {
    const svg = root.querySelector("svg");
    const slider = root.querySelector("[data-level-slider]");
    const output = root.querySelector("[data-level-output]");
    const left = 62, right = 770, top = 24, bottom = 378;
    const xmin = -4, xmax = 4, ymin = -5, ymax = 5;
    const px = x => left + (x - xmin) / (xmax - xmin) * (right - left);
    const py = y => bottom - (y - ymin) / (ymax - ymin) * (bottom - top);
    const f = x => x + 1 / x;

    function draw(value) {
      const c = Number(value);
      clear(svg);
      axes(svg, px(0), py(0), left, right, top, bottom);
      line(svg, px(0), top, px(0), bottom, C.muted, 1, "4 5");
      label(svg, right - 3, py(0) - 8, "x", "end");
      label(svg, px(0) + 8, top + 14, "y");
      label(svg, px(0) - 7, py(0) + 18, "0", "end");

      [-2, -1, 1, 2].forEach(x => {
        line(svg, px(x), py(0) - 4, px(x), py(0) + 4, C.axis, 1);
        label(svg, px(x), py(0) + 18, String(x).replace("-", "−"), "middle", C.muted, 11);
      });

      samplePlot(svg, f, xmin, -.205, px, py, 420, C.ink, 1.9);
      samplePlot(svg, f, .205, xmax, px, py, 420, C.ink, 1.9);

      circle(svg, px(-1), py(-2), 4.2, C.plum, true);
      circle(svg, px(1), py(2), 4.2, C.blue, true);
      label(svg, px(-1) - 9, py(-2) + 20, "(−1,−2)", "end", C.plum);
      label(svg, px(1) + 9, py(2) - 10, "(1,2)", "start", C.blue);

      line(svg, left, py(c), right, py(c), C.sage, 1.7);
      label(svg, right - 4, py(c) - 8, "y=c", "end", C.sage);

      const delta = c * c - 4;
      const deltaText = "Δ = " + delta.toFixed(2);
      label(svg, left + 8, top + 18, deltaText, "start", delta < 0 ? C.plum : C.sage, 14);

      if (delta >= -1e-8) {
        const safeDelta = Math.max(0, delta);
        const r1 = (c - Math.sqrt(safeDelta)) / 2;
        const r2 = (c + Math.sqrt(safeDelta)) / 2;
        const roots = Math.abs(r1 - r2) < 1e-6 ? [r1] : [r1, r2];
        roots.forEach((rootValue, index) => {
          circle(svg, px(rootValue), py(c), 4.5, C.sage);
          line(svg, px(rootValue), py(c), px(rootValue), py(0), C.grid, 1, "3 4");
          label(svg, px(rootValue), py(c) + (c > 0 ? 22 : -12),
            roots.length === 1 ? "kettős gyök" : "x" + (index + 1),
            "middle", C.sage, 11);
        });
      } else {
        label(svg, (left + right) / 2, py(c) + (c >= 0 ? -12 : 22),
          "nincs valós metszéspont", "middle", C.plum);
      }

      output.textContent = "c = " + c.toFixed(1).replace("-", "−");
    }

    slider.addEventListener("input", () => draw(slider.value));
    root.querySelectorAll("[data-level]").forEach(button => {
      button.addEventListener("click", () => {
        slider.value = button.dataset.level;
        draw(slider.value);
      });
    });
    draw(slider.value);
  }

  function drawExtrema(root) {
    const svg = root.querySelector("svg");

    function panel(xStart, title, sign) {
      const left = xStart + 28, right = xStart + 360, top = 42, bottom = 258;
      const px = x => left + (x + 2.2) / 4.4 * (right - left);
      const py = y => bottom - (y + .5) / 3.3 * (bottom - top);
      const fn = x => sign > 0 ? .55 * x * x : 2.35 - .55 * x * x;
      const uValue = fn(0);

      el(svg, "rect", {
        x: px(-1.25), y: top, width: px(1.25) - px(-1.25), height: bottom - top,
        fill: sign > 0 ? C.paleBlue : C.palePlum
      });
      axes(svg, px(0), py(0), left, right, top, bottom);
      samplePlot(svg, fn, -2.1, 2.1, px, py, 240,
        sign > 0 ? C.blue : C.plum, 1.9);
      line(svg, px(-1.25), top, px(-1.25), bottom, C.grid, 1, "4 4");
      line(svg, px(1.25), top, px(1.25), bottom, C.grid, 1, "4 4");
      line(svg, left, py(uValue), right, py(uValue), C.muted, 1, "5 5");
      circle(svg, px(0), py(uValue), 4, sign > 0 ? C.blue : C.plum);
      label(svg, (left + right) / 2, 24, title, "middle", C.ink, 15);
      label(svg, px(0), bottom + 18, "u", "middle");
      label(svg, px(-1.25), bottom + 18, "u−δ", "middle", C.muted, 11);
      label(svg, px(1.25), bottom + 18, "u+δ", "middle", C.muted, 11);
      label(svg, right - 5, py(uValue) - 7, "f(u)", "end", C.muted, 11);
    }

    panel(0, "lokális minimum", 1);
    panel(410, "lokális maximum", -1);
    line(svg, 410, 25, 410, 278, C.grid, 1);
  }

  function drawFermat(root) {
    const svg = root.querySelector("svg");
    const left = 64, right = 760, top = 25, bottom = 270;
    const px = x => left + (x + 1.4) / 2.8 * (right - left);
    const py = y => bottom - (y + .1) / 1.45 * (bottom - top);
    const f = x => .62 * x * x;

    axes(svg, px(0), py(0), left, right, top, bottom);
    samplePlot(svg, f, -1.35, 1.35, px, py, 300, C.ink, 1.9);
    circle(svg, px(0), py(0), 4.3, C.ink);
    label(svg, px(0) + 9, py(0) - 9, "u", "start");

    for (let n = 1; n <= 9; n += 1) {
      const h = (n % 2 === 0 ? 1 : -1) / n;
      const color = h > 0 ? C.blue : C.plum;
      line(svg, px(0), py(0), px(h), py(f(h)), color, .9, "3 3");
      circle(svg, px(h), py(f(h)), Math.max(2.3, 4.2 - n * .18), color);
    }

    label(svg, px(-.72), py(f(-.72)) - 12, "páratlan tagok", "middle", C.plum, 11);
    label(svg, px(.72), py(f(.72)) - 12, "páros tagok", "middle", C.blue, 11);

    const y = 326;
    line(svg, 120, y, 700, y, C.axis, 1.1);
    circle(svg, 410, y, 4, C.ink);
    arrow(svg, 190, y, 396, y, C.plum, 1.5);
    arrow(svg, 630, y, 424, y, C.blue, 1.5);
    label(svg, 180, y - 14, "q₂ₙ₊₁ ≤ 0", "middle", C.plum);
    label(svg, 640, y - 14, "q₂ₙ ≥ 0", "middle", C.blue);
    label(svg, 410, y + 22, "f′(u)=0", "middle", C.ink, 13);
  }

  function smallAxes(svg, xmin, xmax, ymin, ymax) {
    const left = 26, right = 232, top = 18, bottom = 184;
    const px = x => left + (x - xmin) / (xmax - xmin) * (right - left);
    const py = y => bottom - (y - ymin) / (ymax - ymin) * (bottom - top);
    axes(svg, px(0), py(0), left, right, top, bottom);
    return {left, right, top, bottom, px, py};
  }

  function drawCounterexamples(root) {
    const endpoint = root.querySelector("[data-l9-endpoint]");
    const e = smallAxes(endpoint, -.15, 1.15, -.2, 1.25);
    line(endpoint, e.px(0), e.py(0), e.px(1), e.py(1), C.blue, 1.9);
    circle(endpoint, e.px(0), e.py(0), 4.2, C.blue);
    line(endpoint, e.px(0), e.py(0), e.px(.45), e.py(.45), C.plum, 1.2, "4 4");
    label(endpoint, e.px(0) + 8, e.py(0) - 8, "min", "start", C.blue);
    label(endpoint, e.px(.62), e.py(.62) - 8, "meredekség: 1", "middle", C.plum, 10);

    const corner = root.querySelector("[data-l9-corner]");
    const c = smallAxes(corner, -1.15, 1.15, -.2, 1.25);
    polyline(corner, [
      [c.px(-1.05), c.py(1.05)],
      [c.px(0), c.py(0)],
      [c.px(1.05), c.py(1.05)]
    ], C.plum, 1.9);
    circle(corner, c.px(0), c.py(0), 4.2, C.plum);
    label(corner, c.px(0) + 8, c.py(0) - 8, "min", "start", C.plum);
    label(corner, c.px(0), c.py(.9), "bal és jobb meredekség eltér", "middle", C.muted, 9);

    const cubic = root.querySelector("[data-l9-cubic]");
    const q = smallAxes(cubic, -1.2, 1.2, -1.2, 1.2);
    samplePlot(cubic, x => x * x * x, -1.1, 1.1, q.px, q.py, 220, C.sage, 1.9);
    line(cubic, q.px(-.62), q.py(0), q.px(.62), q.py(0), C.plum, 1.2);
    circle(cubic, q.px(0), q.py(0), 4, C.sage);
    label(cubic, q.px(.58), q.py(0) - 10, "vízszintes érintő", "middle", C.plum, 9);
  }

  function drawLagrange(root) {
    const svg = root.querySelector("svg");
    const left = 65, right = 760, top = 25, bottom = 325;
    const xmin = .5, xmax = 7.5, ymin = -.2, ymax = 5.1;
    const px = x => left + (x - xmin) / (xmax - xmin) * (right - left);
    const py = y => bottom - (y - ymin) / (ymax - ymin) * (bottom - top);
    const f = x => .22 * (x - 3) * (x - 3) + .15 * x;
    const fp = x => .44 * (x - 3) + .15;
    const a = 1, b = 7, xi = 4;
    const m = (f(b) - f(a)) / (b - a);
    const secant = x => f(a) + m * (x - a);
    const tangent = x => f(xi) + fp(xi) * (x - xi);

    axes(svg, px(0), py(0), left, right, top, bottom);
    samplePlot(svg, f, xmin, xmax, px, py, 360, C.ink, 1.9);
    polyline(svg, [[px(a), py(secant(a))], [px(b), py(secant(b))]], C.blue, 1.6);
    polyline(svg, [[px(2.1), py(tangent(2.1))], [px(5.9), py(tangent(5.9))]], C.plum, 1.6);

    circle(svg, px(a), py(f(a)), 4, C.blue);
    circle(svg, px(b), py(f(b)), 4, C.blue);
    circle(svg, px(xi), py(f(xi)), 4, C.plum);
    line(svg, px(a), py(f(a)), px(a), py(0), C.grid, 1, "3 4");
    line(svg, px(b), py(f(b)), px(b), py(0), C.grid, 1, "3 4");
    line(svg, px(xi), py(f(xi)), px(xi), py(0), C.grid, 1, "3 4");

    label(svg, px(a), bottom + 18, "a", "middle");
    label(svg, px(b), bottom + 18, "b", "middle");
    label(svg, px(xi), bottom + 18, "ξ", "middle", C.plum);
    label(svg, px(5.9), py(secant(5.9)) - 10, "szelő", "middle", C.blue);
    label(svg, px(2.65), py(tangent(2.65)) + 20, "érintő", "middle", C.plum);
    label(svg, 410, 369, "f′(ξ) = [f(b)−f(a)]/(b−a)", "middle", C.muted, 14);
  }

  function drawMonotonicity(root) {
    const svg = root.querySelector("svg");
    const left = 62, right = 758, top = 22, bottom = 270;
    const xmin = -3, xmax = 3, ymin = -2.8, ymax = 2.8;
    const px = x => left + (x - xmin) / (xmax - xmin) * (right - left);
    const py = y => bottom - (y - ymin) / (ymax - ymin) * (bottom - top);
    const f = x => .08 * x * x * x + .25 * x;
    const fp = x => .24 * x * x + .25;
    const x = -2.2, y = 2.3;
    const m = (f(y) - f(x)) / (y - x);
    const xi = Math.sqrt(Math.max(0, (m - .25) / .24));
    const secant = t => f(x) + m * (t - x);
    const tangent = t => f(xi) + fp(xi) * (t - xi);

    axes(svg, px(0), py(0), left, right, top, bottom);
    samplePlot(svg, f, xmin, xmax, px, py, 360, C.ink, 1.9);
    polyline(svg, [[px(x), py(secant(x))], [px(y), py(secant(y))]], C.blue, 1.5);
    polyline(svg, [[px(xi - 1.2), py(tangent(xi - 1.2))],
      [px(xi + 1.2), py(tangent(xi + 1.2))]], C.plum, 1.5);
    circle(svg, px(x), py(f(x)), 4, C.blue);
    circle(svg, px(y), py(f(y)), 4, C.blue);
    circle(svg, px(xi), py(f(xi)), 4, C.plum);
    label(svg, px(x), bottom + 18, "x", "middle");
    label(svg, px(y), bottom + 18, "y", "middle");
    label(svg, px(xi), bottom + 18, "ξ", "middle", C.plum);
    label(svg, 410, 314, "f(y)−f(x)=f′(ξ)(y−x) ≥ 0", "middle", C.muted, 14);
  }

  function drawStrict(root) {
    const svg = root.querySelector("svg");

    function panel(offset, derivative) {
      const left = offset + 34, right = offset + 372, top = 25, bottom = 250;
      const px = x => left + (x + 1.45) / 2.9 * (right - left);
      const yMin = derivative ? -.15 : -2.8;
      const yMax = derivative ? 3.2 : 2.8;
      const py = y => bottom - (y - yMin) / (yMax - yMin) * (bottom - top);
      axes(svg, px(0), py(0), left, right, top, bottom);
      const fn = derivative ? x => 3 * x * x : x => x * x * x;
      samplePlot(svg, fn, -1.35, 1.35, px, py, 280,
        derivative ? C.plum : C.blue, 1.9);
      circle(svg, px(0), py(0), 4, derivative ? C.plum : C.blue);
      if (!derivative) {
        line(svg, px(-.55), py(0), px(.55), py(0), C.plum, 1.3);
        label(svg, (left + right) / 2, 18, "f(x)=x³ szigorúan nő", "middle", C.ink, 14);
      } else {
        label(svg, (left + right) / 2, 18, "f′(x)=3x² ≥ 0", "middle", C.ink, 14);
        label(svg, px(0) + 7, py(0) - 9, "f′(0)=0", "start", C.plum, 11);
      }
    }

    panel(0, false);
    panel(410, true);
    line(svg, 410, 22, 410, 275, C.grid, 1);
  }

  function drawExtremumTests(root) {
    const svg = root.querySelector("svg");

    function panel(offset, kind) {
      const left = offset + 34, right = offset + 372, top = 42, bottom = 300;
      const px = x => left + (x + 1.55) / 3.1 * (right - left);
      const ymin = kind === "quartic" ? -.25 : -2.6;
      const ymax = kind === "quartic" ? 2.65 : .35;
      const py = y => bottom - (y - ymin) / (ymax - ymin) * (bottom - top);
      const fn = kind === "quartic" ? x => .45 * x * x * x * x : x => -x * x;

      axes(svg, px(0), py(0), left, right, top, bottom);
      samplePlot(svg, fn, -1.45, 1.45, px, py, 300,
        kind === "quartic" ? C.blue : C.plum, 1.9);
      circle(svg, px(0), py(0), 4, kind === "quartic" ? C.blue : C.plum);

      const signY = 344;
      line(svg, left + 22, signY, right - 22, signY, C.axis, 1.1);
      circle(svg, px(0), signY, 3.5, C.ink);
      if (kind === "quartic") {
        arrow(svg, px(-.25), signY, left + 45, signY, C.plum, 1.4);
        arrow(svg, px(.25), signY, right - 45, signY, C.blue, 1.4);
        label(svg, (left + px(0)) / 2, signY - 13, "f′<0", "middle", C.plum);
        label(svg, (px(0) + right) / 2, signY - 13, "f′>0", "middle", C.blue);
        label(svg, (left + right) / 2, 24, "x⁴: minimum, de f″(0)=0", "middle", C.ink, 14);
      } else {
        arrow(svg, left + 45, signY, px(-.25), signY, C.blue, 1.4);
        arrow(svg, right - 45, signY, px(.25), signY, C.plum, 1.4);
        label(svg, (left + px(0)) / 2, signY - 13, "f′>0", "middle", C.blue);
        label(svg, (px(0) + right) / 2, signY - 13, "f′<0", "middle", C.plum);
        label(svg, (left + right) / 2, 24, "−x²: maximum és f″(0)<0", "middle", C.ink, 14);
      }
      label(svg, px(0), signY + 20, "u", "middle");
    }

    panel(0, "quartic");
    panel(410, "negativeQuadratic");
    line(svg, 410, 20, 410, 372, C.grid, 1);
  }

  document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll("[data-l9-descartes]").forEach(drawDescartes);
    document.querySelectorAll("[data-l9-extrema]").forEach(drawExtrema);
    document.querySelectorAll("[data-l9-fermat]").forEach(drawFermat);
    document.querySelectorAll("[data-l9-fermat-counterexamples]").forEach(drawCounterexamples);
    document.querySelectorAll("[data-l9-lagrange]").forEach(drawLagrange);
    document.querySelectorAll("[data-l9-monotonicity]").forEach(drawMonotonicity);
    document.querySelectorAll("[data-l9-strict]").forEach(drawStrict);
    document.querySelectorAll("[data-l9-extremum-tests]").forEach(drawExtremumTests);
  });
})();
