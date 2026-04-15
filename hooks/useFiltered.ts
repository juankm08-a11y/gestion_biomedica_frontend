export function useFiltered<T>(data: T[], search: string, field: keyof T) {
  if (!data) return [];

  return data.filter((item) =>
    String(item[field]).toLowerCase().includes(search.toLowerCase()),
  );
}
