import { Icons } from "@/components/icons";
import { Notebook, Aperture } from "lucide-react";

export const DATA = {
  name: "Guoqi Sun",
  initials: "GQ",
  url: "https://sunguoqi.com",
  location: "ShangHai, CHN",
  locationLink: "https://maps.app.goo.gl/zpAabyLFYVA6fJL4A",
  description:
    "Software Engineer. I enjoy writing, photographing and biking. Very active on Twitter.",
  summary:
    "After graduating in 2023, I have been working in software development and am currently doing a gap year & starting a business. I hope to do something interesting and leave some unforgettable memories.",
  avatarUrl: "/me.png",
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
    { href: "https://blog.sunguoqi.com", icon: Notebook, label: "Blog" },
    { href: "https://camlife.app", icon: Aperture, label: "Plog" },
  ],
  contact: {
    email: "sun412926@gmail.com",
    tel: "+123456789",
    social: {
      Twitter: {
        name: "Twitter",
        url: "https://twitter.com/sun0225SUN",
        icon: Icons.twitter,
        navbar: true,
      },
      WeChat: {
        name: "WeChat",
        url: "https://mp.sunguoqi.com",
        icon: Icons.wechat,
        navbar: true,
      },
      Youtube: {
        name: "Youtube",
        url: "https://www.youtube.com/@sun0225SUN",
        icon: Icons.youtube,
        navbar: false,
      },
      GitHub: {
        name: "GitHub",
        url: "https://github.com/sun0225SUN",
        icon: Icons.github,
        navbar: true,
      },
      Email: {
        name: "Send Email",
        url: "mailto:sun412926@gmail.com",
        icon: Icons.email,
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
      end: "Jan 2024",
      description:
        "Do some simple software development and data processing work",
    },
    {
      company: "NIO蔚来",
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
    },
  ],
  projects: [
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
  ],
  awesome: [
    {
      title: "Star Trail",
      dates: "Feb 7, 2024",
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
      dates: "Jan 28, 2022",
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
      dates: "Feb 17, 2021",
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
} as const;
