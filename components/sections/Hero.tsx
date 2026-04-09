"use client"

import { motion } from "framer-motion"
import { ArrowRight, Calendar } from "lucide-react"

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-br from-charcoal-900 via-charcoal-800 to-gold-900 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 right-20 w-96 h-96 bg-gold-600 rounded-full blur-3xl opacity-20" />
      <div className="absolute bottom-20 left-20 w-72 h-72 bg-gold-700 rounded-full blur-3xl opacity-15" />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-8"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="inline-block"
            >
              <span className="text-sm font-medium tracking-widest uppercase text-gold-400">
                Contemporary Fine Dining
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="font-serif text-5xl lg:text-7xl font-medium leading-tight text-white"
            >
              Where Every
              <span className="block text-gold-400">Bite Tells a Story</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="text-lg lg:text-xl text-charcoal-300 leading-relaxed max-w-xl"
            >
              Experience contemporary cuisine in an intimate setting. Chef-driven dishes crafted with seasonal ingredients, curated wine pairings, and impeccable service.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <a
                href="#reservation"
                className="group inline-flex items-center justify-center px-8 py-4 bg-gold-600 text-white font-medium rounded-full hover:bg-gold-700 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Reserve a Table
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#menu"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-charcoal-600 text-white font-medium rounded-full hover:border-gold-600 hover:text-gold-400 transition-all duration-300"
              >
                Explore Menu
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="flex items-center gap-8 pt-8 border-t border-charcoal-700"
            >
              <div>
                <div className="text-3xl font-serif font-semibold text-white">2</div>
                <div className="text-sm text-charcoal-400">Michelin Stars</div>
              </div>
              <div>
                <div className="text-3xl font-serif font-semibold text-white">12</div>
                <div className="text-sm text-charcoal-400">Years Excellence</div>
              </div>
              <div>
                <div className="text-3xl font-serif font-semibold text-white">50+</div>
                <div className="text-sm text-charcoal-400">Wine Selections</div>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 1, ease: "easeOut" }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&h=1000&fit=crop"
                alt="Fine dining dish"
                className="w-full h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            </div>
            
            {/* Floating card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.8 }}
              className="absolute -bottom-8 -left-8 bg-charcoal-900/90 backdrop-blur-sm p-6 rounded-2xl shadow-xl max-w-xs border border-charcoal-700"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gold-600 rounded-full flex items-center justify-center">
                  <Calendar className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="font-semibold text-white">Open Daily</div>
                  <div className="text-sm text-charcoal-300">6PM - 11PM</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
