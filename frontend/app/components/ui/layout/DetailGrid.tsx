import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  columns?: 1 | 2 | 3;
}

export default function DetailGrid({ children, columns = 2 }: Props) {
  const gridCols = {
    1: "grid-cols-1",
    2: "grid-cols-2",
    3: "grid-cols-3",
  };

  return <div className={`grid ${gridCols[columns]} gap-4`}>{children}</div>;
}
