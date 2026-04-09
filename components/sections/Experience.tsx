"use client"

import { motion } from "framer-motion"
import { Quote, Star } from "lucide-react"

export default function Experience() {
  const testimonials = [
    {
      name: "Alexander Chen",
      location: "New York",
      content: "An extraordinary culinary journey. Each course was a revelation, and the wine pairings were absolutely impeccable.",
      rating: 5
    },
    {
      name: "Sophie Laurent",
      location: "Paris",
      content: "The attention to detail is remarkable. From the moment we entered until the final dessert, perfection.",
      rating: 5
    },
    {
      name: "James Morrison",
      location: "London",
      content: "Fine dining at its finest. The chef's creativity combined with flawless execution creates magic.",
      rating: 5
    }
  ]

  return (
    <section className="py-24 lg:py-32 bg-gradient-to-b from-gold-50 to-white">
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-sm font-medium tracking-widest uppercase text-gold-600">
            Guest Experience
          </span>
          <h2 className="font-serif text-4xl lg:text-5xl font-medium text-charcoal-900 mt-4 mb-6">
            Moments Worth Remembering
          </h2>
          <p className="text-lg text-charcoal-600 leading-relaxed">
            Our guests' experiences speak to the dedication we pour into every aspect of your visit.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-500 relative"
            >
              <Quote className="w-12 h-12 text-gold-200 absolute top-6 right-6" />
              
              <div className="flex gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-gold-500 text-gold-500" />
                ))}
              </div>
              
              <p className="text-charcoal-700 leading-relaxed mb-6 italic">
                "{testimonial.content}"
              </p>
              
              <div className="border-t border-charcoal-200 pt-6">
                <div className="font-semibold text-charcoal-900">{testimonial.name}</div>
                <div className="text-sm text-gold-700">{testimonial.location}</div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="bg-white rounded-3xl p-8 lg:p-12 shadow-xl"
        >
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="font-serif text-3xl lg:text-4xl font-medium text-charcoal-900 mb-6">
                Your Evening Awaits
              </h3>
              <p className="text-charcoal-600 leading-relaxed mb-8">
                From the warm welcome at our door to the final farewell, every moment is crafted to create an atmosphere of refined elegance and culinary discovery. Our team is dedicated to ensuring your experience exceeds expectations.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-gold-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="font-semibold text-gold-700">1</span>
                  </div>
                  <div className="font-medium text-charcoal-900">Personalized Welcome</div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-gold-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="font-semibold text-gold-700">2</span>
                  </div>
                  <div className="font-medium text-charcoal-900">Curated Tasting Journey</div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-gold-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="font-semibold text-gold-700">3</span>
                  </div>
                  <div className="font-medium text-charcoal-900">Expert Wine Pairings</div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-gold-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="font-semibold text-gold-700">4</span>
                  </div>
                  <div className="font-medium text-charcoal-900">Impeccable Service</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?w=600&h=700&fit=crop"
                alt="Restaurant experience"
                className="rounded-3xl shadow-2xl w-full"
              />
              <div className="absolute -bottom-6 -right-6 bg-gold-600 text-white p-6 rounded-2xl shadow-xl">
                <div className="text-4xl font-serif font-semibold">4.9</div>
                <div className="text-sm text-gold-200">Guest Rating</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
