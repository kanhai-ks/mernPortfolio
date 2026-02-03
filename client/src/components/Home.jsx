export default function Home() {
  return (
    <section
      id="home"
      className="px-6 md:px-10 lg:px-16 py-18 bg-gradient-to-r from-blue-50 to-blue-100 text-blue-900 flex flex-col lg:flex-row items-center justify-center min-h-screen mb-5"
    >
      {/* Profile image with hover animation */}
      <img
        src="/home.jpg"
        alt="Kanhai ks"
        className="w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 rounded-full border-4 border-blue-400 shadow-2xl mb-6 lg:mb-0 lg:mr-12 object-cover
                   transition-transform duration-500 ease-in-out hover:scale-105 hover:shadow-3xl hover:saturate-150"
      />

      {/* Text content */}
      <div className="max-w-3xl text-center lg:text-left">
        {/* Section heading */}
        <h2 className="text-3xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
          Hello, I'm Kanhai Kumar Sah
        </h2>

        {/* Intro paragraph */}
        <p className="text-lg md:text-xl leading-relaxed text-blue-800 max-w-2xl mb-6">
          I’m a BCA student and backend developer focused on building secure
          MERN applications. Skilled in Node.js, Express, MongoDB, MySQL and
          love creating efficient APIs and connecting frontend with backend
          seamlessly.
        </p>

        {/* Extra paragraph (frontend + passion) */}
        <p className="text-lg md:text-xl leading-relaxed text-blue-800 max-w-2xl mb-6">
          On the frontend, I work with HTML, CSS, TailwindCSS, JavaScript and
          React to design responsive and modern interfaces. Passionate about
          learning new technologies, I enjoy solving problems and deploying
          projects on platforms like Render and Railway.
        </p>

        {/* Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center">
          <a
            href="#projects"
            className="w-80 sm:w-44 px-6 py-3 rounded-lg bg-gradient-to-r from-blue-500 to-indigo-600 
               hover:from-blue-600 hover:to-indigo-700 text-white font-semibold shadow-lg 
               hover:shadow-xl transition-all duration-300 text-center"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="w-80 sm:w-44 px-6 py-3 rounded-lg bg-gradient-to-r from-blue-500 to-indigo-600 
               hover:from-blue-600 hover:to-indigo-700 text-white font-semibold shadow-lg 
               hover:shadow-xl transition-all duration-300 text-center"
          >
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
}
