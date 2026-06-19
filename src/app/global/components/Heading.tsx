import type { ElementType, ReactNode } from "react";

type HeadingSize = "sm" | "md" | "lg";

type HeadingProps = {
  size?: HeadingSize;
  as?: ElementType;
  className?: string;
  children: ReactNode;
};

const sizeClasses: Record<HeadingSize, string> = {
  sm: "text-xl",
  md: "text-3xl",
  lg: "text-5xl",
};

export function Heading({
  size = "md",
  as: Tag = "h2",
  className,
  children,
}: HeadingProps) {
  return (
    <Tag
      className={`text-[#2A384B] font-extrabold uppercase tracking-tight ${sizeClasses[size]} ${className ?? ""}`}
    >
      {children}
    </Tag>
  );
}
