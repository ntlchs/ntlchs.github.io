import { twMerge } from "tailwind-merge";

export const clickableClassName =
  "font-bold px-md py-sm flex gap-md items-center justify-center rounded-lg hover:scale-105 cursor-pointer active:scale-100 transition-all";

export const clickableClassNamePrimary = twMerge(
  clickableClassName,
  "bg-black text-white hover:shadow-lg"
);

export const clickableClassNameSecondary = twMerge(
  clickableClassName,
  "border border-black hover:shadow-lg text-black bg-white"
);
