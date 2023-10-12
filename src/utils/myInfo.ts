import { unisinosDescription } from "./utils";

export const contactInfo = {
  name: "Natália Chies",
  email: "nataliachies@gmail.com",
  phone: "55 (51) 99732-3814",
  location: "Porto Alegre, Brazil",
  linkedin: "https://www.linkedin.com/in/nataliachies/",
  github: "https://www.github.com/ntlchs",
  website: "https://ntlchs.github.io/",
};

export type TechSkill = {
  title: string;
  icon: string;
};

export type TechSkills = {
  [key: string]: TechSkill;
};

export const techSkills: TechSkills = {
  JavaScript: { title: "JavaScript", icon: "javascript" },
  TypeScript: { title: "TypeScript", icon: "typescript" },
  React: { title: "React", icon: "react" },
  Nodejs: { title: "Node.js", icon: "nodejs" },
  Sequelize: { title: "Sequelize", icon: "sequelize" },
  PostgreSQL: { title: "PostgreSQL", icon: "postgresql" },
  Git: { title: "Git", icon: "git" },
  HTML: { title: "HTML", icon: "html5" },
  CSS: { title: "CSS", icon: "css3" },
  GoogleCloud: { title: "Google Cloud", icon: "googlecloud" },
  Figma: { title: "Figma", icon: "figma" },
};

export type experienceCategory = "work" | "project" | "study";

export type Experience = {
  type: experienceCategory[];
  title: string;
  link: string;
  role: string;
  images: { mobile: string; desktop: string };
  description: string;
  activities: string[];
  technologies: TechSkill[];
  started: string;
};

export const experiences: { [key: string]: Experience } = {
  ViuMeuPet: {
    type: ["work", "project"],
    title: "Viu meu pet",
    link: "https://www.viumeupet.com.br/",
    role: "Full-Stack Developer",
    images: {
      mobile: "/images/viumeupet-mobile.png",
      desktop: "/images/viumeupet-desktop.png",
    },
    description:
      "Web app for locating lost pets via Meta (Facebook/Instagram) API",
    activities: [
      "Lead the design: Figma Mockups and Tokens, migration from CSS to TailwindCSS",
      "Data definition and queries to PostgreSQL using Sequelize CLI, database migrations with prisma",
      "Reusable React components, optimized render cycles, custom hooks for state management, routing via Next.js",
      "Handled TypeScript and JavaScript code quality by managing lint errors and actively resolving bugs",
      "Deployment on Vercel, CI/CD with GitHub Actions",
      "SEO and performance optimization (web vitals)",
      "Version control using git and pull requests on GitHub",
    ],
    technologies: [
      techSkills.React,
      techSkills.TypeScript,
      techSkills.Nodejs,
      techSkills.PostgreSQL,
      techSkills.Git,
    ],
    started: "May 2023",
  },
  FreelanceWebDeveloper: {
    type: ["work"],
    title: "Freelance",
    link: "",
    role: "FullStack Developer",
    images: {
      mobile: "/images/preview-ntlchs.png",
      desktop: "/images/preview-ntlchs.png",
    },
    description: "Web App and Website development for clients",
    activities: [
      "Visual Identity, design mockups, logo and branding",
      "HTML, CSS, JavaScript, TypeScript, React, Next.js, TailwindCSS to create components and reusable UI using page routing",
      "Web vitals, Google Analytics, SEO, performance optimization",
      "DNS configuration, domain registration, SSL certificate, deployment",
    ],
    technologies: [
      techSkills.HTML,
      techSkills.CSS,
      techSkills.JavaScript,
      techSkills.TypeScript,
      techSkills.React,
    ],
    started: "Jan 2023",
  },
  UnisinosUniversity: {
    type: ["study"],
    title: "Unisinos University",
    link: "https://www.unisinos.br/",
    role: "Computer Science Student",
    images: {
      mobile: "/images/logo-unisinos.png",
      desktop: "/images/logo-unisinos.png",
    },
    description: unisinosDescription(),
    activities: [],
    technologies: [],
    started: "March 2023",
  },
  Moinho: {
    type: ["project"],
    title: "Moinho Consultoria",
    link: "https://www.moinhoconsultoria.com.br/",
    role: "Front-End Developer",
    images: {
      mobile: "/images/moinho-mobile.png",
      desktop: "/images/moinho-desktop.png",
    },
    description:
      "Portfolio Website for Moinho Consultoria, a Civil Engineering company",
    activities: [
      "Website development with React and Next.js",
      "SEO and performance optimization (web vitals)",
      "Version control using git and pull requests on GitHub",
    ],
    technologies: [techSkills.React, techSkills.TypeScript, techSkills.Git],
    started: "October 2023",
  },
};
