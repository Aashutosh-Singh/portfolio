"use client";


import Image from "next/image";
import { useEffect } from "react";
import { motion } from "framer-motion";
import {
  Code2,
  Rocket,
  Lightbulb,
  Target,
  Mail,
  MapPin,
  Briefcase,
  Github,
  Linkedin,
  Twitter,
  Globe,
  ShoppingCart,
  CheckSquare,
  Terminal,
  Code,
  Braces,
  Database,
  Server,
  Boxes,
  Brain,
  Laptop,
} from "lucide-react";
export default function Home() {
  const skills = [
    { name: "React", icon: Code, level: "90%" },
    { name: "Next.js", icon: Globe, level: "85%" },
    { name: "Node.js", icon: Server, level: "85%" },
    { name: "Express.js", icon: Boxes, level: "80%" },
    { name: "MongoDB", icon: Database, level: "80%" },
    { name: "SQL", icon: Database, level: "75%" },
    { name: "Python", icon: Braces, level: "75%" },
    { name: "C++ & DSA", icon: Brain, level: "80%" },
  ];

  const projects = [
    {
      title: "Portfolio Website",
      description:
        "A modern, responsive personal portfolio built with Next.js, Tailwind CSS, and Framer Motion to showcase my skills and projects.",
      tech: ["Next.js", "Tailwind CSS", "Framer Motion"],
      image: "/portfolio.png", // replace with your screenshot
      link: "https://aashutoshsingh.vercel.app/",
      gitlink:"https://github.com/Aashutosh-Singh/portfolio",
      icon: Globe,
    },
    {
      title: "Buy Me a Pizza",
      description:
        "A full-stack clone of Buy me a coffee with following/follower concept like instagram and supporter list as well as razorpay payment option with jwt authentication",
      tech: ["React", "Node.js", "NextJs", "MongoDB", "Razorpay"],
      image: "/buymeapizza.png", // replace with your screenshot
      link: "https://buy-me-a-pizza.vercel.app/",
      gitlink:"https://github.com/Aashutosh-Singh/GetMeAPizza",
      icon: ShoppingCart,
    },
    // {
    //   title: "E-Commerce Store",
    //   description:
    //     "A full-stack e-commerce web app with product catalog, cart, checkout, and MongoDB backend. Inspired by my fashion brand idea.",
    //   tech: ["React", "Node.js", "Express", "MongoDB"],
    //   image: "/projects/ecommerce.png", // replace with your screenshot
    //   link: "#",
    // gitlink:"#",
    //   icon: ShoppingCart,
    // },
    {
      title: "Task Manager App",
      description:
        "A task management app to create, update, and organize tasks. Features authentication and responsive UI.",
      tech: ["React", "Express", "PostgreSQL"],
      image: "/projects/tasks.png",
      link: "#",
      gitlink:"#",
      icon: CheckSquare,
    },
    {
      title: "DSA & CLI Tools",
      description:
        "A collection of C++ and Python projects focused on Data Structures, Algorithms, and problem-solving utilities.",
      tech: ["C++", "Python", "DSA"],
      image: "/projects/dsa.png",
      link: "#",
      gitlink:"#",
      icon: Terminal,
    },
  ];
  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      info: "aashutoshsingh226@email.com",
      color: "from-cyan-500 to-blue-600",
    },
    {
      icon: MapPin,
      title: "Location",
      info: "Gorakhpur, India",
      color: "from-purple-500 to-pink-600",
    },
    {
      icon: Briefcase,
      title: "Available For",
      info: "Freelance & Full-time",
      color: "from-yellow-500 to-orange-600",
    },
  ];

  const socials = [
    {
      name: "GitHub",
      icon: Github,
      url: "https://github.com/Aashutosh-Singh",
      color: "hover:text-gray-300",
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      url: "https://www.linkedin.com/in/aashutosh-singh-232933250/",
      color: "hover:text-blue-400",
    },
    {
      name: "Twitter",
      icon: Twitter,
      url: "https://x.com/Aashutosh_eng",
      color: "hover:text-cyan-400",
    },
  ];
  const items = [
    {
      icon: <Code2 className="w-6 h-6 text-blue-500" />,
      title: "Full-Stack Development",
      desc: "I build web apps with React, Next.js, Node.js & MongoDB. Clean code, simple design, real impact.",
    },
    {
      icon: <Rocket className="w-6 h-6 text-purple-500" />,
      title: "Future Goals",
      desc: "Beyond coding, I dream of creating startups in tech & space that make life easier and exciting.",
    },
    {
      icon: <Lightbulb className="w-6 h-6 text-yellow-500" />,
      title: "Ideas & Creativity",
      desc: "I love turning raw ideas into something real — whether it’s a side project, YouTube content, or startup plans.",
    },
    {
      icon: <Target className="w-6 h-6 text-green-500" />,
      title: "Vision",
      desc: "Not just to work a job, but to build things that inspire people and actually matter in the long run.",
    },
  ];
  useEffect(() => {
    // Scroll progress functionality
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      const docHeight = document.body.offsetHeight - window.innerHeight;
      const scrollPercent = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;

      const progressBar = document.getElementById("scroll-progress");
      if (progressBar) {
        progressBar.style.width = scrollPercent + "%";
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black"></div>
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&q=80')] bg-cover bg-center opacity-5"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black"></div>
      </div>

      {/* Floating Particles - Reduced count for subtlety */}
      <div className="fixed inset-0 z-0 overflow-hidden">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="particle absolute w-1 h-1 bg-cyan-400/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 4}s`,
            }}
          ></div>
        ))}
      </div>

      {/* Interactive Grid Background - More subtle */}
      <div className="fixed inset-0 z-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(0, 212, 255, 0.2) 1px, transparent 0)`,
            backgroundSize: "80px 80px",
          }}
        ></div>
      </div>

      {/* Scroll Progress Indicator */}
      <div className="fixed top-0 left-0 w-full h-0.5 bg-gray-800 z-50">
        <div
          className="h-full bg-gradient-to-r from-cyan-400 to-blue-500 transition-all duration-300"
          style={{ width: "0%" }}
          id="scroll-progress"
        ></div>
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-black/90 backdrop-blur-md z-40 border-b border-cyan-500/20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-xl font-semibold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent hover:scale-105 transition-transform duration-300 cursor-pointer">
              Portfolio
            </div>
            <div className="hidden md:flex space-x-8">
              {["About", "Skills", "Projects", "Contact"].map((item, index) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="relative text-gray-300 hover:text-cyan-400 transition-colors duration-300 group text-sm font-medium"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-px bg-cyan-400 transition-all duration-300 group-hover:w-full"></span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </nav>
      <section className="relative pt-24 pb-16 px-6 lg:px-12 z-10">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          {/* Text Side */}
          <div className="text-center md:text-left space-y-6">
            <h1 className="text-4xl sm:text-5xl font-bold leading-tight">
              Hi, I&apos;m{" "}
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Aashutosh Singh
              </span>
            </h1>
            <p className="text-lg text-gray-300 max-w-xl mx-auto md:mx-0 leading-relaxed">
              Computer Science undergraduate and aspiring Software Engineer.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <a
                href="#projects"
                className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium rounded-lg shadow-md hover:shadow-lg hover:from-cyan-400 hover:to-blue-500 transition-transform transform hover:scale-105"
              >
                View My Work
              </a>
              <a
                href="#contact"
                className="px-6 py-3 border border-cyan-400/50 text-cyan-400 font-medium rounded-lg hover:bg-cyan-400/10 hover:border-cyan-400 transition-transform transform hover:scale-105"
              >
                Get In Touch
              </a>
            </div>
          </div>
          {/* Image Side */}
          <div className="relative w-full h-[400px] rounded-xl overflow-hidden border border-cyan-400/30 shadow-lg">
            <img
              src="/mypicture.jpg"
              alt="Profile"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
            />
          </div>

          
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-black to-gray-950 p-8">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-extrabold text-white"
          >
            About <span className="text-purple-400">Me</span>
          </motion.h1>

          {/* Professional intro */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto"
          >
            I’m{" "}
            <span className="font-semibold text-purple-300">
              Aashutosh Singh
            </span>
            , a Computer Science undergraduate and aspiring
            <span className="font-semibold text-purple-300">
              {" "}
              Software Engineer
            </span>
            . I enjoy building scalable web applications, solving real-world
            problems with code, and constantly improving my development skills.
          </motion.p>

          {/* Skills / Focus Areas */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: { opacity: 0, y: 40 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { staggerChildren: 0.2 },
              },
            }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12"
          >
            {[
              { icon: <Code size={36} />, text: "Full-Stack Dev" },
              { icon: <Laptop size={36} />, text: "React & Next.js" },
              { icon: <Database size={36} />, text: "Node & MongoDB" },
              { icon: <Globe size={36} />, text: "API & Web Services" },
            ].map((item, i) => (
              <motion.div
                key={i}
                className="flex flex-col items-center bg-white/5 rounded-2xl p-6 shadow-lg border border-white/10"
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-purple-400 mb-3">{item.icon}</div>
                <p className="text-gray-200 text-lg font-medium">{item.text}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Outro */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 1 }}
            className="text-gray-400 mt-12 max-w-3xl mx-auto"
          >
            I am eager to apply my knowledge in real-world projects, collaborate
            with talented teams, and grow into a proficient software engineer.
            My main focus right now is gaining hands-on experience through
            internships and impactful projects.
          </motion.p>
        </div>
      </section>

      {/* Skills Section */}
      <section
        id="skills"
        className="relative py-20 px-6 lg:px-12 bg-gradient-to-br from-black via-gray-900 to-black"
      >
        <div className="max-w-6xl mx-auto text-center space-y-12">
          {/* Title */}
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-extrabold text-white"
          >
            Skills & <span className="text-purple-400">Technologies</span>
          </motion.h2>

          {/* Grid */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: { opacity: 0, y: 40 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { staggerChildren: 0.15 },
              },
            }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                className="flex flex-col items-center bg-white/5 rounded-2xl p-6 shadow-lg border border-white/10 hover:border-purple-400/30 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
              >
                <skill.icon className="w-10 h-10 text-purple-400 mb-4" />
                <p className="text-lg font-medium text-gray-200">
                  {skill.name}
                </p>

                {/* Progress Bar */}
                <div className="w-full mt-4 bg-gray-700/50 rounded-full h-2 overflow-hidden">
                  <div
                    className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full transition-all duration-700 ease-out"
                    style={{ width: skill.level }}
                  ></div>
                </div>

                <span className="mt-2 text-xs text-purple-300 font-medium">
                  {skill.level}
                </span>
              </motion.div>
            ))}
          </motion.div>

          {/* Soft Skills (subtle, small) */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-sm text-gray-400 max-w-3xl mx-auto mt-10"
          >
            Apart from technical skills, I value continuous learning, strategic
            thinking (thanks to chess ♟️), and adaptability through reading and
            self-growth practices.
          </motion.p>
        </div>
      </section>

      {/* Projects Section */}
      <section
        id="projects"
        className="relative py-20 px-6 lg:px-12 bg-gradient-to-br from-black via-gray-900 to-black"
      >
        <div className="max-w-6xl mx-auto text-center space-y-12">
          {/* Title */}
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-extrabold text-white"
          >
            Featured <span className="text-purple-400">Projects</span>
          </motion.h2>

          {/* Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.03 }}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                viewport={{ once: true }}
                className="flex flex-col bg-white/5 rounded-2xl overflow-hidden border border-white/10 hover:border-purple-400/30 shadow-lg transition-all duration-300"
              >
                <div className="relative w-full h-48 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>

                <div className="p-6 flex flex-col flex-grow text-left">
                  <div className="flex items-center gap-2 mb-3">
                    <project.icon className="w-5 h-5 text-purple-400" />
                    <h3 className="text-lg font-semibold text-white">
                      {project.title}
                    </h3>
                  </div>

                  <p className="text-gray-300 text-sm flex-grow">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mt-4">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="bg-purple-500/20 text-purple-300 px-2 py-1 rounded-full text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <a
                    href={project.link}
                    className="mt-4 inline-flex items-center text-purple-400 hover:text-purple-300 text-sm font-medium"
                  >
                    View Live Project →
                  </a>
                  <a
                    href={project.gitlink}
                    className="mt-4 inline-flex items-center text-purple-400 hover:text-purple-300 text-sm font-medium"
                  >
                    Github link →
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative py-20 px-6 lg:px-12">
        <div className="max-w-4xl mx-auto text-center space-y-12">
          {/* Title */}
          <h2 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Let&apos;s Work Together
          </h2>

          <p className="text-base text-gray-300 max-w-2xl mx-auto">
            I&apos;m always open to new opportunities and collaborations.
            Whether you have a project idea, a job opportunity, or just want to
            connect — feel free to reach out!
          </p>

          {/* Contact Info */}
          <div className="grid md:grid-cols-3 gap-6">
            {contactInfo.map((item, index) => (
              <div
                key={index}
                className={`group bg-gray-900/30 backdrop-blur-sm border border-gray-700/30 rounded-xl p-6 hover:border-cyan-500/30 hover:shadow-lg hover:shadow-cyan-500/10 transform hover:scale-105 transition-all duration-300`}
              >
                <item.icon className="w-8 h-8 text-cyan-400 mb-4 mx-auto" />
                <h3 className="font-semibold text-white text-lg mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-300 text-sm">{item.info}</p>
              </div>
            ))}
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6">
            {socials.map((social, index) => (
              <a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`text-gray-400 ${social.color} transition-all duration-300 transform hover:scale-110`}
              >
                <div className="w-12 h-12 bg-gray-800/50 rounded-xl flex items-center justify-center hover:bg-gray-700/50 transition-colors duration-300">
                  <social.icon className="w-6 h-6" />
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative bg-gray-900/30 backdrop-blur-sm border-t border-cyan-500/20 py-6 px-4 sm:px-6 lg:px-8 z-10">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-400 text-sm">
            © 2025 Aashutosh Singh. All rights reserved.
          </p>
        </div>
      </footer>

      {/* Floating Action Button - More subtle */}
      <div className="fixed bottom-6 right-6 z-50">
        <button
          onClick={scrollToTop}
          className="w-12 h-12 bg-gradient-to-r from-cyan-500/80 to-blue-600/80 backdrop-blur-sm rounded-full shadow-lg hover:shadow-cyan-500/25 transform hover:scale-110 transition-all duration-300 flex items-center justify-center group"
        >
          <span className="text-white text-lg group-hover:rotate-180 transition-transform duration-300">
            ↑
          </span>
        </button>
      </div>
    </div>
  );
}
