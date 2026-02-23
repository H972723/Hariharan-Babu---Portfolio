import { motion } from 'framer-motion';
import { testimonials } from '../data/portfolio';

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 px-4 sm:px-8 lg:px-12" style={{ backgroundColor: '#f5f5f7' }}>
      <div className="max-w-5xl mx-auto">
        {/* Section Label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <span className="text-gray-900 font-bold text-4xl">Testimonials</span>
        </motion.div>

        {/* Testimonial Cards */}
        <div className="space-y-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-xl p-6 md:p-8 shadow-lg"
            >
              <div className="flex flex-col md:flex-row gap-6">
                {/* Avatar */}
                <div className="flex-shrink-0">
                  <div 
                    className="w-16 h-16 rounded-full flex items-center justify-center text-xl font-bold text-white"
                    style={{ backgroundColor: '#6366f1' }}
                  >
                    {testimonial.name.split(' ').map(n => n[0]).join('')}
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                    "{testimonial.content}"
                  </p>
                  
                  <div>
                    <h4 className="text-gray-900 font-bold">{testimonial.name}</h4>
                    <p className="text-gray-500 text-sm">{testimonial.role}</p>
                    <p className="text-gray-400 text-xs mt-1">{testimonial.date}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
