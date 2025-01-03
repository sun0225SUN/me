import { Icons } from "~/components/icons"

const en = {
  name: "Guoqi Sun",
  slogan: "A romantic rationalist",
  url: "https://sunguoqi.com",
  location: "ShangHai, CHN",
  locationLink: "https://maps.app.goo.gl/zpAabyLFYVA6fJL4A",
  description:
    "Software Engineer. I enjoy writing, photographing and biking. Very active on Twitter.",
  summary:
    "After graduating in 2023, I have been working in software development and am currently doing a gap year & starting a business. I hope to do something interesting and leave some unforgettable memories.",
  avatarUrl: "/me.png",
  tweetId: "1670252653887234048",
  skills: [
    "React",
    "Next",
    "Astro",
    "HTML5",
    "CSS3",
    "JavaScript",
    "Typescript",
    "Node",
    "Python",
  ],
  navbar: [
    {
      href: "https://blog.sunguoqi.com",
      icon: <Icons.notebook className="size-full" />,
      label: "Blog",
    },
    {
      href: "https://camlife.cn",
      icon: <Icons.aperture className="size-full" />,
      label: "Plog",
    },
  ],
  contact: {
    email: "sun412926@gmail.com",
    tel: "+123456789",
    social: {
      Twitter: {
        name: "Twitter",
        url: "https://twitter.com/sun0225SUN",
        icon: <Icons.twitter className="size-full" />,
        navbar: true,
      },
      WeChat: {
        name: "WeChat",
        url: "https://wechat.guoqi.dev",
        icon: <Icons.wechat className="size-full" />,
        navbar: true,
      },
      GitHub: {
        name: "GitHub",
        url: "https://github.com/sun0225SUN",
        icon: <Icons.github className="size-full" />,
        navbar: true,
      },
    },
  },
  work: [
    {
      company: "原则科技",
      href: "http://yuanze.com",
      badges: [],
      location: "Beijing, China",
      title: "Software Engineer",
      logoUrl: "/yz.png",
      start: "Feb 2024",
      end: "Aug 2024",
      description: "Learn technology and experience entrepreneurship",
    },
    {
      company: "图慧科技",
      badges: [],
      href: "https://www.tuhuimap.com",
      location: "GuangZhou, China",
      title: "Software Engineer",
      logoUrl: "/th.png",
      start: "Jun 2023",
      end: "Feb 2024",
      description:
        "Do some simple software development and data processing work",
    },
    {
      company: "NIO 蔚来",
      href: "https://www.nio.com",
      badges: [],
      location: "AnHui, China",
      title: "Software Intern",
      logoUrl: "/nio.png",
      start: "Feb 2023",
      end: "May 2023",
      description:
        "Maintain and develop a data processing platform, and from then on, get involved in front-end development",
    },
  ],
  education: [
    {
      school: "安徽理工大学",
      href: "https://www.aust.edu.cn",
      degree: "Geographic Information Science",
      logoUrl: "/aust.jpg",
      start: "Sep 2019",
      end: "Jun 2023",
      description: "Have a wonderful four years",
    },
  ],
  projects: [
    {
      title: "Shibei",
      href: "https://shibei.cool",
      dates: "Oct 2024 - Now",
      active: true,
      description: "A good-looking, useful browser start page for book reviews",
      technologies: [
        "Next",
        "Plasmo",
        "Typescript",
        "Supabase",
        "TailwindCSS",
        "Shadcn UI",
        "Zustand",
      ],
      links: [
        {
          type: "Website",
          href: "https://shibei.cool",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/shibei.png",
      video: "",
    },
    {
      title: "Camlife",
      href: "https://camlife.app",
      dates: "Aug 2024 - Now",
      active: true,
      description: "Capture Life through the Camera.",
      technologies: [
        "Next",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Shadcn UI",
        "Zustand",
      ],
      links: [
        {
          type: "Website",
          href: "https://camlife.app",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/sun0225SUN/camlife",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/camlife.png",
      video: "",
    },
    {
      title: "Astro Air",
      href: "https://blog.sunguoqi.com",
      dates: "Oct 2024 - Now",
      active: true,
      description: "minimal, personal blog theme for Astro",
      technologies: ["Astro", "React", "Typescript", "TailwindCSS"],
      links: [
        {
          type: "Website",
          href: "https://blog.sunguoqi.com",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/sun0225SUN/astro-air",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/blog.png",
      video: "",
    },
    {
      title: "Baigua AI",
      href: "https://ai.baigua.com",
      dates: "Aug 2024 - Now",
      active: true,
      description: "Xiaohongshu content generation",
      technologies: [
        "Next",
        "Taro",
        "Typescript",
        "Prisma",
        "TailwindCSS",
        "Shadcn UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://ai.baiguai.com",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/baigua.png",
      video: "",
    },
  ],
  awesome: [
    {
      title: "One Paper",
      dates: "Nov 2024",
      location: "",
      description:
        "An outline note-taking mind mapping tool similar to Workflowy",
      image: "/onepaper.png",
      mlh: "",
      links: [
        {
          title: "Website",
          type: "",
          href: "https://onepaper.netlify.app",
          icon: <Icons.globe className="size-3" />,
        },
        {
          title: "Source",
          href: "https://github.com/sun0225SUN/one-paper",
          icon: <Icons.github className="size-3" />,
        },
      ],
    },
    {
      title: "Star Trail",
      dates: "Feb, 2024",
      location: "",
      description: "Personal Homepage",
      image: "/star.png",
      mlh: "",
      links: [
        {
          title: "Website",
          type: "",
          href: "https://star-trail.netlify.app",
          icon: <Icons.globe className="size-3" />,
        },
        {
          title: "Source",
          href: "https://github.com/sun0225SUN/star-trail",
          icon: <Icons.github className="size-3" />,
        },
      ],
    },
    {
      title: "Awesome Love Code",
      dates: "Jan, 2022",
      location: "",
      description: "Love Code Collection",
      image: "/love.png",
      mlh: "",
      links: [
        {
          title: "Website",
          type: "",
          href: "https://sun0225sun.github.io/Awesome-Love-Code",
          icon: <Icons.globe className="size-3" />,
        },
        {
          title: "Source",
          href: "https://github.com/sun0225SUN/Awesome-Love-Code",
          icon: <Icons.github className="size-3" />,
        },
      ],
    },
    {
      title: "Github Profile",
      dates: "Feb, 2021",
      location: "",
      description: "Personalized GitHub profile",
      image: "/github.png",
      mlh: "",
      links: [
        {
          title: "Website",
          type: "",
          href: "https://github.com/sun0225SUN",
          icon: <Icons.globe className="size-3" />,
        },
        {
          title: "Source",
          href: "https://github.com/sun0225SUN/sun0225SUN",
          icon: <Icons.github className="size-3" />,
        },
      ],
    },
  ],
}

const zh = {
  name: "小孙同学",
  slogan: "一个浪漫的理性主义者",
  url: "https://sunguoqi.com",
  location: "上海，中国",
  locationLink: "https://maps.app.goo.gl/zpAabyLFYVA6fJL4A",
  description: "喜欢编程、摄影、读书、旅行、骑行，偶尔会写写文章～",
  summary:
    "2023 年毕业后，我一直从事软件开发工作，目前正在创业中......路虽远行则将至，事虽难做则必成。我正在做一些有意义的事情，希望能成为一位名有趣的人～",
  avatarUrl: "/me.png",
  tweetId: "1670252653887234048",
  skills: [
    "React",
    "Next",
    "Astro",
    "HTML5",
    "CSS3",
    "JavaScript",
    "Typescript",
    "Node",
    "Python",
  ],
  navbar: [
    {
      href: "https://blog.sunguoqi.com",
      icon: <Icons.notebook className="size-full" />,
      label: "博客",
    },
    {
      href: "https://camlife.cn",
      icon: <Icons.aperture className="size-full" />,
      label: "影集",
    },
  ],
  contact: {
    email: "sun412926@gmail.com",
    tel: "+123456789",
    social: {
      Twitter: {
        name: "推特",
        url: "https://twitter.com/sun0225SUN",
        icon: <Icons.twitter className="size-full" />,
        navbar: true,
      },
      WeChat: {
        name: "微信",
        url: "https://mp.sunguoqi.com",
        icon: <Icons.wechat className="size-full" />,
        navbar: true,
      },
      GitHub: {
        name: "GitHub",
        url: "https://github.com/sun0225SUN",
        icon: <Icons.github className="size-full" />,
        navbar: true,
      },
    },
  },
  work: [
    {
      company: "原则科技",
      href: "http://yuanze.com",
      badges: [],
      location: "中国 · 北京",
      title: "软件开发工程师",
      logoUrl: "/yz.png",
      start: "2024.02",
      end: "2024.08",
      description: "精进技术，参与创业",
    },
    {
      company: "图慧科技",
      badges: [],
      href: "https://www.tuhuimap.com",
      location: "中国 · 广州",
      title: "前端开发工程师",
      logoUrl: "/th.png",
      start: "2023.06",
      end: "2024.02",
      description: "参与一些数据可视化项目的开发和数据处理工作",
    },
    {
      company: "NIO 蔚来",
      href: "https://www.nio.com",
      badges: [],
      location: "安徽 · 合肥",
      title: "前端开发实习生",
      logoUrl: "/nio.png",
      start: "2023.02",
      end: "2023.05",
      description:
        "负责一站式数据治理与开发平台 DataSight 的前端开发与维护工作",
    },
  ],
  education: [
    {
      school: "安徽理工大学",
      href: "https://www.aust.edu.cn",
      degree: "地理信息科学",
      logoUrl: "/aust.jpg",
      start: "2019.09",
      end: "2023.06",
      description: "度过了美好的四年",
    },
  ],
  projects: [
    {
      title: "拾贝",
      href: "https://shibei.cool",
      dates: "2024.10 - Now",
      active: true,
      description:
        "一键同步微信读书所有笔记和划线，在新标签页展示优雅的书摘，提供沉浸式的回顾体验",
      technologies: [
        "Next",
        "Plasmo",
        "Typescript",
        "Supabase",
        "TailwindCSS",
        "Shadcn UI",
        "Zustand",
      ],
      links: [
        {
          type: "Website",
          href: "https://shibei.cool",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/shibei.png",
      video: "",
    },
    {
      title: "Camlife",
      href: "https://camlife.app",
      dates: "2024.08 - Now",
      active: true,
      description: "用影像记录每一个生活瞬间",
      technologies: [
        "Next",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Shadcn UI",
        "Zustand",
      ],
      links: [
        {
          type: "Website",
          href: "https://camlife.app",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/sun0225SUN/camlife",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/camlife.png",
      video: "",
    },
    {
      title: "Astro Air",
      href: "https://blog.sunguoqi.com",
      dates: "2024.10 - Now",
      active: true,
      description: "极简风 Astro 博客主题",
      technologies: ["Astro", "React", "Typescript", "TailwindCSS"],
      links: [
        {
          type: "Website",
          href: "https://blog.sunguoqi.com",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/sun0225SUN/astro-air",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/blog.png",
      video: "",
    },
    {
      title: "白瓜 AI",
      href: "https://ai.baigua.com",
      dates: "2024.08 - Now",
      active: true,
      description: "小红书内容生成工具站",
      technologies: [
        "Next",
        "Taro",
        "Typescript",
        "Prisma",
        "TailwindCSS",
        "Shadcn UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://ai.baiguai.com",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/baigua.png",
      video: "",
    },
  ],
  awesome: [
    {
      title: "One Paper",
      dates: "2024.11",
      location: "",
      description: "一个类似于 Workflowy 和幕布的大纲笔记和思维导图工具",
      image: "/onepaper.png",
      mlh: "",
      links: [
        {
          title: "Website",
          type: "",
          href: "https://onepaper.netlify.app",
          icon: <Icons.globe className="size-3" />,
        },
        {
          title: "Source",
          href: "https://github.com/sun0225SUN/one-paper",
          icon: <Icons.github className="size-3" />,
        },
      ],
    },
    {
      title: "星轨主页",
      dates: "2024.02",
      location: "",
      description: "个人主页",
      image: "/star.png",
      mlh: "",
      links: [
        {
          title: "Website",
          type: "",
          href: "https://star-trail.netlify.app",
          icon: <Icons.globe className="size-3" />,
        },
        {
          title: "Source",
          href: "https://github.com/sun0225SUN/star-trail",
          icon: <Icons.github className="size-3" />,
        },
      ],
    },
    {
      title: "表白代码收藏馆",
      dates: "2022.01",
      location: "",
      description: "收集了一些好看的表白代码",
      image: "/love.png",
      mlh: "",
      links: [
        {
          title: "Website",
          type: "",
          href: "https://sun0225sun.github.io/Awesome-Love-Code",
          icon: <Icons.globe className="size-3" />,
        },
        {
          title: "Source",
          href: "https://github.com/sun0225SUN/Awesome-Love-Code",
          icon: <Icons.github className="size-3" />,
        },
      ],
    },
    {
      title: "Github 首页",
      dates: "2021.02",
      location: "",
      description: "GitHub 自我介绍",
      image: "/github.png",
      mlh: "",
      links: [
        {
          title: "Website",
          type: "",
          href: "https://github.com/sun0225SUN",
          icon: <Icons.globe className="size-3" />,
        },
        {
          title: "Source",
          href: "https://github.com/sun0225SUN/sun0225SUN",
          icon: <Icons.github className="size-3" />,
        },
      ],
    },
  ],
}

export const getLocaleData = (locale: string) => {
  return locale === "zh" ? zh : en
}

export type LocaleData = typeof en
