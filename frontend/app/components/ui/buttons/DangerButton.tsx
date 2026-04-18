import { ReactNode } from "react";

interface Props {
  text?: string;
  icon?: ReactNode;
  onClick?: () => void;
}

export default function DangerButton({ text, onClick, icon }: Props) {
  return (
    <button className="flex items-center gap-2 bg-red-600 text-white px-3 py-2 text-sm font-medium hover:bg-red-700 transition">
      {icon}
      {text}
    </button>
  );
}
