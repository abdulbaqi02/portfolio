"use client";

import { motion } from "framer-motion";
import { GraduationCap, Calendar } from "lucide-react";
import personalData from "@/data/personalData.json";

interface Education {
  degree: string;
  institution: string;
  year: string;
  description: string;
}

export default function Education() {
  const education: Education[] = personalData.education;

  return (
    <div className="min-h-screen pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Education
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            My academic background and the educational journey that shaped my passion for software engineering.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto mb-20">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-green-600 dark:bg-green-400"></div>

            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="relative mb-12 ml-20"
              >
                {/* Timeline dot */}
                <div className="absolute -left-16 top-6 w-4 h-4 bg-green-600 dark:bg-green-400 rounded-full border-4 border-white dark:border-gray-900"></div>

                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                      {edu.degree}
                    </h3>
                    <div className="flex items-center text-gray-600 dark:text-gray-400 mt-2 sm:mt-0">
                      <Calendar size={16} className="mr-1" />
                      <span className="text-sm">{edu.year}</span>
                    </div>
                  </div>

                  <div className="flex items-center text-gray-600 dark:text-gray-400 mb-4">
                    <GraduationCap size={16} className="mr-2" />
                    <span className="font-medium">{edu.institution}</span>
                  </div>

                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    {edu.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
            Key Coursework & Skills
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {[
              {
                category: "Computer Science",
                subjects: ["Data Structures", "Algorithms", "Software Engineering", "Database Systems"]
              },
              {
                category: "Web Development",
                subjects: ["HTML/CSS", "JavaScript", "React", "Node.js"]
              },
              {
                category: "Mathematics",
                subjects: ["Discrete Math", "Linear Algebra", "Statistics", "Calculus"]
              },
              {
                category: "Other",
                subjects: ["Machine Learning", "Blockchain", "Cloud Computing", "DevOps"]
              }
            ].map((category, index) => (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
              >
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 text-center">
                  {category.category}
                </h3>
                <ul className="space-y-2">
                  {category.subjects.map((subject) => (
                    <li key={subject} className="text-gray-600 dark:text-gray-300 text-sm flex items-center">
                      <span className="w-1.5 h-1.5 bg-green-600 dark:bg-green-400 rounded-full mr-3"></span>
                      {subject}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}