interface Props {
  text: string;
  onClick?: () => void;
}

export default function PrimaryButton({ text, onClick }: Props) {
  return (
    <button
      onClick={onClick}
      className="border border-gray-400 px-5 py-2 text-sm font-medium hover:bg-gray-100 transition"
    >
      {text}
    </button>
  );
}
