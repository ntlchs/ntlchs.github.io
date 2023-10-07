import { Experience, contactInfo, experiences } from "src/utils/personalInfo";
import { ProjectsLink } from "./Link";

const AboutMeItem = ({
    title,
    role,
    link,
    started,
    activities
}: Experience) => {

    return (
        <li>
            {role} at <a href={link} target="_blank" className="font-medium">{title}</a>
            <span className="text-gray"> since {started}</span>
            <ul className="ml-4 list-disc marker:text-primary">
                {activities.map((activity, index) => (
                    <li key={index}>{activity}</li>
                ))}
            </ul>
        </li>
    );
};

const AboutMeContainer = () => {
    return (
        <div className="w-full my-6">
            <div className="flex flex-col items-center justify-center">

                <div
                    className="w-20 mx-auto h-20 ring-4 ring-primary rounded-full mb-4 overflow-hidden"
                >
                    <img src="/images/me.jpg" alt="Natalia" />
                </div>
                <p className="font-semibold">{contactInfo.name}</p>
                <p>{contactInfo.location}</p>
            </div>

            <ul className="list-disc px-12 space-y-3 my-6">
                {
                    Object.keys(experiences)
                        .filter(key => experiences[key].type.includes("work") || experiences[key].type.includes("study"))
                        .map(key => (
                            <AboutMeItem key={key} {...experiences[key]} />
                        ))
                }
            </ul>
            <div className="flex justify-center">
                <ProjectsLink />
            </div>
        </div>
    );
};

export default AboutMeContainer;