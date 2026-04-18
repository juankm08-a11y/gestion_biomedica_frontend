"use client";

import { useEffect, useState } from "react";
import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";

const data = [
  { name: "Digital", value: 8 },
  { name: "Cardiología", value: 3 },
  { name: "Rayos X", value: 2 },
];

const colors = ["#8884d8", "#82ca9d", "#ffc658"];

export default function EquiposChart() {

  const [mounted,setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null;
  return (
    <div className="bg-[var(--color-card)] p-6 rounded shadow h-full">
      <h3 className="text-lg font-semibold mb-4">
        Distribución de equipos
      </h3>
    
       <ResponsiveContainer width="100%" aspect={1.6}>
        <PieChart>
            <Pie data={data} dataKey="value" outerRadius={80} label>
            {data.map((entry, index) => (
              <Cell key={index} fill={colors[index]} />
            ))}
          </Pie>
        </PieChart>
          <Tooltip />
        </ResponsiveContainer>
    </div>
  );
}
