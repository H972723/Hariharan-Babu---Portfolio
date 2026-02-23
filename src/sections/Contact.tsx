import { motion } from 'framer-motion';
import { useState } from 'react';
import { Mail, MapPin, Send, CheckCircle } from 'lucide-react';
import { personalInfo } from '../data/portfolio';
import { useTheme } from '../context/ThemeContext';

export default function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { theme } = useTheme();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    
    fetch(form.action, {
      method: 'POST',
      body: formData,
    }).then(() => {
      setIsSubmitted(true);
      form.reset();
      setTimeout(() => setIsSubmitted(false), 5000);
    }).catch((error) => {
      console.error('Error submitting form:', error);
    });
  };

  return (
    <section id="contact" className={`py-20 px-4 sm:px-8 lg:px-12 transition-colors duration-300 ${theme === 'dark' ? 'bg-gray-900' : 'bg-[#f5f5f7]'}`}>
      <div className="max-w-5xl mx-auto">
        {/* Section Label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <h2 className={`text-3xl font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>Contact me</h2>
          <p className={theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}>
            If you have any questions or concerns, please don't hesitate to contact me.
            I am open to any work opportunities that align with my skills and interests.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <form 
              action="https://formsubmit.co/ajax/hariharanbabu.ms@gmail.com" 
              method="POST" 
              onSubmit={handleSubmit}
              className="space-y-6"
            >
              <input type="hidden" name="_subject" value="New Portfolio Contact Message!" />
              <input type="hidden" name="_captcha" value="false" />
              <div>
                <label className={`block text-sm font-medium mb-2 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                  Name: <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  className={`w-full px-4 py-3 rounded-lg border outline-none transition-all focus:border-[#6366f1] focus:ring-2 focus:ring-[#6366f1]/20 ${theme === 'dark' ? 'bg-gray-800 border-gray-700 text-white placeholder-gray-500' : 'bg-white border-gray-300 text-gray-900'}`}
                  placeholder="Your name"
                />
              </div>

              <div>
                <label className={`block text-sm font-medium mb-2 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                  Email: <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  className={`w-full px-4 py-3 rounded-lg border outline-none transition-all focus:border-[#6366f1] focus:ring-2 focus:ring-[#6366f1]/20 ${theme === 'dark' ? 'bg-gray-800 border-gray-700 text-white placeholder-gray-500' : 'bg-white border-gray-300 text-gray-900'}`}
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label className={`block text-sm font-medium mb-2 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                  Message: <span className="text-red-500">*</span>
                </label>
                <textarea
                  name="message"
                  required
                  rows={5}
                  className={`w-full px-4 py-3 rounded-lg border outline-none transition-all resize-none focus:border-[#6366f1] focus:ring-2 focus:ring-[#6366f1]/20 ${theme === 'dark' ? 'bg-gray-800 border-gray-700 text-white placeholder-gray-500' : 'bg-white border-gray-300 text-gray-900'}`}
                  placeholder="Your message..."
                />
              </div>

              {isSubmitted && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex items-center gap-2 p-3 rounded-lg ${theme === 'dark' ? 'text-green-400 bg-green-900/30' : 'text-green-600 bg-green-50'}`}
                >
                  <CheckCircle className="w-5 h-5" />
                  <span>Message sent successfully!</span>
                </motion.div>
              )}
              
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                disabled={isSubmitted}
                className="w-full flex items-center justify-center gap-2 px-8 py-4 bg-[#6366f1] text-white font-semibold rounded-lg hover:bg-[#4f46e5] transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
              >
                <Send className="w-5 h-5" />
                {isSubmitted ? 'Sent!' : 'Send Message'}
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="space-y-6"
          >
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-lg bg-[#6366f1]/10 text-[#6366f1]">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <div className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>Email</div>
                <a href={`mailto:${personalInfo.email}`} className={`font-medium hover:text-[#6366f1] transition-colors ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                  {personalInfo.email}
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="p-3 rounded-lg bg-[#6366f1]/10 text-[#6366f1]">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <div className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>Location</div>
                <span className={`font-medium ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>{personalInfo.location} (Open to relocation)</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
