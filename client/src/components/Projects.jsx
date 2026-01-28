import { motion } from "framer-motion";

export default function Projects() {
  // Array of project objects containing all project details
  const projects = [
    {
      title: "CRUD Operation",
      desc: "Basic CRUD with Express/MongoDB. Demonstrates fundamental backend skills with create, read, update, and delete operations, including proper error handling and database integration.",
      repo: "https://github.com/kanhai-ks",
      live: "https://#",
      tech: ["Node.js", "Express", "MongoDB"],
    },
    {
      title: "MERN Auth",
      desc: "JWT auth, protected routes. A secure authentication system with token-based login, role-based access, and protected routes to ensure user data privacy.",
      repo: "https://github.com/kanhai-ks",
      live: "https://#",
      tech: ["React", "Node.js", "JWT"],
    },
    {
      title: "MERN Vlog",
      desc: "Blog/Vlog platform. A full-stack content platform supporting rich text editing, media uploads, and user interaction, built to showcase scalable MERN architecture.",
      repo: "https://github.com/kanhai-ks",
      live: "https://#",
      tech: ["MERN", "Rich Text", "Media"],
    },
    {
      title: "MERN Todo List",
      desc: "Task management app. A productivity-focused application with CRUD tasks, responsive UI, and persistent storage, highlighting integration between frontend and backend.",
      repo: "https://github.com/kanhaiks",
      live: "https://#",
      tech: ["React", "Express", "MongoDB"],
    },
  ];

  // Animation variants for container and individual items
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <motion.section
      id="projects"
      className="px-6 md:px-10 lg:px-16 py-16 bg-gradient-to-b from-blue-50 to-indigo-100 text-blue-900 mb-5"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      {/* Animated section heading */}
      <motion.h2
        className="text-3xl md:text-4xl font-bold mb-10 text-center bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent"
        variants={cardVariants}
      >
        Projects
      </motion.h2>

      {/* Responsive project cards grid with improved breakpoints */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8 max-w-7xl mx-auto"
        variants={containerVariants}
      >
        {projects.map((project, index) => (
          <motion.article
            key={project.title}
            className="group rounded-xl border border-blue-200 bg-white/90 backdrop-blur-sm p-6 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 hover:rotate-1"
            variants={cardVariants}
            whileHover={{
              scale: 1.02,
              transition: { duration: 0.2 },
            }}
            whileTap={{ scale: 0.98 }}
          >
            {/* Project title with subtle animation */}
            <motion.h3
              className="text-lg text-center font-semibold mb-3 text-blue-800 group-hover:text-blue-900 transition-colors duration-300"
              initial={{ opacity: 0.9 }}
              whileHover={{ scale: 1.05 }}
            >
              {project.title}
            </motion.h3>

            {/* Project description */}
            <p className="text-sm text-blue-700 mb-4 leading-relaxed group-hover:text-blue-800 transition-colors duration-300">
              {project.desc}
            </p>

            {/* Technology stack tags */}
            <div className="flex flex-wrap gap-2 mb-6">
              {project.tech.map((tech) => (
                <motion.span
                  key={tech}
                  className="px-2 py-1 bg-blue-100 text-blue-600 text-xs rounded-full font-medium hover:bg-blue-200 transition-colors duration-300"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {tech}
                </motion.span>
              ))}
            </div>

            {/* Action buttons with enhanced hover effects */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href={project.live}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold shadow-md hover:from-blue-600 hover:to-indigo-700 hover:shadow-lg transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <i className="fas fa-external-link-alt"></i> Live View
              </motion.a>
              <motion.a
                href={project.repo}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-2 px-4 py-2 rounded-lg border-2 border-blue-600 text-blue-600 font-semibold hover:bg-blue-600 hover:text-white hover:shadow-lg transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <i className="fab fa-github"></i> Code
              </motion.a>
            </div>
          </motion.article>
        ))}
      </motion.div>
    </motion.section>
  );
}
