import type { Experience } from "src/utils/personalInfo";

interface Props {
    // Define props here
}

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

export default AboutMeItem;
