"use strict";

const SVG_NS = "http://www.w3.org/2000/svg";

const clamp = (value, min, max) => Math.min(max, Math.max(min, value));
const add = (p, q) => ({ x: p.x + q.x, y: p.y + q.y });
const sub = (p, q) => ({ x: p.x - q.x, y: p.y - q.y });
const scale = (p, factor) => ({ x: p.x * factor, y: p.y * factor });
const dot = (p, q) => p.x * q.x + p.y * q.y;
const cross = (p, q) => p.x * q.y - p.y * q.x;
const length = (p) => Math.hypot(p.x, p.y);
const fmt = (value, digits = 1) => value.toLocaleString("hu-HU", {
  minimumFractionDigits: digits,
  maximumFractionDigits: digits
});

function point(x, y) {
  return { x, y };
}

function markerDefs(prefix) {
  return `
    <defs>
      <marker id="${prefix}-a" markerWidth="9" markerHeight="9" refX="8" refY="4.5" orient="auto" markerUnits="strokeWidth">
        <path d="M 0 0 L 9 4.5 L 0 9 z" fill="#42677c"></path>
      </marker>
      <marker id="${prefix}-b" markerWidth="9" markerHeight="9" refX="8" refY="4.5" orient="auto" markerUnits="strokeWidth">
        <path d="M 0 0 L 9 4.5 L 0 9 z" fill="#426b5a"></path>
      </marker>
      <marker id="${prefix}-r" markerWidth="9" markerHeight="9" refX="8" refY="4.5" orient="auto" markerUnits="strokeWidth">
        <path d="M 0 0 L 9 4.5 L 0 9 z" fill="#a85e46"></path>
      </marker>
    </defs>`;
}

function grid(width, height, step = 50) {
  let lines = "";
  for (let x = step; x < width; x += step) {
    lines += `<line class="grid-line" x1="${x}" y1="0" x2="${x}" y2="${height}"></line>`;
  }
  for (let y = step; y < height; y += step) {
    lines += `<line class="grid-line" x1="0" y1="${y}" x2="${width}" y2="${y}"></line>`;
  }
  return `<g aria-hidden="true">${lines}</g>`;
}

function arrow(prefix, from, to, className, marker = "a") {
  return `<line class="${className}" x1="${from.x}" y1="${from.y}" x2="${to.x}" y2="${to.y}" marker-end="url(#${prefix}-${marker})"></line>`;
}

function label(text, p, className = "", anchor = "middle") {
  return `<text class="${className}" x="${p.x}" y="${p.y}" text-anchor="${anchor}">${text}</text>`;
}

function handle(p, name, className) {
  return `<circle class="handle ${className}" data-drag="${name}" cx="${p.x}" cy="${p.y}" r="8" tabindex="0"></circle>`;
}

function svgPoint(svg, event) {
  const p = svg.createSVGPoint();
  p.x = event.clientX;
  p.y = event.clientY;
  const matrix = svg.getScreenCTM();
  return matrix ? p.matrixTransform(matrix.inverse()) : p;
}

function attachDrag(svg, onMove) {
  let active = null;

  svg.addEventListener("pointerdown", (event) => {
    const target = event.target.closest("[data-drag]");
    if (!target) return;
    active = target.dataset.drag;
    svg.setPointerCapture(event.pointerId);
    event.preventDefault();
  });

  svg.addEventListener("pointermove", (event) => {
    if (!active) return;
    onMove(active, svgPoint(svg, event));
    event.preventDefault();
  });

  const release = (event) => {
    if (!active) return;
    active = null;
    if (svg.hasPointerCapture(event.pointerId)) svg.releasePointerCapture(event.pointerId);
  };

  svg.addEventListener("pointerup", release);
  svg.addEventListener("pointercancel", release);
}

function initEquivalence() {
  const svg = document.querySelector("#equivalence-svg");
  if (!svg) return;

  const state = {
    vector: point(165, -58),
    starts: [point(105, 135), point(405, 135), point(245, 300)]
  };

  function render() {
    const names = [["A", "B"], ["C", "D"], ["E", "F"]];
    const classes = ["vector-a", "vector-b", "vector-result"];
    const markers = ["a", "b", "r"];
    let content = markerDefs("eq") + grid(760, 390, 65);

    state.starts.forEach((start, index) => {
      const end = add(start, state.vector);
      content += arrow("eq", start, end, classes[index], markers[index]);
      content += label(names[index][0], add(start, point(-12, 23)), "math-label");
      content += label(names[index][1], add(end, point(10, -13)), "math-label");
      if (index > 0) content += handle(start, `start-${index}`, "handle-b");
      if (index === 0) content += handle(end, "vector-end", "handle-a");
    });

    content += label("ugyanaz a hossz és irány", point(545, 322), "small-label");
    svg.innerHTML = content;
    document.querySelector("#equiv-length").textContent = `|v| = ${fmt(length(state.vector) / 50)}`;
  }

  attachDrag(svg, (name, p) => {
    if (name === "vector-end") {
      const v = sub(p, state.starts[0]);
      if (length(v) > 35) state.vector = point(clamp(v.x, -230, 230), clamp(v.y, -150, 150));
    } else {
      const index = Number(name.split("-")[1]);
      state.starts[index] = point(
        clamp(p.x, 45, 715 - state.vector.x),
        clamp(p.y, 45 - Math.min(0, state.vector.y), 345 - Math.max(0, state.vector.y))
      );
    }
    render();
  });

  render();
}

function initOperations() {
  const svg = document.querySelector("#operations-svg");
  const range = document.querySelector("#lambda-range");
  if (!svg || !range) return;

  const origin = point(180, 275);
  const scalarOrigin = point(520, 350);
  const state = {
    a: point(180, -42),
    b: point(80, -142),
    lambda: Number(range.value)
  };

  function render() {
    const aEnd = add(origin, state.a);
    const bEnd = add(origin, state.b);
    const sumEnd = add(aEnd, state.b);
    const scaled = scale(state.a, state.lambda * 0.55);
    const scaledEnd = add(scalarOrigin, scaled);
    const sumMath = point((state.a.x + state.b.x) / 50, -(state.a.y + state.b.y) / 50);

    svg.innerHTML = markerDefs("ops") + grid(760, 430, 55) + `
      <polygon class="fill-paper" points="${origin.x},${origin.y} ${aEnd.x},${aEnd.y} ${sumEnd.x},${sumEnd.y} ${bEnd.x},${bEnd.y}"></polygon>
      <line class="guide-line" x1="${aEnd.x}" y1="${aEnd.y}" x2="${sumEnd.x}" y2="${sumEnd.y}"></line>
      <line class="guide-line" x1="${bEnd.x}" y1="${bEnd.y}" x2="${sumEnd.x}" y2="${sumEnd.y}"></line>
      ${arrow("ops", origin, aEnd, "vector-a", "a")}
      ${arrow("ops", origin, bEnd, "vector-b", "b")}
      ${arrow("ops", origin, sumEnd, "vector-result", "r")}
      ${label("a", add(aEnd, point(13, 18)), "math-label")}
      ${label("b", add(bEnd, point(-13, -8)), "math-label")}
      ${label("a + b", add(sumEnd, point(25, -8)), "math-label", "start")}
      ${handle(aEnd, "a", "handle-a")}
      ${handle(bEnd, "b", "handle-b")}
      <line class="axis-line" x1="310" y1="${scalarOrigin.y}" x2="720" y2="${scalarOrigin.y}"></line>
      ${arrow("ops", scalarOrigin, scaledEnd, "vector-result", "r")}
      ${label("λa", add(scaledEnd, point(10, -12)), "math-label", "start")}
      ${label("számmal való szorzás", point(515, 396), "small-label")}
    `;

    document.querySelector("#lambda-output").textContent = fmt(state.lambda, 2);
    document.querySelector("#sum-reading").textContent = `a + b = (${fmt(sumMath.x)}; ${fmt(sumMath.y)})`;
  }

  attachDrag(svg, (name, p) => {
    const v = sub(p, origin);
    if (length(v) < 28) return;
    state[name] = point(clamp(v.x, -130, 265), clamp(v.y, -205, 105));
    render();
  });

  range.addEventListener("input", () => {
    state.lambda = Number(range.value);
    render();
  });

  render();
}

function initHexagon() {
  const svg = document.querySelector("#hexagon-svg");
  if (!svg) return;

  const center = point(380, 180);
  const radius = 126;
  const names = ["A", "B", "C", "D", "E", "F"];
  const points = names.map((name, index) => {
    const angle = index * Math.PI / 3;
    return point(center.x + radius * Math.cos(angle), center.y - radius * Math.sin(angle));
  });
  const polygon = points.map((p) => `${p.x},${p.y}`).join(" ");
  let labels = "";

  points.forEach((p, index) => {
    const offset = scale(sub(p, center), 18 / radius);
    labels += label(names[index], add(p, offset), "math-label");
  });

  svg.innerHTML = markerDefs("hex") + grid(760, 360, 60) + `
    <polygon class="fill-paper" points="${polygon}"></polygon>
    <polygon class="shape-line" points="${polygon}"></polygon>
    ${arrow("hex", points[0], points[1], "vector-a", "a")}
    ${arrow("hex", points[0], points[5], "vector-b", "b")}
    ${label("a", scale(add(points[0], points[1]), 0.5), "math-label")}
    ${label("b", scale(add(points[0], points[5]), 0.5), "math-label")}
    ${labels}
  `;
}

function angleArc(origin, a, b, radius) {
  const na = scale(a, radius / Math.max(length(a), 1));
  const nb = scale(b, radius / Math.max(length(b), 1));
  const start = add(origin, na);
  const end = add(origin, nb);
  const sweep = cross(a, b) >= 0 ? 1 : 0;
  return `<path class="shape-line" d="M ${start.x} ${start.y} A ${radius} ${radius} 0 0 ${sweep} ${end.x} ${end.y}"></path>`;
}

function initDotProduct() {
  const svg = document.querySelector("#dot-svg");
  if (!svg) return;

  const origin = point(285, 255);
  const state = { a: point(205, -12), b: point(105, -155) };

  function render() {
    const aEnd = add(origin, state.a);
    const bEnd = add(origin, state.b);
    const scalar = dot(state.a, state.b) / dot(state.a, state.a);
    const projection = add(origin, scale(state.a, scalar));
    const cos = clamp(dot(state.a, state.b) / (length(state.a) * length(state.b)), -1, 1);
    const angle = Math.acos(cos) * 180 / Math.PI;
    const value = dot(state.a, state.b) / 2500;
    const stateText = Math.abs(angle - 90) < 0.4 ? "merőleges" : angle < 90 ? "hegyesszög" : "tompaszög";

    svg.innerHTML = markerDefs("dot") + grid(760, 390, 55) + `
      <line class="axis-line" x1="55" y1="${origin.y}" x2="705" y2="${origin.y}"></line>
      ${arrow("dot", origin, aEnd, "vector-a", "a")}
      ${arrow("dot", origin, bEnd, "vector-b", "b")}
      <line class="guide-line" x1="${bEnd.x}" y1="${bEnd.y}" x2="${projection.x}" y2="${projection.y}"></line>
      <line class="vector-result" x1="${origin.x}" y1="${origin.y}" x2="${projection.x}" y2="${projection.y}"></line>
      ${angleArc(origin, state.a, state.b, 49)}
      ${label("γ", add(origin, point(58, -28)), "math-label")}
      ${label("a", add(aEnd, point(15, 21)), "math-label")}
      ${label("b", add(bEnd, point(-13, -8)), "math-label")}
      ${label("vetület", add(projection, point(0, 27)), "small-label")}
      ${handle(aEnd, "a", "handle-a")}
      ${handle(bEnd, "b", "handle-b")}
    `;

    document.querySelector("#dot-angle").textContent = `γ = ${fmt(angle)}°`;
    document.querySelector("#dot-value").textContent = `a · b = ${fmt(value)}`;
    document.querySelector("#dot-state").textContent = stateText;
  }

  attachDrag(svg, (name, p) => {
    const v = sub(p, origin);
    if (length(v) < 35) return;
    state[name] = point(clamp(v.x, -220, 300), clamp(v.y, -210, 105));
    render();
  });

  render();
}

function initIsosceles() {
  const svg = document.querySelector("#isosceles-svg");
  if (!svg) return;

  const A = point(380, 55);
  const B = point(145, 295);
  const C = point(615, 295);
  const M = point(380, 295);

  svg.innerHTML = markerDefs("iso") + grid(760, 360, 60) + `
    <polygon class="fill-paper" points="${A.x},${A.y} ${B.x},${B.y} ${C.x},${C.y}"></polygon>
    <polyline class="shape-line" points="${A.x},${A.y} ${B.x},${B.y} ${C.x},${C.y} ${A.x},${A.y}"></polyline>
    ${arrow("iso", A, M, "vector-result", "r")}
    <polyline class="shape-line" points="${M.x - 14},${M.y} ${M.x - 14},${M.y - 14} ${M.x},${M.y - 14}"></polyline>
    <line class="shape-line" x1="${B.x + 109}" y1="${B.y - 7}" x2="${B.x + 109}" y2="${B.y + 7}"></line>
    <line class="shape-line" x1="${C.x - 109}" y1="${C.y - 7}" x2="${C.x - 109}" y2="${C.y + 7}"></line>
    ${label("A", add(A, point(0, -13)), "math-label")}
    ${label("B", add(B, point(-14, 20)), "math-label")}
    ${label("C", add(C, point(14, 20)), "math-label")}
    ${label("M", add(M, point(0, 24)), "math-label")}
    ${label("AM ⟂ BC", point(555, 85), "small-label")}
  `;
}

function lineIntersection(p1, p2, p3, p4) {
  const r = sub(p2, p1);
  const s = sub(p4, p3);
  const denominator = cross(r, s);
  if (Math.abs(denominator) < 0.001) return null;
  const t = cross(sub(p3, p1), s) / denominator;
  return add(p1, scale(r, t));
}

function initRectangle() {
  const svg = document.querySelector("#rectangle-svg");
  if (!svg) return;

  const center = point(380, 230);
  const state = { angle: -0.12, width: 310 };
  const ratio = 4 / 5;

  function vertices() {
    const u = point(Math.cos(state.angle), Math.sin(state.angle));
    const v = point(Math.sin(state.angle), -Math.cos(state.angle));
    const h = state.width * ratio;
    return {
      u,
      v,
      A: add(center, add(scale(u, -state.width / 2), scale(v, -h / 2))),
      B: add(center, add(scale(u, state.width / 2), scale(v, -h / 2))),
      C: add(center, add(scale(u, state.width / 2), scale(v, h / 2))),
      D: add(center, add(scale(u, -state.width / 2), scale(v, h / 2)))
    };
  }

  function render() {
    const p = vertices();
    const E = add(p.A, scale(sub(p.D, p.A), 0.5));
    const F = add(p.A, scale(sub(p.B, p.A), 0.6));
    const G = add(p.A, scale(sub(p.B, p.A), 0.8));
    const intersection = lineIntersection(G, E, F, p.C);
    const ge = sub(E, G);
    const fc = sub(p.C, F);
    const angle = Math.acos(clamp(Math.abs(dot(ge, fc)) / (length(ge) * length(fc)), -1, 1)) * 180 / Math.PI;
    let rightAngle = "";

    if (intersection) {
      const e1 = scale(ge, 11 / length(ge));
      const e2 = scale(fc, 11 / length(fc));
      const q1 = add(intersection, e1);
      const q2 = add(q1, e2);
      const q3 = add(intersection, e2);
      rightAngle = `<polyline class="shape-line" points="${q1.x},${q1.y} ${q2.x},${q2.y} ${q3.x},${q3.y}"></polyline>`;
    }

    svg.innerHTML = markerDefs("rect") + grid(760, 450, 60) + `
      <polygon class="fill-paper" points="${p.A.x},${p.A.y} ${p.B.x},${p.B.y} ${p.C.x},${p.C.y} ${p.D.x},${p.D.y}"></polygon>
      <polyline class="shape-line" points="${p.A.x},${p.A.y} ${p.B.x},${p.B.y} ${p.C.x},${p.C.y} ${p.D.x},${p.D.y} ${p.A.x},${p.A.y}"></polyline>
      ${arrow("rect", G, E, "vector-b", "b")}
      ${arrow("rect", F, p.C, "vector-result", "r")}
      ${rightAngle}
      ${label("A", add(p.A, point(-13, 20)), "math-label")}
      ${label("B", add(p.B, point(15, 17)), "math-label")}
      ${label("C", add(p.C, point(15, -8)), "math-label")}
      ${label("D", add(p.D, point(-14, -8)), "math-label")}
      ${label("E", add(E, point(-17, 5)), "math-label")}
      ${label("F", add(F, point(-5, 25)), "math-label")}
      ${label("G", add(G, point(4, 25)), "math-label")}
      ${label("AB = 5", add(scale(add(p.A, p.B), 0.5), scale(p.v, -22)), "small-label")}
      ${label("AD = 4", add(scale(add(p.A, p.D), 0.5), scale(p.u, -27)), "small-label")}
      ${handle(p.B, "corner", "handle-a")}
    `;

    document.querySelector("#rect-angle").textContent = `∠(GE, FC) = ${fmt(angle)}°`;
  }

  attachDrag(svg, (name, p) => {
    if (name !== "corner") return;
    const q = sub(p, center);
    state.width = clamp(2 * length(q) / Math.sqrt(1 + ratio * ratio), 210, 350);
    state.angle = clamp(Math.atan2(q.y, q.x) - Math.atan(ratio), -0.58, 0.35);
    render();
  });

  render();
}

function initCrossProduct() {
  const svg = document.querySelector("#cross-svg");
  if (!svg) return;

  const origin = point(225, 285);
  const state = { a: point(205, -20), b: point(85, -158) };

  function render() {
    const aEnd = add(origin, state.a);
    const bEnd = add(origin, state.b);
    const sumEnd = add(aEnd, state.b);
    const signedArea = -cross(state.a, state.b) / 2500;
    const area = Math.abs(signedArea);
    const outward = signedArea >= 0;
    const normalStart = point(625, 310);
    const normalLength = clamp(45 + area * 7, 45, 145);
    const normalEnd = add(normalStart, point(0, outward ? -normalLength : normalLength));

    svg.innerHTML = markerDefs("cross") + grid(760, 410, 55) + `
      <polygon class="fill-green" points="${origin.x},${origin.y} ${aEnd.x},${aEnd.y} ${sumEnd.x},${sumEnd.y} ${bEnd.x},${bEnd.y}"></polygon>
      <polyline class="shape-line" points="${origin.x},${origin.y} ${aEnd.x},${aEnd.y} ${sumEnd.x},${sumEnd.y} ${bEnd.x},${bEnd.y} ${origin.x},${origin.y}"></polyline>
      ${arrow("cross", origin, aEnd, "vector-a", "a")}
      ${arrow("cross", origin, bEnd, "vector-b", "b")}
      ${label("a", add(aEnd, point(12, 22)), "math-label")}
      ${label("b", add(bEnd, point(-13, -8)), "math-label")}
      ${label(outward ? "⊙" : "⊗", scale(add(origin, sumEnd), 0.5), "math-label")}
      ${arrow("cross", normalStart, normalEnd, "vector-result", "r")}
      ${label("a × b", add(normalEnd, point(0, outward ? -14 : 25)), "math-label")}
      ${label("merőleges a kifeszített síkra", point(625, 356), "small-label")}
      ${handle(aEnd, "a", "handle-a")}
      ${handle(bEnd, "b", "handle-b")}
    `;

    document.querySelector("#cross-area").textContent = `terület = ${fmt(area)}`;
    document.querySelector("#cross-direction").textContent = outward ? "irány: kifelé ⊙" : "irány: befelé ⊗";
  }

  attachDrag(svg, (name, p) => {
    const v = sub(p, origin);
    if (length(v) < 30) return;
    state[name] = point(clamp(v.x, -145, 290), clamp(v.y, -220, 85));
    render();
  });

  render();
}

function project3D(p, origin = point(245, 365), unit = 82) {
  return point(
    origin.x + unit * (p.x + 0.52 * p.y),
    origin.y - unit * (p.z + 0.34 * p.y)
  );
}

function vertex3(a, b, c, i, j, k) {
  return {
    x: i * a.x + j * b.x + k * c.x,
    y: i * a.y + j * b.y + k * c.y,
    z: i * a.z + j * b.z + k * c.z
  };
}

function initTripleProduct() {
  const svg = document.querySelector("#triple-svg");
  const range = document.querySelector("#height-range");
  if (!svg || !range) return;

  const state = { height: Number(range.value) };
  const a = { x: 2.3, y: 0, z: 0 };
  const b = { x: 0.2, y: 1.75, z: 0 };

  function render() {
    const c = { x: 0.35, y: 0.35, z: state.height };
    const vertices = {};
    for (let i = 0; i <= 1; i += 1) {
      for (let j = 0; j <= 1; j += 1) {
        for (let k = 0; k <= 1; k += 1) {
          vertices[`${i}${j}${k}`] = project3D(vertex3(a, b, c, i, j, k));
        }
      }
    }
    const p = vertices;
    const edges = [
      ["000", "100"], ["000", "010"], ["000", "001"],
      ["100", "110"], ["100", "101"], ["010", "110"],
      ["010", "011"], ["001", "101"], ["001", "011"],
      ["110", "111"], ["101", "111"], ["011", "111"]
    ];
    const edgeMarkup = edges.map(([from, to]) =>
      `<line class="shape-line" x1="${p[from].x}" y1="${p[from].y}" x2="${p[to].x}" y2="${p[to].y}"></line>`
    ).join("");

    svg.innerHTML = markerDefs("triple") + grid(760, 460, 60) + `
      <polygon class="fill-paper" points="${p["000"].x},${p["000"].y} ${p["100"].x},${p["100"].y} ${p["110"].x},${p["110"].y} ${p["010"].x},${p["010"].y}"></polygon>
      <polygon class="fill-green" points="${p["001"].x},${p["001"].y} ${p["101"].x},${p["101"].y} ${p["111"].x},${p["111"].y} ${p["011"].x},${p["011"].y}"></polygon>
      <polygon class="fill-red" points="${p["100"].x},${p["100"].y} ${p["110"].x},${p["110"].y} ${p["111"].x},${p["111"].y} ${p["101"].x},${p["101"].y}"></polygon>
      ${edgeMarkup}
      ${arrow("triple", p["000"], p["100"], "vector-a", "a")}
      ${arrow("triple", p["000"], p["010"], "vector-b", "b")}
      ${arrow("triple", p["000"], p["001"], "vector-result", "r")}
      ${label("a", add(p["100"], point(12, 20)), "math-label")}
      ${label("b", add(p["010"], point(-12, -5)), "math-label")}
      ${label("c", add(p["001"], point(-12, -8)), "math-label")}
      ${label("alapterület × előjeles magasság", point(560, 402), "small-label")}
    `;

    const volume = 2.3 * 1.75 * state.height;
    document.querySelector("#height-output").textContent = fmt(state.height);
    document.querySelector("#triple-volume").textContent = `|[a,b,c]| = ${fmt(volume)}`;
  }

  range.addEventListener("input", () => {
    state.height = Number(range.value);
    render();
  });

  render();
}

function initBasis() {
  const svg = document.querySelector("#basis-svg");
  const caption = document.querySelector("#basis-caption");
  const buttons = [...document.querySelectorAll("[data-basis-mode]")];
  if (!svg || !caption || buttons.length === 0) return;

  const origin = point(235, 290);
  const plane = {
    a: point(190, -18),
    b: point(72, -150),
    v: point(255, -190)
  };
  const space = { alpha: 0.8, beta: 0.7, gamma: 0.75 };
  let mode = "plane";

  function renderPlane() {
    const determinant = cross(plane.a, plane.b);
    const nearParallel = Math.abs(determinant) < 1800;
    const alpha = nearParallel ? 0 : cross(plane.v, plane.b) / determinant;
    const beta = nearParallel ? 0 : cross(plane.a, plane.v) / determinant;
    const aPart = scale(plane.a, alpha);
    const firstEnd = add(origin, aPart);
    const vEnd = add(origin, plane.v);
    const aEnd = add(origin, plane.a);
    const bEnd = add(origin, plane.b);
    let lattice = "";

    for (let i = -2; i <= 3; i += 1) {
      const p1 = add(origin, add(scale(plane.a, i), scale(plane.b, -2)));
      const p2 = add(origin, add(scale(plane.a, i), scale(plane.b, 3)));
      lattice += `<line class="grid-line" x1="${p1.x}" y1="${p1.y}" x2="${p2.x}" y2="${p2.y}"></line>`;
    }
    for (let j = -2; j <= 3; j += 1) {
      const p1 = add(origin, add(scale(plane.b, j), scale(plane.a, -2)));
      const p2 = add(origin, add(scale(plane.b, j), scale(plane.a, 3)));
      lattice += `<line class="grid-line" x1="${p1.x}" y1="${p1.y}" x2="${p2.x}" y2="${p2.y}"></line>`;
    }

    svg.innerHTML = markerDefs("basis") + `
      <g opacity="0.72">${lattice}</g>
      ${arrow("basis", origin, aEnd, "vector-a", "a")}
      ${arrow("basis", origin, bEnd, "vector-b", "b")}
      <line class="vector-a" x1="${origin.x}" y1="${origin.y}" x2="${firstEnd.x}" y2="${firstEnd.y}"></line>
      ${arrow("basis", firstEnd, vEnd, "vector-b", "b")}
      ${arrow("basis", origin, vEnd, "vector-result", "r")}
      ${label("a", add(aEnd, point(12, 20)), "math-label")}
      ${label("b", add(bEnd, point(-12, -8)), "math-label")}
      ${label("v", add(vEnd, point(14, -8)), "math-label")}
      ${label("αa", add(scale(add(origin, firstEnd), 0.5), point(0, 23)), "small-label")}
      ${label("βb", add(scale(add(firstEnd, vEnd), 0.5), point(14, 0)), "small-label")}
      ${handle(aEnd, "a", "handle-a")}
      ${handle(bEnd, "b", "handle-b")}
      ${handle(vEnd, "v", "handle-result")}
    `;

    caption.innerHTML = nearParallel
      ? `<div class="vector-formula">a ∥ b</div><div class="vector-reading"><span>A két irány nem feszíti ki a síkot.</span></div>`
      : `<div class="vector-formula">v = ${fmt(alpha, 2)}a + ${fmt(beta, 2)}b</div><div class="vector-reading"><span>az előállítás egyértelmű</span></div>`;
  }

  function renderSpace() {
    const a = { x: 2.2, y: 0, z: 0 };
    const b = { x: 0.35, y: 1.65, z: 0 };
    const c = { x: 0.25, y: 0.25, z: 1.65 };
    const o = project3D({ x: 0, y: 0, z: 0 }, point(220, 365), 84);
    const pa = project3D(a, point(220, 365), 84);
    const pb = project3D(b, point(220, 365), 84);
    const pc = project3D(c, point(220, 365), 84);
    const alphaA = { x: space.alpha * a.x, y: 0, z: 0 };
    const alphaBeta = {
      x: space.alpha * a.x + space.beta * b.x,
      y: space.beta * b.y,
      z: 0
    };
    const target = {
      x: alphaBeta.x + space.gamma * c.x,
      y: alphaBeta.y + space.gamma * c.y,
      z: space.gamma * c.z
    };
    const p1 = project3D(alphaA, point(220, 365), 84);
    const p2 = project3D(alphaBeta, point(220, 365), 84);
    const pv = project3D(target, point(220, 365), 84);

    svg.innerHTML = markerDefs("basis3") + grid(760, 440, 60) + `
      ${arrow("basis3", o, pa, "vector-a", "a")}
      ${arrow("basis3", o, pb, "vector-b", "b")}
      ${arrow("basis3", o, pc, "vector-result", "r")}
      <line class="guide-line" x1="${o.x}" y1="${o.y}" x2="${p1.x}" y2="${p1.y}"></line>
      <line class="guide-line" x1="${p1.x}" y1="${p1.y}" x2="${p2.x}" y2="${p2.y}"></line>
      ${arrow("basis3", p2, pv, "vector-result", "r")}
      ${arrow("basis3", o, pv, "vector-result", "r")}
      ${label("a", add(pa, point(12, 21)), "math-label")}
      ${label("b", add(pb, point(-11, -8)), "math-label")}
      ${label("c", add(pc, point(-12, -8)), "math-label")}
      ${label("v", add(pv, point(15, -8)), "math-label")}
      ${label("αa", add(scale(add(o, p1), 0.5), point(0, 22)), "small-label")}
      ${label("βb", add(scale(add(p1, p2), 0.5), point(12, 0)), "small-label")}
      ${label("γc", add(scale(add(p2, pv), 0.5), point(13, 0)), "small-label")}
    `;

    caption.innerHTML = `
      <div>
        <div class="vector-formula">v = ${fmt(space.alpha, 2)}a + ${fmt(space.beta, 2)}b + ${fmt(space.gamma, 2)}c</div>
        <div class="vector-reading"><span>három nem koplanáris irány</span></div>
      </div>
      <div class="vector-basis-controls">
        <label class="vector-compact-range">α<input data-coefficient="alpha" type="range" min="-1" max="1.4" step="0.05" value="${space.alpha}"></label>
        <label class="vector-compact-range">β<input data-coefficient="beta" type="range" min="-1" max="1.4" step="0.05" value="${space.beta}"></label>
        <label class="vector-compact-range">γ<input data-coefficient="gamma" type="range" min="-1" max="1.4" step="0.05" value="${space.gamma}"></label>
      </div>`;

    caption.querySelectorAll("[data-coefficient]").forEach((input) => {
      input.addEventListener("input", () => {
        space[input.dataset.coefficient] = Number(input.value);
        renderSpace();
      });
    });
  }

  function render() {
    if (mode === "plane") renderPlane();
    else renderSpace();
  }

  attachDrag(svg, (name, p) => {
    if (mode !== "plane") return;
    const v = sub(p, origin);
    if (length(v) < 32) return;
    plane[name] = point(clamp(v.x, -250, 330), clamp(v.y, -235, 120));
    renderPlane();
  });

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      mode = button.dataset.basisMode;
      buttons.forEach((item) => {
        const active = item === button;
        item.classList.toggle("is-active", active);
        item.setAttribute("aria-pressed", String(active));
      });
      render();
    });
  });

  render();
}

function initVectorAlgebra() {
  if (!document.querySelector(".vector-figure")) return;
  document.body.classList.add("vector-algebra-page");
  initEquivalence();
  initOperations();
  initHexagon();
  initDotProduct();
  initIsosceles();
  initRectangle();
  initCrossProduct();
  initTripleProduct();
  initBasis();
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initVectorAlgebra);
} else {
  initVectorAlgebra();
}
