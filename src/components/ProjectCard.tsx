import type { TechSkill } from "src/utils/personalInfo";
import DevIcon from "./DevIcon";
import Link from "./Link";

type ProjectInfo = {
  imageSrc: string;
  title: string;
  description: string;
  link: string;
  technologies: TechSkill[];
  started: string;
};

const ProjectCard = ({
  imageSrc,
  title,
  description,
  link,
  technologies,
  started,
}: ProjectInfo) => {
  return (
    <div className="flex max-w-4xl flex-col gap-lg tablet:flex-row p-md py-2xl items-center overflow-hidden">
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="relative flex items-center justify-center h-auto w-64 aspect-video"
      >
        <img
          src={imageSrc}
          alt={title}
          className="object-cover rounded-lg w-full"
        />
      </a>
      <div className="flex flex-col gap-lg justify-between ml-0 tablet:ml-4 w-full tablet:w-2/3">
        <div className="flex flex-col gap-lg">
          <div className="flex gap-md items-center">
            <h1 className="text-sm font-medium whitespace-nowrap">{title}</h1>
            <span className="w-full h-[1px] bg-black"></span>
          </div>
          <div>
            <p className="text-sm">{description}</p>
            <p className="text-xs">{started}</p>
          </div>
          <ul className="flex flex-wrap gap-md">
            {technologies.map((tech, index) => (
              <li key={index} className="inline-block">
                <DevIcon title={tech.icon} />
              </li>
            ))}
          </ul>
        </div>
        <div className="flex">
          <Link href={link} variant="secondary" blank rel="noopener noreferrer">
            Check it out
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
