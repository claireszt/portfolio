import React from "react";

type TitleProps = {
  children: React.ReactNode;
  size?: "sm" | "md" | "lg";
  className?: string;
};

const sizeMap = {
  sm: "text-2xl",
  md: "text-3xl",
  lg: "text-5xl",
};

export default function Title({
  children,
  size = "lg",
  className = "",
}: TitleProps) {
  return (
    <h1
      className={`font-serif font-bold text-primary ${sizeMap[size]} ${className}`}
    >
      {children}
    </h1>
  );
}
