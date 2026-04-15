interface Props {
  title: string;
  value: number | string;
}

export default function MetricCard({ title, value }: Props) {
  return (
    <div className="bg-[var(--color-card)] p-6 rounded shadow text-center">
      <h3 className="text-lg-font-semibold">{title}</h3>
      <p className="text-3xl font-bold mt-2">{value}</p>
    </div>
  );
}
