const Offer = () => {
  const sections = [
    {
      title: "Making the Offer",
      items: [
        {
          text: "Start with a Letter of Intent (LOI) and consider turning 'tracking' on so you can see what changes are made from one iteration to the next. ",
        },
        {
          text: "Include the following deal points: ",
          subItems: [
            { text: "Cash at close" },
            {
              text: "Earn Out period and amount. Clearly define 'company dollar' ",
              subItemsOfSubItems: [
                "Performance metrics (if any) is the Earn Out tied to. ",
                "Consider a 'Stop-Loss' Clause on pending transactions based on a specific timeframe (must close in 90 day) or dollar figure (up to $25k)",
              ],
            },
            { text: "Preferential Owner commission splits and duration" },
            {
              text: "Compensation and benefits for any owner continuing to hold manager or consult role after close",
            },
            {
              text: "Assume or clearly decline to assume each lease agreement",
            },
            {
              text: "Assume or clearly decline to assume advertising or other vendor contracts",
            },
            { text: "Define who will pay for E&O Tail Coverage" },
            {
              text: "Agent attrition and how it will impact Earn Out or reduction of cash",
            },
            { text: "Response period" },
            {
              text: "Close Date (also clearly define proration if Seller to receive % of pending deal or existing listings)",
            },
          ],
        },
      ],
    },
    {
      title: "What-If? Scenarios",
      items: [
        {
          text: "After agreeing to terms, during Due Diligence you discover the Seller's production numbers are significantly LOWER.",
        },
        {
          text: "You still want the deal. What are your options? ",
          subItems: [
            {
              text: "Reset cash down payment to the previously agreed multiple off of the new EBITDA figure from the LTM (Last Twelve Months).",
            },
            {
              text: "Keep same cash down and reduce Earn Out to account for the reduced total purchase price.",
            },
            {
              text: "Adjust Earn Out to lower level allowing for an increase if production returns to the previously reported production level.",
            },
          ],
        },
        {
          text: "After agreeing to terms, during Due Diligence, you discover Seller's production numbers are significantly HIGHER.",
        },
        {
          text: "You still want the deal but the Seller wants more money. What are your options? ",
          subItems: [
            {
              text: "Consider using pending transactions (or a higher percentage of) to substitute for the increased value based off the new EBITDA multiple.",
              subItemsOfSubItems: [
                "Make sure to update your analysis to understand how this will impact your cash flow after close.",
              ],
            },
          ],
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen max-w-7xl px-4 lg:px-0 mx-auto">
      <h1 className="text-4xl text-gray-100 syncopate-regular pt-10">
        MAKING AN OFFER
      </h1>
      <p className="text-gray-300 text-lg">
        After conducting thorough due diligence, the next step is crafting a
        compelling and strategic offer. This is where the conversation shifts
        from exploration to action. A well-structured offer not only
        demonstrates your seriousness but also sets the tone for a collaborative
        and transparent negotiation process. Use this guide to draft an offer
        that protects your interests while creating a win-win scenario for both
        parties. A thoughtful and adaptable offer strategy helps ensure a
        successful negotiation and paves the way for a smooth transition and
        post-close integration.
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
                              {subItem.subItemsOfSubItems.map((subItem, j) => (
                                <div key={j} className="flex items-start gap-2">
                                  <span>•</span>
                                  <p>{subItem}</p>
                                </div>
                              ))}
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
      </main>
    </div>
  );
};

export default Offer;
