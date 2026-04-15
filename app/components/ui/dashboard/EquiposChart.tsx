"use client";

import { Cell, Pie, ResponsiveContainer, Tooltip } from "recharts";

const data = [
  { name: "Digital", value: 8 },
  { name: "Cardiología", value: 3 },
  { name: "Rayos X", value: 2 },
];

const colors = ["#8884d8", "#82ca9d", "#ffc658"];

export default function EquiposChart() {
  return (
    <div className="bg-[var(--color-card)] p-6 rounded-shadow">
      <h3 className="text-lg font-semibold mb-4">
        <ResponsiveContainer>
          <Pie data={data} dataKey="value" outerRadius={80} label>
            {data.map((entry, index) => (
              <Cell key={index} fill={colors[index]} />
            ))}
          </Pie>
          <Tooltip />
        </ResponsiveContainer>
      </h3>
    </div>
  );
}
