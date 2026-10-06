/* SVG figures for Lecture 05. No external plotting library is needed. */
(() => {
  "use strict";
  const NS = "http://www.w3.org/2000/svg";
  const C = {
    ink: "#3e4a56",
    muted: "#aeb8c0",
    teal: "#668f8c",
    purple: "#9687a0",
    orange: "#ba9276",
    blue: "#8398aa",
    paleTeal: "#eef5f3",
    palePurple: "#f3f0f5",
  };
  const fmt = (n) => Number(n).toFixed(2).replace(".", ",");
  const strokeWidth = (width) => Math.min(2.3, width * 0.72);
  const clear = (node) => {
    while (node.firstChild) node.removeChild(node.firstChild);
  };
  function e(parent, tag, attrs = {}, value) {
    const node = document.createElementNS(NS, tag);
    for (const [key, val] of Object.entries(attrs))
      node.setAttribute(key, String(val));
    if (value !== undefined) node.textContent = value;
    parent.appendChild(node);
    return node;
  }
  const line = (p, x1, y1, x2, y2, color = C.muted, width = 1.4, dash) =>
    e(p, "line", {
      x1,
      y1,
      x2,
      y2,
      stroke: color,
      "stroke-width": strokeWidth(width),
      ...(dash ? { "stroke-dasharray": dash } : {}),
    });
  const dot = (p, x, y, r, color, open = false) =>
    e(p, "circle", {
      cx: x,
      cy: y,
      r: r * 0.85,
      fill: open ? "white" : color,
      stroke: color,
      "stroke-width": open ? 1.4 : 0.75,
    });
  const txt = (p, x, y, value, cls = "", anchor = "start") =>
    e(p, "text", { x, y, class: cls, "text-anchor": anchor }, value);
  function curve(p, points, color, width = 2.7, dash, fill = "none") {
    const d = points
      .map(
        (xy, i) => (i ? "L" : "M") + xy[0].toFixed(2) + "," + xy[1].toFixed(2)
      )
      .join(" ");
    return e(p, "path", {
      d,
      fill,
      stroke: color,
      "stroke-width": strokeWidth(width),
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      ...(dash ? { "stroke-dasharray": dash } : {}),
    });
  }
  function axes(p, w, h, ox, oy, xLabel = "x", yLabel = "y") {
    line(p, 22, oy, w - 20, oy, C.muted, 1.3);
    line(p, ox, h - 18, ox, 18, C.muted, 1.3);
    e(p, "path", {
      d:
        "M" +
        (w - 20) +
        " " +
        oy +
        " l-8 -4 m8 4 l-8 4 M" +
        ox +
        " 18 l-4 8 m4 -8 l4 8",
      fill: "none",
      stroke: C.muted,
      "stroke-width": 0.95,
    });
    txt(p, w - 29, oy - 10, xLabel, "rl-svg-muted");
    txt(p, ox + 9, 29, yLabel, "rl-svg-muted");
  }
  function samples(fn, a, b, n) {
    return Array.from({ length: n + 1 }, (_, i) => fn(a + ((b - a) * i) / n));
  }
  const q = (root, s) => root.querySelector(s);

  function mapFigure(root) {
    const left = q(root, "[data-rl-source]"),
      right = q(root, "[data-rl-target]");
    const input = q(root, "[data-rl-epsilon]"),
      play = q(root, "[data-rl-play]");
    const sample = [
      [0.23, 0.4],
      [0.44, 1.25],
      [0.63, 2.2],
      [0.79, 3.13],
      [0.72, 4.0],
      [0.5, 5.13],
      [0.88, 5.75],
    ];
    const palette = [
      C.orange,
      C.blue,
      C.purple,
      "#a1939d",
      "#8ea492",
      "#b3a481",
      "#7f9da0",
    ];
    const factor = (a) => 1 + 0.25 * Math.cos(3 * a) + 0.125 * Math.sin(5 * a);
    function render() {
      const eps = Number(input.value),
        delta = (eps * 2) / 3,
        scale = 79,
        ox = 220,
        oy = 180;
      q(root, "[data-rl-epsilon-value]").textContent = fmt(eps);
      q(root, "[data-rl-delta-value]").textContent = "δ = " + fmt(delta);
      [left, right].forEach((s) => {
        clear(s);
        const axisX = s === left ? 162 : 170;
        const axisY = s === left ? 222 : 225;
        axes(s, 440, 360, axisX, axisY, "x", "y");
        for (let k = -2; k <= 2; k++) {
          if (!k) continue;
          line(s, axisX + k * scale, 30, axisX + k * scale, 330, "#e8edf2", 1);
          line(s, 30, axisY + k * scale, 410, axisY + k * scale, "#e8edf2", 1);
        }
      });
      e(left, "circle", {
        cx: ox,
        cy: oy,
        r: delta * scale,
        fill: C.paleTeal,
        "fill-opacity": 0.78,
        stroke: C.teal,
        "stroke-width": 1.55,
      });
      e(right, "circle", {
        cx: ox,
        cy: oy,
        r: eps * scale,
        fill: "none",
        stroke: C.purple,
        "stroke-width": 1.5,
        "stroke-dasharray": "6 6",
      });
      const pts = samples(
        (a) => {
          const r = delta * factor(a) * scale;
          return [ox + r * Math.cos(a), oy - r * Math.sin(a)];
        },
        0,
        2 * Math.PI,
        180
      );
      curve(right, pts, C.teal, 2.5, undefined, C.paleTeal);
      dot(left, ox, oy, 4.8, C.ink);
      dot(right, ox, oy, 4.8, C.ink);
      txt(left, ox + 9, oy + 20, "p = (x₀, y₀)", "rl-svg-small");
      txt(right, ox + 9, oy + 20, "A = (A₁, A₂)", "rl-svg-small");
      txt(
        left,
        ox + delta * scale * 0.74,
        oy - delta * scale * 0.45,
        "δ",
        "rl-svg-teal"
      );
      txt(
        right,
        ox + eps * scale * 0.76,
        oy - eps * scale * 0.5,
        "ε",
        "rl-svg-purple"
      );
      sample.forEach(([r, a], i) => {
        const x = ox + r * delta * scale * Math.cos(a),
          y = oy - r * delta * scale * Math.sin(a);
        const t = r * delta * factor(a) * scale;
        dot(left, x, y, 5.1, palette[i]);
        dot(right, ox + t * Math.cos(a), oy - t * Math.sin(a), 5.1, palette[i]);
      });
    }
    input.addEventListener("input", render);
    let frame = 0,
      start = 0;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    function stop() {
      if (frame) cancelAnimationFrame(frame);
      frame = 0;
      play.textContent = "Lejátszás";
      play.setAttribute("aria-pressed", "false");
    }
    function tick(time) {
      if (!start) start = time;
      input.value = String(1.025 + 0.775 * Math.sin((time - start) / 1700));
      render();
      frame = requestAnimationFrame(tick);
    }
    play.setAttribute("aria-pressed", "false");
    play.addEventListener("click", () => {
      if (frame) {
        stop();
        return;
      }
      start = 0;
      play.textContent = "Szünet";
      play.setAttribute("aria-pressed", "true");
      frame = requestAnimationFrame(tick);
    });
    document.addEventListener("visibilitychange", () => {
      if (document.hidden) stop();
    });
    if (reduced.matches) play.title = "Az animáció csak külön indításra fut.";
    render();
  }

  function boundsFigure(root) {
    [
      ["[data-rl-upper]", true],
      ["[data-rl-lower]", false],
    ].forEach(([selector, upper]) => {
      const s = q(root, selector);
      clear(s);
      const x = 72,
        y = (v) => 254 - (v + 1) * 62;
      line(s, x, 15, x, 311, C.muted, 2);
      e(s, "path", {
        d: "M72 15 l-5 9 m5 -9 l5 9 M72 311 l-5 -9 m5 9 l5 -9",
        stroke: C.muted,
        "stroke-width": 1.0,
        fill: "none",
      });
      e(s, "rect", {
        x: x - 7,
        y: y(2),
        width: 14,
        height: y(-1) - y(2),
        rx: 7,
        fill: C.paleTeal,
        stroke: "none",
      });
      e(s, "rect", {
        x: x - 8,
        y: upper ? 20 : y(-1),
        width: 16,
        height: upper ? y(2) - 20 : 307 - y(-1),
        rx: 8,
        fill: C.palePurple,
      });
      line(s, x, y(-1), x, y(2), C.teal, 7);
      line(s, x, upper ? 20 : y(-1), x, upper ? y(2) : 307, C.purple, 5);
      [-1, 0, 1, 2].forEach((v) => {
        line(s, x - 8, y(v), x + 8, y(v), C.ink, 1.2);
        txt(s, x - 17, y(v) + 5, String(v), "rl-svg-small", "end");
      });
      dot(s, x, y(-1), 5, C.teal, true);
      dot(s, x, y(2), 5, C.teal, true);
      dot(s, x, upper ? y(2) : y(-1), 5, C.purple);
      txt(
        s,
        84,
        upper ? 36 : 301,
        upper ? "felső korlátok" : "alsó korlátok",
        "rl-svg-purple rl-svg-small"
      );
      txt(
        s,
        85,
        upper ? y(2) - 9 : y(-1) + 26,
        upper ? "sup S = 2" : "inf S = −1",
        "rl-svg-purple rl-svg-small"
      );
    });
  }
  function clusterFigure(root) {
    const s = q(root, "svg");
    clear(s);
    axes(s, 760, 215, 75, 134, "x", "");
    const x = (v) => 75 + 600 * v;
    line(s, x(0), 134, x(1), 134, C.teal, 3);
    dot(s, x(0), 134, 6, C.orange, true);
    txt(s, x(0), 166, "0", "rl-svg-orange", "middle");
    [1, 2, 3, 4, 5, 6, 7, 8, 10, 12, 16, 22].forEach((n) => {
      const xx = x(1 / n);
      dot(s, xx, 134, n <= 5 ? 5 : 3.5, C.teal);
      if (n <= 4)
        txt(s, xx, 112, n === 1 ? "1" : "1/" + n, "rl-svg-small", "middle");
    });
    e(s, "path", {
      d: "M" + x(0.22) + " 74 v-10 H" + x(0) + " v10",
      fill: "none",
      stroke: C.purple,
      "stroke-width": 1.25,
    });
    txt(
      s,
      x(0.11),
      56,
      "minden környezetben újabb 1/n",
      "rl-svg-purple rl-svg-small",
      "middle"
    );
  }
  function squeezeFigure(root) {
    const s = q(root, "svg");
    clear(s);
    const ox = 380,
      oy = 140,
      px = 140,
      py = 78;
    axes(s, 760, 280, ox, oy, "x", "y");
    const top = (x) => 0.28 * x * x,
      bot = (x) => -0.28 * x * x;
    const upper = samples(
      (x) => [ox + px * x, oy - py * top(x)],
      -1.6,
      1.6,
      240
    );
    const lower = samples(
      (x) => [ox + px * x, oy - py * bot(x)],
      1.6,
      -1.6,
      240
    );
    e(s, "path", {
      d:
        upper
          .concat(lower)
          .map(
            (p, i) => (i ? "L" : "M") + p[0].toFixed(1) + "," + p[1].toFixed(1)
          )
          .join(" ") + " Z",
      fill: C.paleTeal,
      stroke: "none",
    });
    curve(s, upper, C.blue, 2.8);
    curve(s, lower, C.purple, 2.8);
    for (const [a, b] of [
      [-1.6, -0.065],
      [0.065, 1.6],
    ])
      curve(
        s,
        samples(
          (x) => [ox + px * x, oy - py * (0.28 * x * x * Math.sin(8 / x))],
          a,
          b,
          700
        ),
        C.orange,
        2.2
      );
    dot(s, ox, oy, 5, C.ink);
    txt(s, ox + 10, oy + 23, "(u, A)", "rl-svg-small");
    txt(s, 620, 76, "f", "rl-svg-teal");
    txt(s, 620, 210, "h", "rl-svg-purple");
    txt(s, 585, 135, "g", "rl-svg-orange");
  }
  function unitFigure(root) {
    const s = q(root, "svg"),
      input = q(root, "[data-rl-angle]");
    function render() {
      const a = Number(input.value),
        ox = 230,
        oy = 340,
        r = 95;
      const P = [ox + r, oy],
        Q = [ox + r * Math.cos(a), oy - r * Math.sin(a)],
        T = [ox + r, oy - r * Math.tan(a)];
      q(root, "[data-rl-angle-value]").textContent = fmt(a);
      clear(s);
      axes(s, 760, 420, ox, oy, "x", "y");
      const outer = [[ox, oy], P, T, [ox, oy]],
        inner = [[ox, oy], P, Q, [ox, oy]];
      curve(s, outer, C.purple, 1.8, undefined, C.palePurple);
      const arc = samples(
        (t) => [ox + r * Math.cos(t), oy - r * Math.sin(t)],
        0,
        a,
        64
      );
      curve(
        s,
        [[ox, oy], P, ...arc, [ox, oy]],
        C.teal,
        1.7,
        undefined,
        C.paleTeal
      );
      curve(s, inner, C.blue, 2.4, undefined, "#f0f3f6");
      e(s, "path", {
        d: "M" + P[0] + " " + P[1] + " V" + T[1],
        stroke: C.purple,
        "stroke-width": 1.6,
        fill: "none",
      });
      e(s, "path", {
        d: "M" + ox + " " + oy + " L" + T[0] + " " + T[1],
        stroke: C.purple,
        "stroke-width": 1.1,
        fill: "none",
      });
      dot(s, ox, oy, 4, C.ink);
      dot(s, P[0], P[1], 4, C.ink);
      dot(s, Q[0], Q[1], 4, C.teal);
      dot(s, T[0], T[1], 4, C.purple);
      txt(s, ox - 21, oy + 20, "O", "rl-svg-small");
      txt(s, P[0] + 12, P[1] + 19, "P", "rl-svg-small");
      txt(s, Q[0] - 24, Q[1] - 12, "Q", "rl-svg-teal");
      txt(s, T[0] + 12, T[1] - 6, "T", "rl-svg-purple");
      txt(s, ox + 31, oy - 10, "x", "rl-svg-small");
      txt(s, 470, 95, "háromszög", "rl-svg-purple");
      txt(s, 470, 125, "körcikk", "rl-svg-teal");
      txt(s, 470, 155, "belső háromszög", "rl-svg-small");
      txt(s, 470, 217, "sin x < x < tan x", "rl-svg-muted");
      line(s, 455, 73, 465, 73, C.purple, 5);
      line(s, 455, 103, 465, 103, C.teal, 5);
      line(s, 455, 133, 465, 133, C.blue, 5);
    }
    input.addEventListener("input", render);
    render();
  }
  function cosFigure(root) {
    const s = q(root, "svg"),
      input = q(root, "[data-rl-cos-window]");
    function render() {
      const w = Number(input.value);
      q(root, "[data-rl-cos-value]").textContent = fmt(w);
      clear(s);
      const ox = 380,
        top = 26,
        bottom = 292,
        scaleX = 332 / w;
      const low = Math.min(Math.cos(w), 1 - (w * w) / 2) - 0.12,
        high = 1.18;
      const yy = (v) => bottom - ((v - low) / (high - low)) * (bottom - top),
        xx = (v) => ox + v * scaleX;
      line(s, 28, yy(0), 732, yy(0), C.muted, 1.2);
      line(s, ox, top, ox, bottom, C.muted, 1.2);
      txt(s, ox + 10, yy(1) - 9, "1", "rl-svg-small");
      curve(
        s,
        samples((x) => [xx(x), yy(Math.cos(x))], -w, w, 260),
        C.teal,
        3
      );
      curve(
        s,
        samples((x) => [xx(x), yy(1 - (x * x) / 2)], -w, w, 260),
        C.purple,
        2.6,
        "7 5"
      );
      dot(s, ox, yy(1), 4, C.ink);
      txt(s, 515, 45, "cos x", "rl-svg-teal");
      txt(s, 515, 68, "1 − x²/2", "rl-svg-purple");
      txt(s, 715, yy(0) - 10, "x", "rl-svg-muted");
    }
    input.addEventListener("input", render);
    render();
  }
  function expFigure(root) {
    const s = q(root, "svg"),
      base = q(root, "[data-rl-base]"),
      sec = q(root, "[data-rl-secant]");
    function render() {
      const a = Number(base.value),
        h = Number(sec.value),
        slope = (a ** h - 1) / h;
      q(root, "[data-rl-base-value]").textContent = fmt(a);
      q(root, "[data-rl-secant-value]").textContent = fmt(h);
      q(root, "[data-rl-slope-value]").textContent =
        "Szelő meredeksége: " + fmt(slope);
      clear(s);
      const ox = 310,
        oy = 315,
        k = 72,
        X = (x) => ox + k * x,
        Y = (y) => oy - k * y;
      axes(s, 760, 360, ox, oy, "x", "y");
      line(s, X(-1.6), Y(-0.6), X(1.3), Y(2.3), C.purple, 2, "7 6");
      const pts = samples((x) => [X(x), Y(a ** x)], -1.65, 1.12, 250).filter(
        (p) => p[1] >= 12
      );
      curve(s, pts, C.teal, 3);
      line(
        s,
        X(-0.5),
        Y(1 - 0.5 * slope),
        X(h + 0.45),
        Y(1 + (h + 0.45) * slope),
        C.orange,
        2.2
      );
      dot(s, X(0), Y(1), 5, C.ink);
      dot(s, X(h), Y(a ** h), 5, C.orange);
      txt(s, X(0) + 9, Y(1) + 21, "(0, 1)", "rl-svg-small");
      txt(s, 500, 54, "aˣ", "rl-svg-teal");
      txt(s, 500, 82, "y = 1 + x (45°)", "rl-svg-purple");
      txt(s, 500, 110, "szelő", "rl-svg-orange");
      txt(s, 500, 158, "e ≈ 2,718", "rl-svg-muted");
    }
    base.addEventListener("input", render);
    sec.addEventListener("input", render);
    render();
  }
  function inverseFigure(root) {
    const s = q(root, "svg"),
      input = q(root, "[data-rl-inverse-x]");
    function render() {
      const x = Number(input.value),
        y = 2 * x + 1,
        ox = 380,
        oy = 185,
        k = 42;
      const X = (v) => ox + k * v,
        Y = (v) => oy - k * v;
      q(root, "[data-rl-inverse-value]").textContent = fmt(x);
      q(root, "[data-rl-inverse-readout]").textContent =
        "f⁻¹(f(x)) = " + fmt(x);
      clear(s);
      axes(s, 760, 370, ox, oy, "x", "y");
      line(s, X(-4), Y(-4), X(4), Y(4), C.muted, 1.8, "7 6");
      curve(
        s,
        samples((t) => [X(t), Y(2 * t + 1)], -4, 4, 80),
        C.teal,
        2.8
      );
      curve(
        s,
        samples((t) => [X(t), Y((t - 1) / 2)], -4, 4, 80),
        C.purple,
        2.8
      );
      line(s, X(x), Y(y), X(y), Y(x), C.orange, 1.6, "5 5");
      dot(s, X(x), Y(y), 6, C.teal);
      dot(s, X(y), Y(x), 6, C.purple);
      txt(s, 620, 50, "f(x) = 2x + 1", "rl-svg-teal");
      txt(s, 620, 76, "f⁻¹(x) = (x − 1)/2", "rl-svg-purple");
      txt(s, 620, 102, "y = x", "rl-svg-muted");
      txt(s, X(x) + 9, Y(y) - 10, "(x, f(x))", "rl-svg-teal rl-svg-small");
      txt(s, X(y) + 9, Y(x) + 22, "(f(x), x)", "rl-svg-purple rl-svg-small");
    }
    input.addEventListener("input", render);
    render();
  }
  function logFigure(root) {
    const s = q(root, "svg"),
      input = q(root, "[data-rl-log-x]");
    function render() {
      const x = Number(input.value),
        y = Math.log1p(x),
        ox = 270,
        oy = 185,
        k = 90;
      const X = (v) => ox + k * v,
        Y = (v) => oy - k * v;
      q(root, "[data-rl-log-value]").textContent = fmt(x);
      q(root, "[data-rl-log-slope]").textContent =
        "Szelő meredeksége: " + fmt(Math.abs(x) < 0.0001 ? 1 : y / x);
      clear(s);
      axes(s, 760, 340, ox, oy, "x", "y");
      line(s, X(-0.8), Y(-0.8), X(1.65), Y(1.65), C.purple, 2, "7 6");
      curve(
        s,
        samples((t) => [X(t), Y(Math.log1p(t))], -0.82, 1.65, 250),
        C.teal,
        3
      );
      if (Math.abs(x) > 0.0001) line(s, X(0), Y(0), X(x), Y(y), C.orange, 2.2);
      dot(s, X(0), Y(0), 5, C.ink);
      dot(s, X(x), Y(y), 5, C.orange);
      txt(s, 508, 67, "ln(1 + x)", "rl-svg-teal");
      txt(s, 508, 94, "y = x", "rl-svg-purple");
      txt(s, 508, 121, "szelő", "rl-svg-orange");
    }
    input.addEventListener("input", render);
    render();
  }
  function oneSided(root) {
    const s = q(root, "svg");
    clear(s);
    const ox = 380,
      oy = 250,
      k = 55;
    const X = (v) => ox + k * v,
      Y = (v) => oy - k * v;
    axes(s, 760, 320, ox, oy, "x", "y");
    curve(
      s,
      samples((t) => [X(t), Y(1 + 0.2 * t)], -3.2, 0, 90),
      C.teal,
      3
    );
    curve(
      s,
      samples((t) => [X(t), Y(2 + 0.3 * t)], 0, 3.2, 90),
      C.purple,
      3
    );
    dot(s, ox, Y(1), 6, C.teal, true);
    dot(s, ox, Y(2), 6, C.purple, true);
    dot(s, ox, Y(3), 6, C.orange);
    txt(s, ox + 10, Y(1) + 5, "1", "rl-svg-teal");
    txt(s, ox + 10, Y(2) + 5, "2", "rl-svg-purple");
    txt(s, ox + 10, Y(3) + 5, "f(0) = 3", "rl-svg-orange");
    txt(s, 110, 90, "bal oldali ág", "rl-svg-teal");
    txt(s, 510, 90, "jobb oldali ág", "rl-svg-purple");
  }
  function wildFigure(root) {
    const s = q(root, "svg");
    clear(s);
    const ox = 380,
      oy = 165,
      kx = 680,
      ky = 108;
    const X = (v) => ox + kx * v,
      Y = (v) => oy - ky * v;
    axes(s, 760, 330, ox, oy, "x", "y");
    e(s, "rect", {
      x: X(-0.026),
      y: 29,
      width: X(0.026) - X(-0.026),
      height: 274,
      fill: C.palePurple,
      opacity: 0.8,
    });
    for (const [a, b] of [
      [-0.48, -0.026],
      [0.026, 0.48],
    ])
      curve(
        s,
        samples((t) => [X(t), Y(Math.sin(1 / t))], a, b, 1900),
        C.teal,
        1.6
      );
    for (let n = 1; n <= 6; n++) {
      const p = 1 / (Math.PI / 2 + 2 * n * Math.PI),
        m = 1 / ((3 * Math.PI) / 2 + 2 * n * Math.PI);
      dot(s, X(p), Y(1), 4.6, C.orange);
      dot(s, X(m), Y(-1), 4.6, C.purple);
    }
    line(s, ox, 34, ox, 300, C.ink, 1.4, "5 5");
    txt(s, ox + 8, oy + 20, "0", "rl-svg-small");
    txt(s, 510, 52, "f(xₙ) = 1", "rl-svg-orange");
    txt(s, 510, 75, "f(yₙ) = −1", "rl-svg-purple");
    txt(s, 410, 294, "x = 0 közelében nincs határérték", "rl-svg-muted");
  }
  const setup = [
    ["[data-rl-map]", mapFigure],
    ["[data-rl-bounds]", boundsFigure],
    ["[data-rl-cluster]", clusterFigure],
    ["[data-rl-squeeze]", squeezeFigure],
    ["[data-rl-unit]", unitFigure],
    ["[data-rl-cos]", cosFigure],
    ["[data-rl-exp]", expFigure],
    ["[data-rl-inverse]", inverseFigure],
    ["[data-rl-log]", logFigure],
    ["[data-rl-one-sided]", oneSided],
    ["[data-rl-wild]", wildFigure],
  ];
  const init = () =>
    setup.forEach(([selector, fn]) => {
      const root = document.querySelector(selector);
      if (root) fn(root);
    });
  if (document.readyState === "loading")
    document.addEventListener("DOMContentLoaded", init);
  else init();
})();
