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
      <label className="font-semibold text-gray-700">{label}</label>

      <input type={type} name={name} value={value} onChange={onChange} />
    </>
  );
}
