/* ============================================================
   PART 1 — Jim's visualizations: The Mindset River & The
   Career Express. Wrapped in an IIFE so its variables/
   functions can't collide with Part 2 below. Content otherwise
   byte-for-byte identical to the original d3.js.
   ============================================================ */
(function () {
"use strict";
const STUDENT_FLOW_DATA = [{"academic_year": "1st Year", "ai_knowledge": "High", "career_anxiety": "High", "count": 12}, {"academic_year": "1st Year", "ai_knowledge": "High", "career_anxiety": "Low", "count": 18}, {"academic_year": "1st Year", "ai_knowledge": "High", "career_anxiety": "Medium", "count": 28}, {"academic_year": "1st Year", "ai_knowledge": "High", "career_anxiety": "No Anxiety", "count": 12}, {"academic_year": "1st Year", "ai_knowledge": "Low", "career_anxiety": "High", "count": 31}, {"academic_year": "1st Year", "ai_knowledge": "Low", "career_anxiety": "Low", "count": 53}, {"academic_year": "1st Year", "ai_knowledge": "Low", "career_anxiety": "Medium", "count": 95}, {"academic_year": "1st Year", "ai_knowledge": "Low", "career_anxiety": "No Anxiety", "count": 18}, {"academic_year": "1st Year", "ai_knowledge": "Medium", "career_anxiety": "High", "count": 98}, {"academic_year": "1st Year", "ai_knowledge": "Medium", "career_anxiety": "Low", "count": 177}, {"academic_year": "1st Year", "ai_knowledge": "Medium", "career_anxiety": "Medium", "count": 446}, {"academic_year": "1st Year", "ai_knowledge": "Medium", "career_anxiety": "No Anxiety", "count": 117}, {"academic_year": "2nd Year", "ai_knowledge": "High", "career_anxiety": "High", "count": 11}, {"academic_year": "2nd Year", "ai_knowledge": "High", "career_anxiety": "Low", "count": 12}, {"academic_year": "2nd Year", "ai_knowledge": "High", "career_anxiety": "Medium", "count": 19}, {"academic_year": "2nd Year", "ai_knowledge": "High", "career_anxiety": "No Anxiety", "count": 19}, {"academic_year": "2nd Year", "ai_knowledge": "Low", "career_anxiety": "High", "count": 33}, {"academic_year": "2nd Year", "ai_knowledge": "Low", "career_anxiety": "Low", "count": 41}, {"academic_year": "2nd Year", "ai_knowledge": "Low", "career_anxiety": "Medium", "count": 91}, {"academic_year": "2nd Year", "ai_knowledge": "Low", "career_anxiety": "No Anxiety", "count": 28}, {"academic_year": "2nd Year", "ai_knowledge": "Medium", "career_anxiety": "High", "count": 105}, {"academic_year": "2nd Year", "ai_knowledge": "Medium", "career_anxiety": "Low", "count": 126}, {"academic_year": "2nd Year", "ai_knowledge": "Medium", "career_anxiety": "Medium", "count": 387}, {"academic_year": "2nd Year", "ai_knowledge": "Medium", "career_anxiety": "No Anxiety", "count": 92}, {"academic_year": "3rd Year", "ai_knowledge": "High", "career_anxiety": "High", "count": 10}, {"academic_year": "3rd Year", "ai_knowledge": "High", "career_anxiety": "Low", "count": 11}, {"academic_year": "3rd Year", "ai_knowledge": "High", "career_anxiety": "Medium", "count": 23}, {"academic_year": "3rd Year", "ai_knowledge": "High", "career_anxiety": "No Anxiety", "count": 11}, {"academic_year": "3rd Year", "ai_knowledge": "Low", "career_anxiety": "High", "count": 19}, {"academic_year": "3rd Year", "ai_knowledge": "Low", "career_anxiety": "Low", "count": 22}, {"academic_year": "3rd Year", "ai_knowledge": "Low", "career_anxiety": "Medium", "count": 45}, {"academic_year": "3rd Year", "ai_knowledge": "Low", "career_anxiety": "No Anxiety", "count": 10}, {"academic_year": "3rd Year", "ai_knowledge": "Medium", "career_anxiety": "High", "count": 86}, {"academic_year": "3rd Year", "ai_knowledge": "Medium", "career_anxiety": "Low", "count": 118}, {"academic_year": "3rd Year", "ai_knowledge": "Medium", "career_anxiety": "Medium", "count": 331}, {"academic_year": "3rd Year", "ai_knowledge": "Medium", "career_anxiety": "No Anxiety", "count": 72}, {"academic_year": "4th Year", "ai_knowledge": "High", "career_anxiety": "High", "count": 5}, {"academic_year": "4th Year", "ai_knowledge": "High", "career_anxiety": "Low", "count": 4}, {"academic_year": "4th Year", "ai_knowledge": "High", "career_anxiety": "Medium", "count": 14}, {"academic_year": "4th Year", "ai_knowledge": "High", "career_anxiety": "No Anxiety", "count": 5}, {"academic_year": "4th Year", "ai_knowledge": "Low", "career_anxiety": "High", "count": 2}, {"academic_year": "4th Year", "ai_knowledge": "Low", "career_anxiety": "Low", "count": 9}, {"academic_year": "4th Year", "ai_knowledge": "Low", "career_anxiety": "Medium", "count": 20}, {"academic_year": "4th Year", "ai_knowledge": "Low", "career_anxiety": "No Anxiety", "count": 6}, {"academic_year": "4th Year", "ai_knowledge": "Medium", "career_anxiety": "High", "count": 38}, {"academic_year": "4th Year", "ai_knowledge": "Medium", "career_anxiety": "Low", "count": 48}, {"academic_year": "4th Year", "ai_knowledge": "Medium", "career_anxiety": "Medium", "count": 114}, {"academic_year": "4th Year", "ai_knowledge": "Medium", "career_anxiety": "No Anxiety", "count": 19}];

const FIELD_CHOICE_DATA = [{"career_anxiety": "No Anxiety", "field_category": "AI, Data & Machine Learning", "count": 93, "pct": 22.5}, {"career_anxiety": "No Anxiety", "field_category": "Business, Finance & Management", "count": 47, "pct": 11.4}, {"career_anxiety": "No Anxiety", "field_category": "Creative & Media", "count": 6, "pct": 1.5}, {"career_anxiety": "No Anxiety", "field_category": "Cybersecurity", "count": 28, "pct": 6.8}, {"career_anxiety": "No Anxiety", "field_category": "Education & Academia", "count": 14, "pct": 3.4}, {"career_anxiety": "No Anxiety", "field_category": "Engineering (non-software)", "count": 7, "pct": 1.7}, {"career_anxiety": "No Anxiety", "field_category": "Government & Public Service", "count": 1, "pct": 0.2}, {"career_anxiety": "No Anxiety", "field_category": "Healthcare & Pharmacy", "count": 25, "pct": 6.1}, {"career_anxiety": "No Anxiety", "field_category": "Research & Academia", "count": 71, "pct": 17.2}, {"career_anxiety": "No Anxiety", "field_category": "Technology & Software", "count": 121, "pct": 29.3}, {"career_anxiety": "Low", "field_category": "AI, Data & Machine Learning", "count": 105, "pct": 16.2}, {"career_anxiety": "Low", "field_category": "Business, Finance & Management", "count": 97, "pct": 15.0}, {"career_anxiety": "Low", "field_category": "Creative & Media", "count": 6, "pct": 0.9}, {"career_anxiety": "Low", "field_category": "Cybersecurity", "count": 29, "pct": 4.5}, {"career_anxiety": "Low", "field_category": "Education & Academia", "count": 10, "pct": 1.5}, {"career_anxiety": "Low", "field_category": "Engineering (non-software)", "count": 29, "pct": 4.5}, {"career_anxiety": "Low", "field_category": "Government & Public Service", "count": 4, "pct": 0.6}, {"career_anxiety": "Low", "field_category": "Healthcare & Pharmacy", "count": 31, "pct": 4.8}, {"career_anxiety": "Low", "field_category": "Research & Academia", "count": 158, "pct": 24.4}, {"career_anxiety": "Low", "field_category": "Technology & Software", "count": 179, "pct": 27.6}, {"career_anxiety": "Medium", "field_category": "AI, Data & Machine Learning", "count": 362, "pct": 22.2}, {"career_anxiety": "Medium", "field_category": "Business, Finance & Management", "count": 121, "pct": 7.4}, {"career_anxiety": "Medium", "field_category": "Creative & Media", "count": 25, "pct": 1.5}, {"career_anxiety": "Medium", "field_category": "Cybersecurity", "count": 78, "pct": 4.8}, {"career_anxiety": "Medium", "field_category": "Education & Academia", "count": 55, "pct": 3.4}, {"career_anxiety": "Medium", "field_category": "Engineering (non-software)", "count": 38, "pct": 2.3}, {"career_anxiety": "Medium", "field_category": "Government & Public Service", "count": 12, "pct": 0.7}, {"career_anxiety": "Medium", "field_category": "Healthcare & Pharmacy", "count": 96, "pct": 5.9}, {"career_anxiety": "Medium", "field_category": "Research & Academia", "count": 348, "pct": 21.3}, {"career_anxiety": "Medium", "field_category": "Technology & Software", "count": 499, "pct": 30.5}, {"career_anxiety": "High", "field_category": "AI, Data & Machine Learning", "count": 91, "pct": 19.7}, {"career_anxiety": "High", "field_category": "Business, Finance & Management", "count": 32, "pct": 6.9}, {"career_anxiety": "High", "field_category": "Creative & Media", "count": 6, "pct": 1.3}, {"career_anxiety": "High", "field_category": "Cybersecurity", "count": 22, "pct": 4.8}, {"career_anxiety": "High", "field_category": "Education & Academia", "count": 10, "pct": 2.2}, {"career_anxiety": "High", "field_category": "Engineering (non-software)", "count": 18, "pct": 3.9}, {"career_anxiety": "High", "field_category": "Government & Public Service", "count": 3, "pct": 0.7}, {"career_anxiety": "High", "field_category": "Healthcare & Pharmacy", "count": 15, "pct": 3.3}, {"career_anxiety": "High", "field_category": "Research & Academia", "count": 101, "pct": 21.9}, {"career_anxiety": "High", "field_category": "Technology & Software", "count": 163, "pct": 35.4}];
const FIELD_ORDER = ["Technology & Software", "Research & Academia", "AI, Data & Machine Learning", "Business, Finance & Management", "Healthcare & Pharmacy", "Cybersecurity", "Engineering (non-software)", "Education & Academia", "Creative & Media", "Government & Public Service"];
const FIELD_TOTALS = {"Technology & Software": 962, "Research & Academia": 678, "AI, Data & Machine Learning": 651, "Business, Finance & Management": 297, "Healthcare & Pharmacy": 167, "Cybersecurity": 157, "Engineering (non-software)": 92, "Education & Academia": 89, "Creative & Media": 43, "Government & Public Service": 20};
const ANXIETY_ORDER = ["No Anxiety", "Low", "Medium", "High"];

/* ============================================================
   Strategic Career Adaptation — interaction & visual logic
   ============================================================ */

const tooltip = d3.select("body").append("div")
  .attr("class", "story-tooltip")
  .style("opacity", 0);

function showTip(html, event) {
  tooltip.transition().duration(100).style("opacity", 1);
  tooltip.html(html)
    .style("left", (event.pageX + 14) + "px")
    .style("top", (event.pageY - 24) + "px");
}
function moveTip(event) {
  tooltip.style("left", (event.pageX + 14) + "px").style("top", (event.pageY - 24) + "px");
}
function hideTip() {
  tooltip.transition().duration(180).style("opacity", 0);
}

const ANXIETY_COLORS = {
  "No Anxiety": "#34d399",
  "Low": "#4fb8e6",
  "Medium": "#f2b84b",
  "High": "#fb7185"
};
const KNOWLEDGE_COLORS = {
  "Low": "#4fb8e6",
  "Medium": "#8b93ff",
  "High": "#c084fc"
};

/* ============================================================
   SECTION 1 — HAND CONTROL + MINDSET RIVER
   ============================================================ */

function initHandControl() {
  const svg = d3.select("#hand-svg");
  svg.selectAll("*").remove();

  const fingers = [
    { id: "1st Year", label: "1st", bx: 76, by: 122, tx: 52, ty: 46 },
    { id: "2nd Year", label: "2nd", bx: 92, by: 116, tx: 90, ty: 26 },
    { id: "3rd Year", label: "3rd", bx: 108, by: 118, tx: 122, ty: 38 },
    { id: "4th Year", label: "4th", bx: 122, by: 126, tx: 146, ty: 66 }
  ];

  // decorative thumb
  svg.append("path")
    .attr("class", "thumb-deco")
    .attr("d", "M 62,142 C 46,132 34,118 32,102");

  // palm ("All")
  svg.append("ellipse")
    .attr("class", "palm active")
    .attr("cx", 92).attr("cy", 158).attr("rx", 46).attr("ry", 34)
    .on("click", () => selectCohort("All"));

  svg.append("text")
    .attr("class", "palm-label")
    .attr("x", 92).attr("y", 162)
    .attr("text-anchor", "middle")
    .text("All");

  // fingers
  const fg = svg.selectAll(".finger-group")
    .data(fingers)
    .enter()
    .append("g")
    .attr("class", "finger-group")
    .attr("data-id", d => d.id)
    .style("cursor", "pointer")
    .on("click", (event, d) => selectCohort(d.id));

  fg.append("line")
    .attr("class", "finger-line")
    .attr("x1", d => d.bx).attr("y1", d => d.by)
    .attr("x2", d => d.tx).attr("y2", d => d.ty);

  fg.append("circle")
    .attr("class", "finger-tip")
    .attr("cx", d => d.tx).attr("cy", d => d.ty).attr("r", 9);

  fg.append("text")
    .attr("class", "finger-label")
    .attr("x", d => d.tx)
    .attr("y", d => d.ty - 15)
    .attr("text-anchor", "middle")
    .text(d => d.label);
}

function selectCohort(id) {
  d3.selectAll(".finger-line, .palm").classed("active", false);
  if (id === "All") {
    d3.select(".palm").classed("active", true);
  } else {
    d3.select(`.finger-group[data-id="${id}"] .finger-line`).classed("active", true);
  }
  d3.select("#cohort-tag").text(`Reading: ${id === "All" ? "All Students" : id}`);
  renderMindsetRiver(id);
}

function renderAnxietyLegend() {
  const wrap = d3.select("#anxiety-legend");
  wrap.selectAll("*").remove();
  Object.entries(ANXIETY_COLORS).forEach(([label, color]) => {
    const item = wrap.append("div").attr("class", "legend-item");
    item.append("span").attr("class", "legend-swatch").style("background", color);
    item.append("span").text("Anxiety: " + label);
  });
}

function renderMindsetRiver(yearFilter) {
  const container = d3.select("#vis1-chart");
  container.html("");

  const rows = yearFilter === "All"
    ? STUDENT_FLOW_DATA
    : STUDENT_FLOW_DATA.filter(d => d.academic_year === yearFilter);

  const margin = { top: 18, right: 170, bottom: 18, left: 170 };
  const width = 860 - margin.left - margin.right;
  const height = 300 - margin.top - margin.bottom;

  const svgRoot = container.append("svg")
    .attr("viewBox", `0 0 860 300`)
    .attr("preserveAspectRatio", "xMidYMid meet");

  const defs = svgRoot.append("defs");

  const svg = svgRoot.append("g")
    .attr("transform", `translate(${margin.left},${margin.top})`);

  const nodesMap = new Map();
  function getNode(name, category) {
    const key = `${category}: ${name}`;
    if (!nodesMap.has(key)) {
      nodesMap.set(key, { name: key, rawName: name, category, id: nodesMap.size });
    }
    return nodesMap.get(key).id;
  }

  const linksMap = new Map();
  rows.forEach(d => {
    const source = getNode(d.ai_knowledge || "Medium", "Knowledge");
    const target = getNode(d.career_anxiety || "Medium", "Anxiety");
    const key = `${source}->${target}`;
    if (linksMap.has(key)) linksMap.get(key).value += d.count;
    else linksMap.set(key, { source, target, value: d.count });
  });

  const nodes = Array.from(nodesMap.values());
  const links = Array.from(linksMap.values());

  if (!nodes.length || !links.length) {
    container.append("p").attr("class", "no-data-msg").text("No survey rows for this cohort.");
    return;
  }

  const sankey = d3.sankey()
    .nodeWidth(14)
    .nodePadding(18)
    .extent([[0, 0], [width, height]]);

  const { nodes: gNodes, links: gLinks } = sankey({
    nodes: nodes.map(d => Object.assign({}, d)),
    links: links.map(d => Object.assign({}, d))
  });

  function colorOf(n) {
    return n.category === "Knowledge" ? KNOWLEDGE_COLORS[n.rawName] : ANXIETY_COLORS[n.rawName];
  }

  // per-link gradients: knowledge colour -> anxiety colour
  gLinks.forEach((d, i) => {
    const gid = `grad-${i}`;
    const grad = defs.append("linearGradient")
      .attr("id", gid)
      .attr("gradientUnits", "userSpaceOnUse")
      .attr("x1", d.source.x1).attr("x2", d.target.x0);
    grad.append("stop").attr("offset", "0%").attr("stop-color", colorOf(d.source));
    grad.append("stop").attr("offset", "100%").attr("stop-color", colorOf(d.target));
    d._gid = gid;
  });

  svg.append("g").selectAll("path")
    .data(gLinks)
    .enter()
    .append("path")
    .attr("d", d3.sankeyLinkHorizontal())
    .attr("stroke", d => `url(#${d._gid})`)
    .attr("stroke-width", d => Math.max(2, d.width))
    .attr("class", "sankey-link")
    .style("fill", "none")
    .style("stroke-opacity", 0.4)
    .on("mouseover", function (event, d) {
      d3.select(this).style("stroke-opacity", 0.85);
      showTip(`<strong>${d.value}</strong> students<br>${d.source.rawName} knowledge &rarr; ${d.target.rawName} anxiety`, event);
    })
    .on("mousemove", moveTip)
    .on("mouseout", function () {
      d3.select(this).style("stroke-opacity", 0.4);
      hideTip();
    });

  svg.append("g").selectAll("rect")
    .data(gNodes)
    .enter()
    .append("rect")
    .attr("x", d => d.x0)
    .attr("y", d => d.y0)
    .attr("height", d => Math.max(5, d.y1 - d.y0))
    .attr("width", d => d.x1 - d.x0)
    .attr("rx", 5)
    .attr("fill", d => colorOf(d));

  svg.append("g").selectAll("text")
    .data(gNodes)
    .enter()
    .append("text")
    .attr("x", d => d.x0 < width / 2 ? d.x0 - 12 : d.x1 + 12)
    .attr("y", d => (d.y0 + d.y1) / 2 + 4)
    .attr("text-anchor", d => d.x0 < width / 2 ? "end" : "start")
    .attr("fill", "#f8fafc")
    .style("font-size", "12px")
    .style("font-weight", "500")
    .text(d => `${d.category === "Knowledge" ? "AI knowledge" : "Anxiety"}: ${d.rawName}`);
}

/* ============================================================
   SECTION 2 — LEVER PANEL + CAREER EXPRESS TRAIN
   ============================================================ */

const FIELD_TOTALS_BY_ANXIETY = {"No Anxiety": 413, "Low": 648, "Medium": 1634, "High": 461};

let activeAnxiety = "All";
let currentLocoLen = 0;

function initLeverPanel() {
  const options = ["All", ...ANXIETY_ORDER];

  const track = d3.select("#lever-track");
  track.selectAll("*").remove();

  const levers = track.selectAll(".lever")
    .data(options)
    .enter()
    .append("div")
    .attr("class", d => "lever" + (d === activeAnxiety ? " active" : ""))
    .attr("data-anxiety", d => d)
    .on("click", function (event, d) {
      activeAnxiety = d;
      d3.selectAll(".lever").classed("active", false);
      d3.select(this).classed("active", true);
      d3.select("#route-tag").text("Spotlighting: " + (d === "All" ? "every anxiety level" : d));
      updateAnxietyHighlight(d);
    });

  levers.append("div").attr("class", "lever-slot")
    .append("div").attr("class", "lever-knob");

  levers.append("span").attr("class", "lever-label").text(d => d);
}

function renderRiskLegend() {
  const wrap = d3.select("#risk-legend");
  wrap.selectAll("*").remove();
  ANXIETY_ORDER.forEach(label => {
    const item = wrap.append("div").attr("class", "legend-item");
    item.append("span").attr("class", "legend-swatch").style("background", ANXIETY_COLORS[label]);
    item.append("span").text("Career anxiety: " + label);
  });
}

// height (in px above the rail) for a given within-anxiety-group
// percentage — one shared scale for every wagon, so heights are
// honestly comparable both within a station and across stations
const PCT_MAX = d3.max(FIELD_CHOICE_DATA, d => d.pct);
const wagonHeightScale = d3.scaleLinear().domain([0, PCT_MAX]).range([6, 100]);

// splits a long field name into up to 2 lines at a natural break point
// (comma, ampersand, or opening paren) closest to the middle, so station
// labels stay compact instead of running into their neighbors
function wrapFieldLabel(name) {
  if (name.length <= 14) return [name];
  const breakPoints = [];
  const re = /,\s|\s&\s|\s\(/g;
  let m;
  while ((m = re.exec(name)) !== null) breakPoints.push(m.index + 1);
  if (!breakPoints.length) {
    const mid = Math.floor(name.length / 2);
    const spaceIdx = name.indexOf(" ", mid);
    if (spaceIdx === -1) return [name];
    return [name.slice(0, spaceIdx), name.slice(spaceIdx + 1)];
  }
  const mid = name.length / 2;
  const best = breakPoints.reduce((a, b) => Math.abs(b - mid) < Math.abs(a - mid) ? b : a);
  return [name.slice(0, best).trim(), name.slice(best).trim()];
}

function renderExpress() {
  const container = d3.select("#vis2-chart");
  container.html("");

  const byField = new Map();
  FIELD_ORDER.forEach(field => byField.set(field, []));
  FIELD_CHOICE_DATA.forEach(d => byField.get(d.field_category).push(d));

  const stations = FIELD_ORDER.map(field => ({
    field,
    labelLines: wrapFieldLabel(field),
    total: FIELD_TOTALS[field],
    rows: ANXIETY_ORDER.map(a => byField.get(field).find(d => d.career_anxiety === a))
  }));

  // layout — rendered at a fixed, generous pixel size (not scaled to fit
  // the container) so text and wagons stay readable; .train-canvas
  // scrolls horizontally instead of squeezing everything smaller
  const margin = { top: 0, right: 60, bottom: 0, left: 80 };
  const innerWidth = Math.max(560, stations.length * 165);
  const amplitude = 14;
  const topClearance = 116;
  const bottomClearance = 92;

  const trackY = topClearance + 100 + amplitude;
  const height = trackY + bottomClearance;
  const totalWidth = innerWidth + margin.left + margin.right;

  const svgRoot = container.append("svg")
    .attr("width", totalWidth)
    .attr("height", height)
    .attr("viewBox", `0 0 ${totalWidth} ${height}`);

  const svg = svgRoot.append("g").attr("transform", `translate(${margin.left},${margin.top})`);

  const stepX = stations.length > 1 ? innerWidth / (stations.length - 1 || 1) : innerWidth / 2;
  const points = stations.map((s, i) => {
    const x = stations.length === 1 ? innerWidth / 2 : i * stepX;
    const y = trackY + Math.sin(i * 0.85) * amplitude;
    return { ...s, x, y };
  });

  // rail path
  const line = d3.line().x(d => d.x).y(d => d.y).curve(d3.curveCatmullRom.alpha(0.6));
  const railPoints = [{ x: -40, y: points[0] ? points[0].y : trackY }, ...points, { x: innerWidth + 40, y: points[points.length - 1] ? points[points.length - 1].y : trackY }];

  svg.append("path").attr("class", "rail-bed").attr("d", line(railPoints));
  svg.append("path").attr("class", "rail-line").attr("d", line(railPoints));

  // locomotive at the start of the line
  const locoX = -40, locoY = railPoints[0].y;
  const loco = svg.append("g").attr("class", "loco").attr("transform", `translate(${locoX - 20},${locoY - 30})`);
  loco.append("rect").attr("class", "loco-body").attr("x", 0).attr("y", 6).attr("width", 34).attr("height", 22).attr("rx", 5);
  loco.append("rect").attr("class", "loco-body").attr("x", 6).attr("y", -8).attr("width", 8).attr("height", 16).attr("rx", 2);
  loco.append("circle").attr("class", "loco-wheel").attr("cx", 9).attr("cy", 30).attr("r", 5);
  loco.append("circle").attr("class", "loco-wheel").attr("cx", 25).attr("cy", 30).attr("r", 5);
  loco.append("circle").attr("class", "smoke").attr("cx", 10).attr("cy", -14).attr("r", 3);
  loco.append("circle").attr("class", "smoke").attr("cx", 13).attr("cy", -22).attr("r", 4);
  loco.append("circle").attr("class", "smoke").attr("cx", 17).attr("cy", -31).attr("r", 5);

  // drives the "go to this station" animation: the loco travels along the
  // actual rail curve (not a straight line to the target), by walking the
  // path's length rather than interpolating x/y directly
  const railPathNode = svg.select(".rail-line").node();
  const railTotalLength = railPathNode.getTotalLength();
  currentLocoLen = 0; // fresh render always starts the loco at the beginning of the line

  function lengthAtX(targetX) {
    let lo = 0, hi = railTotalLength;
    for (let i = 0; i < 40; i++) {
      const mid = (lo + hi) / 2;
      if (railPathNode.getPointAtLength(mid).x < targetX) lo = mid; else hi = mid;
    }
    return (lo + hi) / 2;
  }

  function moveLocoTo(targetX) {
    const toLen = lengthAtX(targetX);
    const fromLen = currentLocoLen;
    const duration = Math.min(1400, Math.max(450, Math.abs(toLen - fromLen) * 2.2));

    loco.classed("chugging", true).interrupt();
    loco.transition().duration(duration).ease(d3.easeCubicInOut)
      .tween("move", () => {
        const interp = d3.interpolateNumber(fromLen, toLen);
        return t => {
          const pt = railPathNode.getPointAtLength(interp(t));
          loco.attr("transform", `translate(${pt.x - 20},${pt.y - 30})`);
        };
      })
      .on("end", () => { currentLocoLen = toLen; loco.classed("chugging", false); });
  }

  // stations
  const stationG = svg.selectAll(".station").data(points).enter().append("g").attr("class", "station");

  stationG.append("line")
    .attr("class", "station-post")
    .attr("x1", d => d.x).attr("x2", d => d.x)
    .attr("y1", d => d.y).attr("y2", d => d.y + 16);

  stationG.append("circle")
    .attr("class", "station-dot")
    .attr("cx", d => d.x).attr("cy", d => d.y).attr("r", 7)
    .on("click", function (event, d) {
      const isFocused = d3.select(this).classed("focused");
      d3.selectAll(".station-dot").classed("focused", false);
      d3.selectAll(".station-fade").style("opacity", 1);
      if (!isFocused) {
        d3.select(this).classed("focused", true);
        d3.selectAll(".station-fade").filter(s => s.field !== d.field).style("opacity", 0.15);
      }
      moveLocoTo(d.x);
    });

  const labelG = stationG.append("text")
    .attr("class", "station-label")
    .attr("x", d => d.x).attr("y", d => d.y + 34)
    .attr("text-anchor", "middle");

  labelG.each(function (d) {
    d3.select(this).selectAll("tspan").data(d.labelLines).join("tspan")
      .attr("x", d.x)
      .attr("dy", (l, i) => i === 0 ? 0 : "1.15em")
      .text(l => l);
  });

  stationG.append("text")
    .attr("class", "station-count")
    .attr("x", d => d.x).attr("y", d => d.y + 34 + (d.labelLines.length * 16) + 10)
    .attr("text-anchor", "middle")
    .text(d => `${d.total.toLocaleString()} student${d.total === 1 ? "" : "s"}`);

  // wagons: four side-by-side mini cars per station, one per anxiety level
  const wagonW = 22, wagonGap = 5;
  const clusterW = ANXIETY_ORDER.length * wagonW + (ANXIETY_ORDER.length - 1) * wagonGap;

  stationG.each(function (station) {
    const g = d3.select(this);
    const startX = station.x - clusterW / 2;

    g.append("line")
      .attr("class", "coupling station-fade")
      .attr("x1", station.x).attr("x2", station.x)
      .attr("y1", station.y - 2).attr("y2", station.y - 14);

    station.rows.forEach((row, idx) => {
      if (!row) return;
      const h = wagonHeightScale(row.pct);
      const x = startX + idx * (wagonW + wagonGap);

      g.append("rect")
        .attr("class", "wagon station-fade")
        .attr("data-anxiety", row.career_anxiety)
        .attr("x", x)
        .attr("y", station.y - 14 - h)
        .attr("width", wagonW)
        .attr("height", h)
        .attr("rx", 4)
        .attr("fill", ANXIETY_COLORS[row.career_anxiety])
        .on("mouseover", function (event) {
          showTip(`
            <div style="font-weight:700;color:${ANXIETY_COLORS[row.career_anxiety]};">${row.career_anxiety} anxiety</div>
            <div>Chosen field: <strong>${station.field}</strong></div>
            <div><strong>${row.pct}%</strong> of "${row.career_anxiety}" students chose this field</div>
            <div>${row.count.toLocaleString()} of ${FIELD_TOTALS_BY_ANXIETY[row.career_anxiety].toLocaleString()} students</div>
          `, event);
        })
        .on("mousemove", moveTip)
        .on("mouseout", hideTip);
    });
  });

  loco.raise(); // keep the locomotive drawn above the wagons so it doesn't
                // disappear behind a tall stack when parked at a station
}

function updateAnxietyHighlight(level) {
  d3.selectAll("rect.wagon")
    .transition().duration(200)
    .style("opacity", function () {
      const a = d3.select(this).attr("data-anxiety");
      return (level === "All" || a === level) ? 1 : 0.15;
    });
}

/* ============================================================
   INIT
   ============================================================ */
initHandControl();
renderAnxietyLegend();
renderMindsetRiver("All");

initLeverPanel();
renderRiskLegend();
renderExpress();

})();


/* ============================================================
   PART 2 — teammate's visualizations: bubble chart,
   distribution panel, outcomes panel. Wrapped in its own IIFE
   (both files declare top-level names like 'tooltip', 'state').
   One line changed from the original script.js: the neutral
   quadrant's hard-coded #FFFFFF fill now uses var(--panel) so
   it sits on the dark theme instead of drawing a white box.
   Requires data.json to sit alongside index.html.
   ============================================================ */
(function () {
"use strict";
/* ============================================================
   AI & Automation's Impact on Employment — dashboard logic
   Two connected D3 visualizations:
   1. bubbleChart  — force-directed risk-vs-demand explorer
                     (AI_Impact_on_Jobs_2030.csv, aggregated by
                     Industry x Job_Title)
   2. outcomes panel — trend line + gauge + salary bars + skills
                     bars (global_graduate_employability_index.csv,
                     aggregated by Field_of_Study, linked to viz 1
                     through an Industry -> Field crosswalk)
   ============================================================ */

const INDUSTRY_COLORS = {
  Education:       "#8B5FBF",
  Energy:          "#C9A227",
  Finance:         "#C77B3D",
  Government:      "#3E5C76",
  Healthcare:      "#5C8374",
  Manufacturing:   "#9C6B4E",
  Media:           "#B85C7D",
  Retail:          "#7A8B4C",
  Technology:      "#4C6B8A",
  Transportation:  "#6E7B3D"
};

const state = {
  activeIndustries: new Set(Object.keys(INDUSTRY_COLORS)),
  activeAutomation: new Set(["Low", "Medium", "High"]),
  activeHiring: new Set(["Growing", "Stable", "Declining"]),
  selectedJobTitle: "",
  selectedKey: null
};

let DATA = null;
let simulation = null;

d3.json("data.json").then(data => {
  DATA = data;
  renderHeader(data.meta);
  buildBubbleChart(data.jobs);
  buildLegend(data.jobs);
  buildJobTitleFilter(data.jobs);
  wireControls();
  initOutcomePanels();
  buildDistributionPanel(data.jobs);
  wireSpotlight(data.jobs);

  // seed the outcomes panel with a representative starting selection
  const starter =
    data.jobs.find(d => d.industry === "Technology" && d.job_title === "Software Developer") ||
    data.jobs[0];
  selectJob(starter);
}).catch(err => {
  console.error(err);
  d3.select(".page").insert("div", ":first-child")
    .attr("class", "load-error")
    .html(`
      <strong>Couldn't load data.json.</strong>
      <p>Two things to check:</p>
      <ol>
        <li>You must open this through a local server, not by double-clicking
        <code>index.html</code>. In VS Code, right-click <code>index.html</code>
        → "Open with Live Server" (install that extension first if needed).</li>
        <li><code>data.json</code> must sit in the <strong>same folder</strong> as
        <code>index.html</code>, <code>style.css</code>, and <code>script.js</code> —
        not in a subfolder.</li>
      </ol>
      <p>Open the browser console (F12 → Console tab) to see the exact error if this
      doesn't fix it.</p>
    `);
});

/* ---------------------------------------------------------- */
/* Header text                                                 */
/* ---------------------------------------------------------- */
function renderHeader(meta) {
  d3.select("#projectTitle").text(meta.project_title);
  d3.select("#projectSubtitle").text(meta.subtitle);
  d3.select("#researchQuestion").text(meta.research_question);
  d3.select("#scopeNote").text(meta.scope_note);
  d3.select("#teamProject").text(`Team project — ${meta.team_project}`);
  d3.select("#roleNote").text(meta.role_note);
  d3.select("#companionLink")
    .attr("href", meta.companion_url)
    .text(`Open the companion dashboard — ${meta.companion_name} ↗`);
}

/* ============================================================
   VIZ 1 — force-directed risk vs. demand bubble explorer
   ============================================================ */
const BW = 1080, BH = 720;
const bMargin = { top: 40, right: 24, bottom: 50, left: 56 };
const bInnerW = BW - bMargin.left - bMargin.right;
const bInnerH = BH - bMargin.top - bMargin.bottom;

const xScale = d3.scaleLinear().domain([0, 1]).range([0, bInnerW]);
const yScale = d3.scaleLinear().domain([0, 1]).range([bInnerH, 0]); // high demand at top
let rScale;

function buildBubbleChart(jobs) {
  rScale = d3.scaleSqrt().domain(d3.extent(jobs, d => d.salary)).range([6, 27]);

  const svg = d3.select("#bubbleChart");
  const g = svg.append("g").attr("transform", `translate(${bMargin.left},${bMargin.top})`);

  // ---- quadrant backgrounds ----
  // Note: text captions ("Safe & in-demand" etc.) were removed on purpose —
  // labeling a zone invites reading it as a verdict at a glance, when the
  // real numbers should come from hovering a bubble. The colored tint alone
  // still marks the four zones without asserting a label for any one bubble.
  const quads = [
    { x0: 0, x1: 0.5, y0: 0.5, y1: 1, fill: "var(--safe-soft)" },
    { x0: 0.5, x1: 1, y0: 0.5, y1: 1, fill: "var(--gold-soft)" },
    { x0: 0, x1: 0.5, y0: 0, y1: 0.5, fill: "var(--panel)" },
    { x0: 0.5, x1: 1, y0: 0, y1: 0.5, fill: "var(--risk-soft)" }
  ];
  const qg = g.append("g").attr("class", "quadrants");
  qg.selectAll("rect").data(quads).join("rect")
    .attr("x", d => xScale(d.x0))
    .attr("y", d => yScale(d.y1))
    .attr("width", d => xScale(d.x1) - xScale(d.x0))
    .attr("height", d => yScale(d.y0) - yScale(d.y1))
    .attr("fill", d => d.fill);

  // ---- axes ----
  const xAxis = d3.axisBottom(xScale).ticks(6).tickFormat(d3.format(".0%"));
  const yAxis = d3.axisLeft(yScale).ticks(6).tickFormat(d3.format(".0%"));

  g.append("g").attr("class", "axis x-axis")
    .attr("transform", `translate(0,${bInnerH})`).call(xAxis);
  g.append("g").attr("class", "axis y-axis").call(yAxis);

  g.append("text").attr("class", "axis-title")
    .attr("x", bInnerW / 2).attr("y", bInnerH + 40).attr("text-anchor", "middle")
    .text("Average AI replacement risk →");

  g.append("text").attr("class", "axis-title")
    .attr("transform", "rotate(-90)")
    .attr("x", -bInnerH / 2).attr("y", -40).attr("text-anchor", "middle")
    .text("Average future demand score →");

  // ---- bubbles, positioned by a force simulation ----
  const nodes = jobs.map(d => ({ ...d }));

  const bubbleG = g.append("g").attr("class", "bubbles");

  const circles = bubbleG.selectAll("circle").data(nodes, d => d.industry + "|" + d.job_title)
    .join("circle")
    .attr("class", "bubble")
    .attr("r", d => rScale(d.salary))
    .attr("fill", d => INDUSTRY_COLORS[d.industry])
    .attr("fill-opacity", 0.82)
    .on("mouseenter", (event, d) => showTooltip(event, d))
    .on("mousemove", (event) => moveTooltip(event))
    .on("mouseleave", hideTooltip)
    .on("click", (event, d) => { playBubbleSound(); selectJob(d); })
    .call(dragBehavior());

  simulation = d3.forceSimulation(nodes)
    .force("x", d3.forceX(d => xScale(d.risk)).strength(1))
    .force("y", d3.forceY(d => yScale(d.demand)).strength(1))
    .force("collide", d3.forceCollide(d => rScale(d.salary) + 1.5).iterations(5))
    .alphaDecay(0.012)
    .on("tick", () => {
      // hard-clamp every node to the plot's inner bounds — without this,
      // a bubble fighting for space near a crowded edge can get pushed
      // past the axis and render outside the chart entirely
      nodes.forEach(d => {
        const r = rScale(d.salary);
        if (d.x < r) d.x = r; else if (d.x > bInnerW - r) d.x = bInnerW - r;
        if (d.y < r) d.y = r; else if (d.y > bInnerH - r) d.y = bInnerH - r;
      });
      circles.attr("cx", d => d.x).attr("cy", d => d.y);
    });

  // keep a handle so filters can restyle circles later
  buildBubbleChart._circles = circles;
}

function dragBehavior() {
  function started(event, d) {
    if (!event.active) simulation.alphaTarget(0.15).restart();
    d.fx = d.x; d.fy = d.y;
  }
  function dragged(event, d) {
    const r = rScale(d.salary);
    d.fx = Math.max(r, Math.min(bInnerW - r, event.x));
    d.fy = Math.max(r, Math.min(bInnerH - r, event.y));
  }
  function ended(event, d) {
    if (!event.active) simulation.alphaTarget(0);
    d.fx = null; d.fy = null;
  }
  return d3.drag().on("start", started).on("drag", dragged).on("end", ended);
}

function nodeKey(d) { return d.industry + "|" + d.job_title; }

function selectJob(d) {
  state.selectedKey = nodeKey(d);
  if (buildBubbleChart._circles) {
    buildBubbleChart._circles.classed("selected", n => nodeKey(n) === state.selectedKey);
  }
  updateOutcomes(d);
}

/* ---- tooltip ---- */
const tooltip = d3.select("#tooltip");
function showTooltip(event, d) {
  tooltip.html(`
    <strong>${d.job_title}</strong>
    <div class="tt-row"><span>Industry</span><span>${d.industry}</span></div>
    <div class="tt-row"><span>AI risk</span><span>${(d.risk * 100).toFixed(0)}%</span></div>
    <div class="tt-row"><span>Future demand</span><span>${(d.demand * 100).toFixed(0)}%</span></div>
    <div class="tt-row"><span>Avg. salary</span><span>$${Math.round(d.salary).toLocaleString()}</span></div>
    <div class="tt-row"><span>Hiring trend '26</span><span>${d.hiring_trend}</span></div>
    <div class="tt-row"><span>Automation</span><span>${d.automation_level}</span></div>
    <div class="tt-row"><span>Needs upskilling</span><span>${d.upskill_pct}%</span></div>
  `).attr("hidden", null);
  moveTooltip(event);
}
function moveTooltip(event) {
  tooltip.style("left", (event.clientX + 16) + "px").style("top", (event.clientY + 16) + "px");
}
function hideTooltip() { tooltip.attr("hidden", true); }

/* ============================================================
   Legend + filters (viz 1)
   ============================================================ */
function buildLegend(jobs) {
  const industries = Object.keys(INDUSTRY_COLORS);
  const items = d3.select("#legendList").selectAll("li").data(industries).join("li")
    .on("click", (event, industry) => {
      if (state.activeIndustries.has(industry)) state.activeIndustries.delete(industry);
      else state.activeIndustries.add(industry);
      applyFilters();
    });

  items.append("span").attr("class", "swatch-dot").style("background", d => INDUSTRY_COLORS[d]);
  items.append("span").text(d => d);
}

function buildJobTitleFilter(jobs) {
  const titles = Array.from(new Set(jobs.map(d => d.job_title))).sort();
  d3.select("#jobTitleFilter").selectAll("option.job-title-option")
    .data(titles).join("option")
    .attr("class", "job-title-option")
    .attr("value", d => d)
    .text(d => d);
}

function wireControls() {
  d3.select("#jobTitleFilter").on("change", function () {
    state.selectedJobTitle = this.value;
    applyFilters();
  });

  d3.selectAll(".autoLevel").on("change", function () {
    updateSetFromCheckboxes(".autoLevel", state.activeAutomation);
    applyFilters();
  });

  d3.selectAll(".hireTrend").on("change", function () {
    updateSetFromCheckboxes(".hireTrend", state.activeHiring);
    applyFilters();
  });

  d3.select("#soundToggle").on("change", function () {
    soundEnabled = this.checked;
  });

  d3.select("#resetFilters").on("click", () => {
    state.activeIndustries = new Set(Object.keys(INDUSTRY_COLORS));
    state.activeAutomation = new Set(["Low", "Medium", "High"]);
    state.activeHiring = new Set(["Growing", "Stable", "Declining"]);
    state.selectedJobTitle = "";
    d3.select("#jobTitleFilter").property("value", "");
    d3.selectAll(".autoLevel,.hireTrend").property("checked", true);
    // sound preference is deliberately left alone by "Reset filters" —
    // it's a display setting, not a data filter
    applyFilters();
  });
}

function updateSetFromCheckboxes(selector, targetSet) {
  targetSet.clear();
  d3.selectAll(selector).each(function () {
    if (this.checked) targetSet.add(this.value);
  });
}

function applyFilters() {
  if (!buildBubbleChart._circles) return;

  buildBubbleChart._circles.each(function (d) {
    const visible =
      state.activeIndustries.has(d.industry) &&
      state.activeAutomation.has(d.automation_level) &&
      state.activeHiring.has(d.hiring_trend) &&
      (state.selectedJobTitle === "" || d.job_title === state.selectedJobTitle);

    d3.select(this)
      .classed("filtered-out", !visible)
      .transition().duration(200)
      .style("opacity", visible ? 1 : 0.06);
  });

  d3.select("#legendList").selectAll("li")
    .classed("dimmed", industry => !state.activeIndustries.has(industry));
}

/* ============================================================
   VIZ 2 — connected graduate-outcomes panel
   ============================================================ */

function combineYearlySeries(fields) {
  const byYear = new Map();
  DATA.fieldsByYear.filter(r => fields.includes(r.field)).forEach(r => {
    if (!byYear.has(r.year)) byYear.set(r.year, []);
    byYear.get(r.year).push(r);
  });
  return Array.from(byYear.entries()).sort((a, b) => a[0] - b[0]).map(([year, rows]) => {
    const totalW = d3.sum(rows, r => r.count);
    return {
      year,
      rate12: d3.sum(rows, r => r.employment_rate_12mo * r.count) / totalW,
      rate6: d3.sum(rows, r => r.employment_rate_6mo * r.count) / totalW
    };
  });
}

function combineFieldSummary(fields) {
  const rows = DATA.fieldsSummary.filter(r => fields.includes(r.field));
  const totalW = d3.sum(rows, r => r.count);
  const skillMap = new Map();
  rows.forEach(r => r.top_skills.forEach(s => {
    skillMap.set(s.skill, (skillMap.get(s.skill) || 0) + s.count);
  }));
  const topSkills = Array.from(skillMap, ([skill, count]) => ({ skill, count }))
    .sort((a, b) => b.count - a.count).slice(0, 8);

  return {
    avg_salary: d3.sum(rows, r => r.avg_salary * r.count) / totalW,
    reputation_score: d3.sum(rows, r => r.reputation_score * r.count) / totalW,
    skill_demand_score: d3.sum(rows, r => r.skill_demand_score * r.count) / totalW,
    count: totalW,
    top_skills: topSkills
  };
}

function updateOutcomes(job) {
  const mapping = DATA.crosswalk[job.industry];
  const fields = mapping.fields;
  const series = combineYearlySeries(fields);
  const summary = combineFieldSummary(fields);

  d3.select("#outcomesTitle").text(
    `${fields.join(" & ")} graduates — mapped from the ${job.industry} industry`
  );
  d3.select("#outcomesDesc").text(
    `Selected: ${job.job_title} (${job.industry}). ${mapping.note} Based on ${Math.round(summary.count).toLocaleString()} graduate records.`
  );

  updateTrendChart(series);
  updateGaugeChart(summary.reputation_score);
  updateSalaryCompare(summary.avg_salary, job.salary, job.avg_experience);
  updateSkillsChart(summary.top_skills, job.top_skills);
}

/* ---- trend line chart ---- */
const TW = 520, TH = 280;
const tMargin = { top: 14, right: 14, bottom: 30, left: 38 };
const tInnerW = TW - tMargin.left - tMargin.right;
const tInnerH = TH - tMargin.top - tMargin.bottom;
let tG, tX, tY, tXAxisG, tYAxisG, path12, path6, area12;

function initOutcomePanels() {
  const svg = d3.select("#trendChart");
  tG = svg.append("g").attr("transform", `translate(${tMargin.left},${tMargin.top})`);

  tX = d3.scaleLinear().range([0, tInnerW]);
  tY = d3.scaleLinear().range([tInnerH, 0]);

  tXAxisG = tG.append("g").attr("class", "axis").attr("transform", `translate(0,${tInnerH})`);
  tYAxisG = tG.append("g").attr("class", "axis");

  area12 = tG.append("path").attr("fill", "var(--safe-soft)").attr("opacity", 0.7);
  path6 = tG.append("path").attr("fill", "none").attr("stroke", "var(--gold)")
    .attr("stroke-width", 2).attr("stroke-dasharray", "4 4");
  path12 = tG.append("path").attr("fill", "none").attr("stroke", "var(--ink)").attr("stroke-width", 2.4);

  initGaugeGeometry();
}

function updateTrendChart(series) {
  tX.domain(d3.extent(series, d => d.year));
  const yMin = Math.max(0, d3.min(series, d => Math.min(d.rate12, d.rate6)) - 8);
  tY.domain([yMin, 100]);

  tXAxisG.transition().duration(500).call(d3.axisBottom(tX).ticks(6).tickFormat(d3.format("d")));
  tYAxisG.transition().duration(500).call(d3.axisLeft(tY).ticks(5).tickFormat(d => d + "%"));

  const line12 = d3.line().x(d => tX(d.year)).y(d => tY(d.rate12)).curve(d3.curveMonotoneX);
  const line6 = d3.line().x(d => tX(d.year)).y(d => tY(d.rate6)).curve(d3.curveMonotoneX);
  const areaGen = d3.area().x(d => tX(d.year)).y0(tInnerH).y1(d => tY(d.rate12)).curve(d3.curveMonotoneX);

  area12.transition().duration(600).attr("d", areaGen(series));
  path12.transition().duration(600).attr("d", line12(series));
  path6.transition().duration(600).attr("d", line6(series));
}

/* ---- reputation gauge ---- */
const GW = 260, GH = 170;
const gaugeState = { value: 0 };
let gaugePath, gaugeText, gaugeArcGen, gaugeAngle;

function initGaugeGeometry() {
  const svg = d3.select("#gaugeChart");
  const gg = svg.append("g").attr("transform", `translate(${GW / 2},${GH - 20})`);

  gaugeAngle = d3.scaleLinear().domain([0, 100]).range([-Math.PI / 2, Math.PI / 2]);
  gaugeArcGen = d3.arc().innerRadius(58).outerRadius(80).startAngle(-Math.PI / 2);

  gg.append("path")
    .attr("d", gaugeArcGen({ endAngle: Math.PI / 2 }))
    .attr("fill", "var(--paper)").attr("stroke", "var(--line)");

  gaugePath = gg.append("path").attr("fill", "var(--gold)");

  gaugeText = gg.append("text")
    .attr("class", "gauge-value")
    .attr("text-anchor", "middle")
    .attr("y", -6)
    .attr("font-size", "30px")
    .attr("fill", "var(--ink)");

  gg.append("text").attr("text-anchor", "middle").attr("y", 14)
    .attr("font-size", "13px").attr("fill", "var(--ink-soft)")
    .text("out of 100");
}

function updateGaugeChart(value) {
  const rounded = Math.round(value);
  const color = rounded >= 70 ? "var(--safe)" : rounded >= 50 ? "var(--gold)" : "var(--risk)";
  gaugePath.attr("fill", color);

  const prev = gaugeState.value;
  gaugeState.value = value;

  d3.select(gaugePath.node()).transition().duration(700)
    .attrTween("d", () => {
      const interp = d3.interpolate(prev, value);
      return t => gaugeArcGen({ endAngle: gaugeAngle(interp(t)) });
    });

  gaugeText.transition().duration(700).tween("text", function () {
    const interp = d3.interpolate(prev, value);
    return t => { this.textContent = interp(t).toFixed(0); };
  });
}

/* ---- salary comparison (HTML bars) ---- */
function updateSalaryCompare(entrySalary, currentSalary, avgExperience) {
  const maxVal = Math.max(entrySalary, currentSalary) * 1.15;
  const fmt = v => "$" + Math.round(v).toLocaleString();
  const delta = ((currentSalary - entrySalary) / entrySalary) * 100;
  const deltaText = delta >= 0
    ? `+${delta.toFixed(0)}% by ~${avgExperience} yrs of industry experience`
    : `${delta.toFixed(0)}% vs. entry-level, at ~${avgExperience} yrs of industry experience`;

  const container = d3.select("#salaryCompare");
  container.html(`
    <div class="row">
      <div class="row-label">Entry-level (graduate, mapped fields)</div>
      <div class="bar-track"><div class="bar-fill" style="width:${(entrySalary / maxVal) * 100}%"></div></div>
      <div class="bar-value">${fmt(entrySalary)}</div>
    </div>
    <div class="row">
      <div class="row-label">Current, this job (avg. experienced employee)</div>
      <div class="bar-track"><div class="bar-fill current" style="width:${(currentSalary / maxVal) * 100}%"></div></div>
      <div class="bar-value">${fmt(currentSalary)}</div>
    </div>
    <div class="delta">${deltaText}</div>
  `);
}

/* ---- skills alignment chart ---- */
const SW = 700, SH = 300;
const sMargin = { top: 8, right: 60, bottom: 8, left: 170 };
const sInnerW = SW - sMargin.left - sMargin.right;
const sInnerH = SH - sMargin.top - sMargin.bottom;
let sG;

function initSkillsGeometry() {
  const svg = d3.select("#skillsChart");
  sG = svg.append("g").attr("transform", `translate(${sMargin.left},${sMargin.top})`);
}
initSkillsGeometry();

function updateSkillsChart(gradSkills, jobSkills) {
  const jobSkillNames = new Set(jobSkills.map(s => s.skill.toLowerCase()));

  const y = d3.scaleBand().domain(gradSkills.map(d => d.skill)).range([0, sInnerH]).padding(0.28);
  const x = d3.scaleLinear().domain([0, d3.max(gradSkills, d => d.count)]).range([0, sInnerW]);

  const rows = sG.selectAll("g.skill-row").data(gradSkills, d => d.skill);

  const rowsEnter = rows.enter().append("g").attr("class", "skill-row");
  rowsEnter.append("rect");
  rowsEnter.append("text").attr("class", "skill-label");
  rowsEnter.append("text").attr("class", "skill-count");

  const rowsMerged = rowsEnter.merge(rows);

  rowsMerged.attr("transform", d => `translate(0,${y(d.skill)})`);

  rowsMerged.select("rect")
    .transition().duration(500)
    .attr("width", d => x(d.count))
    .attr("height", y.bandwidth())
    .attr("fill", d => jobSkillNames.has(d.skill.toLowerCase()) ? "var(--gold)" : "var(--ink-soft)");

  rowsMerged.select("text.skill-label")
    .attr("x", -10).attr("y", y.bandwidth() / 2).attr("dy", "0.35em")
    .attr("text-anchor", "end").attr("font-size", "15px").attr("fill", "var(--ink)")
    .text(d => (jobSkillNames.has(d.skill.toLowerCase()) ? "★ " : "") + d.skill);

  rowsMerged.select("text.skill-count")
    .attr("x", d => x(d.count) + 8).attr("y", y.bandwidth() / 2).attr("dy", "0.35em")
    .attr("font-size", "13px").attr("font-family", "var(--font-mono)").attr("fill", "var(--ink-soft)")
    .text(d => d.count);

  rows.exit().remove();
}

/* ============================================================
   DISTRIBUTION / INSIGHT PANEL — the same 200 points, shown as
   two histograms sharing the bubble chart's exact horizontal
   scale, so the columns line up visually between the two panels.
   This is the "interesting finding" chart: it makes visible how
   narrowly this whole dataset clusters, which the bubble chart
   alone doesn't communicate on its own.
   ============================================================ */
function buildDistributionPanel(jobs) {
  const dMargin = { top: 26, right: bMargin.right, bottom: 40, left: bMargin.left };
  const dInnerW = BW - dMargin.left - dMargin.right; // == bInnerW, so columns align with the bubble chart above
  const rowH = 90, rowBlockH = 140; // bars + baseline + midline + bracket + extent labels, with room to spare

  const svg = d3.select("#distributionChart");
  const g = svg.append("g").attr("transform", `translate(${dMargin.left},${dMargin.top})`);

  const metrics = [
    { key: "risk", label: "Automation risk", color: "var(--risk)" },
    { key: "demand", label: "Future demand", color: "var(--safe)" }
  ];

  // reuses the SAME [0,1] domain and inner width as the bubble chart's
  // xScale, so a job's column here sits directly below its column above
  const xScaleD = d3.scaleLinear().domain([0, 1]).range([0, dInnerW]);
  const histGen = d3.bin().domain([0, 1]).thresholds(20);
  const fmtPct = d3.format(".0%");

  metrics.forEach((m, i) => {
    const rowY = i * rowBlockH;
    const values = jobs.map(d => d[m.key]);
    const bins = histGen(values);
    const maxCount = d3.max(bins, b => b.length);
    const yScaleD = d3.scaleLinear().domain([0, maxCount]).range([rowH, 0]);
    const [lo, hi] = d3.extent(values);

    const rowG = g.append("g").attr("transform", `translate(0,${rowY})`);

    rowG.append("text").attr("class", "dist-row-label")
      .attr("x", 0).attr("y", -9).text(m.label);

    // full 0-100% baseline, so the narrow data band reads against the
    // whole possible range, not just its own axis
    rowG.append("line").attr("class", "dist-baseline")
      .attr("x1", 0).attr("x2", dInnerW).attr("y1", rowH + 0.5).attr("y2", rowH + 0.5);

    rowG.selectAll("rect.dist-bar").data(bins).join("rect")
      .attr("class", "dist-bar")
      .attr("x", b => xScaleD(b.x0) + 1)
      .attr("width", b => Math.max(0, xScaleD(b.x1) - xScaleD(b.x0) - 2))
      .attr("y", b => yScaleD(b.length))
      .attr("height", b => rowH - yScaleD(b.length))
      .attr("fill", m.color);

    // 50% reference — the same split used for the bubble chart's quadrants
    rowG.append("line").attr("class", "dist-midline")
      .attr("x1", xScaleD(0.5)).attr("x2", xScaleD(0.5))
      .attr("y1", -4).attr("y2", rowH + 4);
    rowG.append("text").attr("class", "dist-midline-label")
      .attr("x", xScaleD(0.5)).attr("y", -9).attr("text-anchor", "middle")
      .text("50%");

    // bracket + labels marking exactly where this metric's real range sits
    const bracketY = rowH + 22;
    rowG.append("line").attr("class", "dist-bracket")
      .attr("x1", xScaleD(lo)).attr("x2", xScaleD(hi)).attr("y1", bracketY).attr("y2", bracketY);
    rowG.append("line").attr("class", "dist-bracket")
      .attr("x1", xScaleD(lo)).attr("x2", xScaleD(lo)).attr("y1", bracketY - 4).attr("y2", bracketY + 4);
    rowG.append("line").attr("class", "dist-bracket")
      .attr("x1", xScaleD(hi)).attr("x2", xScaleD(hi)).attr("y1", bracketY - 4).attr("y2", bracketY + 4);
    rowG.append("text").attr("class", "dist-extent-label")
      .attr("x", xScaleD(lo)).attr("y", bracketY + 18).attr("text-anchor", "middle")
      .text(fmtPct(lo));
    rowG.append("text").attr("class", "dist-extent-label")
      .attr("x", xScaleD(hi)).attr("y", bracketY + 18).attr("text-anchor", "middle")
      .text(fmtPct(hi));
  });

  // one shared 0-100% axis for both rows, placed below everything
  const sharedAxisY = metrics.length * rowBlockH - 20;
  const axis = d3.axisBottom(xScaleD).ticks(6).tickFormat(fmtPct).tickSize(4);
  g.append("g").attr("class", "axis dist-axis")
    .attr("transform", `translate(0,${sharedAxisY})`).call(axis);

  const riskExtent = d3.extent(jobs, d => d.risk);
  const demandExtent = d3.extent(jobs, d => d.demand);
  d3.select("#distributionDesc").html(
    `Every one of the 200 job \u00d7 industry combinations in this dataset falls between ` +
    `<strong>${fmtPct(riskExtent[0])}</strong> and <strong>${fmtPct(riskExtent[1])}</strong> automation risk, and ` +
    `<strong>${fmtPct(demandExtent[0])}</strong> to <strong>${fmtPct(demandExtent[1])}</strong> future demand. ` +
    `None reach the extremes of "perfectly safe" or "guaranteed obsolete" \u2014 the entire global sample sits in a ` +
    `moderate middle band. That's worth weighing against any more alarmist automation narrative.`
  );
}

/* ============================================================
   SPOTLIGHT BUTTON — surfaces one specific, reproducibly-chosen
   "most interesting" job: the strongest case of BOTH high risk
   AND high demand at once (highest risk x demand product among
   jobs where both exceed 50%). Not a random or hardcoded pick —
   recomputed from whatever data is loaded.
   ============================================================ */
function computeSpotlightJob(jobs) {
  const paradoxPool = jobs.filter(j => j.risk > 0.5 && j.demand > 0.5);
  const pool = paradoxPool.length ? paradoxPool : jobs;
  return pool.reduce((best, j) => (j.risk * j.demand > best.risk * best.demand ? j : best), pool[0]);
}

function wireSpotlight(jobs) {
  const spotlightJob = computeSpotlightJob(jobs);

  d3.select("#spotlightBtn").on("click", () => {
    playBubbleSound();
    selectJob(spotlightJob);
    showSpotlightInfo(spotlightJob);
    pulseBubble(spotlightJob);
  });
}

function showSpotlightInfo(job) {
  d3.select("#spotlightInfo").attr("hidden", null).html(`
    <h4>${job.job_title} <span style="color:var(--ink-soft); font-weight:400;">— ${job.industry}</span></h4>
    <p>${(job.risk * 100).toFixed(0)}% automation risk is among the highest in this dataset \u2014 yet
    ${(job.demand * 100).toFixed(0)}% future demand puts it deep in the "disrupted, still in demand" zone.
    High exposure to automation doesn't necessarily mean declining relevance.</p>
    <div class="spotlight-stats">
      <div><span>AI risk</span><span>${(job.risk * 100).toFixed(0)}%</span></div>
      <div><span>Future demand</span><span>${(job.demand * 100).toFixed(0)}%</span></div>
      <div><span>Avg. salary</span><span>$${Math.round(job.salary).toLocaleString()}</span></div>
      <div><span>Hiring trend '26</span><span>${job.hiring_trend}</span></div>
    </div>
  `);
}

function pulseBubble(job) {
  if (!buildBubbleChart._circles) return;
  const key = nodeKey(job);
  const target = buildBubbleChart._circles.filter(d => nodeKey(d) === key);
  if (target.empty()) return;
  const node = target.node();
  const cx = +node.getAttribute("cx"), cy = +node.getAttribute("cy"), r = +node.getAttribute("r");
  const parent = d3.select(node.parentNode);

  const ring = parent.append("circle")
    .attr("class", "pulse-ring")
    .attr("cx", cx).attr("cy", cy).attr("r", r)
    .attr("opacity", 1);
  ring.transition().duration(1000).ease(d3.easeCubicOut)
    .attr("r", r * 3.2).attr("opacity", 0)
    .remove();
}

/* ============================================================
   BUBBLE CLICK SOUND — a tiny synthesized "pop" via the Web
   Audio API, so there's no audio file to host or load. Runs
   entirely client-side; fails silently if audio is unavailable
   or blocked, so a sound issue never breaks clicking a bubble.
   ============================================================ */
let soundEnabled = true;
let audioCtx = null;

function playBubbleSound() {
  if (!soundEnabled) return;
  try {
    if (!audioCtx) audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    if (audioCtx.state === "suspended") audioCtx.resume();

    const now = audioCtx.currentTime;
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    osc.type = "sine";
    osc.frequency.setValueAtTime(700, now);
    osc.frequency.exponentialRampToValueAtTime(220, now + 0.13);
    gain.gain.setValueAtTime(0.0001, now);
    gain.gain.exponentialRampToValueAtTime(0.18, now + 0.008);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.16);
    osc.connect(gain).connect(audioCtx.destination);
    osc.start(now);
    osc.stop(now + 0.18);
  } catch (e) {
    // Web Audio unavailable or blocked by the browser — ignore silently
  }
}

})();
