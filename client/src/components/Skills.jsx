import { motion } from "framer-motion";

export default function Skills() {
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
      id="skills"
      className="px-6 md:px-10 lg:px-16 py-20 bg-gradient-to-l from-blue-50 to-blue-100 text-blue-900 flex flex-col lg:flex-row items-center justify-center min-h-screen mb-5"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
    >
      {/* Text content with animated entrance */}
      <motion.div
        className="max-w-3xl text-center lg:text-left order-1 lg:order-0"
        variants={itemVariants}
      >
        {/* Animated section heading */}
        <motion.h2
          className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent"
          variants={itemVariants}
        >
          Skills
        </motion.h2>

        {/* Detailed skills description with structured paragraphs */}
        <motion.p
          className="text-lg md:text-xl leading-relaxed text-blue-800 max-w-2xl"
          variants={itemVariants}
        >
          {/* Frontend development skills and technologies */}
          As a <strong>Frontend Developer</strong>, I work with{" "}
          <strong>HTML</strong>, <strong>CSS</strong>,{" "}
          <strong>JavaScript</strong>, and modern libraries like
          <strong>React</strong>, along with styling frameworks such as{" "}
          <strong>TailwindCSS</strong> and <strong>Bootstrap</strong> to build
          responsive and accessible interfaces. <br />
          <br />
          {/* Backend development expertise */}
          On the <strong>Backend</strong>, I specialize in{" "}
          <strong>Node.js</strong> and <strong>Express.js</strong>, with
          database expertise in <strong>MySQL</strong>, <strong>MongoDB</strong>
          , and <strong>Mongoose</strong>, focusing on secure APIs and
          authentication flows. <br />
          <br />
          {/* Development tools and version control */}
          My <strong>Tools</strong> include <strong>Git & GitHub</strong> for
          version control, <strong>VS Code</strong> for development, and API
          testing with <strong>Postman</strong> and{" "}
          <strong>Thunder Client</strong>. <br />
          <br />
          {/* Hosting and deployment platforms */}
          For <strong>Hosting & Deployment</strong>, I use platforms like{" "}
          <strong>Vercel</strong> and <strong>Render</strong>, ensuring smooth
          deployment pipelines and reliable performance.
        </motion.p>
      </motion.div>

      {/* Animated skills illustration */}
      <motion.img
        src="/src/assets/skills.png"
        alt="Illustration representing various technical skills and technologies"
        className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl h-auto rounded-xl shadow-xl border-4 border-blue-200 object-contain mb-6 lg:mb-0 lg:ml-8 order-0 lg:order-1"
        variants={itemVariants}
        whileHover={{
          scale: 1.05,
          rotate: 2,
          transition: { duration: 0.3 },
        }}
        whileTap={{ scale: 0.95 }}
      />
    </motion.section>
  );
}
