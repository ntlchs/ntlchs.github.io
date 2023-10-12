import { contactInfo, experiences } from "src/utils/myInfo";
import { AboutMeItem } from "./AboutMeItem";
import { DownloadCV, ProjectsLink } from "./Link";

const AboutMeContainer = () => {
  return (
    <div className="w-full my-6">
      <div className="flex flex-col items-center justify-center">
        <div className="w-20 mx-auto h-20 border-4 animate-border-color-change rounded-full mb-4 overflow-hidden">
          <img src="/images/me.jpg" alt="Natalia" />
        </div>
        <p className="font-semibold">{contactInfo.name}</p>
        <p>{contactInfo.location}</p>
      </div>
      <div className="flex my-lg">
        <DownloadCV />
      </div>
      <ul className="list-disc px-12 space-y-3 my-6">
        {Object.keys(experiences)
          .filter(
            (key) =>
              experiences[key].type.includes("work") ||
              experiences[key].type.includes("study")
          )
          .map((key) => (
            <AboutMeItem key={key} {...experiences[key]} />
          ))}
      </ul>
      <div className="flex justify-center">
        <ProjectsLink />
      </div>
    </div>
  );
};

export default AboutMeContainer;
