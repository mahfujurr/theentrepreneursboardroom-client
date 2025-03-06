/* eslint-disable react/prop-types */
import { NumericFormat } from "react-number-format";
import { formatCurrency } from "../../Utils/FormatCurrency";

const ReusablePandValue = ({
  formData,
  handleVInputChange,
  valueKey,
  result,
}) => {
  return (
    <div className="grid grid-cols-2 gap-5 text-sm md:text-base items-center">
      <NumericFormat
        value={formData[valueKey]} // Access value dynamically
        onValueChange={(values) => handleVInputChange(values.value, valueKey)} // Dynamic key handling
        allowNegative={true}
        thousandSeparator={","}
        suffix={"%"}
        className="w-full p-1 text-center bg-blue-900/50 text-blue-100"
        placeholder="0%"
      />
      <div className="text-gray-200 text-end">{formatCurrency(result)}</div>
    </div>
  );
};

export default ReusablePandValue;
