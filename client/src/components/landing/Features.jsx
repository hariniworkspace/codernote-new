import { Brain, BarChart, BookOpen, CalendarCheck, Briefcase, Cpu } from "lucide-react";
import { motion } from "framer-motion";

const features = [
  {
    icon: Brain,
    title: "Smart DSA Notes",
    desc: "Organize your problem-solving journey with structured notes.",
  },
  {
    icon: BarChart,
    title: "Progress Tracking",
    desc: "Visual dashboards to track topic-wise mastery.",
  },
  {
    icon: BookOpen,
    title: "CS Fundamentals",
    desc: "OS, DBMS, CN, OOPS — everything covered.",
  },
  {
    icon: CalendarCheck,
    title: "Revision Planner",
    desc: "Never forget concepts with smart revision cycles.",
  },
  {
    icon: Briefcase,
    title: "Interview Prep",
    desc: "Company-wise and role-based preparation.",
  },
  {
    icon: Cpu,
    title: "AI Resume Analyzer",
    desc: "Get instant feedback on your resume.",
  },
];

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0 },
};

const Features = () => {
  return (
    <section className="py-28 px-6 relative">

      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
            Everything You Need To
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400">
              Crack Placements
            </span>
          </h2>

          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            A complete intelligent system designed to make you placement ready.
          </p>
        </motion.div>

        {/* Cards */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8"
        >
          {features.map((f, i) => {
            const Icon = f.icon;

            return (
              <motion.div
                key={i}
                variants={item}
                whileHover={{
                  y: -8,
                  scale: 1.03,
                }}
                transition={{ duration: 0.3 }}
                className="group relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 overflow-hidden"
              >

                {/* glow effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-r from-blue-500/10 to-cyan-400/10" />

                {/* icon */}
                <motion.div
                  whileHover={{ rotate: 10, scale: 1.1 }}
                  className="relative z-10 mb-4"
                >
                  <Icon className="text-cyan-400" size={32} />
                </motion.div>

                {/* title */}
                <h3 className="relative z-10 text-xl font-semibold mb-2">
                  {f.title}
                </h3>

                {/* description */}
                <p className="relative z-10 text-gray-400">
                  {f.desc}
                </p>

              </motion.div>
            );
          })}
        </motion.div>

      </div>

    </section>
  );
};

export default Features;
