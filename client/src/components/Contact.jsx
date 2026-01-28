import { useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";

// Axios instance configuration for API calls
const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE || "http://localhost:5000",
});

export default function Contact() {
  // Form state management for user inputs
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  // Status state for form submission feedback
  const [status, setStatus] = useState({
    loading: false,
    ok: false,
    error: "",
  });

  // Handle input field changes
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Handle form submission with API call
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ loading: true, ok: false, error: "" });

    try {
      await api.post("/api/contact", form);
      setStatus({ loading: false, ok: true, error: "" });
      setForm({ name: "", email: "", message: "" });

      toast.success("Message sent successfully!");
    } catch (err) {
      setStatus({
        loading: false,
        ok: false,
        error: "Failed to send. Try again.",
      });

      toast.error("Failed to send. Try again.");
    }
  };

  // Animation variants for staggered entrance effects
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <motion.section
      id="contact"
      className="px-6 md:px-10 lg:px-16 py-8 md:py-12 bg-gradient-to-b from-indigo-100 to-blue-50 text-blue-900"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
    >
      {/* Toast notification container */}
      <Toaster position="top-center" reverseOrder={false} />

      {/* Animated section heading */}
      <motion.h2
        className="text-3xl md:text-4xl font-bold mb-8 text-center bg-gradient-to-r from-indigo-600 to-blue-600 bg-clip-text text-transparent"
        variants={itemVariants}
      >
        Contact
      </motion.h2>

      <motion.div
        className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8"
        variants={containerVariants}
      >
        {/* Contact information section */}
        <motion.div
          className="space-y-4 md:text-left text-center"
          variants={itemVariants}
        >
          <motion.h3
            className="text-xl font-semibold text-blue-800 mb-3"
            variants={itemVariants}
          >
            Get In Touch
          </motion.h3>
          <motion.p
            className="text-blue-700 mb-4 leading-relaxed"
            variants={itemVariants}
          >
            I'm always open to discussing new opportunities, collaborations, or
            just having a chat about technology.
          </motion.p>

          {/* Contact details with icons */}
          <motion.div className="space-y-3" variants={itemVariants}>
            <motion.p
              className="text-blue-700 flex items-center gap-3 md:justify-start justify-center"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <motion.i
                className="fas fa-envelope text-blue-600 text-lg"
                whileHover={{ scale: 1.1, rotate: 5 }}
              ></motion.i>
              <a
                href="mailto:kanhai.k.sah@gmail.com"
                className="hover:text-blue-800 transition-colors duration-300"
              >
                kanhai.k.sah@gmail.com
              </a>
            </motion.p>
            <motion.p
              className="text-blue-700 flex items-center gap-3 md:justify-start justify-center"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <motion.i
                className="fas fa-map-marker-alt text-blue-600 text-lg"
                whileHover={{ scale: 1.1, rotate: 5 }}
              ></motion.i>
              <span>Available for remote work</span>
            </motion.p>
          </motion.div>

          {/* Resume download button */}
          <motion.div
            className="mt-4 flex md:justify-start justify-center"
            variants={itemVariants}
          >
            <motion.a
              href="/public/Kanhai-Kumar-Sah-Resume.pdf"
              download="Kanhai-Kumar-Sah-Resume.pdf"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold shadow-lg hover:from-blue-600 hover:to-indigo-700 transition-all duration-300"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.i
                className="fas fa-file-download"
                whileHover={{ scale: 1.1 }}
              ></motion.i>{" "}
              Download Resume
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Contact form with animated inputs */}
        <motion.form
          onSubmit={handleSubmit}
          className="space-y-4"
          variants={itemVariants}
        >
          {/* Name input field */}
          <motion.input
            type="text"
            name="name"
            placeholder="Name"
            value={form.name}
            onChange={handleChange}
            required
            className="w-full p-3 border-2 border-blue-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white/80 backdrop-blur-sm transition-all duration-300"
            whileFocus={{ scale: 1.02, borderColor: "#3b82f6" }}
            variants={itemVariants}
          />

          {/* Email input field */}
          <motion.input
            type="email"
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            required
            className="w-full p-3 border-2 border-blue-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white/80 backdrop-blur-sm transition-all duration-300"
            whileFocus={{ scale: 1.02, borderColor: "#3b82f6" }}
            variants={itemVariants}
          />

          {/* Message textarea */}
          <motion.textarea
            name="message"
            placeholder="Message"
            value={form.message}
            onChange={handleChange}
            required
            className="w-full p-3 border-2 border-blue-200 rounded-lg min-h-[100px] focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white/80 backdrop-blur-sm resize-none transition-all duration-300"
            whileFocus={{ scale: 1.02, borderColor: "#3b82f6" }}
            variants={itemVariants}
          ></motion.textarea>

          {/* Submit button with loading state */}
          <motion.button
            type="submit"
            disabled={status.loading}
            className="w-full bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-3 rounded-lg hover:from-blue-600 hover:to-indigo-700 disabled:opacity-60 flex items-center justify-center gap-3 font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
            whileHover={{ scale: 1.02, y: -1 }}
            whileTap={{ scale: 0.98 }}
            variants={itemVariants}
          >
            {status.loading ? (
              <>
                <motion.i
                  className="fas fa-spinner fa-spin"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                ></motion.i>{" "}
                Sending...
              </>
            ) : (
              <>
                <motion.i
                  className="fas fa-paper-plane"
                  whileHover={{ scale: 1.1, x: 2 }}
                ></motion.i>{" "}
                Send Message
              </>
            )}
          </motion.button>
        </motion.form>
      </motion.div>
    </motion.section>
  );
}
