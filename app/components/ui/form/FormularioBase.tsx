"use client";
import { ReactNode } from "react";

interface Props {
  titulo: string;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  children: ReactNode;
}

export default function FormularioBase({ titulo, onSubmit, children }: Props) {
  return (
    <div className="flex justify-center mt-10 w-full overflow-x-auto">
      <div className="bg-[var(--color-form-bg)]  min-w-[900px] border border-gray-300 shadow-sm">
        <div className="px-6 py-4 border-b border-gray-300">
          <h1 className="text-xl font-semibold text-gray-800">{titulo}</h1>
        </div>

        <div className="p-8">
          <form
            onSubmit={onSubmit}
            className="grid grid-cols-[180px_1fr] gap-x-6 gap-y-5 items-center"
          >
            {children}
          </form>
        </div>
      </div>
    </div>
  );
}
