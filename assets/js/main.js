const translations = {
  zh: {
    titles: {
      home: "Wood 的个人网站",
      resources: "资源详细列表",
      about: "网站介绍",
      goodHtml: "精品网页集合"
    },
    nav: {
      home: "主页",
      resources: "资源",
      about: "关于",
      goodHtml: "精品网页"
    },
    common: {
      menu: "菜单",
      bilibili: "B 站主页",
      steam: "Steam 主页",
      github: "GitHub 主页"
    },
    home: {
      heroTitle: "Wood 的个人网站",
      sideIntro: "介绍",
      sideProfile: "个人资料",
      introTitle: "网站介绍",
      showIntro: "展示介绍",
      hideIntro: "隐藏介绍",
      introBody: "网站的诞生只是因为一时心血来潮想要做一个属于自己的简易网站。就是现在你看到的这个版本：从原来的传统页面，整理成了更适合静态托管的 GitHub Pages 站点。账号管理、文件上传、IP 接口这类依赖后端的功能，后续如果要恢复，建议再接入独立服务。",
      profileTitle: "个人资料"
    },
    resources: {
      heroTitle: "资源详细列表",
      sideLink: "资源链接",
      sideOverview: "资源总览",
      linkTitle: "资源链接",
      driveLink: "打开 Google Drive 资源文件夹",
      overviewTitle: "资源总览",
      overviewBody: "待补充"
    },
    about: {
      heroTitle: "网站介绍",
      sideIntro: "网站介绍",
      sideProfile: "个人资料",
      introTitle: "网站介绍",
      timeline1: "2023.6.23：网站的诞生只是因为一时心血来潮，想要做一个属于自己的简易网站。那时候它非常简陋，只能访问，几乎没有交互。",
      timeline2: "2023.11.20：网站迎来更新，开始尝试文件上传与 Servlet 能力，也逐步从一个纯静态页往更完整的网站方向发展。",
      timeline3: "2026：这个仓库版本把原站里适合保留的静态内容重新整理出来，目标是可以直接部署到 GitHub Pages，同时方便以后继续演进。",
      profileTitle: "个人资料"
    },
    goodHtml: {
      heroTitle: "精品网页集合",
      sideTools: "网页工具",
      sideGames: "网页游戏",
      toolsTitle: "网页工具",
      gamesTitle: "网页游戏",
      toolItem1: "1. Novel AI Tag 生成器（原站记录：来源于 GitHub）",
      gameItem1: "1. 流体模拟器（原站记录：来源于 GitHub）"
    },
    footer: {
      staticSite: "Wood 的个人网站静态版",
      hosted: "Hosted on GitHub Pages"
    }
  },
  en: {
    titles: {
      home: "Wood's Personal Website",
      resources: "Resource List",
      about: "About This Site",
      goodHtml: "Featured Web Pages"
    },
    nav: {
      home: "Home",
      resources: "Resources",
      about: "About",
      goodHtml: "Featured Pages"
    },
    common: {
      menu: "Menu",
      bilibili: "Bilibili",
      steam: "Steam",
      github: "GitHub"
    },
    home: {
      heroTitle: "Wood's Personal Website",
      sideIntro: "Introduction",
      sideProfile: "Profile",
      introTitle: "Site Introduction",
      showIntro: "Show intro",
      hideIntro: "Hide intro",
      introBody: "This site started as a sudden idea to build a simple website of my own. What you see now is a version reorganized from the earlier traditional pages into a static site that fits GitHub Pages better. Features that depend on a backend, such as account management, file uploads, and IP APIs, can be restored later through a separate service.",
      profileTitle: "Profile"
    },
    resources: {
      heroTitle: "Resource List",
      sideLink: "Resource Link",
      sideOverview: "Overview",
      linkTitle: "Resource Link",
      driveLink: "Open the Google Drive resource folder",
      overviewTitle: "Resource Overview",
      overviewBody: "To be added"
    },
    about: {
      heroTitle: "About This Site",
      sideIntro: "Site Story",
      sideProfile: "Profile",
      introTitle: "Site Story",
      timeline1: "2023.6.23: This site was born from a spur-of-the-moment idea to create a simple website of my own. At the time it was very minimal, mostly just something people could visit.",
      timeline2: "2023.11.20: The site received updates and started experimenting with file uploads and Servlet-based features, gradually moving beyond a purely static page.",
      timeline3: "2026: This repository version reorganizes the parts of the original site that work well as static content, with the goal of deploying directly to GitHub Pages while keeping the project easy to evolve.",
      profileTitle: "Profile"
    },
    goodHtml: {
      heroTitle: "Featured Web Pages",
      sideTools: "Web Tools",
      sideGames: "Web Games",
      toolsTitle: "Web Tools",
      gamesTitle: "Web Games",
      toolItem1: "1. Novel AI Tag Generator (from GitHub)",
      gameItem1: "1. Fluid Simulator (from GitHub)"
    },
    footer: {
      staticSite: "Static edition of Wood's personal website",
      hosted: "Hosted on GitHub Pages"
    }
  }
};

const introButton = document.querySelector('[data-action="toggle-intro"]');
const introBox = document.querySelector("[data-intro-box]");
const languageButtons = document.querySelectorAll("[data-lang]");
const page = document.body.dataset.page;
const storedLanguage = localStorage.getItem("preferred-language");
const browserLanguage = navigator.language && navigator.language.toLowerCase().startsWith("zh") ? "zh" : "en";
let currentLanguage = storedLanguage || browserLanguage;

function getTranslation(language, key) {
  return key.split(".").reduce((value, segment) => value && value[segment], translations[language]);
}

function updateIntroButtonLabel(language) {
  if (!introButton || !introBox) {
    return;
  }

  const key = introBox.classList.contains("is-hidden") ? "home.showIntro" : "home.hideIntro";
  introButton.textContent = getTranslation(language, key);
}

function applyLanguage(language) {
  currentLanguage = translations[language] ? language : "en";
  localStorage.setItem("preferred-language", currentLanguage);
  document.documentElement.lang = currentLanguage === "zh" ? "zh-CN" : "en";

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.dataset.i18n;
    const value = getTranslation(currentLanguage, key);
    if (value) {
      element.textContent = value;
    }
  });

  if (page && translations[currentLanguage].titles[page]) {
    document.title = translations[currentLanguage].titles[page];
  }

  updateIntroButtonLabel(currentLanguage);

  languageButtons.forEach((button) => {
    const active = button.dataset.lang === currentLanguage;
    button.classList.toggle("active", active);
    button.setAttribute("aria-pressed", String(active));
  });
}

if (introButton && introBox) {
  introButton.addEventListener("click", () => {
    introBox.classList.toggle("is-hidden");
    updateIntroButtonLabel(currentLanguage);
  });
}

languageButtons.forEach((button) => {
  button.addEventListener("click", () => {
    applyLanguage(button.dataset.lang);
  });
});

applyLanguage(currentLanguage);
