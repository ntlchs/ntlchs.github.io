import type { Experience } from "src/utils/myInfo";
import { twMerge } from "tailwind-merge";

export const AboutMeItem = ({
  title,
  role,
  link,
  description,
  started,
  activities,
}: Experience) => {
  return (
    <li>
      {role} at{" "}
      <a
        href={link}
        target="_blank"
        className={twMerge("font-medium", link === "" && "cursor-default")}
      >
        {title}
      </a>
      <span className="text-gray"> since {started}</span>
      <p>{description}</p>
      <ul className="ml-4 list-disc marker:animate-color-change">
        {activities.map((activity, index) => (
          <li key={index}>{activity}</li>
        ))}
      </ul>
    </li>
  );
};
