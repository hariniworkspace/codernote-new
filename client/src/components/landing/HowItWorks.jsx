import { motion } from "framer-motion";

const steps = [
  {
    step: "01",
    title: "Create Account",
    desc: "Sign up and unlock your personalized placement dashboard.",
  },
  {
    step: "02",
    title: "Start Learning",
    desc: "Solve DSA, take notes, track progress, and revise efficiently.",
  },
  {
    step: "03",
    title: "Crack Placements",
    desc: "Master concepts, revise smartly, and ace your interviews.",
  },
];

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 50 },
  show: { opacity: 1, y: 0 },
};

const HowItWorks = () => {
  return (
    <section className="py-28 px-6 relative">

      <div className="max-w-6xl mx-auto text-center">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
            How It
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400">
              {" "}Works
            </span>
          </h2>

          <p className="text-gray-400 text-lg max-w-xl mx-auto">
            A simple, structured system to take you from beginner to placement ready.
          </p>
        </motion.div>

        {/* Timeline */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-12 relative"
        >

          {steps.map((s, i) => (
            <motion.div
              key={i}
              variants={item}
              whileHover={{
                y: -10,
                scale: 1.03,
              }}
              className="relative group bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-10"
            >

              {/* glow effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-r from-blue-500/10 to-cyan-400/10 rounded-2xl" />

              {/* step number */}
              <div className="relative z-10 mb-6">

                <div className="inline-block px-5 py-2 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-bold text-lg shadow-lg shadow-cyan-500/20">
                  {s.step}
                </div>

              </div>

              {/* title */}
              <h3 className="relative z-10 text-xl font-semibold mb-3">
                {s.title}
              </h3>

              {/* description */}
              <p className="relative z-10 text-gray-400">
                {s.desc}
              </p>

            </motion.div>
          ))}

        </motion.div>

      </div>

    </section>
  );
};

export default HowItWorks;
