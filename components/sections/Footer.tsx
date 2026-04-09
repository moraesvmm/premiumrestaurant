"use client"

import { motion } from "framer-motion"
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-charcoal-900 py-12">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center lg:text-left"
          >
            <h3 className="font-serif text-2xl font-medium text-white mb-2">Élévation</h3>
            <p className="text-charcoal-400 text-sm">Contemporary Fine Dining</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="flex gap-6"
          >
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-charcoal-800 rounded-full flex items-center justify-center text-charcoal-400 hover:bg-gold-600 hover:text-white transition-all duration-300"
            >
              <Facebook className="w-5 h-5" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-charcoal-800 rounded-full flex items-center justify-center text-charcoal-400 hover:bg-gold-600 hover:text-white transition-all duration-300"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-charcoal-800 rounded-full flex items-center justify-center text-charcoal-400 hover:bg-gold-600 hover:text-white transition-all duration-300"
            >
              <Twitter className="w-5 h-5" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-charcoal-800 rounded-full flex items-center justify-center text-charcoal-400 hover:bg-gold-600 hover:text-white transition-all duration-300"
            >
              <Linkedin className="w-5 h-5" />
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="border-t border-charcoal-800 mt-8 pt-8 text-center"
        >
          <p className="text-charcoal-400 text-sm">
            Copyright - Development by{" "}
            <a
              href="https://www.linkedin.com/in/vitor-moraes-1492a52a1/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gold-400 hover:text-gold-300 transition-colors"
            >
              Vitor Moraes
            </a>
          </p>
        </motion.div>
      </div>
    </footer>
  )
}
