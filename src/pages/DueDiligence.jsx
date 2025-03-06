const DueDiligence = () => {
  const sections = [
    {
      title: "Things to Gather from Seller",
      items: [
        {
          text: "2-3 years of Profit and Loss (P&L) Statements plus Last 12 Months (LTM)",
        },
        {
          text: "2 years Balance Sheets plus Last 12 Months (LTM)",
        },
        {
          text: "Outstanding debts including notes",
          subItems: [
            "Current or upcoming financial commitments (guaranteed bonuses, etc.)",
          ],
        },
        {
          text: "2 years Business Tax Returns",
        },
        {
          text: "Accounting system",
        },
        {
          text: "Written owner compensation outline",
        },
        {
          text: "All Leases",
          subItems: ["Office", "Equipment", "Copiers"],
        },
        {
          text: "Vendor Contracts",
          subItems: [
            "Advertising Agreements",
            "Technology, website, phone (look for compatibility)",
            "Any long-term (not month-to-month) agreements",
            "All leads agreements (whether fee paid upfront or as a referral fee at close)",
          ],
        },
        {
          text: "All Agent Commission Agreements",
        },
        {
          text: "Employment Agreements",
          subItems: [
            "Subcontracted vendor agreements for bookkeeping, transaction coordinator, recruiting calls, etc.",
            "Employee benefits: retirement, health, bonuses, other perks, etc.",
          ],
        },
        {
          text: "Insurance Policies",
          subItems: ["E&O - ensure they can get a tail policy"],
        },
        {
          text: "Relocation or other ancillary agreements",
          subItems: [
            "Determine if part of the deal or not and if not, how ancillary will be structured post-close",
          ],
        },
      ],
    },
    {
      title: "Deal Hurdles",
      items: [
        {
          text: "Do you have the cash to pay a higher amount up front if required to close deal? ",
        },
        {
          text: "Outstanding obligations are rarely assumed by buyer.",
          subItems: [
            "Bank debt, mortgages, past due royalties to a franchisor, tax liabilities, legal liabilities related to actions occurring prior to sale.",
            "Are they prepared to do that BEFORE closing?",
          ],
        },
        {
          text: "Offices that are losing money and/or are far from your primary office.",
          subItems: [
            "If the seller doesn’t want them closed or if they think it would cause a domino effect of attrition if you close, you may need to walk away.",
          ],
        },
        {
          text: "Non-selling owners requiring post-close management jobs when you don’t see a role for them. ",
        },
        {
          text: "Cultural issues between offices on splits, marketing, type of agent to recruit, target markets, etc. ",
        },
        {
          text: "Long-term leases or building ownership where you can’t close buyer’s location and roll into seller’s location.",
          subItems: [
            "Or seller owns building and demands long-term lease as terms of sale, and it isn’t an ideal rate or location.",
          ],
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen max-w-7xl px-4 lg:px-0 mx-auto">
      <h1 className="text-4xl text-gray-100 syncopate-regular pt-10">
        DUE DILIGENCE
      </h1>
      <p className="text-gray-300 text-lg">
        Once you&apos;ve identified a promising target, due diligence is the next
        critical step to ensure a smooth and transparent acquisition process.
        This phase is about uncovering the financial, contractual, and
        operational realities of the business. By gathering and analyzing these
        key documents and addressing potential deal hurdles upfront, you&apos;ll be
        well-positioned to make informed decisions and avoid unexpected
        surprises. Use this checklist to guide your discussions and ensure
        nothing is overlooked. This comprehensive approach to due diligence
        helps you mitigate risks, negotiate from a position of strength, and set
        the foundation for a successful acquisition.
      </p>
      {/* Main Content */}
      <main className="w-full mx-auto py-10">
        {sections.map((section, index) => (
          <section
            key={index}
            className="mb-10 bg-neutral-900 shadow-lg rounded-lg p-4 md:p-6 lg:p-8"
          >
            <h2 className="text-2xl syncopate-regular mb-2">
              {section.title.toUpperCase()}
            </h2>
            <div className="space-y-4">
              {section.items.map((item, i) => (
                <div key={i}>
                  <div className="flex items-start gap-2">
                    <span>•</span>
                    <p>{item.text}</p>
                  </div>
                  {item.subItems && (
                    <ul className="pl-8 list-disc text-gray-300">
                      {item.subItems.map((subItem, j) => (
                        <li key={j}>{subItem}</li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </section>
        ))}
      </main>
    </div>
  );
};

export default DueDiligence;
