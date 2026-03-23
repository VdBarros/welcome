import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { ChevronDown, Mail, Phone } from 'lucide-react'

import CodeRain from './components/CodeRain'
import Navigation from './components/Navigation'
import Section from './components/Section'
import FloatingPhone from './components/FloatingPhone'
import SocialLinks from './components/SocialLinks'
import SkillConstellation from './components/SkillConstellation'
import TerminalBio from './components/TerminalBio'
import ProjectCards from './components/ProjectCards'
import ExperienceTimeline from './components/ExperienceTimeline'

import { TECH_CATEGORIES } from './data/profile'

function App() {
  const [activeSection, setActiveSection] = useState('home')

  // Track scroll position for navigation
  useEffect(() => {
    const sections = ['home', 'skills', 'bio', 'projects', 'experience', 'contact']

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id)
        }
      })
    }, { threshold: 0.3 })

    sections.forEach((sectionId) => {
      const section = document.getElementById(sectionId)
      if (section) {
        observer.observe(section)
      }
    })

    return () => observer.disconnect()
  }, [])

  return (
    <div className="relative">
      <CodeRain />
      <Navigation activeSection={activeSection} setActiveSection={setActiveSection} />

      {/* Hero Section */}
      <section id="home" className="min-h-[calc(100vh-5rem)] flex items-center justify-center relative overflow-hidden pt-20">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-transparent to-transparent" />

        <div className="max-w-6xl mx-auto px-4 flex flex-col lg:flex-row items-center gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-1 text-center lg:text-left"
          >
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-primary font-mono mb-4"
            >
              {'> Hello, I am'}
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-5xl md:text-7xl font-bold mb-4"
            >
              <span className="gradient-text">Vinicius</span>
              <br />
              <span className="text-white">Barros</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="text-xl md:text-2xl text-gray-400 mb-6"
            >
              Mobile & Front End Developer
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="text-gray-400 max-w-lg mb-8"
            >
              Passionate about building mobile experiences that impact thousands of users.
              Specialized in Android, iOS, Flutter, and enterprise SAP solutions.
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="mt-4"
            >
              <SocialLinks />
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex-1 flex justify-center"
          >
            <FloatingPhone />
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="flex flex-col items-center gap-2 text-gray-500"
          >
            <span className="text-xs">Scroll</span>
            <ChevronDown className="w-5 h-5" />
          </motion.div>
        </motion.div>
      </section>

      {/* Skills Section */}
      <Section
        id="skills"
        title="Tech Stack"
        subtitle="Technologies I work with to bring ideas to life"
        dark
      >
        <SkillConstellation />

        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
          {TECH_CATEGORIES.map((cat, i) => (
            <motion.div
              key={cat.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="bg-dark/50 rounded-xl p-4 border border-gray-800"
            >
              <h3 className="font-bold text-primary mb-2">{cat.name}</h3>
              <ul className="text-sm text-gray-400 space-y-1">
                {cat.items.map(item => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Bio Section */}
      <Section
        id="bio"
        title="About Me"
        subtitle="Get to know me better"
      >
        <TerminalBio />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-12 max-w-2xl mx-auto text-center"
        >
          <p className="text-gray-400 text-lg leading-relaxed">
            I'm a technology enthusiast with a deep passion for creating solutions that
            positively impact people's lives. With over 6 years of experience in mobile
            development, I've led teams, architected systems, and delivered applications
            serving hundreds of thousands of users.
          </p>
          <p className="text-gray-400 text-lg leading-relaxed mt-4">
            Currently expanding my expertise into the SAP ecosystem, working with
            Mobile Services, Fiori, CAP, and Business Technology Platform to deliver
            comprehensive enterprise mobile solutions.
          </p>
        </motion.div>
      </Section>

      {/* Projects Section */}
      <Section
        id="projects"
        title="Featured Projects"
        subtitle="Some of the work I'm most proud of"
        dark
      >
        <ProjectCards />
      </Section>

      {/* Experience Section */}
      <Section
        id="experience"
        title="Experience"
        subtitle="My professional journey"
      >
        <ExperienceTimeline />
      </Section>

      {/* Contact Section */}
      <Section
        id="contact"
        title="Get In Touch"
        subtitle="Let's build something amazing together"
        dark
      >
        <div className="max-w-xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="glass rounded-2xl p-8 mb-8"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="flex items-center gap-3 justify-center md:justify-start">
                <Mail className="w-5 h-5 text-primary" />
                <span className="text-gray-300">vinibarros.sp@gmail.com</span>
              </div>
              <div className="flex items-center gap-3 justify-center md:justify-start">
                <Phone className="w-5 h-5 text-secondary" />
                <span className="text-gray-300">+55 (67) 99648-3388</span>
              </div>
            </div>
            <SocialLinks />
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-gray-500 text-sm"
          >
            Open to remote opportunities and interesting projects
          </motion.p>
        </div>
      </Section>

      {/* Footer */}
      <footer className="py-8 text-center text-gray-500 text-sm border-t border-gray-800">
        <p>
          Built with <span className="text-primary">React</span> + <span className="text-secondary">Tailwind</span> by Vinicius Barros © 2024
        </p>
        <p className="mt-2 font-mono text-xs">
          {'<code is poetry />'}
        </p>
      </footer>
    </div>
  )
}

export default App
