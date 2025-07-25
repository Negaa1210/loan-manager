import React from 'react';

interface LabeledInputProps {
  label: string;
  placeholder?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  name?: string;
  type?: string;
}

const LabeledInput: React.FC<LabeledInputProps> = ({
  label,
  placeholder,
  value,
  onChange,
  name,
  type = 'text',
}) => {
  return (
    <div className="flex flex-col gap-1">
      <label className="text-sm text-gray-900">{label}</label>
      <input
        type={type}
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        className="
          w-[300px]
          h-[53px]
          border
          border-gray-300
          rounded-[7px]
        
          pt-[15px]
          pb-[10px]
          text-sm
          placeholder-gray-400
          focus:outline-none
          focus:ring-2
          focus:ring-green-400
          focus:border-green-500
        "
      />
    </div>
  );
};

export default LabeledInput;
