import { motion } from "framer-motion";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Services from "./components/Services";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

export default function App() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="overflow-x-hidden"
    >
      {/* Navigation bar fixed at the top for easy access to sections */}
      <Navbar />

      {/* Main portfolio sections in logical order */}
      <Home />
      <About />
      <Services />
      <Skills />
      <Projects />
      <Contact />

      {/* Footer with additional links and information */}
      <Footer />

      {/* Utility component for smooth scrolling back to top */}
      <ScrollToTop />
    </motion.div>
  );
}
