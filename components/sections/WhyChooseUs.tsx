"use client"

import { motion } from "framer-motion"
import { Sparkles, Clock, Users, Wine, Award, MapPin } from "lucide-react"

export default function WhyChooseUs() {
  const reasons = [
    {
      icon: Sparkles,
      title: "Seasonal Excellence",
      description: "Ingredients sourced at their peak from trusted local and international suppliers"
    },
    {
      icon: Award,
      title: "Chef-Driven Concept",
      description: "Culinary vision shaped by experience in world-renowned Michelin kitchens"
    },
    {
      icon: Wine,
      title: "Curated Wine Selection",
      description: "Over 50 carefully chosen wines from prestigious vineyards around the globe"
    },
    {
      icon: Clock,
      title: "Intimate Timing",
      description: "Limited seating ensures personalized attention and unhurried dining experience"
    },
    {
      icon: Users,
      title: "Expert Service",
      description: "Trained sommeliers and servers dedicated to enhancing your culinary journey"
    },
    {
      icon: MapPin,
      title: "Prime Location",
      description: "Elegant setting in the heart of the city's culinary district"
    }
  ]

  return (
    <section className="py-24 lg:py-32 bg-white">
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-sm font-medium tracking-widest uppercase text-gold-600">
            Why Élévation
          </span>
          <h2 className="font-serif text-4xl lg:text-5xl font-medium text-charcoal-900 mt-4 mb-6">
            The Élévation Difference
          </h2>
          <p className="text-lg text-charcoal-600 leading-relaxed">
            Every aspect of your experience has been carefully considered to ensure an unforgettable evening of culinary excellence.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="group p-8 rounded-3xl bg-gradient-to-br from-gold-50 to-white border border-gold-100 hover:border-gold-300 hover:shadow-xl transition-all duration-500"
            >
              <div className="w-16 h-16 bg-gold-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-gold-600 transition-colors duration-300">
                <reason.icon className="w-8 h-8 text-gold-700 group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="font-serif text-2xl font-semibold text-charcoal-900 mb-4">
                {reason.title}
              </h3>
              <p className="text-charcoal-600 leading-relaxed">
                {reason.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
