const fs = require("fs");
const path = require("path");
const courses = require("./data.cjs");

const OUT = __dirname;

function head(title, desc, rel) {
  return `<!doctype html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="color-scheme" content="dark">
<meta name="theme-color" content="#0B1F3A">
<title>${title}</title>
<meta name="description" content="${desc}">
<link rel="icon" type="image/x-icon" href="${rel}assets/favicon/favicon.ico">
<link rel="icon" type="image/png" sizes="32x32" href="${rel}assets/favicon/favicon-32x32.png">
<link rel="icon" type="image/png" sizes="16x16" href="${rel}assets/favicon/favicon-16x16.png">
<link rel="apple-touch-icon" sizes="180x180" href="${rel}assets/favicon/apple-touch-icon.png">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;600;700&family=IBM+Plex+Sans:wght@400;500;600&display=swap" rel="stylesheet">
<link rel="stylesheet" href="${rel}css/style.css">
</head>
<body>`;
}

function header(rel, active) {
  const link = (href, label, key) =>
    `<a href="${href}"${active === key ? ' style="color:#fff"' : ""}>${label}</a>`;
  return `
<header class="site-header">
  <div class="wrap">
    <a class="brand" href="${rel}index.html">
      <span class="mark">SBT</span>
      <span>Strategic Business Techspace<span class="sub">AI Professional Training Series</span></span>
    </a>
    <nav class="main-nav">
      ${link(rel + "index.html", "Home", "home")}
      ${link(rel + "index.html#courses", "Courses", "courses")}
      ${link(rel + "index.html#about", "About", "about")}
      <a class="nav-cta" href="${rel}index.html#enroll">Enrol now</a>
    </nav>
    <button class="nav-toggle" aria-label="Menu"><span></span><span></span><span></span></button>
  </div>
</header>`;
}

function footer(rel) {
  const courseLinks = courses
    .map((c) => `<li><a href="${rel}courses/${c.slug}.html">${String(c.num).padStart(2, "0")}. ${c.title}</a></li>`)
    .join("\n");
  return `
<footer class="site-footer">
  <div class="wrap">
    <div class="footer-grid">
      <div>
        <h4>Strategic Business Techspace</h4>
        <p style="max-width:36ch;color:rgba(255,255,255,0.6)">Founded in 2011. The first indigenous company to offer a certification program in AI chatbot engineering (CAiBotD), and an industry member of the Canadian AI Association. Over 1,000 learners trained across secondary, undergraduate, and postgraduate levels.</p>
      </div>
      <div>
        <h4>Courses</h4>
        <ul>${courseLinks}</ul>
      </div>
      <div>
        <h4>Contact</h4>
        <ul>
          <li><a href="http://www.strategicbiz.com.ng">www.strategicbiz.com.ng</a></li>
          <li><a href="tel:+2349011144154">+234 901 114 4154</a></li>
          <li>Powered by Varsity Gate Educational &times; Amanda AI Education Services</li>
        </ul>
      </div>
    </div>
    <div class="footer-bottom">
      <span>&copy; 2026 Strategic Business Techspace. All rights reserved.</span>
      <span>AI Professional Training Series</span>
    </div>
  </div>
</footer>
<script type="module" src="${rel}js/main.js"></script>
</body>
</html>`;
}

// ---------- Home page ----------

function courseRow(c) {
  return `
      <a class="course-row${c.flagship ? " flagship" : ""}" href="courses/${c.slug}.html">
        <span class="idx">${String(c.num).padStart(2, "0")}</span>
        <span>
          <span class="cname">${c.title}${c.flagship ? '<span class="badge">Certification</span>' : ""}</span>
          <span class="ctag">${c.tagline}</span>
        </span>
        <span class="go">View curriculum &rsaquo;</span>
      </a>`;
}

function buildHome() {
  const html = `${head(
    "Strategic Business Techspace — AI Professional Training Series",
    "11 industry-aligned AI courses over 2 months, from a certified AI training provider based in Lagos, Nigeria.",
    ""
  )}
${header("", "home")}

<section class="hero">
  <div class="wrap hero-grid">
    <div>
      <span class="eyebrow-line"><span class="dot"></span>2-Month AI Professional Training Series</span>
      <h1>Build the AI skills Lagos's fastest-growing businesses are hiring for.</h1>
      <p class="lede">11 industry-aligned courses, an 8-week structure per course, and a paid internship track that ends in guaranteed job placement support. Since 2011, Strategic Business Techspace has trained the people behind Nigeria's AI-powered products.</p>
      <div class="hero-actions">
        <a class="btn btn-gold" href="#courses">Browse the 11 courses</a>
        <a class="btn btn-outline" href="#about">About SBT</a>
      </div>
    </div>
    <div class="hero-panel">
      <div class="stat-row"><span class="stat-num">2011</span><span class="stat-label">Year SBT was founded</span></div>
      <div class="stat-row"><span class="stat-num">1st</span><span class="stat-label">Indigenous company certifying AI chatbot engineers (CAiBotD)</span></div>
      <div class="stat-row"><span class="stat-num">1,000+</span><span class="stat-label">Learners trained across secondary, undergrad & postgrad levels</span></div>
      <div class="stat-row"><span class="stat-num">11</span><span class="stat-label">Industry-aligned AI courses in this series</span></div>
    </div>
  </div>
</section>

<div class="strip">
  <div class="wrap">
    <div class="strip-item"><div class="num">CAiBotD</div><div class="label">Certified AI Bot Developer program</div></div>
    <div class="strip-item"><div class="num">Canadian AI Assoc.</div><div class="label">Industry member</div></div>
    <div class="strip-item"><div class="num">Ministry-backed</div><div class="label">STEM robotics training, south-western states</div></div>
    <div class="strip-item"><div class="num">Paid internship</div><div class="label">Leads to guaranteed job placement support</div></div>
  </div>
</div>

<section class="about-section" id="about">
  <div class="wrap about-grid">
    <div>
      <div class="section-head">
        <div class="kicker">About SBT</div>
        <h2>Fifteen years of building Nigeria's AI talent pipeline.</h2>
      </div>
      <p>Strategic Business Techspace (SBT) was founded in 2011 with a focus on AI solutions and research certification. SBT was the first indigenous company to offer a certification program in AI chatbot engineering, known as CAiBotD, and is an industry member of the Canadian AI Association.</p>
      <p>Beyond training, SBT has built AI chatbot solutions for organisations across sectors, and facilitated STEM robotics training for the south-western states under the Ministry of Humanitarian Affairs.</p>
    </div>
    <ul class="about-list">
      <li><strong>Accredited courses</strong> — all 11 programs in this series are fully accredited.</li>
      <li><strong>Paid internship</strong> — successful graduates move into a paid internship before job placement.</li>
      <li><strong>Job placement support</strong> — guaranteed placement support and career advisory after internship.</li>
      <li><strong>AI-powered learning</strong> — every course is taught using the same AI tools learners will use on the job.</li>
    </ul>
  </div>
</section>

<section class="courses-section" id="courses">
  <div class="wrap">
    <div class="section-head">
      <div class="kicker">The curriculum</div>
      <h2>11 courses. Two months each. One AI-ready career.</h2>
      <p style="color:rgba(255,255,255,0.7)">Every course runs an identical rhythm: four foundation weeks in Month 1, four applied and capstone weeks in Month 2.</p>
    </div>
    <div class="course-list">
      ${courses.map(courseRow).join("\n")}
    </div>
  </div>
</section>

<section id="enroll">
  <div class="wrap">
    <div class="course-cta">
      <div>
        <h3>Ready to enrol?</h3>
        <p>Reach out to the SBT team to pick your course and secure a seat in the next cohort.</p>
      </div>
      <a class="btn btn-gold" href="tel:+2349011144154">Call +234 901 114 4154</a>
    </div>
  </div>
</section>

${footer("")}`;
  fs.writeFileSync(path.join(OUT, "index.html"), html);
}

// ---------- Course pages ----------

function weekCard(w) {
  return `
        <details class="week-card"${w.n === 1 ? " open" : ""} data-phase="${w.phase}">
          <summary>
            <span class="wk-num">W${w.n}</span>
            <span>${w.title}</span>
            <span class="chev">&#9662;</span>
          </summary>
          <div class="week-body">
            <div>
              <h4>Topics covered</h4>
              <ul>${w.topics.map((t) => `<li>${t}</li>`).join("")}</ul>
            </div>
            <div>
              <h4>Learning outcomes</h4>
              <ul class="outcomes">${w.outcomes.map((o) => `<li>${o}</li>`).join("")}</ul>
            </div>
          </div>
        </details>`;
}

function buildCoursePage(c, idx) {
  const rel = "../";
  const prev = courses[(idx - 1 + courses.length) % courses.length];
  const next = courses[(idx + 1) % courses.length];
  const html = `${head(
    `${c.title} — SBT AI Professional Training Series`,
    c.tagline,
    rel
  )}
${header(rel, "courses")}

<section class="course-hero">
  <div class="wrap">
    <div class="breadcrumb"><a href="../index.html">Home</a> &rsaquo; <a href="../index.html#courses">Courses</a> &rsaquo; ${c.title}</div>
    ${c.flagship ? '<span class="badge-flagship">Leads to CAiBotD certification</span>' : ""}
    <h1>${String(c.num).padStart(2, "0")}. ${c.title}</h1>
    <p class="lede">${c.tagline}</p>
    <div class="course-meta-row">
      <div><div class="m-num">8</div><div class="m-label">Weeks</div></div>
      <div><div class="m-num">2</div><div class="m-label">Months</div></div>
      <div><div class="m-num">16</div><div class="m-label">Learning outcomes</div></div>
      <div><div class="m-num">32</div><div class="m-label">Topics covered</div></div>
    </div>
  </div>
</section>

<section>
  <div class="wrap">
    <div class="phase-toggle">
      <button class="phase-btn active" data-filter="all">All 8 weeks</button>
      <button class="phase-btn" data-filter="Month 1">Month 1</button>
      <button class="phase-btn" data-filter="Month 2">Month 2</button>
    </div>
    <div id="week-list">
      ${c.weeks.map(weekCard).join("\n")}
    </div>

    <div class="course-cta" style="margin-top:44px">
      <div>
        <h3>Enrol in ${c.title}</h3>
        <p>Seats are limited per cohort. Call SBT to confirm your spot and start date.</p>
      </div>
      <a class="btn btn-gold" href="tel:+2349011144154">Call +234 901 114 4154</a>
    </div>

    <div class="next-course">
      <a href="${prev.slug}.html">&larr; ${prev.title}</a>
      <a href="${next.slug}.html">${next.title} &rarr;</a>
    </div>
  </div>
</section>

${footer(rel)}
<script>
(function(){
  var btns = document.querySelectorAll(".phase-btn");
  var cards = document.querySelectorAll(".week-card");
  btns.forEach(function(btn){
    btn.addEventListener("click", function(){
      btns.forEach(function(b){ b.classList.remove("active"); });
      btn.classList.add("active");
      var f = btn.dataset.filter;
      cards.forEach(function(card){
        card.style.display = (f === "all" || card.dataset.phase === f) ? "" : "none";
      });
    });
  });
})();
</script>`;
  fs.writeFileSync(path.join(OUT, "courses", `${c.slug}.html`), html);
}

buildHome();
courses.forEach((c, i) => buildCoursePage(c, i));
console.log("Built index.html + " + courses.length + " course pages.");
