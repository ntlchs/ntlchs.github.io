import { twMerge } from "tailwind-merge";

export const clickableClassName =
  "font-bold px-md py-sm rounded-lg hover:saturate-150 cursor-pointer active:saturate-200 active:brightness-125 active:opacity-75";

export const clickableClassNamePrimary = twMerge(
  clickableClassName,
  "bg-black text-primary-200 hover:shadow-lg"
);

export const clickableClassNameSecondary = twMerge(
  clickableClassName,
  "bg-primary-200 border border-black hover:shadow-lg text-black bg-white"
);
