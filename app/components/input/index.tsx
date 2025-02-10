type InputProps = {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  title: string;
  type?: string;
  error?: string;
};

const Input: React.FC<InputProps> = ({
  value,
  onChange,
  title,
  error,
  type = "text",
}) => {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700">{title}</label>
      <input
        type={type}
        className={`mt-1 w-full border-b ${
          error ? "border-red-500" : "border-gray-700"
        } focus:outline-none`}
        value={value}
        onChange={onChange}
      />
      {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
    </div>
  );
};

export default Input;
