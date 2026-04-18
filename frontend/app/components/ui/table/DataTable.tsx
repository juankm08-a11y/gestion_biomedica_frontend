import Card from "../cards/Card";
import TableBody from "../table/TableBody";
import TableHead from "../table/TableHead";

export interface Column<T> {
  key: keyof T | "actions";
  label: string;
  render?: (item: T) => React.ReactNode;
}

interface Props<T> {
  data: T[];
  columns: Column<T>[];
  title?: string;
}

export default function DataTable<T>({ data, columns, title }: Props<T>) {
  const headers = columns.map((c) => c.label);

  const rows = data.map((item) =>
    columns.map((col) => {
      if (col.render) return col.render(item);
      return item[col.key as keyof T] as React.ReactNode;
    }),
  );

  return (
    <Card variant="table" title={title}>
      <div className="w-full overflox-x-auto">
        <table className="w-full table-auto text-sm text-gray-800 border border-gray-300 rounded">
          <TableHead headers={headers} />
          <TableBody rows={rows} />
        </table>
      </div>
    </Card>
  );
}
