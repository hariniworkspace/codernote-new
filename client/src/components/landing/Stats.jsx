import { motion, useInView } from "framer-motion";
import CountUp from "react-countup";
import { useRef } from "react";

const stats = [
  {
    number: 100,
    suffix: "+",
    label: "Problems Organized",
  },
  {
    number: 50,
    suffix: "+",
    label: "Topics Covered",
  },
  {
    number: 5,
    suffix: "+",
    label: "Core Subjects",
  },
  {
    number: 24,
    suffix: "/7",
    label: "Access Available",
  },
];

const Stats = () => {
  const ref = useRef(null);

  const isInView = useInView(ref, {
    once: true,
    margin: "-100px",
  });

  return (
    <section
      ref={ref}
      className="relative py-32 px-6 overflow-hidden"
    >

      {/* Background glow */}
      <div className="absolute inset-0 flex justify-center">
        <div className="w-[700px] h-[400px] bg-cyan-500/10 blur-[140px] rounded-full" />
      </div>

      <div className="relative max-w-6xl mx-auto">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4">

            Trusted by

            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400">
              Serious Learners
            </span>

          </h2>

          <p className="text-gray-400">
            Built for focused placement preparation
          </p>
        </motion.div>


        {/* Stats row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12">

          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 60 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.8,
                delay: i * 0.15,
              }}
              whileHover={{
                scale: 1.1,
                y: -5,
              }}
              className="text-center cursor-default"
            >

              {/* Number */}
              <h3 className="text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400">

                {isInView && (
                  <CountUp
                    end={stat.number}
                    duration={2.5}
                  />
                )}

                {stat.suffix}

              </h3>

              {/* Label */}
              <p className="text-gray-400 mt-3 text-lg">
                {stat.label}
              </p>

            </motion.div>
          ))}

        </div>

      </div>

    </section>
  );
};

export default Stats;
