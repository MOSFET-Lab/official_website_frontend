import * as React from "react";

type Variant = "default" | "outline" | "destructive" | "secondary" | "ghost" | "link";
type Size = "default" | "lg" | "sm" | "icon";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?: Size;
}

const variantClasses: Record<Variant, string> = {
  default: "bg-sky-500 text-white hover:bg-sky-600",
  destructive: "bg-red-500 text-white hover:bg-red-600",
  outline: "border border-current bg-transparent hover:bg-sky-500 hover:text-white",
  secondary: "bg-zinc-200 text-zinc-900 hover:bg-zinc-300",
  ghost: "bg-transparent hover:bg-zinc-100",
  link: "bg-transparent underline text-sky-500 hover:text-sky-600",
};

const sizeClasses: Record<Size, string> = {
  default: "px-4 py-2 text-sm",
  sm: "px-3 py-1.5 text-xs",
  lg: "px-6 py-3 text-base",
  icon: "p-2",
};

export function Button({
  variant = "default",
  size = "default",
  className = "",
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={`inline-flex items-center justify-center rounded-xl font-medium transition-colors focus:outline-none disabled:opacity-50 ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
