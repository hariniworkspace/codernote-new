import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const SuccessScreen = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/dashboard", { replace: true });
    }, 1800);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0b0f1a] relative overflow-hidden">

      {/* subtle background glow */}
      <div className="absolute w-[500px] h-[500px] bg-green-500/10 blur-[120px] rounded-full" />

      <div className="relative text-center">

        {/* Animated circle */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 200,
            damping: 12,
          }}
          className="w-24 h-24 rounded-full bg-green-500 flex items-center justify-center mx-auto mb-6"
        >
          <Check size={50} className="text-white" />
        </motion.div>

        {/* Text */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-3xl font-bold text-white mb-2"
        >
          Success!
        </motion.h1>

        <motion.p
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ delay: 0.5 }}
  className="text-gray-400 flex items-center justify-center gap-2"
>
  Successfully logged in to

  <span className="flex items-center gap-2 text-white font-semibold">

    <img
      src="/image.png"
      alt="logo"
      className="w-5 h-5"
    />

    CoderNotes

  </span>

</motion.p>


        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="text-gray-500 mt-2 text-sm"
        >
          Redirecting ...
        </motion.p>

      </div>

    </div>
  );
};

export default SuccessScreen;
