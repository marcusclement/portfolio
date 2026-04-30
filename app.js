const FILES = {
  about: {
    title: "about.md",
    content: `
<h1>About Me</h1>
<div class="about-layout">
  <div class="about-right">
    <p>
      Hi, I'm Marcus Clement. I'm a University of Washington Informatics student focused
      on data science. I like building practical things that make
      work easier, whether that is a feature, a workflow, or an automated system that
      replaces something manual.
    </p>
    <p>
      Most of what I do sits between software and analytics. I enjoy owning problems end
      to end: understanding what someone needs, building a simple solution, then iterating
      until it is reliable and actually useful. Lately, that has meant a lot of cloud and
      data work, plus some LLM powered tooling where it makes sense.
    </p>
    <p>
      Outside of school and work, I'm into running, lifting, hiking, and golfing (even though I suck).
      I'm currently looking for full time roles following graduation across data, software, and product
      engineering where I can continue delivering value and learning.
    </p>
    <p>
      Feel free to browse through my portfolio using the files on the left!
    </p>
    <h2>Core Skills</h2>
    <ul>
      <li>Cloud Architecture, Full Stack Development, Data</li>
      <li>AI/LLM Integration, Consulting, Automation</li>
    </ul>
  </div>
  <div class="about-media">
    <div class="about-photo-wrap">
      <img
        class="about-photo"
        src="./DSC06990.jpeg"
        alt="Marcus Clement headshot"
      />
    </div>
    <div class="about-media-photo-wrap">
      <img class="about-media-photo" src="./hike.jpg" alt="Hiking photo" />
      <div class="about-media-caption">// Beautiful hike in Washington!</div>
    </div>
    <div class="about-media-video-wrap">
      <video
        class="about-media-video"
        src="./golf.mp4"
        autoplay
        muted
        loop
        playsinline
        preload="none"
      ></video>
      <div class="about-media-caption">// FORE!</div>
    </div>
  </div>
</div>
<h2>Tech Stack</h2>
<div class="tech-stack" aria-label="Technologies">
  <div class="tech-row">
    <span class="tech-row-label">Languages & backend</span>
    <div class="tech-grid">
      <div class="tech-item"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" alt="Python" /><span class="tech-label">Python</span></div>
      <div class="tech-item"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/r/r-original.svg" alt="R" /><span class="tech-label">R</span></div>
      <div class="tech-item"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JavaScript" /><span class="tech-label">JavaScript</span></div>
      <div class="tech-item"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" alt="TypeScript" /><span class="tech-label">TypeScript</span></div>
      <div class="tech-item"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" alt="Java" /><span class="tech-label">Java</span></div>
      <div class="tech-item"><img src="https://cdn.simpleicons.org/fastapi/009688" alt="FastAPI" /><span class="tech-label">FastAPI</span></div>
    </div>
  </div>
  <div class="tech-row">
    <span class="tech-row-label">Frontend</span>
    <div class="tech-grid">
      <div class="tech-item"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React" /><span class="tech-label">React</span></div>
      <div class="tech-item"><img src="./next.jpg" alt="Next.js" /><span class="tech-label">Next.js</span></div>
      <div class="tech-item"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" alt="Tailwind CSS" /><span class="tech-label">Tailwind CSS</span></div>
      <div class="tech-item"><img src="./htmlcss.jpg" alt="HTML & CSS" /><span class="tech-label">HTML & CSS</span></div>
    </div>
  </div>
  <div class="tech-row">
    <span class="tech-row-label">Tools</span>
    <div class="tech-grid">
      <div class="tech-item"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" alt="Git" /><span class="tech-label">Git</span></div>
      <div class="tech-item tech-item--light-bg"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="GitHub" /><span class="tech-label">GitHub</span></div>
      <div class="tech-item"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" alt="Docker" /><span class="tech-label">Docker</span></div>
      <div class="tech-item tech-item--light-bg"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg" alt="Vercel" /><span class="tech-label">Vercel</span></div>
    </div>
  </div>
  <div class="tech-row">
    <span class="tech-row-label">Cloud</span>
    <div class="tech-grid">
      <div class="tech-item"><img src="./awsreal.webp" alt="AWS" /><span class="tech-label">AWS</span></div>
      <div class="tech-item"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg" alt="Azure" /><span class="tech-label">Azure</span></div>
      <div class="tech-item"><img src="./GCP.png" alt="Google Cloud Platform" /><span class="tech-label">GCP</span></div>
    </div>
  </div>
  <div class="tech-row">
    <span class="tech-row-label">Data & analytics</span>
    <div class="tech-grid">
      <div class="tech-item"><img src="./sql.png" alt="SQL" /><span class="tech-label">SQL</span></div>
      <div class="tech-item"><img src="https://cdn.simpleicons.org/snowflake/29B5E8" alt="Snowflake" /><span class="tech-label">Snowflake</span></div>
      <div class="tech-item"><img src="./tableau.jpg" alt="Tableau" /><span class="tech-label">Tableau</span></div>
      <div class="tech-item"><img src="./bi.png" alt="Power BI" /><span class="tech-label">Power BI</span></div>
      <div class="tech-item"><img src="./excel.png" alt="Excel" /><span class="tech-label">Excel</span></div>
    </div>
  </div>
  <div class="tech-row">
    <span class="tech-row-label">AI</span>
    <div class="tech-grid">
      <div class="tech-item"><img src="./quicksuite.jpg" alt="Quick Suite" /><span class="tech-label">Quick Suite</span></div>
      <div class="tech-item"><img src="./gems.png" alt="Gemini Gems" /><span class="tech-label">Gemini Gems</span></div>
      <div class="tech-item"><img src="https://cdn.simpleicons.org/langchain/1C3C3C" alt="LangGraph" /><span class="tech-label">LangGraph</span></div>
      <div class="tech-item tech-item--light-bg"><img src="https://raw.githubusercontent.com/lobehub/lobe-icons/master/packages/static-svg/icons/mcp.svg" alt="MCP" /><span class="tech-label">MCP</span></div>
      <div class="tech-item tech-item--claude-code"><img src="./claudecode.png" alt="Claude Code" /><span class="tech-label">Claude Code</span></div>
    </div>
  </div>
  <div class="tech-row">
    <span class="tech-row-label">LLMs</span>
    <div class="tech-grid">
      <div class="tech-item tech-item--group">
        <div class="tech-group-icons">
          <img src="./gpt.png" alt="ChatGPT" />
          <img src="./claude.png" alt="Claude" />
          <img src="./gemini.png" alt="Gemini" />
        </div>
      </div>
    </div>
  </div>
</div>
`,
  },
  experience: {
    title: "experience.md",
    content: `
<h2>Education</h2>
<p class="resume-edu">
  <img class="resume-logo" src="./uw.png" alt="University of Washington logo" />
  <strong>University of Washington</strong> (GPA 3.9) — Seattle, WA
</p>
<p>Pursuing B.S. Informatics (Data Science) (Sep 2025 - Jun 2027)</p>
<p class="resume-edu">
  <img class="resume-logo" src="./bc.png" alt="Bellevue College logo" />
  <strong>Bellevue College</strong> — Bellevue, WA
</p>
<p>Associate's in Arts and Sciences (Sep 2023 - Jun 2025)</p>
<h2>Experience</h2>
<p class="resume-company">
<span class="resume-hint">// click on the Proofpoint logo</span>
  <a
    class="resume-company-link"
    href="https://www.proofpoint.com"
    target="_blank"
    rel="noreferrer"
  >
    <img class="resume-logo" src="./proofpoint.png" alt="Proofpoint logo" />
    <strong>Proofpoint</strong>
  </a>
  <span class="resume-role">— AI Integration Engineer Intern (Jun 2026 - Sep 2026)</span>
</p>
<ul>
  <li>Incoming Summer 2026.</li>
</ul>
<p class="resume-company">
<span class="resume-hint">// click on the Socratics.ai logo</span>
  <a
    class="resume-company-link"
    href="https://socratics.ai"
    target="_blank"
    rel="noreferrer"
  >
    <img class="resume-logo" src="./socratics.jpeg" alt="Socratics.ai logo" />
    <strong>Socratics.ai</strong>
  </a>
  <span class="resume-role">— Software Engineer Intern (Mar 2026 - May 2026)</span>
</p>
<ul>
  <li>Built full-stack financial document processing pipeline supporting data ingestion, AI classifications & HITL interface.</li>
  <li>Presented executive team with system architecture + determined key features for product implementation.</li>
</ul>
<p class="resume-company">
<span class="resume-hint">// click on the AirPLAi logo</span>
  <a
    class="resume-company-link"
    href="https://airplaisports.com/"
    target="_blank"
    rel="noreferrer"
  >
    <img class="resume-logo" src="./AirPLAi_Sports.jpeg" alt="AirPLAi logo" />
    <strong>AirPLAi Sports</strong>
  </a>
  <span class="resume-role">— AI Product Engineer Intern (Jan 2026 - Apr 2026)</span>
</p>
<ul>
  <li>Tuned AI chatbot prompt workflows and data retrieval logic in Python (FastAPI / LangGraph).</li>
  <li>Created UI + backend features, debugged, ran tests, and resolved CI/Dev issues (GCP, Docker, React / Next.js).</li>
  <li>Built cloud-based data pipelines and features that improved data reliability and operational workflows.</li>
</ul>
<p class="resume-company">
<span class="resume-hint">// click on the Web Impact logo</span>
  <a
    class="resume-company-link"
    href="https://webimpactuw.org/"
    target="_blank"
    rel="noreferrer"
  >
    <img class="resume-logo" src="./webimpact.jpeg" alt="Web Impact UW logo" />
    <strong>Web Impact UW</strong>
  </a>
  <span class="resume-role">— Full Stack Developer (Jan 2026 - Present)</span>
</p>
<ul>
  <li>Developing features across React frontend, API routes, and backend, owning implementation to deployment under deadlines.</li>
  <li>Collaborating cross functionally with design and product leads to deliver user focused web solutions for external clients.</li>
  <li>Implementing UI components with shadcn and delivering maintainable code with best practices through GitHub workflows.</li>
</ul>
<p class="resume-company">
  <img class="resume-logo" src="./costco.png" alt="Costco Wholesale logo" />
  <strong>Costco Wholesale</strong>
  <span class="resume-role">— Member Service Agent (Feb 2024 - Present)</span>
</p>
<p style="font-style: italic; margin-top: 2px; font-size: 13px; color: #8a8f98;">College Retention Program since Sep 2025</p>
<ul>
  <li>Assisted customers through complex issues via chat/phone, translating technical processes into clear explanations.</li>
  <li>Consistently exceeded performance expectations by over 50% through strong communication and problem-solving.</li>
</ul>
<p class="resume-company">
  <img class="resume-logo" src="./everlane.jpeg" alt="Everlane logo" />
<strong>Everlane Landscaping</strong>
  <span class="resume-role">— Data Science Intern (Aug 2025 - Nov 2025)</span>
</p>
<ul>
  <li>Built automated Python pipeline to process 100+ monthly logs, optimizing routing, reducing job-time by 15%.</li>
  <li>Developed Tableau dashboards that improved reporting accuracy by 25%, visualizing demand and crew performance.</li>
  <li>Conducted data modeling to identify high-value customer segments, leading to a 12% increase in customer retention.</li>
</ul>
<h2>Certifications</h2>
<div class="cert-grid">
  <div class="cert-card">
    <img class="cert-logo cert-logo--aws" src="./awsreal.webp" alt="AWS logo" />
    <div class="cert-label">AWS</div>
    <ul>
      <li>Cloud Practitioner (CLF-C02)</li>
      <li>AI Practitioner (AIF-C01)</li>
      <li>Preparing for Solutions Architect Associate (SAA-C03)</li>
    </ul>
  </div>
  <div class="cert-card">
    <img class="cert-logo" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg" alt="Azure logo" />
    <div class="cert-label">Azure</div>
    <ul>
      <li>AZ-900 — Azure Fundamentals</li>
      <li>AI-900 — Azure AI Fundamentals</li>
      <li>DP-900 — Azure Data Fundamentals</li>
    </ul>
  </div>
</div>
`,
  },
  resume_pdf: {
    title: "resume.pdf",
    content: `
<h1>My Resume</h1>
<div class="pdf-link-wrap">
  <a class="pdf-link" href="DS_RESUME.pdf" download rel="noreferrer" aria-label="Download resume PDF">
    <img class="pdf-preview" src="./resume.png" alt="Preview of Marcus Clement resume" />
    <span class="pdf-text">Open resume.pdf</span>
  </a>
</div>
<p class="muted">
   
</p>
`,
  },
  projects: {
    title: "projects.md",
    content: `
<h1>Projects</h1>

<h2>Cursor-Inspired Portfolio</h2>
<p class="resume-company">
  <strong>https://marcusclementportfolio.vercel.app/</strong>
  <span class="resume-role">— Personal Portfolio</span>
</p>
<ul>
  <li>This website! A personal portfolio that makes browsing feel familiar and intuitive to developers.</li>
  <li>Built with HTML, CSS, JavaScript, and deployed on Vercel, designed to mimic my current favorite IDE, Cursor.</li>
  <li>Implemented a fully functional AI chatbar powered by Claude Haiku 4.5 via the Anthropic API, using RAG (Retrieval-Augmented Generation) to ground responses in a structured JSON knowledge base with my experience.</li>
  <li>Built keyword-based retrieval to score and inject relevant chunks into the system prompt, streamed responses in real time via SSE through a Vercel serverless function.</li>
</ul>

<h2>Personal Productivity System</h2>
<p class="resume-company">
  <strong>Personal Productivity System</strong>
  <span class="resume-role">— Custom Dashboard (Apr 2026)</span>
</p>
<ul>
  <li>Built a custom dashboard aggregating task management, goal tracking, and live health metrics in a single view.</li>
  <li>Integrated the WHOOP REST API using OAuth 2.0 with automated token refresh, building a Python/Bash launchd pipeline to sync daily sleep, recovery, and HRV metrics.</li>
  <li>Deployed a Dockerized MCP server to connect Claude AI to the vault, enabling natural language note management and file operations.</li>
  <li>Embedded a live Google Calendar day view by registering an OAuth 2.0 client in Google Cloud Console and configuring API scopes and redirect URIs.</li>
</ul>

<h2>Nick-Blendz.com — Online Booking Application</h2>
<p class="resume-company">
  <span class="resume-company-link">
    <img class="resume-logo" src="./nickblendz.webp" alt="Nick-Blendz logo" />
    <strong>Nick-Blendz.com</strong>
  </span>
  <span class="resume-role">— Full-Stack Booking Platform</span>
</p>
<ul>
  <li>Built and deployed a full-stack booking platform with Next.js, TypeScript, and AWS (EC2, S3, RDS) supporting 100+ users.</li>
  <li>Designed the database schema and backend to manage scheduling and client data, cutting manual booking work by 80%.</li>
  <li>Integrated scheduling API and analytics dashboards.</li>
</ul>

<h2>Medi-Scribe — AI Medical Transcriber</h2>
<p class="resume-company">
  <strong>Medi-Scribe</strong>
  <span class="resume-role">— HIPAA-Compliant Transcription System</span>
</p>
<ul>
  <li>Developing a HIPAA-compliant transcription system using AWS (S3, Lambda, Transcribe Medical, Bedrock) and React.</li>
  <li>Automates audio capture, transcription, and clinical summarization.</li>
</ul>

<h2>Document Management System</h2>
<p class="resume-company">
  <strong>Document Management System</strong>
  <span class="resume-role">— PostgreSQL Backend</span>
</p>
<ul>
  <li>Built a PostgreSQL-based document management system for a real estate investor.</li>
  <li>Designed a relational schema and SQL backend using JSON to streamline property and record management.</li>
</ul>
`,
  },
  contact: {
    title: "contact.md",
    content: `
<h1>Contact</h1>
<p>Let's get in touch!</p>
<ul>
  <li>Email: marcus20@uw.edu</li>
  <li>
    LinkedIn:
    <a href="https://www.linkedin.com/in/marcus-clement27" target="_blank" rel="noreferrer">
      linkedin.com/in/marcus-clement27
    </a>
  </li>
</ul>
`,
  },
  linkedin: {
    title: "linkedin.url",
    content: `
<h1>LinkedIn</h1>
<p>
  <a
    class="icon-link"
    href="https://www.linkedin.com/in/marcus-clement27"
    target="_blank"
    rel="noreferrer"
    aria-label="LinkedIn"
  >
    <img
      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg"
      alt="LinkedIn"
    />
  </a>
</p>
<p class="link-cta">Click me!</p>
`,
  },
  community: {
    title: "community.md",
    content: `
<h1>Community Engagement</h1>
<p class="resume-company">
  <span class="resume-hint">// click on the Web Impact logo</span>
  <a
    class="resume-company-link"
    href="https://webimpactuw.org/"
    target="_blank"
    rel="noreferrer"
  >
    <img class="resume-logo" src="./webimpact.jpeg" alt="Web Impact UW logo" />
    <strong>Web Impact UW</strong>
  </a>
  <span class="resume-role">— Full Stack Developer (Jan 2026 - Present)</span>
</p>
<ul>
  <li>Developing features across React frontend, API routes, and backend.</li>
  <li>Collaborating with design and product leads for client solutions.</li>
  <li>Implementing UI components with best practices via GitHub workflows.</li>
</ul>
<p class="resume-company">
<span class="resume-hint">// click on the NetworkAI logo</span>
  <a
    class="resume-company-link"
    href="https://uwnetworkai.com/"
    target="_blank"
    rel="noreferrer"
  >
    <img class="resume-logo resume-logo--networkai" src="./networkai.PNG" alt="NetworkAI logo" />
    <strong>NetworkAI</strong>
  </a>
  <span class="resume-role">— Director of Technology (Jan 2026 - Present)</span>
</p>
<ul>
  <li>Directing workshops aimed to teach AI principles and development practices.</li>
  <li>Leading all club workshop events tied to technology and AI.</li>
  <li>Built, deployed, and maintained club website. <a href="https://uwnetworkai.com/" target="_blank" rel="noreferrer">uwnetworkai.com</a></li>
</ul>
<p class="resume-company">
  <span class="resume-hint">// click on the Kappa Theta Pi logo</span>
  <a
    class="resume-company-link"
    href="https://www.kappathetapi.org/"
    target="_blank"
    rel="noreferrer"
  >
  <img class="resume-logo" src="./ktp.jpg" alt="Kappa Theta Pi logo" />
  <strong>Kappa Theta Pi</strong>
  </a>
  <span class="resume-role">— Director of Pledge Education (Jan 2026 - Present)</span>
</p>
<ul>
  <li>Created content for professional development and education for professional tech focused fraternity.</li>
</ul>
<p class="resume-company">
  <span class="resume-hint">// click on the Business Impact Group logo</span>
  <a
    class="resume-company-link"
    href="https://www.uwbig.com/"
    target="_blank"
    rel="noreferrer"
  >
    <img class="resume-logo" src="./big.jpeg" alt="Business Impact Group logo" />
    <strong>Business Impact Group</strong>
  </a>
  <span class="resume-role">— Consultant (Jan 2026 - Mar 2026)</span>
</p>
<ul>
  <li>Collaborated with client <a href="https://socratics.ai" target="_blank" rel="noreferrer">Socratics.ai</a>. Was invited to return after engagement for internship.</li>
</ul>
<p class="resume-company">
  <span class="resume-hint">// click on the AWS Cloud Club logo</span>
  <a
    class="resume-company-link"
    href="https://builder.aws.com/community/cloud-clubs"
    target="_blank"
    rel="noreferrer"
  >
    <img class="resume-logo" src="./aws.gif" alt="AWS Cloud Club logo" />
    <strong>AWS Cloud Club</strong>
  </a>
  <span class="resume-role">— Member (Jan 2026 - Present)</span>
</p>
<ul>
  <li>
    Attended and participated in building projects, attending workshops, and hackathons.
  </li>
</ul>
<p class="resume-company">
  <span class="resume-hint">// click on the Claude Builder Club logo</span>
  <a
    class="resume-company-link"
    href="https://claude.com/programs/campus"
    target="_blank"
    rel="noreferrer"
  >
    <img class="resume-logo" src="./claude.png" alt="Claude Builder Club logo" />
    <strong>Claude Builder Club</strong>
  </a>
  <span class="resume-role">— Member (Jan 2026 - Present)</span>
</p>
<ul>
  <li>
    Attended and participated in building projects, attending workshops, and hackathons.
  </li>
</ul>
<p class="resume-company">
  <span class="resume-hint">// click on the Newman Center logo</span>
  <a
    class="resume-company-link"
    href="https://uwnewman.org/"
    target="_blank"
    rel="noreferrer"
  >
    <img class="resume-logo" src="./newman.jpeg" alt="Newman Center logo" />
    <strong>Newman Center</strong>
  </a>
  <span class="resume-role">— Student Ministry Team Member (Sep 2025 - Present)</span>
</p>
<ul>
  <li>Helped lead and coordinate events for local Newman Center.</li>
</ul>
`,
  },
};

const fileList = document.getElementById("fileList");
const tabs = document.getElementById("tabs");
const editorPane = document.getElementById("editorPane");
const tabTemplate = document.getElementById("tabTemplate");
const panelTemplate = document.getElementById("panelTemplate");
const aiForm = document.getElementById("aiForm");
const aiInput = document.getElementById("aiInput");
const aiMessages = document.getElementById("aiMessages");

const openTabs = new Map();
let activeTabId = null;
let chatLoading = false;
let draggedTab = null;
let draggedFileItem = null;

const renderActiveState = () => {
  document.querySelectorAll(".file-item").forEach((item) => {
    item.classList.toggle("active", item.dataset.file === activeTabId);
  });

  document.querySelectorAll(".tab").forEach((tab) => {
    tab.setAttribute(
      "aria-selected",
      tab.dataset.file === activeTabId ? "true" : "false"
    );
  });
};

const setActiveTab = (fileId) => {
  activeTabId = fileId;
  const panel = openTabs.get(fileId);

  if (panel) {
    editorPane.innerHTML = "";
    editorPane.appendChild(panel);
  }

  renderActiveState();
};

const closeTab = (fileId) => {
  const tab = tabs.querySelector(`[data-file="${fileId}"]`);
  const panel = openTabs.get(fileId);

  if (tab) tab.remove();
  if (panel) panel.remove();
  openTabs.delete(fileId);

  if (activeTabId === fileId) {
    const remaining = Array.from(openTabs.keys());
    if (remaining.length > 0) {
      setActiveTab(remaining[remaining.length - 1]);
    } else {
      activeTabId = null;
      editorPane.innerHTML = `
        <div class="welcome">
          <h1>Welcome</h1>
          <p>
            Open a file on the left to learn more about me. This layout mimics
            the Cursor editor so you can browse my info like a codebase.
          </p>
        </div>
      `;
      renderActiveState();
    }
  }
};

const openFile = (fileId) => {
  if (openTabs.has(fileId)) {
    setActiveTab(fileId);
    return;
  }

  const file = FILES[fileId];
  if (!file) return;

  const tabNode = tabTemplate.content.firstElementChild.cloneNode(true);
  tabNode.dataset.file = fileId;
  tabNode.setAttribute("draggable", "true");
  tabNode.querySelector(".tab-title").textContent = file.title;
  tabNode.addEventListener("click", () => setActiveTab(fileId));
  tabNode.addEventListener("dragstart", () => {
    draggedTab = tabNode;
    tabNode.classList.add("dragging");
  });
  tabNode.addEventListener("dragend", () => {
    tabNode.classList.remove("dragging");
    draggedTab = null;
  });
  tabNode.querySelector(".tab-close").addEventListener("click", (event) => {
    event.stopPropagation();
    closeTab(fileId);
  });

  const panelNode = panelTemplate.content.firstElementChild.cloneNode(true);
  panelNode.dataset.file = fileId;
  panelNode.innerHTML = file.content;

  tabs.appendChild(tabNode);
  openTabs.set(fileId, panelNode);
  setActiveTab(fileId);
};

fileList.addEventListener("click", (event) => {
  const item = event.target.closest(".file-item");
  if (!item) return;
  openFile(item.dataset.file);
});

const getDragAfterElement = (container, axis, position) => {
  const selector = axis === "x" ? ".tab:not(.dragging)" : ".file-item:not(.dragging)";
  const items = [...container.querySelectorAll(selector)];
  return items.reduce(
    (closest, item) => {
      const box = item.getBoundingClientRect();
      const offset = axis === "x" ? position - (box.left + box.width / 2) : position - (box.top + box.height / 2);
      if (offset < 0 && offset > closest.offset) {
        return { offset, element: item };
      }
      return closest;
    },
    { offset: Number.NEGATIVE_INFINITY, element: null }
  ).element;
};

tabs.addEventListener("dragover", (event) => {
  event.preventDefault();
  if (!draggedTab) return;
  const after = getDragAfterElement(tabs, "x", event.clientX);
  if (!after) {
    tabs.appendChild(draggedTab);
  } else {
    tabs.insertBefore(draggedTab, after);
  }
});

fileList.querySelectorAll(".file-item").forEach((item) => {
  item.setAttribute("draggable", "true");
  item.addEventListener("dragstart", () => {
    draggedFileItem = item;
    item.classList.add("dragging");
  });
  item.addEventListener("dragend", () => {
    item.classList.remove("dragging");
    draggedFileItem = null;
  });
});

fileList.addEventListener("dragover", (event) => {
  event.preventDefault();
  if (!draggedFileItem) return;
  const after = getDragAfterElement(fileList, "y", event.clientY);
  if (!after) {
    fileList.appendChild(draggedFileItem);
  } else {
    fileList.insertBefore(draggedFileItem, after);
  }
});

openFile("about");

const isNearBottom = () =>
  aiMessages.scrollHeight - aiMessages.clientHeight - aiMessages.scrollTop < 30;

const scrollToBottom = (smooth) => {
  aiMessages.scrollTo({
    top: aiMessages.scrollHeight,
    behavior: smooth ? "smooth" : "instant",
  });
};

const appendAiMessage = (role, text) => {
  const message = document.createElement("div");
  message.className = `ai-message ai-message--${role}`;

  const label = document.createElement("div");
  label.className = "ai-label";
  label.textContent = role === "user" ? "YOU" : "CURSOR";

  const bubble = document.createElement("div");
  bubble.className = "ai-bubble";
  bubble.textContent = text;

  message.append(label, bubble);
  aiMessages.appendChild(message);
  scrollToBottom(false);
};

const playBigDataEasterEgg = () => {
  const overlay = document.createElement("div");
  overlay.style.cssText =
    "position:fixed;inset:0;z-index:99999;background:#000;display:flex;align-items:center;justify-content:center;";

  const video = document.createElement("video");
  video.src = "./bigdata.mp4";
  video.style.cssText = "width:100%;height:100%;object-fit:cover;";
  video.autoplay = true;
  video.playsInline = true;

  overlay.appendChild(video);
  document.body.appendChild(overlay);

  video.play().catch(() => {});

  video.addEventListener("ended", () => overlay.remove());
  overlay.addEventListener("click", () => overlay.remove());
};

const appendStreamingMessage = () => {
  const message = document.createElement("div");
  message.className = "ai-message ai-message--bot";

  const label = document.createElement("div");
  label.className = "ai-label";
  label.textContent = "CURSOR";

  const bubble = document.createElement("div");
  bubble.className = "ai-bubble";
  bubble.textContent = "...";

  message.append(label, bubble);
  aiMessages.appendChild(message);
  scrollToBottom(false);
  return bubble;
};

aiForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  const text = aiInput.value.trim();
  if (!text || chatLoading) return;

  if (text.toLowerCase() === "big data") {
    aiInput.value = "";
    playBigDataEasterEgg();
    return;
  }

  if (text.length > 300) return;

  appendAiMessage("user", text);
  aiInput.value = "";

  // Hide starter prompts after first message
  const sp = document.getElementById("starterPrompts");
  if (sp) sp.remove();

  const bubble = appendStreamingMessage();
  chatLoading = true;

  try {
    const res = await fetch("/api/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: text }),
    });

    if (!res.ok) {
      const err = await res.json().catch(() => ({}));
      bubble.textContent = err.error || "Something went wrong. Try again.";
      chatLoading = false;
      return;
    }

    const reader = res.body.getReader();
    const decoder = new TextDecoder();
    bubble.textContent = "";
    let buffer = "";

    let streamDone = false;
    while (!streamDone) {
      const { done, value } = await reader.read();
      if (done) break;

      buffer += decoder.decode(value, { stream: true });
      const lines = buffer.split("\n");
      buffer = lines.pop();

      for (const line of lines) {
        if (!line.startsWith("data: ")) continue;
        const payload = line.slice(6);
        if (payload === "[DONE]") { streamDone = true; break; }
        try {
          const parsed = JSON.parse(payload);
          if (parsed.error) {
            bubble.textContent += " [Error]";
            streamDone = true;
            break;
          }
          bubble.textContent += parsed.text;
          if (isNearBottom()) scrollToBottom(false);
        } catch (e) {
          console.warn("SSE parse error:", e.message);
        }
      }
    }

    if (!bubble.textContent) {
      bubble.textContent = "No response received. Try again.";
    }
  } catch (err) {
    bubble.textContent = "Network error. Please try again.";
  } finally {
    chatLoading = false;
  }
});

// --- Resize handle for AI sidebar ---
const resizeHandle = document.getElementById("resizeHandle");
const appEl = document.querySelector(".app");

resizeHandle.addEventListener("mousedown", (e) => {
  e.preventDefault();
  resizeHandle.classList.add("active");
  document.body.classList.add("resizing");

  const onMouseMove = (e) => {
    const newWidth = Math.min(600, Math.max(200, window.innerWidth - e.clientX));
    appEl.style.setProperty("--ai-width", newWidth + "px");
  };

  const onMouseUp = () => {
    resizeHandle.classList.remove("active");
    document.body.classList.remove("resizing");
    document.removeEventListener("mousemove", onMouseMove);
    document.removeEventListener("mouseup", onMouseUp);
  };

  document.addEventListener("mousemove", onMouseMove);
  document.addEventListener("mouseup", onMouseUp);
});

// --- Info modal ---
const infoBtn = document.getElementById("infoBtn");
const infoModal = document.getElementById("infoModal");
const infoClose = document.getElementById("infoClose");

infoBtn.addEventListener("click", () => {
  infoModal.hidden = !infoModal.hidden;
});

infoClose.addEventListener("click", () => {
  infoModal.hidden = true;
});

document.addEventListener("click", (e) => {
  if (!infoModal.hidden && !infoModal.contains(e.target) && e.target !== infoBtn) {
    infoModal.hidden = true;
  }
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && !infoModal.hidden) {
    infoModal.hidden = true;
  }
});

// --- Starter prompts ---
const starterPrompts = document.getElementById("starterPrompts");

starterPrompts.addEventListener("click", (e) => {
  const chip = e.target.closest(".starter-chip");
  if (!chip || chatLoading) return;
  aiInput.value = chip.textContent;
  aiForm.requestSubmit();
});

