import { RevealOnScroll } from "../RevealOnScroll";
import Skills from "./Skills";

export const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            {" "}
            About Me
          </h2>

          <div className=" w-100% rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all mb-24 text-center">
            <p className="text-gray-400 text-lg mb-8 max-w-4xl mx-auto ">
              I'm a full-stack developer with a solid foundation in the MERN
              (MongoDB, Express, React, Node.js) stack, bringing hands-on
              experience in building dynamic, responsive web applications from
              concept to deployment. My expertise includes designing robust,
              scalable APIs, and developing engaging front-end interfaces that
              prioritize user experience. I excel in creating efficient, clean
              code and enjoy collaborating with teams to bring complex projects
              to life. I'm dedicated to delivering quality solutions that meet
              both technical and business goals.
            </p>
          </div>
        </div>
        <Skills />
      </RevealOnScroll>
    </section>
  );
};
