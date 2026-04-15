import Icon from "../iconos/Icon";

interface Props {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

export default function SearchInput({ value, onChange, placeholder }: Props) {
  return (
    <div className="flex items-center gap-2 border-2 rounded px-2 flex-1">
      <Icon name="buscar" size={18} />
      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="flex-1 outline-none"
      />
    </div>
  );
}
