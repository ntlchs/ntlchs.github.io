import { twMerge } from "tailwind-merge";

function Title({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const titleClassName = twMerge(
    "font-bold text-2xl text-extrabold title",
    className ?? ""
  );
  return <h1 className={titleClassName}>{children}</h1>;
}

export default Title;
