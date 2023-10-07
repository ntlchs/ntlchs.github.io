import { twMerge } from "tailwind-merge";

export const clickableClassName =
  "font-bold px-md py-sm flex gap-md items-center rounded-lg hover:scale-105 cursor-pointer active:scale-100 transition-all";

export const clickableClassNamePrimary = twMerge(
  clickableClassName,
  "bg-black text-white"
);

export const clickableClassNameSecondary = twMerge(
  clickableClassName,
  "border border-black text-black bg-white"
);
