"use client";
import { ReactNode } from "react";

interface Props {
  titulo: string;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  children: ReactNode;
}

export default function FormularioBase({ titulo, onSubmit, children }: Props) {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-10 border-red-600">
      <div className="bg-white w-[900px] shadow border border-gray-300 p-10">
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-gray-800">{titulo}</h1>
        </div>

        <div className="border border-gray-300 p-8">
          <form
            onSubmit={onSubmit}
            className="grid grid-cols-2 gap-x-10 gap-y-6 items-center max-w-auto"
          >
            {children}
          </form>
        </div>
      </div>
    </div>
  );
}
