import React from 'react';
import { Github, Linkedin, Mail, ExternalLink, Menu, X } from 'lucide-react';
import { useState } from 'react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <a href="#" className="text-2xl font-bold text-indigo-600">Portfolio</a>
          
          {/* Mobile menu button */}
          <button 
            className="md:hidden p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100"
            onClick={toggleMenu}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#about" className="text-gray-600 hover:text-indigo-600 transition-colors">About</a>
            <a href="#projects" className="text-gray-600 hover:text-indigo-600 transition-colors">Projects</a>
            <a href="#skills" className="text-gray-600 hover:text-indigo-600 transition-colors">Skills</a>
            <a href="#contact" className="text-gray-600 hover:text-indigo-600 transition-colors">Contact</a>
          </nav>
        </div>
        
        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="container mx-auto px-4 py-2 flex flex-col space-y-2">
              <a href="#about" className="py-2 text-gray-600 hover:text-indigo-600 transition-colors" onClick={toggleMenu}>About</a>
              <a href="#projects" className="py-2 text-gray-600 hover:text-indigo-600 transition-colors" onClick={toggleMenu}>Projects</a>
              <a href="#skills" className="py-2 text-gray-600 hover:text-indigo-600 transition-colors" onClick={toggleMenu}>Skills</a>
              <a href="#contact" className="py-2 text-gray-600 hover:text-indigo-600 transition-colors" onClick={toggleMenu}>Contact</a>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-20">
        <div className="container mx-auto px-4 flex flex-col items-center text-center">
          <img 
            src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
            alt="Profile" 
            className="w-32 h-32 rounded-full border-4 border-white shadow-lg mb-6 object-cover"
          />
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Bilal Rizvi</h1>
          <h2 className="text-xl md:text-2xl mb-6">Full Stack Developer</h2>
          <p className="max-w-2xl text-lg mb-8">
            I build beautiful, responsive, and user-friendly web applications with modern technologies.
          </p>
          <div className="flex space-x-4">
            <a href="#contact" className="bg-white text-indigo-600 hover:bg-gray-100 px-6 py-3 rounded-md font-medium transition-colors">
              Contact Me
            </a>
            <a href="#projects" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-indigo-600 px-6 py-3 rounded-md font-medium transition-colors">
              View My Work
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">About Me</h2>
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <img 
                src="https://images.pexels.com/photos/4974915/pexels-photo-4974915.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="Working on laptop" 
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </div>
            <div className="md:w-1/2">
              <p className="text-lg mb-6">
                Hello! I'm Bilal, a passionate full-stack developer with over 5 years of experience building web applications. 
                I specialize in JavaScript, React, Node.js, and modern web technologies.
              </p>
              <p className="text-lg mb-6">
                My journey in web development started when I built my first website for a local business. 
                Since then, I've worked with startups and established companies to create efficient, 
                scalable, and user-friendly applications.
              </p>
              <p className="text-lg mb-6">
                When I'm not coding, you can find me hiking, reading tech blogs, or experimenting with new technologies.
              </p>
              <div className="flex space-x-4">
                <a 
                  href="#" 
                  className="bg-gray-200 hover:bg-gray-300 p-3 rounded-full transition-colors"
                  aria-label="GitHub"
                >
                  <Github size={20} />
                </a>
                <a 
                  href="#" 
                  className="bg-gray-200 hover:bg-gray-300 p-3 rounded-full transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={20} />
                </a>
                <a 
                  href="#" 
                  className="bg-gray-200 hover:bg-gray-300 p-3 rounded-full transition-colors"
                  aria-label="Email"
                >
                  <Mail size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">My Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Project 1 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105">
              <img 
                src="https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="Project 1" 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">E-commerce Platform</h3>
                <p className="text-gray-600 mb-4">
                  A full-featured online store with product catalog, shopping cart, and payment integration.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-indigo-100 text-indigo-800 text-xs px-3 py-1 rounded-full">React</span>
                  <span className="bg-indigo-100 text-indigo-800 text-xs px-3 py-1 rounded-full">Node.js</span>
                  <span className="bg-indigo-100 text-indigo-800 text-xs px-3 py-1 rounded-full">MongoDB</span>
                </div>
                <div className="flex space-x-3">
                  <a href="#" className="text-indigo-600 hover:text-indigo-800 flex items-center">
                    <Github size={18} className="mr-1" /> Code
                  </a>
                  <a href="#" className="text-indigo-600 hover:text-indigo-800 flex items-center">
                    <ExternalLink size={18} className="mr-1" /> Live Demo
                  </a>
                </div>
              </div>
            </div>

            {/* Project 2 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105">
              <img 
                src="https://images.pexels.com/photos/7014337/pexels-photo-7014337.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="Project 2" 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Task Management App</h3>
                <p className="text-gray-600 mb-4">
                  A productivity app for managing tasks, projects, and team collaboration.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-indigo-100 text-indigo-800 text-xs px-3 py-1 rounded-full">React</span>
                  <span className="bg-indigo-100 text-indigo-800 text-xs px-3 py-1 rounded-full">Firebase</span>
                  <span className="bg-indigo-100 text-indigo-800 text-xs px-3 py-1 rounded-full">Tailwind CSS</span>
                </div>
                <div className="flex space-x-3">
                  <a href="#" className="text-indigo-600 hover:text-indigo-800 flex items-center">
                    <Github size={18} className="mr-1" /> Code
                  </a>
                  <a href="#" className="text-indigo-600 hover:text-indigo-800 flex items-center">
                    <ExternalLink size={18} className="mr-1" /> Live Demo
                  </a>
                </div>
              </div>
            </div>

            {/* Project 3 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105">
              <img 
                src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="Project 3" 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Social Media Dashboard</h3>
                <p className="text-gray-600 mb-4">
                  A dashboard for managing and analyzing social media accounts and performance.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-indigo-100 text-indigo-800 text-xs px-3 py-1 rounded-full">Vue.js</span>
                  <span className="bg-indigo-100 text-indigo-800 text-xs px-3 py-1 rounded-full">Express</span>
                  <span className="bg-indigo-100 text-indigo-800 text-xs px-3 py-1 rounded-full">Chart.js</span>
                </div>
                <div className="flex space-x-3">
                  <a href="#" className="text-indigo-600 hover:text-indigo-800 flex items-center">
                    <Github size={18} className="mr-1" /> Code
                  </a>
                  <a href="#" className="text-indigo-600 hover:text-indigo-800 flex items-center">
                    <ExternalLink size={18} className="mr-1" /> Live Demo
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="text-center mt-12">
            <a href="#" className="text-indigo-600 hover:text-indigo-800 font-medium flex items-center justify-center">
              View All Projects <ExternalLink size={18} className="ml-1" />
            </a>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">My Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Frontend */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4 text-indigo-600">Frontend</h3>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div className="bg-indigo-600 h-2.5 rounded-full w-[95%]"></div>
                  </div>
                  <span className="ml-4 min-w-[80px]">React</span>
                </li>
                <li className="flex items-center">
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div className="bg-indigo-600 h-2.5 rounded-full w-[90%]"></div>
                  </div>
                  <span className="ml-4 min-w-[80px]">JavaScript</span>
                </li>
                <li className="flex items-center">
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div className="bg-indigo-600 h-2.5 rounded-full w-[85%]"></div>
                  </div>
                  <span className="ml-4 min-w-[80px]">TypeScript</span>
                </li>
                <li className="flex items-center">
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div className="bg-indigo-600 h-2.5 rounded-full w-[90%]"></div>
                  </div>
                  <span className="ml-4 min-w-[80px]">HTML/CSS</span>
                </li>
                <li className="flex items-center">
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div className="bg-indigo-600 h-2.5 rounded-full w-[80%]"></div>
                  </div>
                  <span className="ml-4 min-w-[80px]">Tailwind</span>
                </li>
              </ul>
            </div>

            {/* Backend */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4 text-indigo-600">Backend</h3>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div className="bg-indigo-600 h-2.5 rounded-full w-[90%]"></div>
                  </div>
                  <span className="ml-4 min-w-[80px]">Node.js</span>
                </li>
                <li className="flex items-center">
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div className="bg-indigo-600 h-2.5 rounded-full w-[85%]"></div>
                  </div>
                  <span className="ml-4 min-w-[80px]">Express</span>
                </li>
                <li className="flex items-center">
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div className="bg-indigo-600 h-2.5 rounded-full w-[80%]"></div>
                  </div>
                  <span className="ml-4 min-w-[80px]">MongoDB</span>
                </li>
                <li className="flex items-center">
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div className="bg-indigo-600 h-2.5 rounded-full w-[75%]"></div>
                  </div>
                  <span className="ml-4 min-w-[80px]">PostgreSQL</span>
                </li>
                <li className="flex items-center">
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div className="bg-indigo-600 h-2.5 rounded-full w-[70%]"></div>
                  </div>
                  <span className="ml-4 min-w-[80px]">GraphQL</span>
                </li>
              </ul>
            </div>

            {/* Tools & Others */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4 text-indigo-600">Tools & Others</h3>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div className="bg-indigo-600 h-2.5 rounded-full w-[90%]"></div>
                  </div>
                  <span className="ml-4 min-w-[80px]">Git</span>
                </li>
                <li className="flex items-center">
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div className="bg-indigo-600 h-2.5 rounded-full w-[85%]"></div>
                  </div>
                  <span className="ml-4 min-w-[80px]">Docker</span>
                </li>
                <li className="flex items-center">
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div className="bg-indigo-600 h-2.5 rounded-full w-[80%]"></div>
                  </div>
                  <span className="ml-4 min-w-[80px]">AWS</span>
                </li>
                <li className="flex items-center">
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div className="bg-indigo-600 h-2.5 rounded-full w-[75%]"></div>
                  </div>
                  <span className="ml-4 min-w-[80px]">CI/CD</span>
                </li>
                <li className="flex items-center">
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div className="bg-indigo-600 h-2.5 rounded-full w-[85%]"></div>
                  </div>
                  <span className="ml-4 min-w-[80px]">Testing</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Get In Touch</h2>
          <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md p-8">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-gray-700 mb-2">Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-gray-700 mb-2">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    placeholder="Your email"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="block text-gray-700 mb-2">Subject</label>
                <input 
                  type="text" 
                  id="subject" 
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  placeholder="Subject"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-gray-700 mb-2">Message</label>
                <textarea 
                  id="message" 
                  rows={5} 
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  placeholder="Your message"
                ></textarea>
              </div>
              <button 
                type="submit" 
                className="bg-indigo-600 text-white px-6 py-3 rounded-md font-medium hover:bg-indigo-700 transition-colors w-full"
              >
                Send Message
              </button>
            </form>
            <div className="mt-8 pt-8 border-t border-gray-200">
              <div className="flex flex-col md:flex-row md:justify-between items-center">
                <div className="flex flex-col mb-4 md:mb-0">
                  <h3 className="text-lg font-semibold mb-2">Contact Information</h3>
                  <p className="text-gray-600 flex items-center mb-1">
                    <Mail size={18} className="mr-2" /> bilalrizvi@example.com
                  </p>
                  <p className="text-gray-600">San Francisco, CA</p>
                </div>
                <div className="flex space-x-4">
                  <a 
                    href="#" 
                    className="bg-gray-200 hover:bg-gray-300 p-3 rounded-full transition-colors"
                    aria-label="GitHub"
                  >
                    <Github size={20} />
                  </a>
                  <a 
                    href="#" 
                    className="bg-gray-200 hover:bg-gray-300 p-3 rounded-full transition-colors"
                    aria-label="LinkedIn"
                  >
                    <Linkedin size={20} />
                  </a>
                  <a 
                    href="#" 
                    className="bg-gray-200 hover:bg-gray-300 p-3 rounded-full transition-colors"
                    aria-label="Email"
                  >
                    <Mail size={20} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <a href="#" className="text-2xl font-bold text-white">Portfolio</a>
              <p className="text-gray-400 mt-2">© 2025 Bilal Rizvi. All rights reserved.</p>
            </div>
            <div className="flex space-x-6">
              <a href="#about" className="text-gray-400 hover:text-white transition-colors">About</a>
              <a href="#projects" className="text-gray-400 hover:text-white transition-colors">Projects</a>
              <a href="#skills" className="text-gray-400 hover:text-white transition-colors">Skills</a>
              <a href="#contact" className="text-gray-400 hover:text-white transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;