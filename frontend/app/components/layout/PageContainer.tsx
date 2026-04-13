"use client";

import { ReactNode } from "react";

interface Props {
  title: string;
  children: ReactNode;
}

export default function PageContainer({ title, children }: Props) {
  return (
    <div className="min-h-screen bg-gray-100 flex justify-center p-10">
      <div className="bg-white w-full max-w-[1400px] shadow border border-gray-300 rounded-sm">
        <div className="px-6 py-4 border-b border-gray-300 text-lg font-semibold text-gray-700">
          {title}
        </div>

        <div className="p-6">{children}</div>
      </div>
    </div>
  );
}
