/* eslint-disable react/prop-types */
import { NumericFormat } from "react-number-format";

const ReusableOneInputValue = ({
  formData,
  handleVInputChange,
  label,
  valueKey,
}) => {
  return (
    <div className="grid grid-cols-4 gap-5 text-sm md:text-base items-center">
      <div className="text-gray-200 col-span-3 text-start">{label}</div>

      <NumericFormat
        value={formData[valueKey]} // Access value dynamically
        onValueChange={(values) => handleVInputChange(values.value, valueKey)} // Dynamic key handling
        allowNegative={true}
        thousandSeparator={","}
        prefix={"$"}
        className="w-full p-1 text-end bg-blue-900/50 text-blue-100"
        placeholder="$0.00"
      />
    </div>
  );
};

export default ReusableOneInputValue;
