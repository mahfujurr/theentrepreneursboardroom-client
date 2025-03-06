/* eslint-disable react/prop-types */
import { formatCurrency } from "../../Utils/FormatCurrency";

const ReusableHeading = ({ firstValue, secondValue, thirdValue }) => {
  return (
    <div className="grid grid-cols-4 gap-5 text-sm md:text-base items-center bg-gray-700">
      <div className="text-gray-200 col-span-2 text-start">{firstValue}</div>

      <div className="text-gray-300 font-semibold text-end">
        {secondValue ? formatCurrency(secondValue) : ''}
      </div>
      <div className="text-gray-300 font-semibold text-end">
        {thirdValue ? formatCurrency(thirdValue) : ''}
      </div>
    </div>
  );
};

export default ReusableHeading;
