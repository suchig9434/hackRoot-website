# hackRoot-website
Below you’ll find:

A polished blueprint (pages, components, layout, UX details).

Visual / branding guidance (palette, fonts, imagery, animations).

Folder structure & assets.

A ready-to-use starter code (index.html, styles.css, script.js) you can drop into a folder and open in the browser.
(You said no “rough structure” — I made this a concrete, usable blueprint + starter.)

1 — Sitemap (what to build)

Home (hero, value proposition, latest project idea, CTA)

About / Team (profiles, roles, timeline — pulled from your PDF). 

hackRoot pdf

Projects (short cards for Project Idea #1, #2 — fake-news detector & medical summarizer). 

hackRoot pdf

Timeline (visual roadmap / milestones) — learning → dummy projects → hackathon. 

hackRoot pdf

Contact / Join (Discord/Slack/GitHub links + simple join form)

(Optional) Admin / Dashboard (if you later want to show internal progress)

2 — Page-level wireframes & key components

Home (hero)

Full-width gradient hero with short tagline “HackRoot — building better hackathon projects”

CTA buttons: “Meet the Team” / “See Projects”

Small rotating cards under hero showing 2–3 core project ideas.

About / Team

Grid of cards (photo/icon, name, role, 2–3 bullet responsibilities). Use the team list/roles from the PDF (Prateek — AI/ML & Backend Lead, Suchi — Frontend Lead, Krishna — DB, Lakshya — MERN, Shivi — Frontend Support/QA). 

hackRoot pdf

Click a card → modal / expanded profile with responsibilities and timeline bullets.

Projects

Card layout with badges (MVP / GenAI / Backend-ready). Each card: title, one-line description, core features, quick demo link.

Timeline

Horizontal or vertical stepper with milestones (Learning Phase, Dummy Project Phase, Hackathon) and dates from PDF. 

hackRoot pdf

Contact / Join

Simple form (name, role/interests, GitHub/LinkedIn, message). Connect to GitHub issues or email via form handler later.

Shared UI elements

Top sticky nav (logo left, links right).

Footer with social links, GitHub, meeting cadence note.

Reusable CSS variables for theme.

3 — Visual identity (premium, modern)

Palette (clean, techy, premium):

Deep navy: #081737 (background / header)

Electric blue: #1E90FF (accent / buttons)

Cyan / teal: #00D4FF (secondary accents)

Soft slate: #F4F7FB (cards background)

Text dark: #0B1B2B

Typography:

Headings: Inter or Poppins (bold)

Body: Roboto or Inter regular

Use Google Fonts and variable font weights.

Imagery: neon/tech photos + simple SVG icons. Use subtle glassmorphism on cards (blur + light borders) for premium look.

Spacing: roomy padding (32–48px sections), 12–18px base font size, 1.5 line-height.

4 — Interaction design & micro-animations

Hero: subtle parallax on background image, CTA hover lift.

Cards: hover lift + shadow + slight scale.

Modal: slide down + fade.

Smooth scroll for nav.

Lazy-loading images; reduce motion setting respects user preference.

5 — Accessibility & responsiveness

Semantic HTML (header, main, section, nav, footer).

Keyboard-focus styles, contrast >= 4.5:1 for normal text.

Responsive grid: 1 column mobile → 2 columns tablet → 3 columns desktop.



hackroot-website/
├─ index.html
├─ about.html
├─ projects.html
├─ timeline.html
├─ contact.html
├─ css/
│  └─ styles.css
├─ js/
│  └─ script.js
├─ images/
│  └─ (team photos, hero, icons)
└─ assets/
   └─ fonts/ (if self-host)
