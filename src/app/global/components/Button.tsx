import type { AnchorHTMLAttributes } from "react";

type ButtonVariant = "primary" | "secondary";

type ButtonProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  variant?: ButtonVariant;
};

const variantClasses: Record<ButtonVariant, string> = {
  primary: "bg-[#4C80C2] text-white hover:bg-blue-600",
  secondary: "bg-white text-gray-900 hover:bg-gray-100",
};

export function Button({
  variant = "primary",
  href = "#",
  className,
  children,
  ...props
}: ButtonProps) {
  return (
    <a
      href={href}
      className={`inline-flex items-center justify-center font-semibold whitespace-nowrap transition ${variantClasses[variant]} ${className ?? ""}`}
      {...props}
    >
      {children}
    </a>
  );
}
