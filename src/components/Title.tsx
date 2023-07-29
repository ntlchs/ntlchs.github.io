import { twMerge } from "tailwind-merge";

function Title({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <h1 className={twMerge("font-bold text-2xl text-extrabold", className)}>
      {children}
    </h1>
  );
}

export default Title;
