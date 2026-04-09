"use client"

import { motion } from "framer-motion"
import { Utensils, Wine, ChefHat, Star } from "lucide-react"

export default function Menu() {
  const menuItems = [
    {
      icon: ChefHat,
      title: "Signature Dishes",
      description: "Chef's creations that define our culinary identity",
      image: "https://images.unsplash.com/photo-1544025162-d76694265947?w=600&h=400&fit=crop"
    },
    {
      icon: Utensils,
      title: "Seasonal Tasting",
      description: "Curated menus reflecting the finest seasonal ingredients",
      image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&h=400&fit=crop"
    },
    {
      icon: Wine,
      title: "Wine Pairings",
      description: "Expertly selected wines to complement each course",
      image: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=600&h=400&fit=crop"
    }
  ]

  return (
    <section id="menu" className="py-24 lg:py-32 bg-gradient-to-b from-white to-gold-50">
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-sm font-medium tracking-widest uppercase text-gold-600">
            Culinary Experience
          </span>
          <h2 className="font-serif text-4xl lg:text-5xl font-medium text-charcoal-900 mt-4 mb-6">
            Our Menu Philosophy
          </h2>
          <p className="text-lg text-charcoal-600 leading-relaxed">
            Discover a thoughtfully curated culinary journey that celebrates seasonal ingredients, refined techniques, and artistic presentation.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {menuItems.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="w-12 h-12 bg-white/90 backdrop-blur-sm rounded-xl flex items-center justify-center mb-3">
                    <item.icon className="w-6 h-6 text-gold-700" />
                  </div>
                </div>
              </div>
              
              <div className="p-6 space-y-4">
                <h3 className="font-serif text-2xl font-semibold text-charcoal-900 group-hover:text-gold-700 transition-colors">
                  {item.title}
                </h3>
                <p className="text-charcoal-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="bg-charcoal-900 rounded-3xl p-8 lg:p-12 text-center text-white"
        >
          <div className="flex items-center justify-center gap-2 mb-6">
            {[...Array(2)].map((_, i) => (
              <Star key={i} className="w-6 h-6 fill-gold-400 text-gold-400" />
            ))}
          </div>
          <h3 className="font-serif text-3xl lg:text-4xl font-medium mb-4">
            Michelin-Starred Excellence
          </h3>
          <p className="text-charcoal-300 text-lg mb-8 max-w-2xl mx-auto">
            Our tasting menu features 8 courses, each telling a unique story through flavor, texture, and artistry.
          </p>
          <a
            href="#reservation"
            className="inline-flex items-center justify-center px-8 py-4 bg-gold-600 text-white font-medium rounded-full hover:bg-gold-700 transition-all duration-300"
          >
            Reserve Tasting Experience
          </a>
        </motion.div>
      </div>
    </section>
  )
}
