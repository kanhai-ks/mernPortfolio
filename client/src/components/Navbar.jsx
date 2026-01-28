import { useState } from "react";
import { motion } from "framer-motion";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed w-full bg-blue-900/80 backdrop-blur-lg text-blue-50 px-4 sm:px-6 py-4 z-50 shadow-xl border-b border-blue-700/50"
    >
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        {/* Logo / Brand */}
        <motion.a
          href="#home"
          whileHover={{ scale: 1.05 }}
          className="text-lg sm:text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent transition-transform duration-300"
        >
          Kanhai Kumar Sah
        </motion.a>

        {/* Mobile menu toggle button */}
        <motion.button
          whileTap={{ scale: 0.95 }}
          className="lg:hidden text-blue-300 hover:text-white transition-transform duration-300"
          onClick={() => setOpen(!open)}
        >
          {open ? (
            <i className="fas fa-times text-2xl"></i>
          ) : (
            <i className="fas fa-bars text-2xl"></i>
          )}
        </motion.button>

        {/* Navigation links */}
        <motion.ul
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.2 }}
          className={`lg:flex lg:space-x-8 ${
            open ? "block" : "hidden"
          } lg:block mt-4 lg:mt-0 absolute lg:relative top-full left-0 lg:top-auto lg:left-auto w-full lg:w-auto bg-blue-900/95 lg:bg-transparent backdrop-blur-lg lg:backdrop-blur-none p-4 lg:p-0 border-t lg:border-t-0 border-blue-700/50`}
        >
          {["home", "about", "services", "skills", "projects", "contact"].map(
            (id, index) => (
              <motion.li
                key={id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 + index * 0.1 }}
                className="transition-transform duration-300 hover:translate-y-[-2px]"
              >
                <a
                  href={`#${id}`}
                  className="block py-2 lg:py-0 hover:text-blue-300 capitalize transition-colors duration-300"
                  onClick={() => setOpen(false)}
                >
                  {id}
                </a>
              </motion.li>
            ),
          )}
        </motion.ul>
      </div>
    </motion.nav>
  );
}
