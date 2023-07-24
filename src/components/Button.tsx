import { clickableClassName } from "src/utils/Clickable";

interface ButtonProps
  extends Omit<React.ButtonHTMLAttributes<HTMLElement>, "icon"> {
  icon?: React.ReactNode; // Add icon as an optional prop here
  children?: React.ReactNode;
}

function Button({ children, icon, ...props }: ButtonProps) {
  return (
    <button {...props} className={clickableClassName}>
      <div className="w-full h-full flex gap-sm tablet:gap-md">
        {icon && icon}
        <p>{children}</p>
      </div>
    </button>
  );
}

export default Button;
