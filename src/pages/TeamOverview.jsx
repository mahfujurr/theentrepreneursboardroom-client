const TeamOverview = () => {
  const sections = [
    {
      title: "Culture Champion",
      questions: [
        "Who is currently responsible to ensure people enjoy being part of your company?",
        "If you don't have anyone currently, who will handle the efforts to help the new staff and agents understand and embrace your brand's value?",
      ],
    },
    {
      title: "Training Lead",
      questions: [
        "Who is responsible for ensuring your agents are achieving the company or their personal growth targets?",
        "Who will be responsible for handling the onboarding of the agents from the acquisition?",
        "How will you communicate to them that they have a role in ensuring those new agents are still with you 90 days post acquisition?",
        "Will you have to remove any of their existing roles and responsibilities to free up time to focus on the new agents?",
      ],
    },
    {
      title: "Financial Analyst",
      questions: [
        "Who is responsible for tracking and monitoring the profitability and key performance metrics at your company?",
        "Who is responsible for gathering the financial and other due diligence items from the seller?",
        "Will you have someone else double-checking the ROI assumptions?",
        "How will you ensure that all potential synergies have been evaluated?",
        "Does this person have the authority to stop the deal if new findings make this a bad investment?",
      ],
    },
    {
      title: "Change Leader",
      questions: [
        "When you've made a change with your existing company, who leads that strategy and communication?",
        "Who is actively scraping the data to look for potential acquisition targets?",
        "Will this person be actively networking with the key prospects?",
        "Will this person be involved in initial meetings?",
        "Will this person take the lead in the announcement and subsequent one-on-one meetings with key agents and staff?",
      ],
    },
  ];
  const considerSection = [
    {
      title: "Consider Support in the following areas: ",
      questions: [
        "Work with your Brand Team (if applicable) to help identify potential targets.",
        "Culture - Ensure your transition team has a plan to help with onboarding the company and agents.",
        "Set aside time with your learning support team to develop a pathway for the new agents.",
        "Use outsourced courses or trainers to provide ongoing training to your existing agents while your attention is focused on the acquisition.",
        "Develop a Challenge to get the new agents excited about brand tools and offerings.",
        "Consider hiring an outside expert to assist with valuation and use the M&A Valuation Tool.",
      ],
    },
  ];

  return (
    <div className="min-h-screen max-w-7xl px-4 lg:px-0 mx-auto">
      <h1 className="text-4xl text-gray-100 syncopate-regular pt-10">
        TEAM OVERVIEW
      </h1>
      <p className="text-gray-300 text-lg">
        Building the right team for a successful acquisition is just as
        important as finding the right brokerage partner. A clear plan for
        culture integration, training, financial oversight, and change
        management will ensure a smooth transition and long-term success.
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
            <div className="space-y-2">
              {section.questions.map((question, i) => (
                <div key={i} className="flex items-start gap-2">
                  <span>•</span>
                  <p>{question}</p>
                </div>
              ))}
            </div>
          </section>
        ))}
        {considerSection.map((section, index) => (
          <section
            key={index}
            className="mb-10 bg-neutral-900 shadow-lg rounded-lg p-4 md:p-6 lg:p-8"
          >
            <h2 className="text-2xl syncopate-regular mb-2">
              {section.title.toUpperCase()}
            </h2>
            <div className="space-y-2">
              {section.questions.map((question, i) => (
                <div key={i} className="flex items-start gap-2">
                  <span>{i + 1}.</span>
                  <p>{question}</p>
                </div>
              ))}
            </div>
          </section>
        ))}
      </main>
    </div>
  );
};

export default TeamOverview;
