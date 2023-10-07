import { Experience, experiences } from "src/utils/personalInfo";
import { ProjectsLink } from "./Link";
import PageTitle from "./PageTitle";


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
            <div className="items-center flex flex-col">

                <PageTitle>A little bit about me</PageTitle>
                <div
                    className="w-20 h-20 ring-4 ring-primary rounded-full mb-4 overflow-hidden"
                >
                    <img src="/images/me.jpg" alt="Natalia" />
                </div>
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