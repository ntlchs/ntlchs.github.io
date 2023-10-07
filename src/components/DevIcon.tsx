import type { TechSkills } from "src/utils/personalInfo";

function DevIcon({ title }: { title: string }) {
    return (
        <i className={`text-primary text-lg devicon-${title}-plain`} />
    )
}

export default DevIcon

type DevIcons = {
    [K in keyof TechSkills]: string;
};


export const devIcons: DevIcons = {
    React: "react",
    TypeScript: "typescript",
    JavaScript: "javascript",
    CSS: "css3",
    HTML: "html5",
    Nodejs: "nodejs",
    PostgreSQL: "postgresql",
    Figma: "figma",
    Git: "git",
    Sequelize: "sequelize",
    GoogleCloud: "googlecloud",
}