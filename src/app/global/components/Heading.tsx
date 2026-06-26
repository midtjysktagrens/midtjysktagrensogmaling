import type { ElementType, ReactNode } from "react";

type HeadingSize = "sm" | "md" | "lg";
type HeadingColor = "dark" | "light";
type HeadingCase = "uppercase" | "lowercase" | "none";

type HeadingProps = {
  size?: HeadingSize;
  color?: HeadingColor;
  case?: HeadingCase;
  as?: ElementType;
  className?: string;
  children: ReactNode;
};

const sizeClasses: Record<HeadingSize, string> = {
  sm: "text-base sm:text-xl 2xl:text-2xl",
  md: "text-2xl sm:text-3xl 2xl:text-4xl",
  lg: "text-3xl sm:text-5xl 2xl:text-6xl",
};

const colorClasses: Record<HeadingColor, string> = {
  dark: "text-[#2A384B]",
  light: "text-white",
};

const caseClasses: Record<HeadingCase, string> = {
  uppercase: "uppercase",
  lowercase: "lowercase",
  none: "normal-case",
};

export function Heading({
  size = "md",
  color = "dark",
  case: textCase = "uppercase",
  as: Tag = "h2",
  className,
  children,
}: HeadingProps) {
  return (
    <Tag
      className={`${colorClasses[color]} font-extrabold tracking-tight ${caseClasses[textCase]} ${sizeClasses[size]} ${className ?? ""}`}
    >
      {children}
    </Tag>
  );
}
