/* eslint-disable react/prop-types */

import { formatCurrency } from "../../Utils/FormatCurrency";

const ReusableValues = ({ firstValue, secondValue, thirdValue }) => {
  return (
    <div className="grid grid-cols-4 gap-5 text-sm italic items-center">
      <div className="text-gray-200 col-span-2 text-start">{firstValue}</div>

      <div className="text-gray-300 font-semibold text-end">
        {formatCurrency(secondValue)}
      </div>
      <div className="text-gray-300 font-semibold text-end">
        {formatCurrency(thirdValue)}
      </div>
    </div>
  );
};

export default ReusableValues;
