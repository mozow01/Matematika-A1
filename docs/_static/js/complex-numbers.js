(() => {
  "use strict";

  const initComplexPlane = () => {
    const figure = document.querySelector("[data-complex-plane]");
    if (!figure) return;

    document.body.classList.add("complex-numbers-page");

  const svg = figure.querySelector("svg");
  const aInput = figure.querySelector("[data-complex-a]");
  const bInput = figure.querySelector("[data-complex-b]");
  const readout = figure.querySelector("[data-complex-readout]");
  const NS = "http://www.w3.org/2000/svg";
  const width = 760;
  const height = 440;
  const origin = { x: 380, y: 220 };
  const scale = 55;

  const el = (name, attrs = {}, text = "") => {
    const node = document.createElementNS(NS, name);
    Object.entries(attrs).forEach(([key, value]) => node.setAttribute(key, value));
    if (text) node.textContent = text;
    return node;
  };

  const point = (x, y) => ({
    x: origin.x + scale * x,
    y: origin.y - scale * y,
  });

  const number = (value) => {
    const rounded = Math.round(value * 100) / 100;
    return Object.is(rounded, -0) ? "0" : String(rounded);
  };

  const complexText = (a, b, conjugate = false) => {
    const imaginary = conjugate ? -b : b;
    const sign = imaginary < 0 ? "−" : "+";
    return `${number(a)} ${sign} ${number(Math.abs(imaginary))}i`;
  };

  const addLine = (group, from, to, className, marker = "") => {
    const attrs = {
      x1: from.x,
      y1: from.y,
      x2: to.x,
      y2: to.y,
      class: className,
    };
    if (marker) attrs["marker-end"] = `url(#${marker})`;
    group.appendChild(el("line", attrs));
  };

  const render = () => {
    const a = Number(aInput.value);
    const b = Number(bInput.value);
    const z = point(a, b);
    const conjugate = point(a, -b);
    const radius = Math.hypot(a, b);
    const angle = Math.atan2(b, a);

    svg.replaceChildren();

    const defs = el("defs");
    const arrowZ = el("marker", {
      id: "complex-arrow-z",
      viewBox: "0 0 10 10",
      refX: "8.5",
      refY: "5",
      markerWidth: "7",
      markerHeight: "7",
      orient: "auto-start-reverse",
    });
    arrowZ.appendChild(el("path", { d: "M 0 0 L 10 5 L 0 10 z", fill: "#42677c" }));
    const arrowConjugate = el("marker", {
      id: "complex-arrow-conjugate",
      viewBox: "0 0 10 10",
      refX: "8.5",
      refY: "5",
      markerWidth: "7",
      markerHeight: "7",
      orient: "auto-start-reverse",
    });
    arrowConjugate.appendChild(el("path", { d: "M 0 0 L 10 5 L 0 10 z", fill: "#8b4d73" }));
    defs.append(arrowZ, arrowConjugate);
    svg.appendChild(defs);

    const grid = el("g");
    for (let x = -6; x <= 6; x += 1) {
      const p = point(x, 0);
      addLine(grid, { x: p.x, y: 18 }, { x: p.x, y: height - 18 }, "complex-grid");
      if (x !== 0) {
        grid.appendChild(el("text", {
          x: p.x,
          y: origin.y + 20,
          "text-anchor": "middle",
          class: "complex-label-muted",
        }, String(x)));
      }
    }
    for (let y = -3; y <= 3; y += 1) {
      const p = point(0, y);
      addLine(grid, { x: 24, y: p.y }, { x: width - 24, y: p.y }, "complex-grid");
      if (y !== 0) {
        grid.appendChild(el("text", {
          x: origin.x - 12,
          y: p.y + 5,
          "text-anchor": "end",
          class: "complex-label-muted",
        }, String(y)));
      }
    }
    svg.appendChild(grid);

    const axes = el("g");
    addLine(axes, { x: 24, y: origin.y }, { x: width - 24, y: origin.y }, "complex-axis");
    addLine(axes, { x: origin.x, y: height - 18 }, { x: origin.x, y: 18 }, "complex-axis");
    axes.appendChild(el("text", { x: width - 30, y: origin.y - 10, "text-anchor": "end" }, "Re"));
    axes.appendChild(el("text", { x: origin.x + 12, y: 34 }, "Im"));
    svg.appendChild(axes);

    const geometry = el("g");
    if (radius > 0) {
      geometry.appendChild(el("circle", {
        cx: origin.x,
        cy: origin.y,
        r: radius * scale,
        class: "complex-circle",
      }));

      const arcRadius = 44;
      const start = { x: origin.x + arcRadius, y: origin.y };
      const end = {
        x: origin.x + arcRadius * Math.cos(angle),
        y: origin.y - arcRadius * Math.sin(angle),
      };
      const sweep = angle >= 0 ? 0 : 1;
      geometry.appendChild(el("path", {
        d: `M ${start.x} ${start.y} A ${arcRadius} ${arcRadius} 0 0 ${sweep} ${end.x} ${end.y}`,
        class: "complex-angle",
      }));
      geometry.appendChild(el("text", {
        x: origin.x + 57 * Math.cos(angle / 2),
        y: origin.y - 57 * Math.sin(angle / 2),
        class: "complex-label-muted",
      }, "φ"));
    }

    addLine(geometry, point(a, 0), z, "complex-guide");
    addLine(geometry, origin, z, "complex-z", "complex-arrow-z");
    addLine(geometry, origin, conjugate, "complex-conjugate", "complex-arrow-conjugate");
    geometry.appendChild(el("circle", {
      cx: z.x,
      cy: z.y,
      r: 5.5,
      class: "complex-point complex-point--z",
    }));
    geometry.appendChild(el("circle", {
      cx: conjugate.x,
      cy: conjugate.y,
      r: 5.5,
      class: "complex-point complex-point--conjugate",
    }));
    geometry.appendChild(el("text", {
      x: z.x + 11,
      y: z.y - 10,
      class: "complex-label-z",
    }, "z"));
    geometry.appendChild(el("text", {
      x: conjugate.x + 11,
      y: conjugate.y + 22,
      class: "complex-label-conjugate",
    }, "z̄"));
    svg.appendChild(geometry);

    const degrees = angle * 180 / Math.PI;
    readout.textContent =
      `z = ${complexText(a, b)};  z̄ = ${complexText(a, b, true)};  |z| = ${number(radius)};  φ = ${number(degrees)}°`;
  };

  aInput.addEventListener("input", render);
  bInput.addEventListener("input", render);
  render();
  };

  const initRootPolygon = () => {
    const figure = document.querySelector("[data-root-polygon]");
    if (!figure) return;

    const svg = figure.querySelector("svg");
    const nInput = figure.querySelector("[data-root-n]");
    const phiInput = figure.querySelector("[data-root-phi]");
    const readout = figure.querySelector("[data-root-readout]");
    const NS = "http://www.w3.org/2000/svg";
    const origin = { x: 380, y: 250 };
    const radius = 170;
    const subscripts = ["₀", "₁", "₂", "₃", "₄", "₅", "₆", "₇", "₈", "₉"];

    const el = (name, attrs = {}, text = "") => {
      const node = document.createElementNS(NS, name);
      Object.entries(attrs).forEach(([key, value]) => node.setAttribute(key, value));
      if (text) node.textContent = text;
      return node;
    };

    const pointAt = (angle, distance = radius) => ({
      x: origin.x + distance * Math.cos(angle),
      y: origin.y - distance * Math.sin(angle),
    });

    const render = () => {
      const n = Number(nInput.value);
      const phiDegrees = Number(phiInput.value);
      const phi = phiDegrees * Math.PI / 180;
      const roots = Array.from({ length: n }, (_, k) =>
        pointAt((phi + 2 * Math.PI * k) / n)
      );
      const target = pointAt(phi);

      svg.replaceChildren();

      svg.appendChild(el("line", {
        x1: 65, y1: origin.y, x2: 695, y2: origin.y, class: "complex-axis",
      }));
      svg.appendChild(el("line", {
        x1: origin.x, y1: 45, x2: origin.x, y2: 455, class: "complex-axis",
      }));
      svg.appendChild(el("text", {
        x: 690, y: origin.y - 12, "text-anchor": "end",
      }, "Re"));
      svg.appendChild(el("text", {
        x: origin.x + 12, y: 60,
      }, "Im"));
      svg.appendChild(el("circle", {
        cx: origin.x,
        cy: origin.y,
        r: radius,
        class: "complex-root-circle",
      }));

      roots.forEach((root) => {
        svg.appendChild(el("line", {
          x1: origin.x,
          y1: origin.y,
          x2: root.x,
          y2: root.y,
          class: "complex-root-spoke",
        }));
      });

      svg.appendChild(el("polygon", {
        points: roots.map((root) => `${root.x},${root.y}`).join(" "),
        class: "complex-root-polygon",
      }));

      svg.appendChild(el("line", {
        x1: origin.x,
        y1: origin.y,
        x2: target.x,
        y2: target.y,
        class: "complex-target",
      }));
      svg.appendChild(el("circle", {
        cx: target.x,
        cy: target.y,
        r: 5,
        class: "complex-target-point",
      }));
      const targetLabel = pointAt(phi, radius + 24);
      svg.appendChild(el("text", {
        x: targetLabel.x,
        y: targetLabel.y + 5,
        "text-anchor": Math.cos(phi) < -0.2 ? "end" : Math.cos(phi) > 0.2 ? "start" : "middle",
        class: "complex-target-label",
      }, "z"));

      roots.forEach((root, k) => {
        const angle = (phi + 2 * Math.PI * k) / n;
        const label = pointAt(angle, radius + 27);
        svg.appendChild(el("circle", {
          cx: root.x,
          cy: root.y,
          r: 6,
          class: "complex-root-point",
        }));
        svg.appendChild(el("text", {
          x: label.x,
          y: label.y + 5,
          "text-anchor": Math.cos(angle) < -0.2 ? "end" : Math.cos(angle) > 0.2 ? "start" : "middle",
          class: "complex-root-label",
        }, `w${subscripts[k]}`));
      });

      readout.textContent =
        `wₖ = cis((${phiDegrees}° + 360°·k)/${n}),  k = 0, …, ${n - 1}`;
    };

    nInput.addEventListener("input", render);
    phiInput.addEventListener("input", render);
    render();
  };

  const initComplexMultiplication = () => {
    const figure = document.querySelector("[data-complex-multiplication]");
    if (!figure) return;

    document.body.classList.add("complex-numbers-page");

    const svg = figure.querySelector("svg");
    const modeSelect = figure.querySelector("[data-comp-mult-mode]");
    const zAInput = figure.querySelector("[data-comp-mult-z-a]");
    const zBInput = figure.querySelector("[data-comp-mult-z-b]");
    const wAngleSlider = figure.querySelector("[data-comp-mult-w-angle]");
    const wModulusSlider = figure.querySelector("[data-comp-mult-w-modulus]");
    const angleControl = figure.querySelector("[data-comp-mult-angle-control]");
    const modulusControl = figure.querySelector("[data-comp-mult-modulus-control]");
    const readout = figure.querySelector("[data-comp-mult-readout]");

    if (![svg, modeSelect, zAInput, zBInput, wAngleSlider, wModulusSlider, readout].every(Boolean)) return;

    const NS = "http://www.w3.org/2000/svg";
    const origin = { x: 380, y: 230 };
    const scale = 50;

    const el = (name, attrs = {}, text = "") => {
      const node = document.createElementNS(NS, name);
      Object.entries(attrs).forEach(([key, value]) => node.setAttribute(key, value));
      if (text) node.textContent = text;
      return node;
    };

    const pointAtCoords = (a, b) => ({ x: origin.x + scale * a, y: origin.y - scale * b });
    const pointAtPolar = (modulus, angle) => ({ x: origin.x + scale * modulus * Math.cos(angle), y: origin.y - scale * modulus * Math.sin(angle) });
    const number = (value) => { const r = Math.round(value * 100) / 100; return Object.is(r, -0) ? "0" : String(r); };
    const complexText = (a, b) => { const sign = b < 0 ? "−" : "+"; return `${number(a)} ${sign} ${number(Math.abs(b))}i`; };
    const polarText = (mod, angle) => `${Number(mod.toFixed(2))} ⋅ cis(${Math.round(angle)}°)`;
    const addLine = (g, from, to, cls, mk, op = 1) => { const a = { x1: from.x, y1: from.y, x2: to.x, y2: to.y, class: cls, style: op < 1 ? `opacity:${op}` : "" }; if (mk) a["marker-end"] = `url(#${mk})`; g.appendChild(el("line", a)); };

    const render = () => {
      const allowedModes = new Set(["rotation", "scaling", "combined"]);
      const mode = allowedModes.has(modeSelect.value) ? modeSelect.value : "rotation";
      const angleEnabled = mode !== "scaling";
      const modulusEnabled = mode !== "rotation";
      const clamp = (value, min, max, fallback) =>
        Number.isFinite(value) ? Math.min(max, Math.max(min, value)) : fallback;

      wAngleSlider.disabled = !angleEnabled;
      wModulusSlider.disabled = !modulusEnabled;
      angleControl?.classList.toggle("is-disabled", !angleEnabled);
      modulusControl?.classList.toggle("is-disabled", !modulusEnabled);

      const zA = clamp(Number(zAInput.value), -2, 2, 1);
      const zB = clamp(Number(zBInput.value), -2, 2, 0);
      const wAngleDeg = angleEnabled
        ? clamp(Number(wAngleSlider.value), -180, 180, 0)
        : 0;
      const wMod = modulusEnabled
        ? clamp(Number(wModulusSlider.value), 0, 1.5, 1)
        : 1;
      const wAngleRad = wAngleDeg * Math.PI / 180;

      zAInput.value = String(zA);
      zBInput.value = String(zB);

      const wA = wMod * Math.cos(wAngleRad);
      const wB = wMod * Math.sin(wAngleRad);
      const resultA = zA * wA - zB * wB;
      const resultB = zA * wB + zB * wA;
      const zAngle = Math.atan2(zB, zA);
      const resultAngle = zAngle + wAngleRad;

      const z = pointAtCoords(zA, zB);
      const w = pointAtCoords(wA, wB);
      const result = pointAtCoords(resultA, resultB);

      svg.replaceChildren();

      // Markers
      const defs = el("defs");
      const arrowZ = el("marker", { id: "arrow-z", viewBox: "0 0 10 10", refX: "8.5", refY: "5", markerWidth: "6", markerHeight: "6", orient: "auto-start-reverse" });
      arrowZ.appendChild(el("path", { d: "M 0 0 L 10 5 L 0 10 z", fill: "#42677c" }));
      const arrowW = el("marker", { id: "arrow-w", viewBox: "0 0 10 10", refX: "8.5", refY: "5", markerWidth: "6", markerHeight: "6", orient: "auto-start-reverse" });
      arrowW.appendChild(el("path", { d: "M 0 0 L 10 5 L 0 10 z", fill: "#8b4d73" }));
      const arrowResult = el("marker", { id: "arrow-result", viewBox: "0 0 10 10", refX: "8.5", refY: "5", markerWidth: "5", markerHeight: "5", orient: "auto-start-reverse" });
      arrowResult.appendChild(el("path", { d: "M 0 0 L 10 5 L 0 10 z", fill: "#2e7d32" }));
      defs.append(arrowZ, arrowW, arrowResult);
      svg.appendChild(defs);

      // Grid
      for (let x = -4.5; x <= 4.5; x += 1) {
        const px = pointAtCoords(x, 0);
        addLine(svg, { x: px.x, y: 30 }, { x: px.x, y: 430 }, "complex-grid");
        if (x !== 0) svg.appendChild(el("text", { x: px.x, y: origin.y + 20, "text-anchor": "middle", class: "complex-label-muted" }, String(x)));
      }
      for (let y = -3; y <= 3; y += 1) {
        const py = pointAtCoords(0, y);
        addLine(svg, { x: 30, y: py.y }, { x: 730, y: py.y }, "complex-grid");
        if (y !== 0) svg.appendChild(el("text", { x: origin.x - 12, y: py.y + 5, "text-anchor": "end", class: "complex-label-muted" }, String(y)));
      }

      // Axes
      svg.appendChild(el("line", { x1: origin.x - 370, y1: origin.y, x2: origin.x + 370, y2: origin.y, class: "complex-axis" }));
      svg.appendChild(el("line", { x1: origin.x, y1: origin.y - 210, x2: origin.x, y2: origin.y + 210, class: "complex-axis" }));
      svg.appendChild(el("text", { x: origin.x + 365, y: origin.y - 15, "text-anchor": "end", class: "complex-label-axis" }, "Re"));
      svg.appendChild(el("text", { x: origin.x + 15, y: origin.y - 195, class: "complex-label-axis" }, "Im"));

      // Unit circle for rotation mode
      if (mode === "rotation") {
        svg.appendChild(el("circle", { cx: origin.x, cy: origin.y, r: scale, class: "complex-unit-circle" }));
      }

      // Z vector
      addLine(svg, origin, z, "complex-z", "arrow-z");
      svg.appendChild(el("circle", { cx: z.x, cy: z.y, r: 5, style: "fill:#42677c;stroke:white;stroke-width:2;" }));
      svg.appendChild(el("text", { x: z.x + 22, y: z.y - 8, class: "complex-label-z" }, "z"));

      // W vector
      addLine(svg, origin, w, "complex-w", "arrow-w");
      svg.appendChild(el("circle", { cx: w.x, cy: w.y, r: 5, style: "fill:#8b4d73;stroke:white;stroke-width:2;" }));
      const wL = pointAtPolar(wMod + 0.35, wAngleRad);
      svg.appendChild(el("text", { x: wL.x, y: wL.y + 5, class: "complex-label-w" }, "w"));

      // Result vector
      addLine(svg, origin, result, "complex-result", "arrow-result", 0.8);
      svg.appendChild(el("circle", { cx: result.x, cy: result.y, r: 5, style: "fill:#2e7d32;stroke:white;stroke-width:2;" }));
      svg.appendChild(el("text", { x: result.x + 22, y: result.y - 8, class: "complex-label-result" }, "z·w"));

      // Rotation arc
      if (mode === "rotation" || mode === "combined") {
        if (Math.abs(wAngleRad) > 0.1) {
          const arcRad = 80;
          const la = Math.abs(resultAngle - zAngle) > Math.PI ? 1 : 0;
          const sw = wAngleRad > 0 ? 0 : 1;
          const sx = origin.x + arcRad * Math.cos(zAngle);
          const sy = origin.y - arcRad * Math.sin(zAngle);
          const ex = origin.x + arcRad * Math.cos(resultAngle);
          const ey = origin.y - arcRad * Math.sin(resultAngle);
          const rArc = el("path", { d: `M ${sx} ${sy} A ${arcRad} ${arcRad} 0 ${la} ${sw} ${ex} ${ey}`, fill: "none", stroke: "#8b4d73", "stroke-width": 2.5, "stroke-dasharray": "6 4" });
          svg.appendChild(rArc);
        }
      }

      readout.textContent =
        `z = ${complexText(zA, zB)} | w = ${complexText(wA, wB)} = ${polarText(wMod, wAngleDeg)} | ` +
        `z·w = ${complexText(resultA, resultB)}`;
    };

    if (modeSelect) modeSelect.addEventListener("change", render);
    if (zAInput) zAInput.addEventListener("input", render);
    if (zBInput) zBInput.addEventListener("input", render);
    if (wAngleSlider) wAngleSlider.addEventListener("input", render);
    if (wModulusSlider) wModulusSlider.addEventListener("input", render);
    render();
  };

  const initComplexNumbers = () => {
    initComplexPlane();
    initRootPolygon();
    initComplexMultiplication();
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initComplexNumbers);
  } else {
    initComplexNumbers();
  }
})();
