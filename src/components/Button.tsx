import {
  clickableClassName,
  clickableClassNamePrimary,
  clickableClassNameSecondary,
} from "src/utils/Clickable";

interface ButtonProps
  extends Omit<React.ButtonHTMLAttributes<HTMLElement>, "icon"> {
  icon?: React.ReactNode; // Add icon as an optional prop here
  children?: React.ReactNode;
  variant?: "primary" | "secondary";
}

function Button({ children, icon, variant, ...props }: ButtonProps) {
  return (
    <button
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
    </button>
  );
}

export default Button;
