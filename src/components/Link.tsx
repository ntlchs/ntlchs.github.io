import {
  clickableClassName,
  clickableClassNamePrimary,
  clickableClassNameSecondary,
} from "src/utils/Clickable";
import { twMerge } from "tailwind-merge";

export const ProjectsLink = () => {
  return (
    <a
      href="/projects"
      className={twMerge(
        "text-sm font-medium text-black animate-bg-color-change",
        clickableClassName
      )}
    >
      Check my projects
      <i className="ph-fill ph-arrow-circle-right" />
    </a>
  );
};

export const DownloadCV = () => {
  return (
    <Link variant="secondary" href="/files/CV.pdf">
      <i className="ph-fill ph-read-cv-logo text-[24px]"></i>
      <p>Download CV</p>
    </Link>
  );
};

interface LinkProps
  extends Omit<React.LinkHTMLAttributes<HTMLElement>, "icon"> {
  icon?: React.ReactNode; // Add icon as an optional prop here
  children?: React.ReactNode;
  variant?: "primary" | "secondary";
  blank?: boolean;
}

function Link({ children, icon, variant, blank, ...props }: LinkProps) {
  return (
    <a
      {...props}
      target={blank ? "_blank" : "_self"}
      className={twMerge(
        variant === "primary" && clickableClassNamePrimary,
        variant === "secondary" && clickableClassNameSecondary,
        clickableClassName
      )}
    >
      <div className="w-full h-full flex gap-sm tablet:gap-md items-center">
        {icon && icon}
        <p>{children}</p>
      </div>
    </a>
  );
}

export default Link;
