const Meetings = () => {
  const sections = [
    {
      title: "The First Meeting - Keeping it casual",
      goal: "To establish a new relationship",
      points: [
        "Define (for the target) stresses in the marketplace like compression on house retained or low inventory. ",
        "Explain how you are better equipped to address those pain points by working together. ",
        "TIP* Avoid using words like 'merger' or 'acquisition' or 'buy' - use 'partner up' even if you only intend to acquire. ",
        "You may know you are only interested in buying and not partnering but it gets the door to open. ",
        "Keep it simple. Let them know you are reaching out to network. ",
      ],
    },
    {
      title: "The Second Meeting - Listen More, Talk Less",
      goal: "Plant a seed that can grow into a future deal",
      points: [
        "Get a high-level outline.",
        "Ask, 'If we were able to partner, what would that look like?'",
        "Ask, 'Are you enjoying the day-to-day? Is continuing to manage the office something you want to do? For how long?'",
        "Ask, 'If you aren't ready to partner and/or sell now, is that something you'll consider at a later date?'",
        "Ask and listen. Listen more, talk less.",
        "Do NOT talk about the math of the deal this early. Divert if they want to jump to valuation discussions.",
        "Focus on the impact of joining with your brand.",
        "Identify their pressures and your power:",
        "- Their pressures: Limits to negotiating power, deadlines or time pressures, organizational pressures.",
        "- Your power: Why you are important to them, your skills, knowledge, resources, legitimacy, and relationships.",
      ],
    },
    {
      title: "The Third Meeting - Culture and Influencers",
      goal: "Understand their company culture and identify influencers",
      points: [
        "Are all the key decision-makers ready to work with us?",
        "What's their motivation to move this from discussion to action?",
        "Why are they considering a change?",
        "Dig into culture. How are our company cultures alike? Different?",
        "Ask, 'What do you see as our synergies?'",
        "Explore how their key agents and staff might react.",
      ],
    },
    {
      title: "The Fourth Meeting (of Consequence) and Beyond",
      goal: "Transition to formal agreements and due diligence",
      points: [
        "Sign NDA and get financial information.",
        "Move on to Due Diligence, Valuation, and Offer.",
        "Remember that cold calling for acquisitions has a 30-50% contact rate and 6-15% face-to-face meeting success rate.",
      ],
    },
  ];

  return (
    <div className="min-h-screen max-w-7xl px-4 lg:px-0 mx-auto">
      <h1 className="text-4xl  text-gray-100 syncopate-regular pt-10 pb-2">
        MEETINGS CADENCE
      </h1>
      <p className="text-gray-300 text-lg">
        The journey from an initial conversation to a formal agreement requires
        a thoughtful cadence of meetings that builds trust, uncovers opportunities, and paves the way for a successful partnership. Here’s a
        quick overview of the typical meeting flow and suggested best practices
        on the way to approach each interchange.{" "}
      </p>

      {/* Main Content */}
      <main className="w-full mx-auto  py-10">
        {sections.map((section, index) => (
          <section
            key={index}
            className="mb-10 bg-neutral-900 shadow-lg rounded-lg p-4 md:p-6 lg:p-8 "
          >
            <h2 className="text-2xl syncopate-regular mb-2">
              {index + 1}. {section.title.toUpperCase()}
            </h2>
            <p className="text-lg font-semibold  mb-4 italic">
              Goal: {section.goal}
            </p>
            <div className="space-y-2">
              {section.points.map((point, i) => (
                <div key={i} className="flex items-start gap-2">
                  <span>•</span>
                  <p>{point}</p>
                </div>
              ))}
            </div>
          </section>
        ))}
      </main>
    </div>
  );
};

export default Meetings;
