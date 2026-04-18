interface Props {
  label: string;
  name: string;
  value: string | number;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type?: string;
}

export default function InputField({
  label,
  name,
  value,
  onChange,
  type = "text",
}: Props) {
  return (
    <>
      <label className="text-sm font-medium text-gray-700">{label}</label>

      <input
        className="bg-[var(--color-input)] w-full border border-gray-700 px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
        type={type}
        name={name}
        value={value ?? ""}
        onChange={onChange}
      />
    </>
  );
}
