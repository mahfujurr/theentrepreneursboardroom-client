/* eslint-disable react/prop-types */
import { NumericFormat } from "react-number-format";

const ReusableInputParcent = ({
  formData,
  handleVInputChange,
  label,
  valueKey,
  valueKey2,
}) => {
  return (
    <div className="grid grid-cols-4 gap-5 text-sm md:text-base items-center">
      <div className="text-gray-200 col-span-2 text-start">{label}</div>
      <NumericFormat
        value={formData[valueKey]} // Access value dynamically
        onValueChange={(values) => handleVInputChange(values.value, valueKey)} // Dynamic key handling
        allowNegative={true}
        thousandSeparator={","}
        suffix="%"
        className="w-full p-1 text-end bg-blue-900/50 text-blue-100"
        placeholder="0%"
      />
      <NumericFormat
        value={formData[valueKey2]} // Access value dynamically
        onValueChange={(values) => handleVInputChange(values.value, valueKey2)} // Dynamic key handling
        allowNegative={true}
        thousandSeparator={","}
        suffix="%"
        className="w-full p-1 text-end bg-blue-900/50 text-blue-100"
        placeholder="0%"
      />
    </div>
  );
};

export default ReusableInputParcent;
