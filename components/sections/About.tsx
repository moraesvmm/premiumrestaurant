"use client"

import { motion } from "framer-motion"
import { Award, Leaf, Globe, Heart } from "lucide-react"

export default function About() {
  const values = [
    {
      icon: Leaf,
      title: "Seasonal Ingredients",
      description: "Sourced from local farms and premium international suppliers"
    },
    {
      icon: Globe,
      title: "Global Inspiration",
      description: "Techniques and flavors from around the world, refined locally"
    },
    {
      icon: Award,
      title: "Michelin Recognized",
      description: "Two-star rating for exceptional culinary excellence"
    },
    {
      icon: Heart,
      title: "Passion Driven",
      description: "Every dish crafted with dedication and attention to detail"
    }
  ]

  return (
    <section className="py-24 lg:py-32 bg-white">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="space-y-4"
              >
                <img
                  src="https://images.unsplash.com/photo-1559339352-11d035aa65de?w=400&h=500&fit=crop"
                  alt="Restaurant interior"
                  className="rounded-2xl shadow-lg w-full h-64 object-cover"
                />
                <img
                  src="https://images.unsplash.com/photo-1551218808-94e220e084d2?w=400&h=300&fit=crop"
                  alt="Chef at work"
                  className="rounded-2xl shadow-lg w-full h-48 object-cover"
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="space-y-4 pt-8"
              >
                <img
                  src="https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?w=400&h=300&fit=crop"
                  alt="Fine dining experience"
                  className="rounded-2xl shadow-lg w-full h-48 object-cover"
                />
                <img
                  src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&h=500&fit=crop"
                  alt="Restaurant ambiance"
                  className="rounded-2xl shadow-lg w-full h-64 object-cover"
                />
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-sm font-medium tracking-widest uppercase text-gold-600"
            >
              Our Story
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="font-serif text-4xl lg:text-5xl font-medium text-charcoal-900 leading-tight"
            >
              A Culinary Journey Beyond Taste
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="text-lg text-charcoal-600 leading-relaxed"
            >
              Founded in 2012, Élévation emerged from a vision to create a dining experience that transcends the ordinary. Our philosophy is simple: exceptional ingredients, refined techniques, and unwavering attention to every detail.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="text-lg text-charcoal-600 leading-relaxed"
            >
              Our Executive Chef brings together influences from Michelin-starred kitchens across Europe and Asia, creating a menu that evolves with the seasons while maintaining a distinctive identity. Each plate is a canvas, each ingredient a story.
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="grid grid-cols-2 gap-6 pt-4"
            >
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.7 + index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <div className="w-10 h-10 bg-gold-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <value.icon className="w-5 h-5 text-gold-700" />
                  </div>
                  <div>
                    <div className="font-semibold text-charcoal-900">{value.title}</div>
                    <div className="text-sm text-charcoal-500">{value.description}</div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
