import React, { ReactNode } from "react";

interface Props {
  children: ReactNode;
  className?: string;
  variant?: "white" | "pink";
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export default function Button({
  children,
  className = "",
  variant = "white",
  onClick = () => null,
}: Props) {
  return (
    <button
      className={`${className} ${
        variant === "pink"
          ? "bg-todo-pink-400 text-todo-white hover:opacity-60"
          : "bg-todo-white text-todo-black hover:text-todo-pink-400"
      } px-3 py-2 rounded-xl todo-shadow  duration-300`}
      type="button"
      onClick={onClick}
    >
      {children}
    </button>
  );
}
