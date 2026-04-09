"use client"

import { motion } from "framer-motion"
import { Phone, Mail, MapPin, Clock } from "lucide-react"

export default function CTA() {
  return (
    <section id="reservation" className="py-24 lg:py-32 bg-charcoal-900 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_50%,rgba(196,160,95,0.3),transparent_50%)]" />
        <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_50%,rgba(196,160,95,0.3),transparent_50%)]" />
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <span className="text-sm font-medium tracking-widest uppercase text-gold-400">
              Reserve Your Table
            </span>
            
            <h2 className="font-serif text-4xl lg:text-6xl font-medium text-white leading-tight">
              An Unforgettable
              <span className="block text-gold-400">Evening Awaits</span>
            </h2>
            
            <p className="text-xl text-charcoal-300 leading-relaxed max-w-2xl mx-auto">
              Secure your reservation for an exceptional dining experience. Our team looks forward to welcoming you to Élévation.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
              <a
                href="mailto:reservations@elevation-restaurant.com"
                className="group inline-flex items-center justify-center px-8 py-4 bg-gold-600 text-white font-medium rounded-full hover:bg-gold-700 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Make a Reservation
              </a>
              <a
                href="tel:+1234567890"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-charcoal-600 text-white font-medium rounded-full hover:border-gold-600 hover:text-gold-400 transition-all duration-300"
              >
                Call Us
              </a>
            </div>

            <div className="grid md:grid-cols-4 gap-8 pt-12 border-t border-charcoal-800">
              <div className="flex flex-col items-center gap-3">
                <div className="w-12 h-12 bg-gold-900 rounded-full flex items-center justify-center">
                  <Phone className="w-6 h-6 text-gold-400" />
                </div>
                <div className="text-charcoal-400 text-sm">Phone</div>
                <div className="text-white font-medium">+1 (234) 567-890</div>
              </div>
              <div className="flex flex-col items-center gap-3">
                <div className="w-12 h-12 bg-gold-900 rounded-full flex items-center justify-center">
                  <Mail className="w-6 h-6 text-gold-400" />
                </div>
                <div className="text-charcoal-400 text-sm">Email</div>
                <div className="text-white font-medium">reservations@elevation.com</div>
              </div>
              <div className="flex flex-col items-center gap-3">
                <div className="w-12 h-12 bg-gold-900 rounded-full flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-gold-400" />
                </div>
                <div className="text-charcoal-400 text-sm">Location</div>
                <div className="text-white font-medium">123 Gourmet Avenue</div>
              </div>
              <div className="flex flex-col items-center gap-3">
                <div className="w-12 h-12 bg-gold-900 rounded-full flex items-center justify-center">
                  <Clock className="w-6 h-6 text-gold-400" />
                </div>
                <div className="text-charcoal-400 text-sm">Hours</div>
                <div className="text-white font-medium">6PM - 11PM</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
