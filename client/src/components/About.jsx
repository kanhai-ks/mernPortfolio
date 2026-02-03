export default function About() {
  return (
    <section
      id="about"
      className="px-6 md:px-10 lg:px-16 py-18 bg-gradient-to-l from-blue-50 to-blue-100 text-blue-900 flex flex-col lg:flex-row items-center justify-center min-h-screen mb-5"
    >
      {/* Text content */}
      <div className="max-w-3xl text-center lg:text-left order-1 lg:order-0">
        {/* Section heading */}
        <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
          About Me
        </h2>

        {/* Backend skills paragraph */}
        <p className="text-lg md:text-xl leading-relaxed text-blue-800 max-w-2xl mb-6">
          I’m <strong>Kanhai Kumar Sah</strong>, a backend developer and BCA
          student passionate about building secure and scalable web
          applications. Skilled in <strong>Node.js</strong>,{" "}
          <strong>Express</strong>, <strong>MongoDB</strong>, and
          <strong> MySQL</strong>, I focus on creating efficient APIs, handling
          authentication, and connecting frontend with backend seamlessly.
        </p>

        {/* Frontend skills paragraph */}
        <p className="text-lg md:text-xl leading-relaxed text-blue-800 max-w-2xl mb-6">
          On the frontend, I work with <strong>HTML</strong>,{" "}
          <strong>CSS</strong>, <strong>TailwindCSS</strong>,{" "}
          <strong>JavaScript</strong>, and <strong>React</strong>
          to design responsive, modern, and user‑friendly interfaces. I enjoy
          blending clean code with polished UI/UX to deliver complete solutions.
        </p>

        {/* Resume Button */}
        <div className="mt-6">
          <a
            href="/resume/Kanhai-KS-Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold shadow-lg hover:from-blue-600 hover:to-indigo-700 transition-all duration-300"
          >
            <i className="fas fa-eye"></i> View Resume
          </a>
        </div>
      </div>

      {/* Profile image with hover animation */}
      <img
        src="/about.jpg"
        alt="About Kanhai"
        className="w-40 h-40 sm:w-48 sm:h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 rounded-2xl shadow-2xl mb-8 lg:mb-0 lg:mr-12 object-cover border-4 border-blue-200 order-0 lg:order-1
                   transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-3xl hover:brightness-110"
      />
    </section>
  );
}
