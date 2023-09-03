import { cva } from "class-variance-authority";
import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
 
export const baseVariants = cva(
  "font-medium text-center relative whitespace-nowrap align-middle outline-none inline-flex items-center justify-center",
  {
    variants: {
      size: {
        xs: "text-xs h-6 min-w-6 px-2",
        sm: "text-sm h-8 min-w-8 px-3",
        md: "text-base h-10 min-w-10 px-4",
        lg: "text-lg h-12 min-w-12 px-6",
        xl: "text-xl h-14 min-w-14 px-8",
      },
      rounded: {
        none: "rounded-none",
        md: "rounded-md",
        full: "rounded-full",
      },
    },
    defaultVariants: {
      size: "md",
      rounded: "md",
    },
  },
);

 
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}