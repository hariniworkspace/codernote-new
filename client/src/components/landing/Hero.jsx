import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import CountUp from "react-countup";
import hero from "../../assets/hero.png";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0 },
};

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section className="min-h-screen flex items-center justify-center px-6 relative ">

      <div className="max-w-7xl w-full grid md:grid-cols-2 gap-16 items-center mt-[50px]">

        {/* LEFT */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
        >

          {/* Badge */}
          <motion.div
            variants={item}
            className="inline-block mb-6 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-xl"
          >
            <span className="text-cyan-400 font-medium">
               Placement Focused Platform
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            variants={item}
            className="text-5xl md:text-6xl font-extrabold leading-tight mb-6"
          >
            Crack IT Placements with
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400">
              One Powerful Platform
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            variants={item}
            className="text-gray-400 text-lg mb-8 max-w-xl"
          >
            Master DSA, Aptitude, CS Fundamentals, and Interviews —
            everything in one unified intelligent dashboard.
          </motion.p>

          {/* Buttons */}
          <motion.div
            variants={item}
            className="flex gap-4 mb-12"
          >

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate("/register")}
              className="px-8 py-4 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 font-semibold text-lg flex items-center gap-2 shadow-lg shadow-cyan-500/20"
            >
              Get Started Free
              <ArrowRight size={18} />
            </motion.button>

          </motion.div>

          {/* Stats */}
          

        </motion.div>

        {/* RIGHT IMAGE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 40 }}
          animate={{
            opacity: 1,
            scale: 1,
            y: [0, -15, 0],
          }}
          transition={{
            duration: 1,
            y: {
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            },
          }}
          className="relative flex justify-center"
        >

          {/* glow */}
          <div className="absolute inset-0 bg-cyan-500/20 blur-3xl rounded-full" />

          {/* card */}
          <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl shadow-2xl p-6">

            <img
              src={hero}
              alt="dashboard"
              className="rounded-2xl w-full max-w-xl"
            />

          </div>

        </motion.div>

      </div>

    </section>
  );
};

export default Hero;
