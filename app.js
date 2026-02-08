const FILES = {
  about: {
    title: "about.md",
    content: `
<h1>About Me</h1>
<div class="about-layout">
  <div class="about-right">
    <p>
      Hi, I'm Marcus Clement. I'm a University of Washington Informatics student focused
      on data science with a business minor. I like building practical things that make
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
      I'm currently looking for internships across data, software, and product
      engineering where I can continue delivering value and learning.
    </p>
    <h2>Core Skills</h2>
    <ul>
      <li>Full Stack Development, Data/DBs, Cloud Computing</li>
      <li>Agile Methodologies, Data Visualization, LLMs</li>
      <li>Python, R, SQL, Tableau, Power BI, Excel, AWS, Azure, Java</li>
      <li>TypeScript, Next.js, React, Git, AI, Snowflake, Tailwind CSS</li>
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
        src="./golf.mov"
        autoplay
        muted
        loop
        playsinline
      ></video>
      <div class="about-media-caption">// FORE!</div>
    </div>
  </div>
</div>
<h2>Tech Stack</h2>
<div class="tech-grid" aria-label="Technologies">
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" alt="Python" title="Python" />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/r/r-original.svg" alt="R" title="R" />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JavaScript" title="JavaScript" />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" alt="TypeScript" title="TypeScript" />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React" title="React" />
  <img src="./next.jpg" alt="Next.js" title="Next.js" />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" alt="Java" title="Java" />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" alt="Git" title="Git" />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" alt="Tailwind CSS" title="Tailwind CSS" />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg" alt="Azure" title="Azure" />
  <img src="./aws.png" alt="AWS" title="AWS" />
  <img src="./sql.png" alt="SQL" title="SQL" />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" alt="PostgreSQL" title="PostgreSQL" />
  <img src="./tableau.jpg" alt="Tableau" title="Tableau" />
  <img src="./GCP.png" alt="Google Cloud Platform" title="Google Cloud Platform" />
  <img src="./excel.png" alt="Excel" title="Excel" />
  <img src="https://cdn.simpleicons.org/snowflake/29B5E8" alt="Snowflake" title="Snowflake" />
  <img src="./gpt.png" alt="AI" title="AI / LLMs" />
  <img src="./bi.png" alt="Power BI" title="Power BI" />
  <img src="./htmlcss.jpg" alt="HTML & CSS" title="HTML & CSS" />
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
<p>Pursuing B.S. Informatics (Data Science), Minor in Business (Sep 2025 - Jun 2027)</p>
<p class="resume-edu">
  <img class="resume-logo" src="./bc.png" alt="Bellevue College logo" />
  <strong>Bellevue College</strong> — Bellevue, WA
</p>
<p>Associate's in Arts and Sciences (Sep 2023 - Jun 2025)</p>
<h2>Experience</h2>
<p class="resume-company">
<span class="resume-hint">// click on the AirPLAi logo</span>
  <a
    class="resume-company-link"
    href="https://airplaisports.com/"
    target="_blank"
    rel="noreferrer"
  >
    <img class="resume-logo" src="./airplai.jpeg" alt="AirPLAi logo" />
    <strong>AirPLAi</strong>
  </a>
  <span class="resume-role">— AI Product Engineer Intern (Jan 2026 - Present)</span>
</p>
<ul>
  <li>Running builds/tests, building UI features, debugging CI/Dev issues.</li>
  <li>Improving LLM workflow quality with prompt logic and SQL retrieval.</li>
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
  <li>Developing features across React frontend, API routes, and backend.</li>
  <li>Collaborating with design and product leads for client solutions.</li>
  <li>Implementing UI components with best practices via GitHub workflows.</li>
</ul>
<p class="resume-company">
  <img class="resume-logo" src="./everlane.jpeg" alt="Everlane logo" />
<strong>Everlane Landscaping</strong>
  <span class="resume-role">— Data Science Intern (Aug 2025 - Nov 2025)</span>
</p>
<ul>
  <li>Built automated Python pipeline to process 100+ monthly logs.</li>
  <li>Created Tableau dashboards improving reporting accuracy by 25%.</li>
  <li>Modeled data to identify high-value segments, boosting retention 12%.</li>
</ul>
<p class="resume-company">
  <img class="resume-logo" src="./costco.png" alt="Costco Wholesale logo" />
  <strong>Costco Wholesale</strong>
  <span class="resume-role">— Member Service Agent (Jan 2024 - Present)</span>
</p>
<ul>
  <li>Provided technical ops support for ecommerce availability.</li>
  <li>Analyzed weekly KPI dashboards to optimize service performance.</li>
</ul>
<p class="resume-company">
<span class="resume-hint">// click on the DECA logo</span>
  <a
    class="resume-company-link"
    href="https://www.deca.org/"
    target="_blank"
    rel="noreferrer"
  >
    <img class="resume-logo" src="./deca.png" alt="DECA logo" />
    <strong>DECA</strong>
  </a>
  <span class="resume-role">— Business Operations Analyst (Sep 2021 - Jun 2023)</span>
</p>
<ul>
  <li>Produced three 20-page operations research reports.</li>
  <li>Shared insights that informed strategic decisions for clients.</li>
</ul>
<h2>Projects</h2>
<p class="project-entry">
  <span class="resume-hint">// click on the Nick-Blendz logo</span>
  <a
    class="project-link project-link--stacked"
    href="https://nick-blendz.com"
    target="_blank"
    rel="noreferrer"
  >
    <img class="project-logo" src="./nickblendz.webp" alt="Nick-Blendz logo" />
    <span class="project-title">Nick-Blendz.com — Online Booking Application (Jun 2025 - Jul 2025)</span>
  </a>
</p>
<ul>
  <li>Built and deployed full stack platform with Next.js and AWS.</li>
  <li>Designed database schema to reduce manual booking by 80%.</li>
  <li>Integrated scheduling API and analytics dashboards.</li>
</ul>
<p><strong>Medi-Scribe</strong> — AI Medical Transcriber (Sep 2025 - Present)</p>
<ul>
  <li>Building HIPAA-compliant transcription on AWS and React.</li>
  <li>Automating audio capture, transcription, and summarization.</li>
</ul>
<p><strong>Document Management System</strong> (Jun 2024 - Jul 2024)</p>
<ul>
  <li>Built PostgreSQL system for a real estate investor.</li>
  <li>Designed relational schema and SQL backend using JSON.</li>
</ul>
<h2>Certifications</h2>
<div class="cert-grid">
  <div class="cert-card">
    <img class="cert-logo cert-logo--aws" src="./aws.png" alt="AWS logo" />
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
  <a class="pdf-link" href="MarcusClementResume.pdf" target="_blank" rel="noreferrer" aria-label="Open resume PDF">
    <span class="pdf-icon">PDF</span>
    <span class="pdf-text">Open MarcusClementResume.pdf</span>
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
  <li>This website! A portfolio that uses editor metaphors to make browsing feel familiar to developers.</li>
  <li>Built with HTML, CSS, JavaScript, and deployed on Vercel, designed to mimic my current favorite IDE, Cursor.</li>
</ul>

<h2>Nick-Blendz.com — Online Booking Application</h2>
<p class="resume-company">
  <span class="resume-hint">// click on the Nick-Blendz logo</span>
  <a
    class="resume-company-link"
    href="https://nick-blendz.com"
    target="_blank"
    rel="noreferrer"
  >
    <img class="resume-logo" src="./nickblendz.webp" alt="Nick-Blendz logo" />
    <strong>Nick-Blendz.com</strong>
  </a>
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
  <li>Email: mvcus8235@gmail.com</li>
  <li>Phone: 425-757-6331</li>
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
  <span class="resume-role">— Consultant (Jan 2026 - Present)</span>
</p>
<ul>
  <li>
    Currently working with
    <a href="https://socratics.ai" target="_blank" rel="noreferrer">Socratics.ai</a>
    a vertical AI fintech startup designed to
    automate complex data ingestion and financial modeling workflows for private capital
    markets.
  </li>
  <li>
    Synthesizing technical findings into concise, client facing insights to support model
    remediation and decision making.
  </li>
  <li>
    Collaborating with cross functional student consulting teams to analyze client
    business problems and translate them into data driven insights and recommendations.
  </li>
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
  <li>Developing features across React frontend, API routes, and backend.</li>
  <li>Collaborating with design and product leads for client solutions.</li>
  <li>Implementing UI components with best practices via GitHub workflows.</li>
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
  <span class="resume-role">— Fraternity Member (Jan 2026 - Present)</span>
</p>
<ul>
  <li>Led pledge education workshops.</li>
  <li>Attended professional development workshops and networking events.</li>
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
<p class="resume-company">
  <img class="resume-logo" src="./network.jpeg" alt="NetworkAI logo" />
  <strong>NetworkAI</strong>
  <span class="resume-role">— Director of Technology (Jan 2026 - Present)</span>
</p>
<ul>
  <li>Leading AI workshops for club and directing technical member development content.</li>
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
const aiReplies = [
  "Sorry I'm just for show :)",
  "Mock response: I don't have model access yet.",
  "I'm a decorative panel, but I look convincing.",
  "Pretend I just summarized your resume perfectly.",
  "This is a fake AI pane to match the Cursor vibe.",
  "I can only respond with good vibes today.",
  "Not connected, but happy to sit here.",
  "Ask again later — still just a UI demo.",
  "I wish I could help, but I'm just a mock.",
  "This chat is for aesthetics only, sorry!",
  "If this were real, I'd say: nice projects.",
  "Beep boop — placeholder response.",
  "Design-forward, data-driven, and still fake.",
  "I'm just here to make the UI feel familiar.",
  "No tokens were spent answering this.",
  "Imagine I just fixed your bug instantly.",
  "This pane is for show, not for answers.",
  "Mock AI: try the tabs on the left.",
];
let aiReplyIndex = 0;
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
  aiMessages.scrollTop = aiMessages.scrollHeight;
};

aiForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const text = aiInput.value.trim();
  if (!text) return;
  appendAiMessage("user", text);
  appendAiMessage("bot", aiReplies[aiReplyIndex % aiReplies.length]);
  aiReplyIndex += 1;
  aiInput.value = "";
});
