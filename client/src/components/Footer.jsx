import { motion } from "framer-motion";
import { Link } from "react-scroll";

export default function Footer() {
  return (
    <footer className="px-4 md:px-8 lg:px-16 xl:px-20 bg-blue-900/80 backdrop-blur-lg text-blue-50 border-t border-blue-700/50">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="flex flex-row flex-wrap items-start justify-between gap-6 py-4 border-b border-blue-700/50"
      >
        {/* About Me */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="flex-1 min-w-[220px]"
        >
          <h3 className="text-xl font-bold text-white mb-3">About Me</h3>
          <p className="max-w-[380px] text-lg text-white">
            I'm <strong>Kanhai Kumar Sah</strong>, a backend developer and BCA
            student. Passionate about building APIs, learning new tools and
            growing through teamwork and real-world experience.
          </p>
        </motion.div>

        {/* Right Side: Quick Links + Contact + Social */}
        <div className="flex flex-row flex-wrap justify-between w-full lg:w-[55%] gap-5">
          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex-1 min-w-[140px]"
          >
            <h3 className="font-semibold text-md text-white mb-2">
              Quick Links
            </h3>
            <ul className="text-sm space-y-1">
              {["home", "services", "skills", "projects", "contact"].map(
                (id) => (
                  <li key={id}>
                    <Link
                      to={id}
                      smooth={true}
                      duration={500}
                      offset={-70}
                      className="hover:text-blue-400 transition cursor-pointer capitalize"
                    >
                      {id}
                    </Link>
                  </li>
                ),
              )}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="flex-1 min-w-[140px]"
          >
            <h3 className="font-semibold text-md text-white mb-2">Contact</h3>
            <ul className="text-sm space-y-1">
              <li className="flex items-center gap-2">
                <i className="fas fa-envelope text-blue-300"></i>
                <span>kanhai.k.sah@gmail.com</span>
              </li>
              <li className="flex items-center gap-2">
                <i className="fas fa-phone text-blue-300"></i>
                <span>+977-9815220040</span>
              </li>
              <li className="flex items-center gap-2">
                <i className="fas fa-map-marker-alt text-blue-300"></i>
                <span>Ratnanagar-04, Chitwan, Nepal</span>
              </li>
            </ul>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="flex-1 min-w-[140px]"
          >
            <h3 className="font-semibold text-md text-white mb-2">Connect</h3>
            <ul className="text-sm space-y-1">
              <li className="flex items-center gap-2">
                <i className="fab fa-github text-blue-300"></i>
                <a
                  href="https://github.com/kanhai-ks"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-400 transition"
                >
                  Github
                </a>
              </li>
              <li className="flex items-center gap-2">
                <i className="fab fa-linkedin text-blue-300"></i>
                <a
                  href="https://www.linkedin.com/in/kanhai-kumar-sah"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-300 transition"
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </motion.div>
        </div>
      </motion.div>

      {/* Copyright */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        viewport={{ once: true }}
        className="py-2 text-center text-md md:text-lg text-white"
      >
        &copy; 2026 <strong>Kanhai Kumar Sah</strong> · All rights reserved.
      </motion.p>
    </footer>
  );
}
