export default {
  // blog 基础配置
  blog: {
    title: "LHK blog",
    description: "前端开发的日常",
    logo: "https://miyuefe.cn/assets/images/logo.svg",
    siteName: "miyuefe.cn",
    keywords: ["前端", "Vue", "JavaScript", "TypeScript", "HTML", "CSS", "MiyueFE", "bpmn", "bpmn-js"],
    author: "TeaTools,MiyueFE",
  },

  // vite press 构建配置
  press: {
    name: "微信公众号：前端的日常",
    text: "前端开发的日常",
    tagline: "Welcome to my blog ~",
    image: "https://vitepress.dev/vitepress-logo-large.webp",
    actions: [
      { theme: "brand", text: "开始阅读", link: "/overview/index" },
      { theme: "alt", text: "前端工具库", link: "https://web-toolbox-one.vercel.app/" },
      { theme: "alt", text: "关注掘金", link: "https://juejin.cn/user/3664010809185870" },
    ],
    features: [
      { icon: "🎈", title: "Vue", details: "" },
      { icon: "🎁", title: "Bpmn", details: "" },
      { icon: "🎨", title: "CSS", details: "" },
    ],

    nav: ["column", "category", "ranking", "annual", "follow"],

    socialLinks: {
      github: "https://github.com/lihuikun/auto-sync-blog",
    },

    showTeam: false,
  },

  // 掘金
  juejin: {
    userId: "3664010809185870",
  },
}
