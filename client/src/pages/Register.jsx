import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { registerUser } from "../services/authService";
import toast from "react-hot-toast";
import { motion } from "framer-motion";
import { User, Mail, Lock, ArrowRight } from "lucide-react";

const Register = () => {

  const navigate = useNavigate();

  // Form state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  // Error state (inline errors)
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    password: "",
  });

  // Loading state (button spinner)
  const [loading, setLoading] = useState(false);


  // Spinner Component
  const Spinner = () => (
    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
  );


  // Handle input change
  const handleChange = (e) => {

    const { name, value } = e.target;

    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));

    // Clear error while typing
    setErrors(prev => ({
      ...prev,
      [name]: "",
    }));
  };


  // Handle submit
  const handleSubmit = async (e) => {

    e.preventDefault();

    if (loading) return;

    // Validation
    let newErrors = {
      name: "",
      email: "",
      password: "",
    };

    let hasError = false;

    if (!formData.name.trim()) {
      newErrors.name = "Full name is required.";
      hasError = true;
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
      hasError = true;
    }

    if (!formData.password.trim()) {
      newErrors.password = "Password is required.";
      hasError = true;
    }

    setErrors(newErrors);

    if (hasError) return;

    try {

      setLoading(true);

      const data = await registerUser(formData);

      localStorage.setItem("token", data.token);

      // Navigate to full loading screen AFTER success
      navigate("/register-loading");

    } catch (err) {

      const message = err.response?.data?.message?.toLowerCase();

      if (message?.includes("already exists")) {

        setErrors(prev => ({
          ...prev,
          email: "An account with this email already exists.",
        }));

      } else if (message?.includes("invalid email")) {

        setErrors(prev => ({
          ...prev,
          email: "Please enter a valid email address.",
        }));

      } else {

        toast.error("Registration failed. Please try again.");

      }

      setLoading(false);
    }
  };


  return (

    <div className="min-h-screen bg-[#0b0f1a] flex flex-col lg:flex-row">


      {/* LEFT BRAND PANEL */}
      <div className="hidden lg:flex w-1/2 items-center justify-center px-12 relative">

        <div className="absolute inset-0 bg-gradient-to-br from-pink-600/20 to-purple-500/10 blur-3xl"></div>

        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="relative max-w-xl"
        >

          <h1 className="text-5xl font-extrabold leading-tight text-white mb-6">
            Start Your <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500">
              Placement Journey
            </span>
          </h1>

          <p className="text-gray-400 text-lg">
            Join thousands of students preparing for top IT companies with a structured learning system.
          </p>

        </motion.div>

      </div>


      {/* RIGHT FORM PANEL */}
      <div className="w-full lg:w-1/2 flex items-center justify-center px-6 lg:px-12">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl shadow-2xl w-full max-w-md p-10"
        >

          <h2 className="text-4xl font-extrabold text-center mb-2 text-white">
            Create Account
          </h2>

          <p className="text-center text-gray-400 mb-8">
            Get started with your placement preparation
          </p>


          <form onSubmit={handleSubmit} className="space-y-5">


            {/* NAME */}
            <div>

              <div className="relative">

                <User className="absolute left-4 top-3.5 text-gray-400" size={20} />

                <input
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Full name"
                  className={`w-full bg-white/5 border ${
                    errors.name ? "border-red-500" : "border-white/10"
                  } text-white placeholder-gray-400 rounded-xl py-3 pl-12 pr-4 focus:outline-none focus:ring-2 focus:ring-pink-400`}
                />

              </div>

              {errors.name && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.name}
                </p>
              )}

            </div>


            {/* EMAIL */}
            <div>

              <div className="relative">

                <Mail className="absolute left-4 top-3.5 text-gray-400" size={20} />

                <input
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email address"
                  className={`w-full bg-white/5 border ${
                    errors.email ? "border-red-500" : "border-white/10"
                  } text-white placeholder-gray-400 rounded-xl py-3 pl-12 pr-4 focus:outline-none focus:ring-2 focus:ring-pink-400`}
                />

              </div>

              {errors.email && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.email}
                </p>
              )}

            </div>


            {/* PASSWORD */}
            <div>

              <div className="relative">

                <Lock className="absolute left-4 top-3.5 text-gray-400" size={20} />

                <input
                  name="password"
                  type="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Password"
                  className={`w-full bg-white/5 border ${
                    errors.password ? "border-red-500" : "border-white/10"
                  } text-white placeholder-gray-400 rounded-xl py-3 pl-12 pr-4 focus:outline-none focus:ring-2 focus:ring-pink-400`}
                />

              </div>

              {errors.password && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.password}
                </p>
              )}

            </div>


            {/* BUTTON WITH LOADING SPINNER */}
            <button
              type="submit"
              disabled={loading}
              className="w-full flex items-center justify-center gap-3 py-3 rounded-xl font-semibold text-lg bg-gradient-to-r from-pink-600 to-purple-600 transition hover:scale-105 disabled:hover:scale-100 disabled:opacity-80"
            >

              {loading ? (
                <>
                  <Spinner />
                  Creating Account...
                </>
              ) : (
                <>
                  Create Account
                  <ArrowRight size={20} />
                </>
              )}

            </button>


          </form>


          {/* LOGIN LINK */}
          <p className="text-center text-gray-400 mt-6">

            Already have an account?{" "}

            <Link
              to="/login"
              className="text-pink-400 font-semibold hover:underline"
            >
              Login here
            </Link>

          </p>


        </motion.div>

      </div>

    </div>

  );
};

export default Register;
