import { useState } from "react";

export function useSearch<T>(data: T[], field: keyof T) {
  const [search, setSearch] = useState("");

  const filtered = data.filter((item) =>
    String(item[field]).toLowerCase().includes(search.toLowerCase()),
  );
  return {
    search,
    setSearch,
    filtered,
  };
}
