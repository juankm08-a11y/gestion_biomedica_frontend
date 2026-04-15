import { ReactNode } from "react";

interface Props {
  text?: string;
  icon?: ReactNode;
  onClick?: () => void;
}
export default function SecondaryButton({ text, onClick, icon }: Props) {
  return (
    <button
      onClick={onClick}
      className="flex items-center gap-2 border border-gray-300 px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 transition"
    >
      {icon}
      {text}
    </button>
  );
}
