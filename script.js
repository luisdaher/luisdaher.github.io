const proofItems = [
  { value: "20+ years", detail: "Technology, games and digital products" },
  { value: "50+ projects", detail: "Delivered through Cavylabs" },
  { value: "Since 2024", detail: "Speaker and panelist at gamescom latam" },
  { value: "Mentor", detail: "Mentorias Games Brasil" },
];

const workItems = [
  {
    title: "Cavylabs",
    role: "Co-founder / Studio Head",
    description:
      "Game technology studio focused on porting, co-development, AR/XR, apps, original IPs, and cross-platform delivery.",
    tags: ["Founder", "Studio Leadership", "Porting", "Co-dev", "AR/XR"],
    link: "https://cavylabs.com/",
    featured: true,
  },
  {
    title: "MegaBattle",
    role: "Co-founder / Production / Business / Development Leadership",
    description:
      "Sci-fi roguelike deckbuilder and robot card battler developed through MadCat, combining tactical combat, deckbuilding, and robot customization.",
    tags: ["Games", "Production", "Business", "Original IP", "Deckbuilding"],
    link: "https://store.steampowered.com/app/1602030/MegaBattle/",
    featured: true,
  },
  {
    title: "Mentorias Games Brasil",
    role: "Mentor / Platform Contributor",
    description:
      "Mentor in game development and entrepreneurship. Contributed to the migration of the initiative to its current platform.",
    tags: ["Mentorship", "Community", "Entrepreneurship", "Games"],
    link: "https://mentoriasgamesbr.ementor.com.br/mentor/luisdaher/",
  },
  {
    title: "Sokobalien",
    role: "Original IP / Game Development",
    description:
      "Puzzle game developed by Cavylabs, later expanded across platforms and used as part of the studio's original IP portfolio.",
    tags: ["Original IP", "Puzzle", "Game Development"],
    link: "https://store.steampowered.com/app/1924590/Sokobalien",
  },
];

const expertiseItems = [
  {
    title: "Studio Leadership",
    description:
      "Production, team coordination, client communication, project strategy, and delivery.",
  },
  {
    title: "Cross-platform Development",
    description:
      "PC, consoles, mobile, web, porting, platform adaptation, and release support.",
  },
  {
    title: "Technical Direction",
    description:
      "Unity, architecture, performance, build pipelines, SDKs, debugging, and technical decision-making.",
  },
  {
    title: "Product Building",
    description:
      "Apps, chatbots, AR/XR, games, tools, and digital products from concept to launch.",
  },
  {
    title: "Business & Partnerships",
    description:
      "Publisher conversations, co-development, external development, pitch strategy, and client relationships.",
  },
  {
    title: "Mentorship & Public Speaking",
    description:
      "Mentorship, panels, talks, events, entrepreneurship, production, and the Brazilian games industry.",
  },
];

const leadershipItems = [
  {
    title: "Gamescom Latam",
    description:
      "Speaker and panelist since 2024, discussing game development, entrepreneurship, production, and the Brazilian games industry.",
  },
  {
    title: "Mentorias Games Brasil",
    description:
      "Mentor in game development and entrepreneurship. Contributed to the migration of the initiative to its current platform.",
  },
  {
    title: "Brazilian Games Industry",
    description:
      "Active in events, business meetings, showcases, and international industry conversations.",
  },
];

const timelineItems = [
  {
    period: "2024-Present",
    title: "Industry Voice",
    description:
      "Speaker and panelist at Gamescom Latam and other industry initiatives, contributing to conversations around games, entrepreneurship, production, and the Brazilian industry.",
  },
  {
    period: "2019-Present",
    title: "Studio Leadership",
    description:
      "Cavylabs becomes the main professional focus, expanding into porting, co-development, AR/XR, original IP, business development, and international partnerships.",
  },
  {
    period: "2014-2019",
    title: "Building Cavylabs in Parallel",
    description:
      "Started shaping Cavylabs while working in global technical projects. The studio gradually evolved from an independent initiative into a structured business.",
  },
  {
    period: "2003-2014",
    title: "Technical Foundation",
    description:
      "Software, games, apps, mobile, web, and product development. A hands-on foundation that still informs his leadership style today.",
  },
];

function renderList(containerId, items, renderer) {
  const container = document.getElementById(containerId);
  if (!container) {
    return;
  }

  container.innerHTML = items.map(renderer).join("");
}

function isPlaceholderLink(link) {
  return typeof link === "string" && /^\[ADD_[A-Z0-9_]+\]$/.test(link);
}

renderList(
  "proof-grid",
  proofItems,
  (item) => `
    <article class="proof-item reveal">
      <strong>${item.value}</strong>
      <span>${item.detail}</span>
    </article>
  `,
);

renderList("work-grid", workItems, (item) => {
  const placeholder = isPlaceholderLink(item.link);
  const linkMarkup = item.link
    ? placeholder
      ? `<p class="work-link pending">${item.link}</p>`
      : `<a class="work-link" href="${item.link}" target="_blank" rel="noreferrer">Check it out!</a>`
    : "";

  return `
    <article class="work-card ${item.featured ? "featured" : ""} reveal">
      <h3>${item.title}</h3>
      <p class="work-meta">${item.role}</p>
      <p>${item.description}</p>
      ${linkMarkup}
      <ul class="work-tags">
        ${item.tags.map((tag) => `<li>${tag}</li>`).join("")}
      </ul>
    </article>
  `;
});

renderList(
  "expertise-grid",
  expertiseItems,
  (item) => `
    <article class="expertise-card reveal">
      <h3>${item.title}</h3>
      <p>${item.description}</p>
    </article>
  `,
);

renderList(
  "leadership-grid",
  leadershipItems,
  (item) => `
    <article class="leadership-card reveal">
      <h3>${item.title}</h3>
      <p>${item.description}</p>
    </article>
  `,
);

renderList(
  "timeline-list",
  timelineItems,
  (item) => `
    <li class="reveal">
      <span class="period">${item.period}</span>
      <h3>${item.title}</h3>
      <p>${item.description}</p>
    </li>
  `,
);

function createPlaceholderDataUri(text) {
  const svg = `<svg xmlns='http://www.w3.org/2000/svg' width='1200' height='1200'><rect width='100%' height='100%' fill='#ece4d7'/><rect x='40' y='40' width='1120' height='1120' rx='24' fill='#f8f4ec' stroke='#d8cfbf' stroke-width='4'/><text x='50%' y='48%' text-anchor='middle' fill='#6f6a61' font-size='40' font-family='Arial, sans-serif'>Image placeholder</text><text x='50%' y='54%' text-anchor='middle' fill='#8f887d' font-size='28' font-family='Arial, sans-serif'>${text}</text></svg>`;
  return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;
}

document.querySelectorAll("img[data-fallback]").forEach((image) => {
  image.addEventListener("error", () => {
    image.src = createPlaceholderDataUri(
      image.dataset.fallback || "Portfolio image",
    );
  });
});

const revealElements = document.querySelectorAll(".reveal");
const reducedMotion = window.matchMedia(
  "(prefers-reduced-motion: reduce)",
).matches;

const themeToggle = document.getElementById("theme-toggle");
const themeStorageKey = "theme-preference";

function getCurrentTheme() {
  return document.documentElement.getAttribute("data-theme") === "dark"
    ? "dark"
    : "light";
}

function updateThemeToggle(theme) {
  if (!themeToggle) {
    return;
  }

  const isDark = theme === "dark";
  themeToggle.setAttribute("aria-pressed", String(isDark));
  themeToggle.setAttribute(
    "aria-label",
    isDark ? "Switch to light mode" : "Switch to dark mode",
  );
  themeToggle.textContent = isDark ? "Light mode" : "Dark mode";
}

function applyTheme(theme) {
  const normalizedTheme = theme === "dark" ? "dark" : "light";
  document.documentElement.setAttribute("data-theme", normalizedTheme);
  updateThemeToggle(normalizedTheme);

  try {
    localStorage.setItem(themeStorageKey, normalizedTheme);
  } catch (error) {
    // localStorage may be unavailable in private browsing contexts.
  }
}

updateThemeToggle(getCurrentTheme());

if (themeToggle) {
  themeToggle.addEventListener("click", () => {
    const nextTheme = getCurrentTheme() === "dark" ? "light" : "dark";
    applyTheme(nextTheme);
  });
}

if (!reducedMotion && "IntersectionObserver" in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.16 },
  );

  revealElements.forEach((element) => observer.observe(element));
} else {
  revealElements.forEach((element) => element.classList.add("visible"));
}
