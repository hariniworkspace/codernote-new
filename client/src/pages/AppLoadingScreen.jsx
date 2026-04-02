import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Cpu, Database, Sparkles, Rocket } from "lucide-react";

const steps = [
  {
    text: "Initializing platform...",
    icon: Cpu,
  },
  {
    text: "Loading your workspace...",
    icon: Database,
  },
  {
    text: "Preparing your dashboard...",
    icon: Sparkles,
  },
  {
    text: "Launching experience...",
    icon: Rocket,
  },
];

const AppLoadingScreen = () => {
  const [stepIndex, setStepIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setStepIndex((prev) =>
        prev === steps.length - 1 ? prev : prev + 1
      );
    }, 1200);

    return () => clearInterval(interval);
  }, []);

  const CurrentIcon = steps[stepIndex].icon;

  return (
    <div className="min-h-screen bg-[#0b0f1a] flex items-center justify-center relative overflow-hidden">

      {/* background glow */}
      <div className="absolute w-[500px] h-[500px] bg-purple-500/10 blur-[140px] rounded-full" />

      <div className="text-center">

        {/* App Name */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-3xl font-bold text-white mb-10"
        >
          YourPlatform
        </motion.div>

        {/* animated icon */}
        <motion.div
          key={stepIndex}
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="flex justify-center mb-6"
        >
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{
              repeat: Infinity,
              duration: 1.5,
            }}
            className="bg-gradient-to-r from-pink-600 to-purple-600 p-5 rounded-full"
          >
            <CurrentIcon size={40} className="text-white" />
          </motion.div>
        </motion.div>

        {/* animated text */}
        <motion.h2
          key={steps[stepIndex].text}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-2xl font-semibold text-white"
        >
          {steps[stepIndex].text}
        </motion.h2>

        {/* loading dots */}
        <motion.div className="flex justify-center gap-2 mt-4">
          {[0, 1, 2].map((dot) => (
            <motion.div
              key={dot}
              animate={{
                y: [0, -8, 0],
              }}
              transition={{
                repeat: Infinity,
                duration: 0.6,
                delay: dot * 0.2,
              }}
              className="w-2 h-2 bg-purple-400 rounded-full"
            />
          ))}
        </motion.div>

      </div>

    </div>
  );
};

export default AppLoadingScreen;
