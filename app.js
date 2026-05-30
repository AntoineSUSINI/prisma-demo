const data = window.PRISMA_DEMO_DATA;
const portfolios = data.portfolios;
const dataset = window.PRISMA_DATASET;

const fmtEUR = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "EUR",
  maximumFractionDigits: 0,
});

const fmtPct = new Intl.NumberFormat("en-US", {
  maximumFractionDigits: 2,
});

const fmtNum = new Intl.NumberFormat("en-US", {
  maximumFractionDigits: 0,
});

const fmtRatio = new Intl.NumberFormat("en-US", {
  maximumFractionDigits: 2,
});

let currentIndex = 0;
let timer = null;
let datasetSort = { key: "rows", dir: "desc" };

const workedExamples = {
  future: {
    title: "P029 - Directional future, 2023-05-19",
    badge: "-3x FSTX 2023-06-16",
    step1: `
      The API gives the listed instrument, maturity and net long/short balance.
      Here the position is a short STOXX Europe 600 future in liquidation group
      <code>ETD-INDEX</code>.
    `,
    proxyIntro: `
      Historical returns are volatility-filtered, converted into MPOR spot scenarios,
      then the future is repriced in every scenario.
    `,
    proxyFormula: `r* = r × clip(current_EWMA_vol / long_run_vol, 0.5, 2.0)
S_s = S0 × exp(sum(r*) over MPOR)
F_s = S_s × exp((r - q) × T)
V_s = quantity × multiplier × F_s
loss_s = -(V_s - V0)
proxy_IM = max(Q99(loss), Q99.9(loss), 0.1% × notional, add-ons)`,
    proxyApplied: `Applied to P029: <strong>proxy margin = 5,617.76 €</strong>.`,
    proxyNote: `
      For options, the scenario repricing step uses Black-Scholes/Black-76 with the
      LSEG volatility surface: <code>option_value_s = BS(S_s, K, T, r, q, σ(K,T))</code>.
    `,
    mlApplied: `
      P029 factor: <strong>1.2995</strong>, so
      <strong>5,617.76 € × 1.2995 = 7,300.20 €</strong>.
    `,
    portfolioApplied: `
      P029 has one leg, so the retained robust factor is <strong>1.2995</strong>. The
      <strong>final robust hybrid = 7,300.20 €</strong>.
    `,
    compare: {
      proxy: "5,617.76 €",
      hybrid: "7,300.20 €",
      api: "6,442.84 €",
      error: "13.31%",
    },
    compareNote: `
      This example is intentionally directional: it isolates the proxy and calibration
      mechanics. Multi-leg portfolios use the same formulas, but netting can materially
      reduce the portfolio proxy before the final ML factor is applied.
    `,
  },
  options: {
    title: "P024 - Short option straddle, 2022-09-14",
    badge: "-50x ALV 140C | -50x ALV 140P",
    step1: `
      The API gives two short Allianz option positions with the same maturity and strike:
      a short call and a short put. This is a short straddle, so both large upward and
      downward moves can create losses.
    `,
    proxyIntro: `
      The same MPOR scenarios are generated on the Allianz underlying, but each option
      is repriced under the scenario using the LSEG volatility surface before the two
      option P&amp;Ls are aggregated.
    `,
    proxyFormula: `r* = r × clip(current_EWMA_vol / long_run_vol, 0.5, 2.0)
S_s = S0 × exp(sum(r*) over MPOR)
C_s = BS_call(S_s, K, T, r, q, σ(K,T))
P_s = BS_put(S_s, K, T, r, q, σ(K,T))
V_s = sum(quantity_i × multiplier × option_value_i,s)
loss_s = -(V_s - V0)
proxy_IM = max(Q99(loss), Q99.9(loss), 0.1% × notional, add-ons)`,
    proxyApplied: `Applied to P024: <strong>portfolio proxy margin = 106,033.79 €</strong>.`,
    proxyNote: `
      The short call loses in upside scenarios and the short put loses in downside scenarios.
      Calculating both legs together captures the straddle risk profile directly in scenario P&amp;L.
    `,
    mlApplied: `
      Each option receives a guarded ML correction. After portfolio aggregation, the retained
      robust factor is <strong>0.9279</strong>, reducing the proxy toward observed PRISMA labels.
    `,
    portfolioApplied: `
      P024 has two option legs, and their scenario P&amp;Ls are already netted inside
      <code>portfolio_proxy</code>. The retained robust factor is <strong>0.9279</strong>, giving
      <strong>final robust hybrid = 98,386.83 €</strong>.
    `,
    compare: {
      proxy: "106,033.79 €",
      hybrid: "98,386.83 €",
      api: "90,876.79 €",
      error: "8.26%",
    },
    compareNote: `
      This example shows the option path: Black-Scholes scenario repricing, aggregation of
      call and put losses, netting at portfolio level, and then the final robust ML correction.
    `,
  },
};

const els = {
  count: document.getElementById("summary-count"),
  select: document.getElementById("portfolio-select"),
  speed: document.getElementById("speed-range"),
  play: document.getElementById("play-btn"),
  pause: document.getElementById("pause-btn"),
  reset: document.getElementById("reset-btn"),
  progress: document.getElementById("progress-bar"),
  date: document.getElementById("portfolio-date"),
  name: document.getElementById("portfolio-name"),
  template: document.getElementById("portfolio-template"),
  positions: document.getElementById("portfolio-positions"),
  proxy: document.getElementById("metric-proxy"),
  hybrid: document.getElementById("metric-hybrid"),
  api: document.getElementById("metric-api"),
  error: document.getElementById("metric-error"),
  errorMetric: document.querySelector(".metric.accent"),
  barProxy: document.getElementById("bar-proxy"),
  barHybrid: document.getElementById("bar-hybrid"),
  barApi: document.getElementById("bar-api"),
  barProxyLabel: document.getElementById("bar-proxy-label"),
  barHybridLabel: document.getElementById("bar-hybrid-label"),
  barApiLabel: document.getElementById("bar-api-label"),
  scoreMae: document.getElementById("score-mae"),
  scoreMedian: document.getElementById("score-median"),
  scoreP90: document.getElementById("score-p90"),
  scoreMax: document.getElementById("score-max"),
  templateChart: document.getElementById("template-chart"),
  featureTags: document.getElementById("feature-tags"),
  featureDetail: document.getElementById("feature-detail"),
  datasetRows: document.getElementById("dataset-rows"),
  datasetProducts: document.getElementById("dataset-products"),
  datasetUnderlyings: document.getElementById("dataset-underlyings"),
  datasetDates: document.getElementById("dataset-dates"),
  datasetSearch: document.getElementById("dataset-search"),
  datasetAssetFilter: document.getElementById("dataset-asset-filter"),
  datasetInstrumentFilter: document.getElementById("dataset-instrument-filter"),
  datasetTable: document.getElementById("dataset-table"),
  datasetTableBody: document.querySelector("#dataset-table tbody"),
  workedTabs: document.getElementById("worked-example-tabs"),
  workedTitle: document.getElementById("worked-title"),
  workedBadge: document.getElementById("worked-badge"),
  workedStep1: document.getElementById("worked-step1"),
  workedProxyIntro: document.getElementById("worked-proxy-intro"),
  workedProxyFormula: document.getElementById("worked-proxy-formula"),
  workedProxyApplied: document.getElementById("worked-proxy-applied"),
  workedProxyNote: document.getElementById("worked-proxy-note"),
  workedMlApplied: document.getElementById("worked-ml-applied"),
  workedPortfolioApplied: document.getElementById("worked-portfolio-applied"),
  workedCompareProxy: document.getElementById("worked-compare-proxy"),
  workedCompareHybrid: document.getElementById("worked-compare-hybrid"),
  workedCompareApi: document.getElementById("worked-compare-api"),
  workedCompareError: document.getElementById("worked-compare-error"),
  workedCompareNote: document.getElementById("worked-compare-note"),
};

function pct(value) {
  return `${fmtPct.format(value)}%`;
}

function money(value) {
  return fmtEUR.format(value);
}

function number(value) {
  return fmtNum.format(value);
}

function ratio(value) {
  return `${fmtRatio.format(value)}x`;
}

function setBar(el, value, max) {
  const width = max > 0 ? Math.max(1, Math.min(100, (value / max) * 100)) : 0;
  el.style.width = `${width}%`;
}

function renderPortfolio(index) {
  currentIndex = Math.max(0, Math.min(portfolios.length - 1, index));
  const p = portfolios[currentIndex];
  const max = Math.max(p.proxy, p.hybrid, p.api);
  const progress = ((currentIndex + 1) / portfolios.length) * 100;

  els.select.value = String(currentIndex);
  els.progress.style.width = `${progress}%`;
  els.date.textContent = p.date;
  els.name.textContent = `${p.id} - ${currentIndex + 1}/${portfolios.length}`;
  els.template.textContent = p.template.replaceAll("_", " ");
  els.positions.textContent = p.positions;

  els.proxy.textContent = money(p.proxy);
  els.hybrid.textContent = money(p.hybrid);
  els.api.textContent = money(p.api);
  els.error.textContent = pct(p.absError);

  els.errorMetric.classList.toggle("warn", p.absError >= 30 && p.absError < 60);
  els.errorMetric.classList.toggle("bad", p.absError >= 60);

  setBar(els.barProxy, p.proxy, max);
  setBar(els.barHybrid, p.hybrid, max);
  setBar(els.barApi, p.api, max);
  els.barProxyLabel.textContent = money(p.proxy);
  els.barHybridLabel.textContent = money(p.hybrid);
  els.barApiLabel.textContent = money(p.api);
}

function renderSummary() {
  els.count.textContent = String(data.summary.count);
  els.scoreMae.textContent = pct(data.summary.mae);
  els.scoreMedian.textContent = pct(data.summary.median);
  els.scoreP90.textContent = pct(data.summary.p90);
  els.scoreMax.textContent = pct(data.summary.max);

  portfolios.forEach((p, idx) => {
    const opt = document.createElement("option");
    opt.value = String(idx);
    opt.textContent = `${p.id} | ${p.date} | ${p.template.replaceAll("_", " ")}`;
    els.select.appendChild(opt);
  });

  const maxTemplate = Math.max(...data.byTemplate.map((x) => x.mae));
  data.byTemplate.forEach((row) => {
    const item = document.createElement("div");
    item.className = "chart-item";
    item.innerHTML = `
      <span>${row.template.replaceAll("_", " ")} (${row.count})</span>
      <div><i style="width:${Math.max(2, (row.mae / maxTemplate) * 100)}%"></i></div>
      <b>${pct(row.mae)}</b>
    `;
    els.templateChart.appendChild(item);
  });

  renderFeatureFamilies();
  renderDataset();
  renderWorkedExample("future");
}

function renderFeatureFamilies() {
  if (!data.featureFamilies || !els.featureTags || !els.featureDetail) return;

  data.featureFamilies.forEach((family, idx) => {
    const button = document.createElement("button");
    button.type = "button";
    button.textContent = family.label;
    button.dataset.featureId = family.id;
    button.addEventListener("click", () => renderFeatureDetail(family.id));
    els.featureTags.appendChild(button);
    if (idx === 0) button.classList.add("active");
  });

  renderFeatureDetail(data.featureFamilies[0].id);
}

function renderFeatureDetail(featureId) {
  const family = data.featureFamilies.find((x) => x.id === featureId);
  if (!family) return;

  els.featureTags.querySelectorAll("button").forEach((button) => {
    button.classList.toggle("active", button.dataset.featureId === featureId);
  });

  const stats = family.stats.map((stat) => `
    <div>
      <span>${stat.label}</span>
      <strong>${stat.value}</strong>
    </div>
  `).join("");

  const notes = (family.notes || []).map((note) => `<span>${note}</span>`).join("");

  els.featureDetail.innerHTML = `
    <div>
      <h3>${family.label}</h3>
      <p>${family.description}</p>
    </div>
    <div class="feature-stat-grid">${stats}</div>
    ${notes ? `<div class="feature-notes">${notes}</div>` : ""}
  `;
}

function renderWorkedExample(exampleId) {
  const example = workedExamples[exampleId] || workedExamples.future;
  if (!els.workedTitle || !els.workedTabs) return;

  els.workedTitle.textContent = example.title;
  els.workedBadge.textContent = example.badge;
  els.workedStep1.innerHTML = example.step1;
  els.workedProxyIntro.innerHTML = example.proxyIntro;
  els.workedProxyFormula.textContent = example.proxyFormula;
  els.workedProxyApplied.innerHTML = example.proxyApplied;
  els.workedProxyNote.innerHTML = example.proxyNote;
  els.workedMlApplied.innerHTML = example.mlApplied;
  els.workedPortfolioApplied.innerHTML = example.portfolioApplied;
  els.workedCompareProxy.textContent = example.compare.proxy;
  els.workedCompareHybrid.textContent = example.compare.hybrid;
  els.workedCompareApi.textContent = example.compare.api;
  els.workedCompareError.textContent = example.compare.error;
  els.workedCompareNote.innerHTML = example.compareNote;

  els.workedTabs.querySelectorAll("button[data-example]").forEach((button) => {
    button.classList.toggle("active", button.dataset.example === exampleId);
  });
}

function renderDataset() {
  if (!dataset || !els.datasetTableBody) return;

  els.datasetRows.textContent = number(dataset.summary.rows);
  els.datasetProducts.textContent = number(dataset.summary.products);
  els.datasetUnderlyings.textContent = number(dataset.summary.underlyings);
  els.datasetDates.textContent = `${dataset.summary.firstDate} to ${dataset.summary.lastDate}`;

  const assetClasses = [...new Set(dataset.products.map((row) => row.assetClass))]
    .filter(Boolean)
    .sort((a, b) => a.localeCompare(b));

  assetClasses.forEach((assetClass) => {
    const opt = document.createElement("option");
    opt.value = assetClass;
    opt.textContent = assetClass;
    els.datasetAssetFilter.appendChild(opt);
  });

  els.datasetSearch.addEventListener("input", renderDatasetTable);
  els.datasetAssetFilter.addEventListener("change", renderDatasetTable);
  els.datasetInstrumentFilter.addEventListener("change", renderDatasetTable);

  els.datasetTable.querySelectorAll("button[data-sort]").forEach((button) => {
    button.addEventListener("click", () => {
      const key = button.dataset.sort;
      datasetSort = {
        key,
        dir: datasetSort.key === key && datasetSort.dir === "desc" ? "asc" : "desc",
      };
      renderDatasetTable();
    });
  });

  renderDatasetTable();
}

function passesInstrumentFilter(row, instrument) {
  if (!instrument) return true;
  if (instrument === "OPT") return row.options > 0;
  if (instrument === "FUT") return row.futures > 0;
  if (instrument === "BOTH") return row.options > 0 && row.futures > 0;
  return true;
}

function sortValue(row, key) {
  const value = row[key];
  if (typeof value === "number") return value;
  return String(value || "").toLowerCase();
}

function renderDatasetTable() {
  if (!dataset || !els.datasetTableBody) return;

  const query = els.datasetSearch.value.trim().toLowerCase();
  const assetClass = els.datasetAssetFilter.value;
  const instrument = els.datasetInstrumentFilter.value;

  const rows = dataset.products
    .filter((row) => {
      const searchable = `${row.product} ${row.underlying} ${row.assetClass}`.toLowerCase();
      return (!query || searchable.includes(query))
        && (!assetClass || row.assetClass === assetClass)
        && passesInstrumentFilter(row, instrument);
    })
    .sort((a, b) => {
      const av = sortValue(a, datasetSort.key);
      const bv = sortValue(b, datasetSort.key);
      const result = typeof av === "number" && typeof bv === "number"
        ? av - bv
        : String(av).localeCompare(String(bv));
      return datasetSort.dir === "asc" ? result : -result;
    });

  els.datasetTable.querySelectorAll("button[data-sort]").forEach((button) => {
    const active = button.dataset.sort === datasetSort.key;
    button.classList.toggle("active", active);
    button.dataset.dir = active ? datasetSort.dir : "";
    button.setAttribute("aria-sort", active ? datasetSort.dir : "none");
  });

  els.datasetTableBody.innerHTML = rows.map((row) => `
    <tr>
      <td>
        <strong>${row.product}</strong>
        <span class="sub">${row.underlying}</span>
      </td>
      <td>${row.assetClass}</td>
      <td>${number(row.rows)}</td>
      <td>
        ${number(row.dates)}
        <span class="sub">${row.firstDate} to ${row.lastDate}</span>
      </td>
      <td>
        ${number(row.options)}
        <span class="sub">${number(row.calls)} calls / ${number(row.puts)} puts</span>
      </td>
      <td>${number(row.futures)}</td>
      <td>
        ${money(row.medianApiMargin)}
        <span class="sub">mean ${money(row.meanApiMargin)}</span>
      </td>
      <td>
        ${ratio(row.medianApiLocalRatio)}
        <span class="sub">proxy ${money(row.medianLocalMargin)}</span>
      </td>
      <td>
        ${pct(row.medianVol * 100)}
        <span class="sub">spot ${number(row.spotMin)} to ${number(row.spotMax)}</span>
      </td>
      <td>${number(row.medianTtm)} days</td>
    </tr>
  `).join("");
}

function stopReplay() {
  if (timer) {
    clearInterval(timer);
    timer = null;
  }
}

function startReplay() {
  stopReplay();
  timer = setInterval(() => {
    if (currentIndex >= portfolios.length - 1) {
      stopReplay();
      return;
    }
    renderPortfolio(currentIndex + 1);
  }, Number(els.speed.value));
}

els.play.addEventListener("click", startReplay);
els.pause.addEventListener("click", stopReplay);
els.reset.addEventListener("click", () => {
  stopReplay();
  renderPortfolio(0);
});
els.select.addEventListener("change", (event) => {
  stopReplay();
  renderPortfolio(Number(event.target.value));
});
els.workedTabs?.querySelectorAll("button[data-example]").forEach((button) => {
  button.addEventListener("click", () => renderWorkedExample(button.dataset.example));
});

renderSummary();
renderPortfolio(0);
