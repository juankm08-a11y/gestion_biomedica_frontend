"use client";

interface Option {
  value: string;
  label: string;
}

interface SelectFieldProps {
  label: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  options: Option[];
}

const SelectField: React.FC<SelectFieldProps> = ({
  label,
  name,
  value,
  onChange,
  options,
}) => {
  return (
    <div className="mb-4">
      <label htmlFor={name} className="block text-sm font-medium text-gray-700">
        {label}
      </label>
      <select
        name={name}
        value={value}
        onChange={onChange}
        id={name}
        className="border borderg-gray p-2 w-full focus:outlin focus:ring-2 focus:ring-red-400 "
      >
        <option value="">
          {" "}
          Seleccione
          {label.toLowerCase()}
        </option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectField;
