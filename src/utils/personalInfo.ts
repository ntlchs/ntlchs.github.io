export const contactInfo = {
  name: "Natália Chies",
  email: "nataliachies@gmail.com",
  phone: "55 (51) 99732-3814",
  location: "Porto Alegre, Brazil",
  linkedin: "https://www.linkedin.com/in/nataliachies/",
  github: "https://www.github.com/ntlchs",
  website: "https://ntlchs.github.io/",
};

export type Skill = {
  name: string;
  level: number;
};

export type TechSkills = {
  JavaScript: string;
  TypeScript: string;
  React: string;
  Nodejs: string;
  Sequelize: string;
  PostgreSQL: string;
  Git: string;
  HTML: string;
  CSS: string;
  GoogleCloud: string;
  Figma: string;
};

const techSkills: TechSkills = {
  JavaScript: "JavaScript",
  TypeScript: "TypeScript",
  React: "React",
  Nodejs: "Node.js",
  Sequelize: "Sequelize",
  PostgreSQL: "PostgreSQL",
  Git: "Git",
  HTML: "HTML",
  CSS: "CSS",
  GoogleCloud: "Google Cloud",
  Figma: "Figma",
};

export type experienceCategory = "work" | "project" | "study";

export type Experience = {
  type: experienceCategory[];
  title: string;
  link: string;
  role: string;
  imageSrc: string;
  description: string;
  activities: string[];
  technologies: string[];
  started: string;
};

export const experiences: { [key: string]: Experience } = {
  ViuMeuPet: {
    type: ["work", "project"],
    title: "Viu meu pet",
    link: "https://www.viumeupet.com.br/",
    role: "Full-Stack Developer",
    imageSrc: "/public/images/logo-horizontal-black.svg", // Adicione a URL da imagem aqui
    description:
      "Working as a Full-Stack Developer at Viu meu pet since May 2023.",
    activities: [
      "Platform for locating lost pets via Meta (Facebook and Instagram) API",
      "Lead the design: Figma Mockups and Tokens, migration from CSS to TailwindCSS",
      "Data definition and queries with PostgreSQL, database migrations with prisma",
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
    title: "Freelance Web Developer",
    link: "", // Adicione o link aqui, se houver
    role: "Web Developer",
    imageSrc: "", // Adicione a URL da imagem aqui
    description: "Web Application Development for clients.",
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
    imageSrc: "", // Adicione a URL da imagem aqui
    description:
      "Studying Computer Science at Unisinos University since March 2023.",
    activities: [],
    technologies: [],
    started: "March 2023",
  },
  Moinho: {
    type: ["project"],
    title: "Moinho Consultoria",
    link: "https://www.moinhoconsultoria.com.br/",
    role: "Front-End Developer",
    imageSrc: "/public/images/logo-horizontal-black.svg", // Adicione a URL da imagem aqui
    description:
      "Working as a Front-End Developer at Moinho Consultoria since March 2023.",
    activities: [
      "Website development with React and Next.js",
      "SEO and performance optimization (web vitals)",
      "Version control using git and pull requests on GitHub",
    ],
    technologies: [techSkills.React, techSkills.TypeScript, techSkills.Git],
    started: "October 2023",
  },
};
