"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ChevronDown, Github, Linkedin, Mail } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="flex items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-6">
              Hi, I&apos;m{" "}
              <span className="text-blue-600 dark:text-blue-400">
                Abdul Baqi Qureshi
              </span>
            </h1>
            <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 mb-8">
              A passionate software engineer from Karachi, Pakistan
            </p>
            <p className="text-lg text-gray-500 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
              Specializing in full-stack development with expertise in modern web technologies,
              problem-solving, and continuous learning.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
          >
            <Link
              href="/projects"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium transition-colors"
            >
              View My Work
            </Link>
            <Link
              href="/contact"
              className="border border-gray-300 dark:border-gray-600 hover:border-blue-600 dark:hover:border-blue-400 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 px-8 py-3 rounded-lg font-medium transition-colors"
            >
              Get In Touch
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex justify-center space-x-6 mb-16"
          >
            <a
              href="https://github.com/abdulbaqi02"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              <Github size={32} />
            </a>
            <a
              href="https://www.linkedin.com/in/abdul-baqi-qureshi-56a481377/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              <Linkedin size={32} />
            </a>
            <a
              href="mailto:abdulbaqi@example.com"
              className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              <Mail size={32} />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="animate-bounce"
          >
            <ChevronDown size={32} className="text-gray-400 mx-auto" />
          </motion.div>
        </div>
      </section>

      {/* Skills Preview */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              What I Do
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              I specialize in creating modern, scalable web applications using cutting-edge technologies.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Frontend Development",
                skills: ["React.js", "Next.js", "TypeScript", "Tailwind CSS"],
                icon: "🎨"
              },
              {
                title: "Backend Development",
                skills: ["Node.js", "Express.js", "Django", "MongoDB"],
                icon: "⚙️"
              },
              {
                title: "Blockchain & More",
                skills: ["Ethereum", "Smart Contracts", "Git", "Problem Solving"],
                icon: "🔗"
              }
            ].map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="text-4xl mb-4">{category.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  {category.title}
                </h3>
                <ul className="space-y-2">
                  {category.skills.map((skill) => (
                    <li key={skill} className="text-gray-600 dark:text-gray-300">
                      • {skill}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
