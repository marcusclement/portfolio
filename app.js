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
      Most of what I do sits between software, data, and the people who use it. I enjoy
      owning problems end to end: sitting down with stakeholders to scope what they
      actually need, shipping a simple version, then iterating until it is reliable and
      genuinely useful. Lately that has meant architecting agentic AI systems on cloud
      infrastructure, plus the enablement work that gets people actually using them.
    </p>
    <p>
      Outside of school and work, I'm into running marathons, lifting, hiking around Washington,
      mountain biking, and golfing (even though I suck). I follow the NBA closely and I'm a
      Seahawks fan. I'm currently looking for full time roles following graduation across data,
      software, and product engineering where I can continue delivering value and learning.
    </p>
    <p>
      Feel free to browse through my portfolio using the files on the left!
    </p>
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
<div class="about-skills">
    <h2>Core Skills</h2>
    <ul class="skill-tags">
      <li class="skill-tag"><svg class="skill-tag-icon" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"/><path d="M20 2v4"/><path d="M22 4h-4"/><circle cx="4" cy="20" r="2"/></svg>Applied AI</li>
      <li class="skill-tag"><svg class="skill-tag-icon" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 8V4H8"/><rect width="16" height="12" x="4" y="8" rx="2"/><path d="M2 14h2"/><path d="M20 14h2"/><path d="M15 13v2"/><path d="M9 13v2"/></svg>Agentic Automation</li>
      <li class="skill-tag"><svg class="skill-tag-icon" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"/></svg>Cloud Architecture</li>
      <li class="skill-tag"><svg class="skill-tag-icon" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10 22V7a1 1 0 0 0-1-1H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-5a1 1 0 0 0-1-1H2"/><rect x="14" y="2" width="8" height="8" rx="1"/></svg>Solutions Engineering</li>
      <li class="skill-tag"><svg class="skill-tag-icon" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m16 18 6-6-6-6"/><path d="m8 6-6 6 6 6"/></svg>Full-Stack Development</li>
      <li class="skill-tag"><svg class="skill-tag-icon" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><path d="M16 3.128a4 4 0 0 1 0 7.744"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><circle cx="9" cy="7" r="4"/></svg>Consulting</li>
    </ul>
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
      <div class="tech-item tech-item--q-business"><img src="./quicksuite.jpg" alt="Amazon Q Business / Quick Suite" /><span class="tech-label">Amazon Q Business / Quick Suite</span></div>
      <div class="tech-item"><img src="./gems.png" alt="Gemini Gems" /><span class="tech-label">Gemini Gems</span></div>
      <div class="tech-item"><img src="https://cdn.simpleicons.org/langchain/1C3C3C" alt="LangGraph" /><span class="tech-label">LangGraph</span></div>
      <div class="tech-item tech-item--light-bg"><img src="https://raw.githubusercontent.com/lobehub/lobe-icons/master/packages/static-svg/icons/mcp.svg" alt="MCP" /><span class="tech-label">MCP</span></div>
      <div class="tech-item"><img src="./RAG.png" alt="RAG" /><span class="tech-label">RAG</span></div>
      <div class="tech-item tech-item--claude-code"><img src="./claudecode.png" alt="Claude Code" /><span class="tech-label">Claude Code</span></div>
      <div class="tech-item tech-item--cursor"><img src="./cursor.png" alt="Cursor" /><span class="tech-label">Cursor</span></div>
    </div>
  </div>
  <div class="tech-row">
    <span class="tech-row-label">AI techniques</span>
    <ul class="tech-chips">
      <li class="tech-chip">Multi-Agent Orchestration</li>
      <li class="tech-chip">Prompt &amp; Context Engineering</li>
      <li class="tech-chip">Guardrails</li>
    </ul>
  </div>
</div>
<div class="about-skills">
    <h2>Spoken Languages</h2>
    <ul class="tech-chips">
      <li class="tech-chip">English &mdash; Native</li>
      <li class="tech-chip">Spanish &mdash; Intermediate</li>
      <li class="tech-chip">Tamil &mdash; Beginner</li>
    </ul>
</div>
`,
  },
  experience: {
    title: "experience.md",
    content: `
<h2>Education</h2>
<p class="resume-edu">
  <img class="resume-logo" src="./uw.png" alt="University of Washington logo" />
  <strong>University of Washington</strong> (GPA 3.93) — Seattle, WA
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
  <span class="resume-role">— AI Integrations Engineer Intern (Jun 2026 - Aug 2026)</span>
</p>
<ul>
  <li>Built agentic automation for 400+ multi-service accounts, cutting report generation time 92% and protecting $762M ARR.</li>
  <li>Drove cross-functional enablement and governance for enterprise rollout of agentic AI platform across Proofpoint.</li>
  <li>Translated ambiguous stakeholder goals into agentic AI workflows, owning scoping and delivery from pilot to production.</li>
  <li>Architected agentic pipelines integrating Salesforce and Totango APIs with multi-step LLM orchestration and guardrails.</li>
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
  <span class="resume-role">— AI Systems Engineer Intern (Mar 2026 - May 2026)</span>
</p>
<ul>
  <li>Engineered AI document processing pipeline for financial data ingestion, model-driven classification, and HITL validation.</li>
  <li>Presented AI workflow architecture to executive team, defining automation strategy and feature priorities for production.</li>
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
  <span class="resume-role">— AI Product Engineer Intern (Jan 2026 - Mar 2026)</span>
</p>
<ul>
  <li>Engineered prompt and context strategies for production AI chatbot, implementing guardrails and scoping new features.</li>
  <li>Built agent workflows and data retrieval logic in Python using LangGraph and FastAPI.</li>
  <li>Implemented UI accessibility features for sports AI chatbot, adding inline tooltip overlays for key term definitions.</li>
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
  <span class="resume-role">— Software Engineer (Jan 2026 - Jun 2026)</span>
</p>
<ul>
  <li>Developed features across React frontend, API routes, and backend, owning implementation to deployment under deadlines.</li>
  <li>Collaborated cross functionally with design and product leads to deliver user focused web solutions for external clients.</li>
</ul>
<p class="resume-company">
  <img class="resume-logo" src="./costco.png" alt="Costco Wholesale logo" />
  <strong>Costco Wholesale</strong>
  <span class="resume-role">— Member Service Agent (Feb 2024 - Jun 2026)</span>
</p>
<p style="font-style: italic; margin-top: 2px; font-size: 13px; color: #8a8f98;">College Retention Program since Sep 2025</p>
<ul>
  <li>Assisted customers through complex issues via chat/phone, translating technical processes into clear explanations.</li>
  <li>Consistently exceeded performance expectations by over 50% through strong communication and problem-solving.</li>
</ul>
<p class="resume-company">
  <img class="resume-logo" src="./everlane.jpeg" alt="Everlane logo" />
<strong>Everlane Landscaping</strong>
  <span class="resume-role">— Data Science Intern (Jun 2025 - Aug 2025)</span>
</p>
<ul>
  <li>Built automated Python pipeline to process 100+ monthly logs, optimizing routing, reducing job-time by 15%.</li>
  <li>Conducted data modeling to identify high-value customer segments, leading to a 12% increase in customer retention.</li>
</ul>
<h2>Certifications</h2>
<div class="cert-grid">
  <div class="cert-card">
    <img class="cert-logo cert-logo--aws" src="./awsreal.webp" alt="AWS logo" />
    <div class="cert-label">AWS</div>
    <ul>
      <li>Solutions Architect Associate (SAA-C03)</li>
      <li>Cloud Practitioner (CLF-C02)</li>
      <li>AI Practitioner (AIF-C01)</li>
      <li class="cert-pending">Preparing for Gen AI Developer</li>
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
  <a class="pdf-link" href="Marcus_Clement_Resume.pdf" download rel="noreferrer" aria-label="Download resume PDF">
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
  <span class="resume-role">— Custom Obsidian Dashboard (Apr 2026 - Jun 2026)</span>
</p>
<ul>
  <li>Built a custom dashboard aggregating task management, goal tracking, and live health metrics in a single view.</li>
  <li>Integrated the WHOOP + Strava REST APIs using OAuth 2.0 with automated token refresh, building a Python/Bash launchd pipeline to sync daily sleep, recovery, activities, and HRV metrics.</li>
  <li>Deployed a Dockerized MCP server to connect Claude AI to the vault, enabling natural language note management and file operations.</li>
  <li>Built an AI-generated daily training brief using the Claude API, synthesizing recovery scores, pace history, and weekly mileage into a personalized coaching summary delivered automatically each morning.</li>
  <li>Embedded a live Google Calendar day view by registering an OAuth 2.0 client in Google Cloud Console and configuring API scopes and redirect URIs.</li>
</ul>
<details class="shot-folder">
  <summary class="shot-folder-summary">
    <span class="shot-folder-caret" aria-hidden="true"></span>
    <span class="shot-folder-name">screenshots/</span>
    <span class="shot-folder-count">7 items</span>
  </summary>
  <div class="shot-grid">
    <figure class="shot">
      <span class="shot-frame">
        <img src="./pps-homebase.png" alt="Home Base dashboard with quick nav and schedule" loading="lazy" />
      </span>
      <figcaption>Home Base — daily landing page with quick nav</figcaption>
    </figure>
    <figure class="shot">
      <span class="shot-frame">
        <img src="./pps-brief.png" alt="AI-generated daily training brief" loading="lazy" />
      </span>
      <figcaption>Daily Brief — coaching summary generated by the Claude API</figcaption>
    </figure>
    <figure class="shot">
      <span class="shot-frame">
        <img src="./pps-schedule.png" alt="Embedded Google Calendar day view" loading="lazy" />
      </span>
      <figcaption>Today's Schedule — embedded Google Calendar day view</figcaption>
    </figure>
    <figure class="shot">
      <span class="shot-frame">
        <img src="./pps-sleep.png" alt="Nightly WHOOP sleep and recovery metrics" loading="lazy" />
      </span>
      <figcaption>Sleep &amp; Recovery — nightly metrics synced from WHOOP</figcaption>
    </figure>
    <figure class="shot">
      <span class="shot-frame">
        <img src="./pps-run.png" alt="Most recent run synced from Strava" loading="lazy" />
      </span>
      <figcaption>Last Run — activity synced from Strava</figcaption>
    </figure>
    <figure class="shot">
      <span class="shot-frame">
        <img src="./pps-tasks.png" alt="To do list and long term goals" loading="lazy" />
      </span>
      <figcaption>To Do &amp; Goals — task and goal tracking</figcaption>
    </figure>
    <figure class="shot">
      <span class="shot-frame">
        <img src="./pps-habits.png" alt="28 day habit streak grid" loading="lazy" />
      </span>
      <figcaption>Habit Grid — 28-day streak tracking</figcaption>
    </figure>
  </div>
</details>

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
  <span class="resume-role">— HIPAA-Compliant Transcription System (Sep 2025 - Dec 2025)</span>
</p>
<ul>
  <li>Architected a HIPAA-compliant medical transcription pipeline on AWS (S3, Lambda, Transcribe Medical, Bedrock) and React.</li>
  <li>Automated clinical documentation workflows for doctor-patient interactions, improving transcription efficiency end to end.</li>
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
<h2>Clubs &amp; Organizations</h2>
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
  <span class="resume-role">— Software Engineer (Jan 2026 - Jun 2026)</span>
</p>
<ul>
  <li>Developed features across React frontend, API routes, and backend.</li>
  <li>Collaborated with design and product leads for client solutions.</li>
  <li>Implemented UI components with best practices via GitHub workflows.</li>
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
  <li>Leading club-sponsored workshops to teach and enable AI skills and projects.</li>
  <li>Built, deployed, and maintained club website. <a href="https://uwnetworkai.com/" target="_blank" rel="noreferrer">uwnetworkai.com</a></li>
</ul>
<p class="resume-company">
  <span class="resume-hint">// click on the Kappa Theta Pi logo</span>
  <a
    class="resume-company-link"
    href="https://ktp-uw-website.vercel.app/homepage"
    target="_blank"
    rel="noreferrer"
  >
  <img class="resume-logo" src="./ktp.jpg" alt="Kappa Theta Pi logo" />
  <strong>Kappa Theta Pi</strong>
  </a>
  <span class="resume-role">— Education Committee Director (Jan 2026 - Present)</span>
</p>
<ul>
  <li>Directed career development content for members of a professional technology fraternity.</li>
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
<h2>Volunteering</h2>
<p class="resume-company">
  <span class="resume-hint">// click on the Ronald McDonald House logo</span>
  <a
    class="resume-company-link"
    href="https://rmhcbayarea.org/"
    target="_blank"
    rel="noreferrer"
  >
    <img class="resume-logo" src="./RonaldMcDonaldHouse.jpeg" alt="Ronald McDonald House Charities logo" />
    <strong>Ronald McDonald House</strong>
  </a>
  <span class="resume-role">— Strategy Consultant (Jul 2026)</span>
</p>
<ul>
  <li>Participated in the RMHC Bay Area &times; Proofpoint Hackathon to redesign the Comfort &amp; Joy Holiday Drive, a program delivering 10,000+ toys annually to families of critically ill children across the Bay Area.</li>
</ul>
<p class="resume-company">
  <span class="resume-hint">// click on the Liberty High School logo</span>
  <a
    class="resume-company-link"
    href="https://libertyselectbasketball.com/about"
    target="_blank"
    rel="noreferrer"
  >
    <img class="resume-logo" src="./IssaquahSchoolDistrict.jpeg" alt="Issaquah School District logo" />
    <strong>Liberty Sr High School</strong>
  </a>
  <span class="resume-role">— Basketball Camp Counselor (Jun 2022)</span>
</p>
<ul>
  <li>Assisted with the annual Liberty Select Basketball Camp for K-8 students.</li>
</ul>
<p class="resume-company">
  <span class="resume-hint">// click on the Upward Sports logo</span>
  <a
    class="resume-company-link"
    href="https://www.upward.org/"
    target="_blank"
    rel="noreferrer"
  >
    <img class="resume-logo" src="./Upward.jpeg" alt="Upward Sports logo" />
    <strong>Upward Sports</strong>
  </a>
  <span class="resume-role">— Basketball Coach (Jan 2019 - Mar 2019)</span>
</p>
<ul>
  <li>Coached a 5th-6th grade youth basketball team through a full season.</li>
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

// --- Screenshot lightbox ---
editorPane.addEventListener("click", (event) => {
  const thumb = event.target.closest(".shot img");
  if (!thumb) return;

  const overlay = document.createElement("div");
  overlay.className = "lightbox";

  const full = document.createElement("img");
  full.src = thumb.src;
  full.alt = thumb.alt;
  // Captures are low resolution, so cap the blow-up rather than letting a
  // small image stretch across the whole viewport.
  const sizeToNatural = () => {
    const cap = Math.min(full.naturalWidth * 3, 1100);
    full.style.width = `min(100%, ${cap}px)`;
  };
  if (full.complete && full.naturalWidth) sizeToNatural();
  else full.addEventListener("load", sizeToNatural);

  const caption = document.createElement("div");
  caption.className = "lightbox-caption";
  caption.textContent =
    thumb.closest(".shot")?.querySelector("figcaption")?.textContent ?? "";

  const close = () => {
    overlay.remove();
    document.removeEventListener("keydown", onKeydown);
  };

  const onKeydown = (e) => {
    if (e.key === "Escape") close();
  };

  overlay.append(full, caption);
  overlay.addEventListener("click", close);
  document.addEventListener("keydown", onKeydown);
  document.body.appendChild(overlay);
});

// --- Starter prompts ---
const starterPrompts = document.getElementById("starterPrompts");

starterPrompts.addEventListener("click", (e) => {
  const chip = e.target.closest(".starter-chip");
  if (!chip || chatLoading) return;
  aiInput.value = chip.textContent;
  aiForm.requestSubmit();
});

// --- Mobile explorer drawer and collapsible chat ---
// Everything here is a class on .app; the CSS that reacts to it lives entirely
// inside the 900px media query, so desktop is unaffected.
const sidebar = document.getElementById("sidebar");
const explorerToggle = document.getElementById("explorerToggle");
const explorerClose = document.getElementById("explorerClose");
const drawerBackdrop = document.getElementById("drawerBackdrop");
const chatToggle = document.getElementById("chatToggle");
const mobileLayout = window.matchMedia("(max-width: 900px)");

const isDrawerOpen = () => appEl.classList.contains("drawer-open");

const setDrawer = (open) => {
  if (open === isDrawerOpen()) return;
  appEl.classList.toggle("drawer-open", open);
  explorerToggle.setAttribute("aria-expanded", open ? "true" : "false");

  if (open) {
    // The drawer is visibility: hidden when closed, and Chrome keeps refusing
    // focus() for a frame after that flips — computed visibility is already
    // "visible" and a forced reflow doesn't help, so wait out two frames.
    requestAnimationFrame(() =>
      requestAnimationFrame(() => explorerClose.focus())
    );
  } else if (sidebar.contains(document.activeElement)) {
    explorerToggle.focus();
  }
};

explorerToggle.addEventListener("click", () => setDrawer(!isDrawerOpen()));
explorerClose.addEventListener("click", () => setDrawer(false));
drawerBackdrop.addEventListener("click", () => setDrawer(false));

// Separate from the openFile listener above so picking a file still works
// exactly as before; this only dismisses the drawer afterwards.
fileList.addEventListener("click", (event) => {
  if (event.target.closest(".file-item")) setDrawer(false);
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") setDrawer(false);
});

// Dropping back to desktop mid-drawer would leave a stale aria-expanded on a
// control that is no longer rendered.
mobileLayout.addEventListener("change", (e) => {
  if (!e.matches) setDrawer(false);
});

chatToggle.addEventListener("click", () => {
  const open = !appEl.classList.contains("chat-open");
  appEl.classList.toggle("chat-open", open);
  chatToggle.setAttribute("aria-expanded", open ? "true" : "false");
  chatToggle.setAttribute("aria-label", open ? "Collapse AI chat" : "Expand AI chat");
  if (open) scrollToBottom(false);
});

