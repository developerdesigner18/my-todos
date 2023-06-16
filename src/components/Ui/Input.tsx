interface Props {
  className?: string;
  value: string | number;
  placeholder: string;
  type?: "text" | "number" | "password";
  isCircleEnabled?: boolean;
  // eslint-disable-next-line no-unused-vars
  onChange?: (value: string) => void;
}

export default function Input({
  className = "",
  value,
  placeholder,
  type = "text",
  isCircleEnabled = false,
  onChange = () => null,
}: Props) {
  return (
    <div
      className={`${className} flex items-center gap-1 p-2 rounded-xl bg-todo-white todo-shadow`}
    >
      {isCircleEnabled && <div className="h-3 w-3 rounded-full border-2 border-todo-pink-400 " />}
      <input
        className=" text-todo-black placeholder-todo-gray-300 bg-todo-white w-full outline-none"
        value={value}
        placeholder={placeholder}
        type={type}
        onChange={(e) => onChange?.(e.target.value)}
      />
    </div>
  );
}
