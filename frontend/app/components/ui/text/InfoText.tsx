interface Props {
  label: string;
  value: string | number;
}

export default function InfoText({ label, value }: Props) {
  return (
    <p className="text-sm">
      <strong>{label}</strong>:{value}
    </p>
  );
}
