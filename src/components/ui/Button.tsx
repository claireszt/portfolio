import React from "react";

type ButtonProps = {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  href?: string;
  className?: string;
};

export default function Button({
  children,
  variant = "primary",
  href,
  className = "",
}: ButtonProps) {
  const base =
    "px-6 py-3 rounded-md text-sm font-semibold uppercase tracking-wider leading-tight w-fit";
  const variants = {
    primary: "bg-primary text-white shadow-md hover:bg-[#bb3f5c]",
    secondary:
      "border-3 border-accent text-accent hover:bg-accent hover:text-white",
  };

  const styles = `${base} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={styles}
      >
        {children}
      </a>
    );
  }

  return <button className={styles}>{children}</button>;
}
