import { useEffect, useState } from "react";
import ReusableFormula from "../components/formulaReusable/reusableFormula";
import { NumericFormat } from "react-number-format";
import ReusableHeading from "../components/formulaReusable/reusableHeading";
import ReuableParcent from "../components/formulaReusable/reuableParcent";
import ReusableInputs from "../components/formulaReusable/reusableInputs";
import ReusableInputNumbers from "../components/formulaReusable/reusableInputNumbers";
import ReusableValues from "../components/formulaReusable/reusableValues";
import ReusableInputParcent from "../components/formulaReusable/reusableInputparcent";
import ReusableNumberValues from "../components/formulaReusable/reusableNumberValues";
import { formatCurrency } from "../Utils/FormatCurrency";
import ReusableFormulaPandCurrency from "../components/formulaReusable/reusableFormulaPandCurrency";
import ReusableOneInputValue from "../components/formulaReusable/reusableOneInputValue";
import ReusablePandValue from "../components/formulaReusable/reusablePandValue";
import { Button } from "antd";

const Valuation = () => {
  // State to store the input values
  const initialValuationData = {
    E12: "-20",
    C15: "1875000",
    C16: "1650000",
    C22: "75000",
    E22: "75000",
    C24: "24000",
    E24: "24000",
    C26: "48000",
    E26: "48000",
    C28: "13000",
    E28: "30000",
    C33: "-50000",
    E33: "-50000",
    C40: "10000",
    E40: "10000",
    E38: "",
    C38: "",
    C39: "",
    E39: "",
    C48: "40",
    E48: "30",
    C50: "200",
    E50: "180",
    C52: "75000000",
    E52: "67500000",
    C55: "9375000",
    E55: "9375000",
    C59: "95",
    E59: "95",
    C57: "15000000",
    E57: "15000000",
    H12: "2",
    K12: "3",
    H16: "25",
    K16: "40",
    L18: "330000",
    L22: "100",
    L23: "0",
    NaN: "3",
    L26: "20",
    L25: "3",
    M29: "70000",
    I30: "20",
    I31: "25",
    I32: "30",
    I33: "35",
    K30: "40",
    K31: "50",
    K32: "60",
    K33: "70",
    M36: "0",
    M37: "75000",
    M38: "0",
    M39: "20000",
    M45: "10000",
    M46: "8000",
    M47: "15000",
    K49: "10",
    M51: "0",
    M52: "0",
    M53: "0",
    M54: "0",
    candidateName: "",
  };
  const [ValuationData, setValuationData] = useState(initialValuationData);
  const handleDefault = () => {
    setValuationData(initialValuationData);
  };

  const handleReset = () => {
    setValuationData({
      E12: "",
      C15: "",
      C16: "",
      C22: "",
      E22: "",
      C24: "",
      E24: "",
      C26: "",
      E26: "",
      C28: "",
      E28: "",
      C33: "",
      E33: "",
      C38: "",
      E38: "",
      C39: "",
      E39: "",
      C40: "",
      E40: "",
      C48: "",
      E48: "",
      C50: "",
      E50: "",
      C52: "",
      E52: "",
      C55: "",
      E55: "",
      C57: "",
      E57: "",
      C59: "",
      E59: "",
      H12: "",
      K12: "",
      H16: "",
      K16: "",
      L18: "",
      L22: "",
      L23: "",
      L25: "",
      L26: "",
      M29: "",
      I30: "",
      K30: "",
      I31: "",
      K31: "",
      I32: "",
      K32: "",
      I33: "",
      K33: "",
      M36: "",
      M37: "",
      M38: "",
      M39: "",
      M45: "",
      M46: "",
      M47: "",
      K49: "",
      M51: "",
      M52: "",
      M53: "",
      M54: "",
    });
  };
  // Load data from localStorage on component mount
  useEffect(() => {
    const savedData = localStorage.getItem("ValuationData");
    if (savedData) {
      setValuationData(JSON.parse(savedData));
    }
  }, []);

  // Update localStorage whenever formData changes
  useEffect(() => {
    localStorage.setItem("ValuationData", JSON.stringify(ValuationData));
  }, [ValuationData]);
  // Handler for updating state
  const handleVInputChange = (value, name) => {
    setValuationData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const E12 = Number(ValuationData.E12) / 100;
  const C15 = Number(ValuationData.C15);
  const E15 = C15 * (1 + E12);
  const C16 = Number(ValuationData.C16);
  const C18 = C15 - C16;
  const C19 = (C18 / C15) * 100;
  const E16 = E15 * (1 - C18 / C15);
  const E18 = E15 - E16;
  const E19 = (E18 / E15) * 100;
  const C22 = Number(ValuationData.C22);
  const E22 = Number(ValuationData.E22);
  const C23 = (C22 / C15) * 100;
  const E23 = (E22 / E15) * 100;
  const C24 = Number(ValuationData.C24);
  const E24 = Number(ValuationData.E24);
  const C25 = (C24 / C15) * 100;
  const E25 = (E24 / E15) * 100;
  const C26 = Number(ValuationData.C26);
  const E26 = Number(ValuationData.E26);
  const C27 = (C26 / C15) * 100;
  const E27 = (E26 / E15) * 100;
  const C28 = Number(ValuationData.C28);
  const E28 = Number(ValuationData.E28);
  const C29 = (C28 / C15) * 100;
  const E29 = (E28 / E15) * 100;
  const C30 = C22 + C24 + C26 + C28;
  const E30 = E22 + E24 + E26 + E28;
  const C31 = (C30 / C15) * 100;
  const E31 = (E30 / E15) * 100;
  const C33 = Number(ValuationData.C33);
  const E33 = Number(ValuationData.E33);
  const C35 = C18 - C30 - C33;
  const E35 = E18 - E30 - E33;
  const C36 = (C35 / C15) * 100;
  const E36 = (E35 / E15) * 100;
  const C38 = Number(ValuationData.C38);
  const E38 = Number(ValuationData.E38);
  const C39 = Number(ValuationData.C39);
  const E39 = Number(ValuationData.E39);
  const C40 = Number(ValuationData.C40);
  const E40 = Number(ValuationData.E40);
  const C42 = C35 + C38 + C39 + C40;
  const E42 = E35 + E38 + E39 + E40;
  const C43 = (C42 / C15) * 100;
  const E43 = (E42 / E15) * 100;
  const C48 = Number(ValuationData.C48);
  const E48 = Number(ValuationData.E48);
  const C50 = Number(ValuationData.C50);
  const E50 = Number(ValuationData.E50);
  const C52 = Number(ValuationData.C52);
  const E52 = Number(ValuationData.E52);
  const C55 = Number(ValuationData.C55);
  const E55 = Number(ValuationData.E55);
  const C57 = Number(ValuationData.C57);
  const E57 = Number(ValuationData.E57);
  const C59 = Number(ValuationData.C59);
  const E59 = Number(ValuationData.E59);
  const C61 = (C15 / C52) * 100;
  const E61 = (E15 / E52) * 100;
  const C60 = C57 * (C59 / 100) * (C15 / C52) * (C18 / C15);
  const E60 = E57 * (E59 / 100) * (E15 / E52) * (E18 / E15);
  const C56 = C55 * (C15 / C52) * (C18 / C15);
  const E56 = E55 * (E15 / E52) * (E18 / E15);
  const C63 = C50 / C48;
  const E63 = E50 / E48;
  const C64 = C18 / C48;
  const E64 = E18 / E48;
  const C65 = C42 / C48;
  const E65 = E42 / E48;

  const C67 = C65 * 25;
  const E67 = E65 * 25;
  const C68 = C65 * 50;
  const E68 = E65 * 50;
  const C69 = C65 * 100;
  const E69 = E65 * 100;
  const C70 = C65 * 250;
  const E70 = E65 * 250;
  const H12 = Number(ValuationData.H12);
  const K12 = Number(ValuationData.K12);
  const J12 = C42 * H12;
  const L12 = C42 * K12;
  const H16 = Number(ValuationData.H16);
  const K16 = Number(ValuationData.K16);
  const J16 = (C18 * H16) / 100;
  const L16 = (C18 * K16) / 100;
  const L18 = Number(ValuationData.L18);
  const L22 = Number(ValuationData.L22);
  const M22 = (C56 * L22) / 100;
  const L23 = Number(ValuationData.L23);
  const M23 = (C56 * L23) / 100;
  const L25 = Number(ValuationData.L25);
  const L26 = Number(ValuationData.L26);
  const M26 = C18 * L25 * (L26 / 100);
  const M29 = Number(ValuationData.M29);
  const I30 = Number(ValuationData.I30);
  const K30 = Number(ValuationData.K30);
  const J30 = L18 * (I30 / 100);
  const L30 = L18 * (K30 / 100);
  const I31 = Number(ValuationData.I31);
  const K31 = Number(ValuationData.K31);
  const J31 = L18 * (I31 / 100);
  const L31 = L18 * (K31 / 100);
  const I32 = Number(ValuationData.I32);
  const K32 = Number(ValuationData.K32);
  const J32 = L18 * (I32 / 100);
  const L32 = L18 * (K32 / 100);
  const I33 = Number(ValuationData.I33);
  const K33 = Number(ValuationData.K33);
  const J33 = L18 * (I33 / 100);
  const L33 = L18 * (K33 / 100);
  const M36 = Number(ValuationData.M36);
  const M37 = Number(ValuationData.M37);
  const M38 = Number(ValuationData.M38);
  const M39 = Number(ValuationData.M39);
  const M42 = M22 + M23 + M26 + M29 + M36 + M37 + M38 + M39;
  const M45 = Number(ValuationData.M45);
  const M46 = Number(ValuationData.M46);
  const M47 = Number(ValuationData.M47);
  const K49 = Number(ValuationData.K49);
  const M49 = C64 * K49;
  const M51 = Number(ValuationData.M51);
  const M52 = Number(ValuationData.M52);
  const M53 = Number(ValuationData.M53);
  const M54 = Number(ValuationData.M54);
  const M56 = M42 + M45 + M46 + M47 + M49 + M51 + M52 + M53 + M54;

  const M58 = C42 / M56;
  const M59 = M56 / C42;
  const M60 = M42 / C48;
  const heading = "Valuation & What-If? Scenarios";
  return (
    <div className="min-h-screen max-w-7xl  mx-auto">
      <h1 className="text-2xl md:text-3xl text-gray-100 syncopate-regular pt-10">
        {heading.toUpperCase()}
      </h1>
      <p className="text-gray-300 text-lg">
        Understanding the potential value of a brokerage acquisition requires
        more than just a static calculation — it’s about exploring different
        outcomes. This section helps you model two valuation scenarios, allowing
        you to compare best-case and conservative projections. By adjusting key
        financial drivers, you’ll gain insights into how changes in revenue,
        expenses, and retention impact the overall value and success of the
        deal.
      </p>
      {/* candidate name  */}
      <div className="flex gap-4 justify-center my-5 items-center">
        <label className="w-1/2 md:w-1/4 font-medium text-gray-100 text-end border-b  text-sm md:text-base">
          Candidate Name :
        </label>
        <input
          type="text"
          value={ValuationData?.candidateName || ""}
          className="w-1/2 md:w-1/4 border-b text-sm md:text-base outline-none"
          onChange={(e) => handleVInputChange(e.target.value, "candidateName")}
          placeholder="Enter candidate name"
        />
      </div>
      <div className="">
        <h2 className="text-2xl syncopate-regular mb-2  mt-5 text-center">
          1. DATA ENTRY
        </h2>
        <div className="w-full border rounded-lg text-center px-3 py-5">
          <p className="text-xl lg:text-2xl syncopate-regular mb-2 ">
            ENTER & ADJUST : Profit & Loss Statement
          </p>

          <div className="flex justify-between items-center ">
            <p className="w-3/4 text-blue-300 font-semibold text-lg">
              Market Decline/Increase
            </p>
            <NumericFormat
              value={ValuationData.E12}
              onValueChange={(values) =>
                handleVInputChange(values.value, "E12")
              }
              allowNegative
              suffix="%"
              className="w-1/4 p-1 text-center text-lg font-semibold"
              placeholder="0%"
            />
          </div>
          <div className="grid grid-cols-4 gap-5 text-sm md:text-base mt-5">
            <div className="text-gray-200 col-span-2 text-start"></div>

            <div className="text-gray-300 font-semibold">
              Current (Baseline)
            </div>
            <div className="text-gray-300 font-semibold">
              Adjusted (WHAT IF?)
            </div>
          </div>
          <ReusableFormula
            formData={ValuationData}
            handleVInputChange={handleVInputChange}
            label="Total Adjusted Gross Commission Income"
            valueKey="C15"
            result={E15}
          />
          <ReusableFormula
            formData={ValuationData}
            handleVInputChange={handleVInputChange}
            label="Total Commission Expense (amt to agents) "
            valueKey="C16"
            result={E16}
          />
          <ReusableHeading
            firstValue={"Gross Margin (Company Dollar) "}
            secondValue={C18}
            thirdValue={E18}
          />
          <ReuableParcent
            firstValue={"Percent Retained"}
            secondValue={C19}
            thirdValue={E19}
          />
          <div className="pt-5"></div>
          <ReusableHeading firstValue={"Adjusted Operating Expenses"} />
          <ReusableInputs
            formData={ValuationData}
            handleVInputChange={handleVInputChange}
            label="Salaries & Payroll "
            valueKey="C22"
            valueKey2="E22"
          />
          <ReuableParcent
            firstValue={"As a percentage of GCI"}
            secondValue={C23}
            thirdValue={E23}
          />
          <ReusableInputs
            formData={ValuationData}
            handleVInputChange={handleVInputChange}
            label="Advertising & Marketing"
            valueKey="C24"
            valueKey2="E24"
          />
          <ReuableParcent
            firstValue={"As a percentage of GCI"}
            secondValue={C25}
            thirdValue={E25}
          />
          <ReusableInputs
            formData={ValuationData}
            handleVInputChange={handleVInputChange}
            label="Occupancy"
            valueKey="C26"
            valueKey2="E26"
          />
          <ReuableParcent
            firstValue={"As a percentage of GCI"}
            secondValue={C27}
            thirdValue={E27}
          />
          <ReusableInputs
            formData={ValuationData}
            handleVInputChange={handleVInputChange}
            label="Other Operating Expenses"
            valueKey="C28"
            valueKey2="E28"
          />
          <ReuableParcent
            firstValue={"As a percentage of GCI"}
            secondValue={C29}
            thirdValue={E29}
          />
          <ReusableHeading
            firstValue={"Total Operating Expenses"}
            secondValue={C30}
            thirdValue={E30}
          />
          <ReuableParcent
            firstValue={"As a percentage of GCI"}
            secondValue={C31}
            thirdValue={E31}
          />
          <div className="pt-5"></div>
          <ReusableInputs
            formData={ValuationData}
            handleVInputChange={handleVInputChange}
            label="Other Expenses / (Income)"
            valueKey="C33"
            valueKey2="E33"
          />
          <div className="pt-5"></div>
          <ReusableHeading
            firstValue={"EBITDA - Net Income/ (Loss)"}
            secondValue={C35}
            thirdValue={E35}
          />
          <ReuableParcent
            firstValue={"As a percentage of GCI"}
            secondValue={C36}
            thirdValue={E36}
          />
          <p className="font-semibold text-start">Adjustments</p>
          <ReusableInputs
            formData={ValuationData}
            handleVInputChange={handleVInputChange}
            label="Other Adjustments"
            valueKey="C38"
            valueKey2="E38"
          />
          <ReusableInputs
            formData={ValuationData}
            handleVInputChange={handleVInputChange}
            label="Other Adjustments"
            valueKey="C39"
            valueKey2="E39"
          />
          <ReusableInputs
            formData={ValuationData}
            handleVInputChange={handleVInputChange}
            label="Other Adjustments"
            valueKey="C40"
            valueKey2="E40"
          />
          <ReusableHeading
            firstValue={"Adjusted EBITDA"}
            secondValue={C42}
            thirdValue={E42}
          />
          <ReuableParcent
            firstValue={"Return on Revenue"}
            secondValue={C43}
            thirdValue={E43}
          />
        </div>
        <div className="w-full border rounded-lg text-center px-3 py-5 mt-5">
          <p className="text-xl lg:text-2xl syncopate-regular mb-2 ">
            ENTER & ADJUST : Company Metrics
          </p>

          <div className="grid grid-cols-4 gap-5 text-sm md:text-base mt-5">
            <div className="text-gray-200 col-span-2 text-start"></div>

            <div className="text-gray-300 font-semibold">
              Current (Baseline)
            </div>
            <div className="text-gray-300 font-semibold">
              Adjusted (WHAT IF?)
            </div>
          </div>
          <ReusableHeading firstValue={"Company Performance:"} />
          <ReusableInputNumbers
            formData={ValuationData}
            handleVInputChange={handleVInputChange}
            label="Number of Agents"
            valueKey="C48"
            valueKey2="E48"
          />
          <ReusableInputNumbers
            formData={ValuationData}
            handleVInputChange={handleVInputChange}
            label="LTM Transactions Sides"
            valueKey="C50"
            valueKey2="E50"
          />
          <ReusableInputs
            formData={ValuationData}
            handleVInputChange={handleVInputChange}
            label="Closed Sales Volume"
            valueKey="C52"
            valueKey2="E52"
          />
          <ReusableHeading firstValue={"Future Business: "} />
          <ReusableInputs
            formData={ValuationData}
            handleVInputChange={handleVInputChange}
            label="Pending Sales Volume"
            valueKey="C55"
            valueKey2="E55"
          />
          <ReusableValues
            firstValue={"Company Dollar Pending:"}
            secondValue={C56}
            thirdValue={E56}
          />
          <ReusableInputs
            formData={ValuationData}
            handleVInputChange={handleVInputChange}
            label="Open Listings"
            valueKey="C57"
            valueKey2="E57"
          />
          <ReusableInputParcent
            formData={ValuationData}
            handleVInputChange={handleVInputChange}
            label="% of Listings Sold"
            valueKey="C59"
            valueKey2="E59"
          />
          <ReusableValues
            firstValue={"Company Dollar Listings: "}
            secondValue={C60}
            thirdValue={E60}
          />

          <ReuableParcent
            firstValue={"Average Commission"}
            secondValue={C61}
            thirdValue={E61}
          />
          <ReusableHeading firstValue={"Agent Productivity:"} />
          <ReusableNumberValues
            firstValue={"Transactions Per Agent"}
            secondValue={C63}
            thirdValue={E63}
          />
          <ReusableValues
            firstValue={"Gross Margin Per Agent"}
            secondValue={C64}
            thirdValue={E64}
          />
          <ReusableValues
            firstValue={"Adjusted EBITDA Per Agent"}
            secondValue={C65}
            thirdValue={E65}
          />

          <ReusableValues
            firstValue={"EBITA Per Agent @ 25 Agents"}
            secondValue={C67}
            thirdValue={E67}
          />
          <ReusableValues
            firstValue={"EBITA Per Agent @ 50 Agents"}
            secondValue={C68}
            thirdValue={E68}
          />
          <ReusableValues
            firstValue={"EBITA Per Agent @ 100 Agents"}
            secondValue={C69}
            thirdValue={E69}
          />
          <ReusableValues
            firstValue={"EBITA Per Agent @ 250 Agents"}
            secondValue={C70}
            thirdValue={E70}
          />
        </div>
      </div>
      <div>
        <h2 className="text-2xl syncopate-regular mb-2  mt-5 text-center">
          2. Current Results
        </h2>
        <div className="w-full border rounded-lg text-center px-3 py-5">
          <p className="text-lg lg:text-xl syncopate-regular mb-2 ">
            Valuation based on Adjusted EBITDA multiple
          </p>
          <div className="grid grid-cols-4 gap-5 text-sm md:text-base mt-5 text-end">
            <p>Low Value</p>
            <p>To</p>
            <p>Hight Value</p>
            <p></p>
          </div>
          <div className="grid grid-cols-4 gap-5 text-sm md:text-base  text-end">
            <NumericFormat
              value={ValuationData.H12}
              onValueChange={(values) =>
                handleVInputChange(values.value, "H12")
              }
              allowNegative
              className="w-full text-end"
              placeholder="0"
            />
            <p>{formatCurrency(J12)}</p>
            <NumericFormat
              value={ValuationData.K12}
              onValueChange={(values) =>
                handleVInputChange(values.value, "K12")
              }
              allowNegative
              className="w-full text-end"
              placeholder="0"
            />
            <p>{formatCurrency(L12)}</p>
          </div>
          <p className=" mt-5 font-semibold text-center bg-gray-800">
            Valuation based on % of Gross Margin (consider if EBITDA is
            negative)
          </p>
          <div className="grid grid-cols-4 gap-5 text-sm md:text-base  text-end">
            <NumericFormat
              value={ValuationData.H16}
              onValueChange={(values) =>
                handleVInputChange(values.value, "H16")
              }
              suffix="%"
              allowNegative
              className="w-full text-end"
              placeholder="0%"
            />
            <p>{formatCurrency(J16)}</p>
            <NumericFormat
              value={ValuationData.K16}
              onValueChange={(values) =>
                handleVInputChange(values.value, "K16")
              }
              suffix="%"
              allowNegative
              className="w-full text-end"
              placeholder="0%"
            />
            <p>{formatCurrency(L16)}</p>
          </div>
          <div className="mt-5 flex items-center  gap-5">
            <p className="w-1/2  font-semibold text-center bg-gray-800">
              Insert Selected Offer Price:
            </p>
            <NumericFormat
              value={ValuationData.L18}
              onValueChange={(values) =>
                handleVInputChange(values.value, "L18")
              }
              thousandSeparator
              prefix="$"
              allowNegative
              className="w-1/2 text-end bg-blue-900/50"
              placeholder="$0.00"
            />
          </div>
          <h5 className="bg-gray-800 text-start font-semibold mt-5">
            House Profit to Seller:
          </h5>
          <p className="text-start font-semibold">As of date of closing:</p>
          <ReusableFormulaPandCurrency
            formData={ValuationData}
            handleVInputChange={handleVInputChange}
            label="Override on pending deals "
            valueKey="L22"
            result={M22}
          />
          <ReusableFormulaPandCurrency
            formData={ValuationData}
            handleVInputChange={handleVInputChange}
            label="Override on current listings"
            valueKey="L23"
            result={M23}
          />
          <p className="text-start font-semibold">
            Future Business of existing agents:{" "}
          </p>

          <div className="grid grid-cols-4 gap-5 text-sm md:text-base items-center">
            <div className="text-gray-200 col-span-2 text-start">
              Length of Years
            </div>
            <NumericFormat
              value={ValuationData.L25} // Access value dynamically
              onValueChange={(values) =>
                handleVInputChange(values.value, "L25")
              } // Dynamic key handling
              allowNegative={true}
              thousandSeparator={","}
              className="w-full p-1 text-end bg-blue-900/50 text-blue-100"
              placeholder="0"
            />
            <div className="text-gray-200 text-end"></div>
          </div>
          <ReusableFormulaPandCurrency
            formData={ValuationData}
            handleVInputChange={handleVInputChange}
            label="Override on Future Sales"
            valueKey="L26"
            result={M26}
          />
          <h5 className="bg-gray-800 text-start font-semibold mt-5">
            Cash at close to Seller
          </h5>
          <ReusableOneInputValue
            formData={ValuationData}
            handleVInputChange={handleVInputChange}
            label="Total cash at close to Seller"
            valueKey="M29"
          />
          <div className="flex items-center gap-5">
            <p className="w-1/6 text-start font-semibold text-sm md:text-base">
              GUIDE
            </p>
            <div className="w-5/6 grid grid-cols-2 gap-x-5 mt-3 text-sm md:text-base items-center">
              <ReusablePandValue
                formData={ValuationData}
                handleVInputChange={handleVInputChange}
                valueKey="I30"
                result={J30}
              />
              <ReusablePandValue
                formData={ValuationData}
                handleVInputChange={handleVInputChange}
                valueKey="K30"
                result={L30}
              />
              <ReusablePandValue
                formData={ValuationData}
                handleVInputChange={handleVInputChange}
                valueKey="I31"
                result={J31}
              />
              <ReusablePandValue
                formData={ValuationData}
                handleVInputChange={handleVInputChange}
                valueKey="K31"
                result={L31}
              />
              <ReusablePandValue
                formData={ValuationData}
                handleVInputChange={handleVInputChange}
                valueKey="I32"
                result={J32}
              />
              <ReusablePandValue
                formData={ValuationData}
                handleVInputChange={handleVInputChange}
                valueKey="K32"
                result={L32}
              />
              <ReusablePandValue
                formData={ValuationData}
                handleVInputChange={handleVInputChange}
                valueKey="I33"
                result={J33}
              />
              <ReusablePandValue
                formData={ValuationData}
                handleVInputChange={handleVInputChange}
                valueKey="K33"
                result={L33}
              />
            </div>
          </div>
          <h5 className="bg-gray-800 text-start font-semibold mt-5">
            Cash at close to Seller
          </h5>
          <ReusableOneInputValue
            formData={ValuationData}
            handleVInputChange={handleVInputChange}
            label="Referral on Company Dollar for new agents: "
            valueKey="M36"
          />
          <ReusableOneInputValue
            formData={ValuationData}
            handleVInputChange={handleVInputChange}
            label="Manager/ Consultant Salary: "
            valueKey="M37"
          />
          <ReusableOneInputValue
            formData={ValuationData}
            handleVInputChange={handleVInputChange}
            label="Sub Lease "
            valueKey="M38"
          />
          <ReusableOneInputValue
            formData={ValuationData}
            handleVInputChange={handleVInputChange}
            label="Value of Special Commission Split to Seller:  "
            valueKey="M39"
          />
          <div className="flex justify-between items-center mt-5 text-lg font-semibold bg-gray-600">
            <p>TOTAL OFFER PRICE:</p>
            <p>{formatCurrency(M42)}</p>
          </div>
          <h5 className="bg-gray-800 text-start font-semibold mt-5">
            Transition Costs
          </h5>
          <ReusableOneInputValue
            formData={ValuationData}
            handleVInputChange={handleVInputChange}
            label="Attorney, CPA and other professional fees:"
            valueKey="M45"
          />
          <ReusableOneInputValue
            formData={ValuationData}
            handleVInputChange={handleVInputChange}
            label="Conversion Costs: "
            valueKey="M46"
          />
          <ReusableOneInputValue
            formData={ValuationData}
            handleVInputChange={handleVInputChange}
            label="Marketing Blitz: "
            valueKey="M47"
          />
          <p>Anticipated attrition: </p>
          <div className="flex items-center gap-5">
            <p className="w-1/3 text-start font-semibold text-sm md:text-base">
              Number of flight risk agents:
            </p>
            <NumericFormat
              value={ValuationData.K49}
              onValueChange={(values) =>
                handleVInputChange(values.value, "K49")
              }
              allowNegative={true}
              thousandSeparator={","}
              className="w-1/3 p-1 text-center bg-blue-900/50 text-blue-100"
              placeholder="0"
            />
            <p className="w-1/3 text-end font-semibold text-sm md:text-base">
              {formatCurrency(M49)}
            </p>
          </div>
          <ReusableOneInputValue
            formData={ValuationData}
            handleVInputChange={handleVInputChange}
            label="Other:"
            valueKey="M51"
          />
          <ReusableOneInputValue
            formData={ValuationData}
            handleVInputChange={handleVInputChange}
            label="Other:"
            valueKey="M52"
          />
          <ReusableOneInputValue
            formData={ValuationData}
            handleVInputChange={handleVInputChange}
            label="Other:"
            valueKey="M53"
          />
          <ReusableOneInputValue
            formData={ValuationData}
            handleVInputChange={handleVInputChange}
            label="Other:"
            valueKey="M54"
          />
          <div className="flex justify-between items-center mt-5 text-lg font-semibold bg-gray-600">
            <p>TOTAL COST OF ACQUISITION: </p>
            <p>{formatCurrency(M56)}</p>
          </div>
          <div className="flex justify-between items-center mt-5 text-base font-semibold border-y">
            <p>Return on investment (ROI): </p>
            <p>{M58.toFixed(2)}%</p>
          </div>
          <div className="flex justify-between items-center mt-1 text-base font-semibold border-y">
            <p>Internal multiple: </p>
            <p>{M59.toFixed(2)}</p>
          </div>
          <div className="flex justify-between items-center mt-1 text-base font-semibold border-y">
            <p>Purchase Price Per Agent </p>
            <p>{formatCurrency(M60 ? Math.round(M60) : 0)}</p>
          </div>
          <p className="mt-2 text-lg font-semibold text-center">
            - Is there a more efficient way to purchase production? -
          </p>
        </div>

        <Button onClick={() => handleReset()} className="mt-3 justify-end">
          Reset
        </Button>
        <Button
          onClick={() => handleDefault()}
          className="ml-5 mt-3 justify-end"
        >
          Set Default
        </Button>
      </div>
    </div>
  );
};

export default Valuation;
