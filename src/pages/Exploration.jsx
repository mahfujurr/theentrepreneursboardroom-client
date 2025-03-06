const Exploration = () => {
  const sections = [
    {
      title: "Leaders",
      questions: [
        "Who are the key players?",
        "Is everyone on board?",
        "What is the difference in their motivation?",
        "Are there silent owners or leaders that could derail it?",
        "What are some post-merger plans?",
        "Do they want to get out of the business quickly or stay on and manage or consult? For how long?",
      ],
    },
    {
      title: "Value Proposition",
      questions: [
        "What areas are your value propositions aligned?",
        "Where do you differ?",
        "How resistant will their agents be if you intend to move them into your value prop and compensation model?",
      ],
    },
    {
      title: "Culture",
      questions: [
        "If I were to walk into your office today what would I see? Will there be activity and agents or will it be quiet?",
        "Tell me about the ways your agents socialize with each other.",
        "In what way do you and your agents engage in the community?",
        "What’s unique about your brokerage?",
        "What’s special about the services you provide to your agents?",
        "What’s special about the services your agents provide to their clients?",
      ],
    },
    {
      title: "Organizational Audit",
      questions: [
        "How is their company set up? Do you use the same systems (back office, marketing, etc.)?",
        "Do your staffing structures have overlap? Do individuals have talents that you can shift to fill gaps?",
        "Do they currently have a formal onboarding process?",
        "How are they auditing and managing transactions? Paying commissions?",
        "What resources (time and money) are they contributing to market agents and listings?",
        "Have them define their training and coaching process. Is it formalized? Is there a calendar?",
        "What is their recruiting process?",
        "What are their pain points and gaps and can you address those?",
      ],
    },
    {
      title: "Financial Audit",
      questions: [
        "Are we using any of the same systems, tools, advertising, pay for leads, etc.?",
        "Compare average commission rates, house retained percentages.",
      ],
    },
  ];

  return (
    <div className="min-h-screen max-w-7xl px-4 lg:px-0 mx-auto">
      <h1 className="text-2xl md:text-3xl text-gray-100 syncopate-regular pt-10">
        EXPLORE THE SURFACE - INTERVIEW QUESTIONS
      </h1>
      <p className="text-gray-300 text-lg">
        When identifying a target, it’s critical to gather comprehensive
        insights that reveal not just the operational dynamics of their
        business, but also the underlying motivations and cultural DNA that
        drive success. The following questions are designed to initiate a
        thoughtful dialogue, build rapport, and uncover areas of alignment and
        opportunity. Use this framework to explore the surface and set the stage
        for a deeper, strategic conversation.
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
      </main>
    </div>
  );
};

export default Exploration;
