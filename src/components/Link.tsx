import {
  clickableClassName,
  clickableClassNamePrimary,
  clickableClassNameSecondary,
} from "src/utils/Clickable";

interface LinkProps
  extends Omit<React.LinkHTMLAttributes<HTMLElement>, "icon"> {
  icon?: React.ReactNode; // Add icon as an optional prop here
  children?: React.ReactNode;
  variant?: "primary" | "secondary";
}

function Link({ children, icon, variant, ...props }: LinkProps) {
  return (
    <a
      {...props}
      className={
        variant === "primary"
          ? clickableClassNamePrimary
          : variant === "secondary"
          ? clickableClassNameSecondary
          : clickableClassName
      }
    >
      <div className="w-full h-full flex gap-sm tablet:gap-md">
        {icon && icon}
        <p>{children}</p>
      </div>
    </a>
  );
}

export default Link;
