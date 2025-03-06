// src/components/Welcome.jsx
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Welcome = () => {
  const fadeUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeOut" } },
  };

  const staggerChildren = {
    visible: { transition: { staggerChildren: 0.3 } },
  };

  return (
    <div className="min-h-screen max-w-7xl mx-auto">
      <div className="min-h-screen flex items-start justify-center w-full pt-20">
        <motion.div
          className="max-w-7xl mx-auto text-center  relative z-10"
          initial="hidden"
          animate="visible"
          variants={staggerChildren}
        >
          <motion.h1
            className="text-2xl md:text-5xl font-extrabold tracking-tight mb-6"
            style={{
              background:
                "linear-gradient(to right, #d4a017, #b8860b, #9c6f08)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
            variants={fadeUp}
          >
            Welcome to the M&A Accelerator Pro™ Calculator
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl font-light italic text-gray-300 mb-8"
            variants={fadeUp}
          >
            Mergers & Acquisitions: Navigate Every Phase with Confidence
          </motion.p>
          <motion.div
            className="text-lg md:text-xl leading-relaxed mb-10 text-gray-100"
            variants={fadeUp}
          >
            Navigating a merger or acquisition requires clarity, strategy, and
            the right insights at every stage. As a complimentary benefit to the
            M&A Accelerator Program™, the M&A Navigator Pro™ App serves as your
            step-by-step guide through the entire process. Whether you&apos;re
            evaluating opportunities, conducting due diligence, or structuring
            the final deal, this powerful tool ensures you stay on track.
          </motion.div>
          <motion.div
            className="text-lg md:text-xl leading-relaxed mb-10 text-gray-100"
            variants={fadeUp}
          >
            Designed to complement the course curriculum, the M&A Navigator Pro™
            provides real-time guidance, key checklists, and expert
            insights—helping you confidently move through each phase and
            maximize your brokerage’s growth, expansion, or exit strategy.
          </motion.div>
          <motion.div variants={fadeUp}>
            <Link to="/meetings">
              <button
                className="hover:cursor-pointer relative px-14 text-xl py-4 font-light text-white rounded-full bg-gradient-to-r from-[#4568DC] to-[#B06AB3] 
bg-[length:200%_100%] bg-right transition-all duration-500 hover:bg-left"
              >
                GET STARTED
              </button>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Welcome;
