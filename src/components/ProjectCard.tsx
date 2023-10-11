import type { TechSkill } from "src/utils/personalInfo";
import DevIcon from "./DevIcon";
import Link from "./Link";

type ProjectInfo = {
  images: {
    mobile: string;
    desktop: string;
  };
  title: string;
  description: string;
  link: string;
  technologies: TechSkill[];
  started: string;
};

const ProjectCard = ({
  images,
  title,
  description,
  link,
  technologies,
  started,
}: ProjectInfo) => {
  return (
    <div className="flex max-w-4xl flex-col gap-lg tablet:flex-row p-md py-2xl items-center overflow-hidden">
      <div className="text-[40px]">
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="relative flex items-center justify-center h-auto w-64 aspect-video"
        >
          <div className="relative aspect-[1680:1024] max-w-[400px] my-md h-auto overflow-hidden hidden laptop:block">
            <img src="/images/laptop-frame.svg" alt="Frame" />

            <img
              src={images.desktop}
              alt="Picture"
              className="absolute top-0 -z-10 w-full h-auto max-w-[90%] right-1/2 transform translate-x-1/2"
            />
          </div>
          <div className="relative aspect-[1800:600] max-w-[400px] my-md h-auto overflow-hidden block laptop:hidden">
            <img src="/images/mobile-frame.svg" alt="Frame" />

            <img
              src={images.mobile}
              alt="Picture"
              className="absolute top-0 my-xl -z-10 w-full h-auto max-w-[90%] right-1/2 transform translate-x-1/2"
            />
          </div>
        </a>
        <i className="ph-fill ph-device-mobile"></i>
        <i className="ph-fill ph-desktop"></i>
        <i className="ph-fill ph-device-tablet"></i>
      </div>
      <div className="flex flex-col px-md tablet:px-0 gap-lg justify-between ml-0 tablet:ml-4 w-full tablet:w-2/3">
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
          <Link
            href={link}
            variant="secondary"
            blank
            rel="noopener noreferrer"
            icon={<i className="ph-fill ph-arrow-right" />}
          >
            Visit Website
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
