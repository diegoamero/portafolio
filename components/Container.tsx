import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
  as?: "div" | "header" | "section" | "footer" | "main";
};

export function Container({ children, className = "", as: Tag = "div" }: Props) {
  return (
    <Tag
      className={`mx-auto w-full max-w-5xl px-4 sm:px-6 lg:px-8 ${className}`}
    >
      {children}
    </Tag>
  );
}
