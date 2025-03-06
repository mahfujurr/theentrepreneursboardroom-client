import MASamples from "../components/MASamples/MASamples";

const MATerms = () => {
  const sectionssubs = [
    {
      title: "Financial Statement Terms",
      items: [
        {
          text: "AGCI (Adjusted Gross Commission Income)",
          subItems: [
            {
              text: "Adjusted Gross Commission Income AFTER outside referrals",
            },
          ],
        },
        {
          text: "Commission Expense",
          subItems: [
            {
              text: "Total amount paid to agent after all fees have been deducted",
            },
            {
              text: "Factor agent desk fees, transaction & technology fees, referral or relocation fees into commission expense",
            },
          ],
        },
        {
          text: "Gross Margin (also called Company Dollar)",
          subItems: [
            {
              text: "AGCI less Commission Expense",
            },
          ],
        },
        {
          text: "Percent Retained or House Retained Profit",
          subItems: [
            {
              text: "Gross Margin / AGCI",
            },
            {
              text: "Be sure to compare your Percent Retained to the target company and identify what is driving the difference",
            },
          ],
        },
        {
          text: "Operating Expenses",
          subItems: [
            {
              text: "Marketing, Advertising, Administrative, Labor, Rent. All the expenses to run the brokerage",
            },
            {
              text: "Compare benchmark percentages by cost area against your firm and look for compatibility and cost-saving opportunities",
            },
          ],
        },
        {
          text: "EBITDA",
          subItems: [
            {
              text: "* Note - EBITDA is NOT the same thing as 'cash flow' or 'available cash' due to taxes, capital exp.., etc.",
            },
            {
              text: "Earnings before Income Tax, Depreciation, and Amortization",
            },
            {
              text: "The amount left of Gross Margin after deducting all Operating Expenses",
            },
            {
              text: "A low or even $0 EBITDA does not necessarily mean no value. Look for post-close synergies.",
            },
            {
              text: "If EBITDA is negative, consider a valuation based on Company Dollar with earn-out considerations.",
            },
          ],
        },
        {
          text: "ROR - Return on Revenue ",
          subItems: [
            {
              text: "A measure of efficiency - EBITDA / AGCI - Review year-over-year trends",
            },
            {
              text: "Company your ROR against the target company to identify key drivers for both and difference. ",
            },
          ],
        },
      ],
    },
    {
      title: "M&A Deal Terms",
      items: [
        {
          text: "Adjusted EBITDA",
          subItems: [
            {
              text: "Amount after 'Add Backs' and 'Deductions'",
            },
          ],
        },
        {
          text: "Add Backs and Deductions (M&A specific)",
          subItems: [
            {
              text: "Examples of 'Add Backs' (You add these to reported EBITDA)",
              subItemsOfSubItems: [
                "One time capital expenditures, owner travel and entertainment or other costs that won't continue after sale",
                "Owner salary (if not staying in management role at same pay)",
              ],
            },
            {
              text: "Examples of 'Deductions' (You deduct these from reported EBITDA)",
              subItemsOfSubItems: [
                "Fair market value of payroll to replace owner role (manager, etc.)",
                "Seller's commission (if they are leaving, stopping selling, or have a commission split override)",
              ],
            },
          ],
        },
        {
          text: "ROI - Return on Investment",
          subItems: [
            {
              text: "Expected annualized return / sum of ALL deal costs = ROI - Higher ROI is better",
              subItemsOfSubItems: [
                "Ex - An anticipated annual return of $150,000 divided by total deal costs of $450,000 yields a 33% ROI.",
              ],
            },

            {
              text: "This is the inverse of 'Internal Multiple' - A 50% ROI means you'll be repaid in 2 years. Put another way, 50% of the money invested will be returned in the first year and the other 50% in the second year.",
            },
          ],
        },
        {
          text: "Internal Multiple",
          subItems: [
            {
              text: "A rate you set that you are comfortable paying to acquire a target company",
            },
            {
              text: "High Synergy = A LOWER internal multiple = GREATER internal value",
            },
            {
              text: "Anticipated EBITDA or annual return of acquired company times internal multiple = total amount you will pay",
              subItemsOfSubItems: [
                "Example - You anticipate $150,000 in a return each year. You've set a limit of 3.5x for Internal multiple.",
                "$150,000 * 3.5 = $525,000. This is the maximum amount you are willing to pay for buyout and all costs to close the deal.",
              ],
            },
            {
              text: "Sum of ALL deal costs / Expected Annual Return = Internal Multiple",
              subItemsOfSubItems: [
                "Example - ALL deal costs of $525,000 / Annual return of $150,000 = 3.5 Internal Multiple",
              ],
            },
          ],
        },
        {
          text: "External Multiple",
          subItems: [
            {
              text: "A Multiple of EBITDA - A company with an EBITDA of $100,000 and an external multiple of 2x would cost $200,000",
            },
            {
              text: "The inverse of the External Multiple is tied to the level of risk.",
              subItemsOfSubItems: [
                "Example: 2x multiple inverse is 1/2 = 50% (higher risk) and 4x = 1/4 = 25% (lower risk). You pay more for a lower risk purchase.",
              ],
            },
          ],
        },
        {
          text: "Synergies",
          subItems: [
            {
              text: "Operating expenses where you can save money by combining accounts or staff. Roll-ins offer the best synergies when one office closes.",
            },
          ],
        },
        {
          text: "Earn Outs",
          subItems: [
            {
              text: "Common part paid in cash and the balance paid out in an Earn Out over a period of years.",
            },
            {
              text: "Earn Outs are typically based on performance: percentage of retained company dollar or retained GCI.",
            },
            {
              text: "Consider tying Earn Out to Agent loss/ breakage or company dollar erosion/ slippage.",
            },
            {
              text: "Can be drafted to escalate or decline based on specific considerations.",
              subItemsOfSubItems: [
                "Ex: Cash at closing of 25%; remaining 75% Earn Out over 3 yrs based on production matching prior periods' performance.",
              ],
            },
          ],
        },
      ],
    },
    {
      title: "Per Agent Ratios",
      items: [
        {
          text: "Company Dollar or Gross Margin per Agent",
          subItems: [
            {
              text: "Total Gross Margin (Company Dollar) / Number of Agents",
            },
            {
              text: "Although it is best to calculate the exact figures for flight risk agents, this will help you calculate cost of possible attrition",
            },
          ],
        },
        {
          text: "Effective Desk Occupancy",
          subItems: [
            {
              text: "Total operating costs / the number of potential desk spaces in the office",
            },
            {
              text: "Determine how many desks are actually covered by the Gross Margin per agent",
            },
          ],
        },
        {
          text: "Adjusted EBITDA per Agent",
          subItems: [
            {
              text: "Adjusted EBITDA / Total Agent Count",
            },
            {
              text: "This will help you determine how much impact agent attrition will have on your bottom line profits",
            },
          ],
        },
        {
          text: "Purchase Price Per Agent",
          subItems: [
            {
              text: "Purchase price / the number of agents",
            },
            {
              text: "Is there a more efficient way to buy production?",
            },
          ],
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen max-w-7xl px-4 lg:px-0 mx-auto pt-10">
      {/* Main Content */}
      <h1 className="text-4xl text-gray-100 syncopate-regular">M&A TERMS</h1>
      <p className="text-gray-300 text-lg">
        Understanding the financial and deal-specific terms in M&A is essential
        to evaluating opportunities and making informed decisions. With these
        M&A terms and metrics, you’ll be better prepared to evaluate potential
        deals, identify financial strengths and weaknesses, and craft successful
        acquisition strategies.
      </p>
      <main className="w-full mx-auto py-10 flex flex-col lg:flex-row gap-5">
        <div className="w-full lg:w-3/5">
          {sectionssubs.map((section, index) => (
            <section
              key={index}
              className="mb-10 bg-neutral-900 shadow-lg rounded-lg p-4 md:p-6 lg:p-8"
            >
              <h2 className="text-2xl syncopate-regular mb-2">
                {section.title.toUpperCase()}
              </h2>
              <div className="space-y-4">
                {section?.items?.map((item, i) => (
                  <div key={i}>
                    <div className="flex items-start gap-2">
                      <span>•</span>
                      <p>{item.text}</p>
                    </div>
                    {item.subItems && (
                      <ul className="pl-8 list-disc text-gray-300">
                        {item.subItems.map((subItem, j) => (
                          <div key={j}>
                            <div className="flex items-start gap-2">
                              <span>•</span>
                              <p>{subItem.text}</p>
                            </div>
                            {subItem.subItemsOfSubItems && (
                              <ul className="pl-8 list-disc text-gray-300">
                                {subItem.subItemsOfSubItems.map(
                                  (subItem, j) => (
                                    <div
                                      key={j}
                                      className="flex items-start gap-2"
                                    >
                                      <span>•</span>
                                      <p>{subItem}</p>
                                    </div>
                                  )
                                )}
                              </ul>
                            )}
                          </div>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>
        {/* ======================== ====================== ====================== ====================== */}
        <div className="w-full lg:w-2/5">

        <MASamples />
        </div>
      </main>
    </div>
  );
};

export default MATerms;
