import { clickableClassName } from "src/utils/Clickable";

interface LinkProps
  extends Omit<React.LinkHTMLAttributes<HTMLElement>, "icon"> {
  icon?: React.ReactNode; // Add icon as an optional prop here
  children?: React.ReactNode;
}

function Link({ children, icon, ...props }: LinkProps) {
  return (
    <a {...props} className={clickableClassName}>
      <div className="w-full h-full flex gap-sm tablet:gap-md">
        {icon && icon}
        <p>{children}</p>
      </div>
    </a>
  );
}

export default Link;
