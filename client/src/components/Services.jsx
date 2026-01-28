export default function Services() {
  const services = [
    {
      title: "Backend APIs",
      desc: "Node.js + Express REST APIs with MongoDB/Mongoose or MySQL. I design scalable and efficient APIs that power applications with clean architecture and reliable data handling.",
    },
    {
      title: "Auth & Security",
      desc: "JWT sessions, validation, and secure cookie handling. I ensure user data is protected with modern authentication flows and industry-standard security practices.",
    },
    {
      title: "Testing & QA",
      desc: "Postman/Thunder Client collections and route-by-route verification. I provide thorough testing to guarantee stability, performance, and bug-free deployments.",
    },
    {
      title: "Deployment",
      desc: "Deploy to Render/Railway with environment configs and health checks. I streamline deployment pipelines to deliver applications that are reliable, monitored, and production-ready.",
    },
  ];

  return (
    <section
      id="services"
      className="px-6 md:px-10 lg:px-16 py-18 bg-gradient-to-r from-blue-50 to-blue-100 text-blue-900 mb-5"
    >
      {/* Section heading */}
      <h2 className="text-4xl md:text-5xl font-bold mb-15 text-center bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
        Services
      </h2>

      {/* Services grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 max-w-7xl mx-auto ">
        {services.map((s) => (
          <article
            key={s.title}
            className="rounded-xl border border-blue-200 bg-white/90 backdrop-blur-sm p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
          >
            {/* Title */}
            <h3 className="text-2xl text-center font-semibold mb-2 text-blue-800">
              {s.title}
            </h3>

            {/* Description */}
            <p className="text-md text-blue-700 leading-relaxed">{s.desc}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
