"use client";

import { motion } from "framer-motion";
import { Award, Calendar, Trophy, Medal } from "lucide-react";
import personalData from "@/data/personalData.json";

interface Certification {
  name: string;
  issuer: string;
  year: string;
}

export default function Awards() {
  const certifications: Certification[] = personalData.certifications;

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
            Awards & Certifications
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Recognition of my achievements, technical certifications, and professional development milestones.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="flex items-center mb-4">
                <div className="bg-yellow-100 dark:bg-yellow-900 p-3 rounded-full mr-4">
                  <Award className="w-6 h-6 text-yellow-600 dark:text-yellow-400" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    {cert.name}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    {cert.issuer}
                  </p>
                </div>
              </div>
              <div className="flex items-center text-gray-500 dark:text-gray-400 text-sm">
                <Calendar size={14} className="mr-1" />
                {cert.year}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
            Achievement Highlights
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                title: "Technical Excellence",
                description: "Demonstrated proficiency in multiple programming languages and frameworks through hands-on projects.",
                icon: <Trophy className="w-8 h-8" />,
                color: "text-yellow-600 dark:text-yellow-400"
              },
              {
                title: "Continuous Learning",
                description: "Committed to staying updated with the latest technologies and industry best practices.",
                icon: <Medal className="w-8 h-8" />,
                color: "text-blue-600 dark:text-blue-400"
              }
            ].map((achievement, index) => (
              <motion.div
                key={achievement.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className={`flex justify-center mb-4 ${achievement.color}`}>
                  {achievement.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  {achievement.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {achievement.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
            Professional Development
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
            I believe in continuous learning and professional growth. Here are some areas I&apos;m currently focusing on:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              {
                area: "Cloud Technologies",
                progress: "Advanced",
                description: "AWS, Azure, and cloud-native development"
              },
              {
                area: "AI/ML Integration",
                progress: "Intermediate",
                description: "Machine learning models and AI-powered applications"
              },
              {
                area: "Blockchain Development",
                progress: "Intermediate",
                description: "Smart contracts and decentralized applications"
              }
            ].map((skill, index) => (
              <motion.div
                key={skill.area}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
              >
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  {skill.area}
                </h3>
                <div className="flex items-center mb-3">
                  <span className="text-sm text-gray-600 dark:text-gray-400 mr-2">Level:</span>
                  <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs rounded-full">
                    {skill.progress}
                  </span>
                </div>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  {skill.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}