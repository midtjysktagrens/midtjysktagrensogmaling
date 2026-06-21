import type { ElementType, ReactNode } from "react";

type HeadingSize = "sm" | "md" | "lg";
type HeadingColor = "dark" | "light";

type HeadingProps = {
  size?: HeadingSize;
  color?: HeadingColor;
  as?: ElementType;
  className?: string;
  children: ReactNode;
};

const sizeClasses: Record<HeadingSize, string> = {
  sm: "text-base sm:text-xl",
  md: "text-2xl sm:text-3xl",
  lg: "text-3xl sm:text-5xl",
};

const colorClasses: Record<HeadingColor, string> = {
  dark: "text-[#2A384B]",
  light: "text-white",
};

export function Heading({
  size = "md",
  color = "dark",
  as: Tag = "h2",
  className,
  children,
}: HeadingProps) {
  return (
    <Tag
      className={`${colorClasses[color]} font-extrabold uppercase tracking-tight ${sizeClasses[size]} ${className ?? ""}`}
    >
      {children}
    </Tag>
  );
}
