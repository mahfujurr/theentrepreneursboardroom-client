import { formatCurrency } from "../../Utils/FormatCurrency";

const MASamples = () => {
  return (
    <div className="border  border-white rounded-lg w-full  mx-auto text-base ">
      <p className=" text-center py-1 bg-gray-800 rounded-t-lg font-bold text-white text-lg">
        Sample
      </p>
      <div className="   max-w-2xl mx-auto p-5">
        {/* Row 1: GCI */}
        <div className="grid grid-cols-4 gap-4 ">
          {/* First Column - Empty */}
          <div></div>

          {/* Second Column - Text */}
          <div className="flex items-center justify-end ">GCI</div>

          {/* Third Column - Input Field */}
          <div className="flex items-center justify-center ">
            <p className="w-full p-1 text-end">$4,200,000</p>
          </div>

          {/* Fourth Column - Empty */}
          <div></div>
        </div>

        {/* Row 2: Referral to other co. */}
        <div className="grid grid-cols-4 gap-4 border-b border-gray-400 ">
          {/* First and Second Columns - Combined for Text */}
          <div className="col-span-2 flex items-center justify-end  ">
            Referral to other co.
          </div>

          {/* Third Column - Input Field */}
          <div className="flex items-center justify-center ">
            <p className="w-full p-1 text-end text-red-500">
              ($200,000)
            </p>
          </div>

          {/* Fourth Column - Empty */}
          <div></div>
        </div>
        {/* Row 3: AGCI */}
        <div className="grid grid-cols-4 gap-4 ">
          {/* First Column - Empty */}
          <div></div>

          {/* Second Column - Text */}
          <div className="flex items-center justify-end ">AGCI</div>

          {/* Third Column - Input Field */}
          <div className="flex items-center justify-center ">
            <p className="w-full p-1 text-end">{formatCurrency(4000000)}</p>
          </div>

          {/* Fourth Column - Empty */}
          <div></div>
        </div>

        {/* Row 4: Amounts to Agents. */}
        <div className="grid grid-cols-4 gap-4 border-b border-gray-400">
          {/* First and Second Columns - Combined for Text */}
          <div className="col-span-2 flex items-center justify-end ">
            Amounts to Agents
          </div>

          {/* Third Column - Input Field */}
          <div className="flex items-center justify-center ">
            <p className="w-full p-1 text-end text-red-500">
             ($3,150,000)
            </p>
          </div>

          {/* Fourth Column - Empty */}
          <div>Commission Expense</div>
        </div>
        {/* Row 5 gross margin */}
        <div className="grid grid-cols-4 gap-4 items-center">
          <div className="col-span-2 flex items-center justify-center "></div>

          <div className="flex items-center justify-center">
            <p className="w-full p-1 text-end">$850,000</p>
          </div>

          {/* Fourth Column - Empty */}
          <div>Gross Margin</div>
        </div>
        {/* Row 6 $850,000/ $4,200,000 =  */}
        <div className="grid grid-cols-4 gap-4 mb-5">
          {/* First and Second Columns - Combined for Text */}
          <div className="col-span-2 flex items-center justify-end ">
            $850,000/ $4,200,000 =
          </div>

          {/* Third Column - Input Field */}
          <div className="flex items-center justify-end w-full">20.2%</div>

          {/* Fourth Column - Empty */}
          <div>Percent Retained</div>
        </div>
        {/* Row 7 */}
        <div className="grid grid-cols-4 gap-4 border-b border-gray-400">
          {/* First and Second Columns - Combined for Text */}
          <div className="col-span-2 flex items-center justify-end ">
            Operating Expenses
          </div>

          {/* Third Column - Input Field */}
          <div className="flex items-center  text-red-500 justify-end w-full">
            ($650,000)
          </div>

          {/* Fourth Column - Empty */}
          <div></div>
        </div>
        {/* Row 8 */}
        <div className="grid grid-cols-4 gap-4 my-5">
          {/* First and Second Columns - Combined for Text */}
          <div className="col-span-2 flex items-center justify-end ">
            $850,000 - $650,000 =
          </div>

          {/* Third Column - Input Field */}
          <div className="flex items-center justify-end w-full">$200,000</div>

          {/* Fourth Column - Empty */}
          <div>EBITDA</div>
        </div>
        {/* Row 9 */}
        <div className="grid grid-cols-4 gap-4 mb:5 lg:mb-64">
          {/* First and Second Columns - Combined for Text */}
          <div className="col-span-2 flex items-center justify-end ">
            $200,000/ $4,200,000 =
          </div>

          {/* Third Column - Input Field */}
          <div className="flex items-center justify-end w-full">4.76%</div>

          {/* Fourth Column - Empty */}
          <div >ROR</div>
        </div>
      </div>
      <p className=" text-center mt:5 lg:mt-96 py-1 bg-gray-800 rounded-t-lg font-bold text-white text-lg">
        Simplified M&A Calculations
      </p>
      <div className="   max-w-2xl mx-auto p-5">
        {/* Row 1: GCI */}
        <div className="grid grid-cols-3 gap-4 ">
          {/* First Column - Empty */}
          <div></div>

          {/* Second Column - Text */}
          <div className="flex items-center justify-start ">EBITDA</div>

          {/* Third Column - Input Field */}
          <div className="text-end w-full">$200,000 </div>
        </div>
        <div className="grid grid-cols-3 gap-4 ">
          {/* First Column - Empty */}
          <div></div>

          {/* Second Column - Text */}
          <div className="flex items-center justify-start ">Owner Salary</div>

          {/* Third Column - Input Field */}
          <div className="text-end w-full">$150,000 </div>
        </div>
        <div className="grid grid-cols-3 gap-4 ">
          {/* First Column - Empty */}
          <div></div>

          {/* Second Column - Text */}
          <div className="flex items-center justify-start ">
            One time expense
          </div>

          {/* Third Column - Input Field */}
          <div className="text-end w-full">$25,000 </div>
        </div>
        <div className="grid grid-cols-3 gap-4 border-b border-gray-400">
          {/* First Column - Empty */}
          <div></div>

          {/* Second Column - Text */}
          <div className="flex items-center justify-start ">Owner travel </div>

          {/* Third Column - Input Field */}
          <div className="text-end w-full">$5,000 </div>
        </div>

        {/* Row 2: Referral to other co. */}
        <div className="grid grid-cols-4 gap-4 border-b border-gray-400 ">
          {/* First and Second Columns - Combined for Text */}
          <div className="col-span-3 flex items-center justify-start  ">
            Adjusted EBITDA after &quot;Add Backs&quot;
          </div>

          {/* Third Column - Input Field */}
          <div className="flex items-center justify-center ">
            <p className="w-full p-1 text-end ">$380,000</p>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-4 ">
          {/* First Column - Empty */}
          <div></div>

          {/* Second Column - Text */}
          <div className="flex items-center justify-start ">
            Replacement Manager
          </div>

          {/* Third Column - Input Field */}
          <div className="text-end w-full text-red-500">($120,000)</div>
        </div>
        <div className="grid grid-cols-3 gap-4 border-b border-gray-400">
          {/* First Column - Empty */}
          <div></div>

          {/* Second Column - Text */}
          <div className="flex items-center justify-start ">
            Owner commission{" "}
          </div>

          {/* Third Column - Input Field */}
          <div className="text-end w-full text-red-500">($50,000)</div>
        </div>

        <div className="grid grid-cols-4 gap-4 border-b border-gray-400 ">
          {/* First and Second Columns - Combined for Text */}
          <div className="col-span-3 flex items-center justify-start  ">
            Adjusted EBITDA after &quot;Deductions&quot;
          </div>

          {/* Third Column - Input Field */}
          <div className="flex items-center justify-center ">
            <p className="w-full p-1 text-end ">$210,000</p>
          </div>
        </div>
        <div className="grid grid-cols-4 gap-4 pt-10">
          {/* First and Second Columns - Combined for Text */}
          <div className="col-span-3 flex items-center justify-start  ">
            Deal costs (CPA, new signs, etc.)
          </div>

          {/* Third Column - Input Field */}
          <div className="flex items-center justify-center ">
            <p className="w-full p-1 text-end ">$75,000</p>
          </div>
        </div>
        <div className="grid grid-cols-4 gap-4 border-b border-gray-400 ">
          {/* First and Second Columns - Combined for Text */}
          <div className="col-span-3 flex items-center justify-start  ">
            Buyout (cash plus earn out)
          </div>

          {/* Third Column - Input Field */}
          <div className="flex items-center justify-center ">
            <p className="w-full p-1 text-end ">$450,000 </p>
          </div>
        </div>
        <div className="grid grid-cols-4 gap-4 ">
          {/* First and Second Columns - Combined for Text */}
          <div className="col-span-3 flex items-center justify-start  ">
            Sum of ALL Deal costs
          </div>

          {/* Third Column - Input Field */}
          <div className="flex items-center justify-center ">
            <p className="w-full p-1 text-end ">$525,000 </p>
          </div>
        </div>
        <div className="grid grid-cols-4 gap-4 ">
          {/* First and Second Columns - Combined for Text */}
          <div></div>
          <div className="col-span-2 flex items-center justify-start  ">
            ROI - $210,000/ $525,000 =
          </div>

          {/* Third Column - Input Field */}
          <div className="flex items-center justify-center ">
            <p className="w-full p-1 text-end ">40.00%</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MASamples;
