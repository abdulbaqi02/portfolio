import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-100 dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-gray-600 dark:text-gray-400">
              © {currentYear} Abdul Baqi Qureshi. All rights reserved.
            </p>
          </div>
          <div className="flex space-x-6">
            <Link
              href="https://github.com/abdulbaqi02"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              <Github size={24} />
            </Link>
            <Link
              href="https://linkedin.com/in/abdul-baqi-qureshi-56a481377"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              <Linkedin size={24} />
            </Link>
            <Link
              href="mailto:abdulbaqiq88@gmail.com"
              className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              <Mail size={24} />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;