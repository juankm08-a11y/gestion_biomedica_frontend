"Use client";

import { FC } from "react";

interface TableProps {
  headers: String[];
  rows: React.ReactNode[][];
  actions?: React.ReactNode;
}

const Table: FC<TableProps> = ({ headers, rows, actions }) => {
  return (
    <div className="w-full bg-white border border-gray-300 rounded-sm">
      <div className="w-full text-sm text-gray-800">
        <table className="min-w-full table-auto">
          <thead className="bg-gray-100 border-b border-gray-300">
            <tr>
              {headers.map((header, index) => (
                <th
                  key={index}
                  className="px-6 py-3 text-left font-semibold text-gray-700"
                >
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="px-6 py-3">
            {rows.map((row, index) => (
              <tr
                key={index}
                className="border-b border-gray-300 hover:bg-gray-50 transition"
              >
                {row.map((cell, idx) => (
                  <td key={idx} className="px-4 py-2">
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {actions && <div className="p-4">{actions}</div>}
    </div>
  );
};

export default Table;
