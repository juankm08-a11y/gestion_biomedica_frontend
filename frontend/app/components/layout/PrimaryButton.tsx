import { ReactNode } from "react";

interface Props {
  text?: string;
  icon?: ReactNode;
  onClick?: () => void;
}

export default function PrimaryButton({ text, onClick, icon }: Props) {
  return (
    <button
      onClick={onClick}
      className="flex items-center gap-2 border border-gray-400 px-3 py-2 text-center-sm font-medium hover:bg-gray-100 transitiion"
    >
      {icon}
      {text}
    </button>
  );
}
