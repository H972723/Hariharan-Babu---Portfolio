import { motion } from 'framer-motion';
import { useState } from 'react';
import { Mail, MapPin, Send, CheckCircle, Phone, Globe, ExternalLink, Sparkles, Building2 } from 'lucide-react';
import { personalInfo, organizationInfo } from '../data/portfolio';
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
    <section id="contact" className={`py-24 px-4 sm:px-8 lg:px-12 transition-colors duration-300 ${theme === 'dark' ? 'bg-gray-900' : 'bg-[#f4f6fb]'}`}>
      <div className="max-w-6xl mx-auto">
        {/* Section Label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <div className="flex items-center gap-2 mb-2">
            <span className="text-[#6366f1] text-xs font-bold tracking-wider uppercase">
              Get in Touch
            </span>
          </div>
          <h2 className={`text-3xl md:text-4xl font-extrabold mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
            Contact & Organization Details
          </h2>
          <p className={`max-w-2xl text-base ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
            Feel free to connect for Ph.D. research collaborations in HPC & Agentic AI, technical consulting, or enterprise inquiries with DOS3.AI.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-10">
          {/* Contact Form - 7 columns */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-7"
          >
            <div className={`p-8 rounded-2xl border ${theme === 'dark' ? 'bg-gray-800/90 border-gray-700' : 'bg-white border-gray-200'} shadow-lg`}>
              <h3 className={`text-xl font-bold mb-6 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                Send a Direct Message
              </h3>
              
              <form 
                action="https://formsubmit.co/ajax/hariharanbabu.ms@gmail.com" 
                method="POST" 
                onSubmit={handleSubmit}
                className="space-y-5"
              >
                <input type="hidden" name="_subject" value="New Portfolio / DOS3.AI Contact Message!" />
                <input type="hidden" name="_captcha" value="false" />
                
                <div>
                  <label className={`block text-xs font-bold uppercase tracking-wider mb-2 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                    Name: <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    className={`w-full px-4 py-3 rounded-xl border outline-none transition-all text-sm focus:border-[#6366f1] focus:ring-2 focus:ring-[#6366f1]/20 ${
                      theme === 'dark' ? 'bg-gray-900 border-gray-700 text-white placeholder-gray-500' : 'bg-gray-50 border-gray-300 text-gray-900'
                    }`}
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label className={`block text-xs font-bold uppercase tracking-wider mb-2 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                    Email: <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    className={`w-full px-4 py-3 rounded-xl border outline-none transition-all text-sm focus:border-[#6366f1] focus:ring-2 focus:ring-[#6366f1]/20 ${
                      theme === 'dark' ? 'bg-gray-900 border-gray-700 text-white placeholder-gray-500' : 'bg-gray-50 border-gray-300 text-gray-900'
                    }`}
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label className={`block text-xs font-bold uppercase tracking-wider mb-2 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                    Message: <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={4}
                    className={`w-full px-4 py-3 rounded-xl border outline-none transition-all resize-none text-sm focus:border-[#6366f1] focus:ring-2 focus:ring-[#6366f1]/20 ${
                      theme === 'dark' ? 'bg-gray-900 border-gray-700 text-white placeholder-gray-500' : 'bg-gray-50 border-gray-300 text-gray-900'
                    }`}
                    placeholder="Describe your inquiry, project, or research topic..."
                  />
                </div>

                {isSubmitted && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`flex items-center gap-2 p-3 rounded-xl ${theme === 'dark' ? 'text-emerald-400 bg-emerald-950/40 border border-emerald-800' : 'text-emerald-600 bg-emerald-50 border border-emerald-200'}`}
                  >
                    <CheckCircle className="w-5 h-5 flex-shrink-0" />
                    <span className="text-xs font-medium">Message sent successfully! We will get back to you shortly.</span>
                  </motion.div>
                )}
                
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  disabled={isSubmitted}
                  className="w-full flex items-center justify-center gap-2 px-8 py-3.5 bg-[#6366f1] text-white font-semibold rounded-xl hover:bg-[#4f46e5] shadow-lg shadow-indigo-500/25 transition-all text-sm disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  <Send className="w-4 h-4" />
                  {isSubmitted ? 'Sent!' : 'Send Message'}
                </motion.button>
              </form>
            </div>
          </motion.div>

          {/* Contact Info & DOS3.AI Organization Card - 5 columns */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="lg:col-span-5 space-y-6"
          >
            {/* Direct Contact Info */}
            <div className={`p-6 rounded-2xl border ${theme === 'dark' ? 'bg-gray-800/90 border-gray-700' : 'bg-white border-gray-200'} shadow-lg space-y-4`}>
              <h4 className={`text-base font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                Direct Contact
              </h4>

              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-[#6366f1]/15 text-[#6366f1]">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className={`text-xs ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>Email</div>
                  <a href={`mailto:${personalInfo.email}`} className={`text-sm font-semibold hover:text-[#6366f1] transition-colors ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                    {personalInfo.email}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-[#0ea5e9]/15 text-[#0ea5e9]">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className={`text-xs ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>Org Email ({organizationInfo.name})</div>
                  <a href={`mailto:${organizationInfo.email}`} className={`text-sm font-semibold hover:text-[#0ea5e9] transition-colors ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                    {organizationInfo.email}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-[#0d9488]/15 text-[#0d9488]">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className={`text-xs ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>Phone</div>
                  <a href={`tel:${personalInfo.phone}`} className={`text-sm font-semibold hover:text-[#0d9488] transition-colors ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                    {personalInfo.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-[#ea580c]/15 text-[#ea580c]">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className={`text-xs ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>Location</div>
                  <span className={`text-sm font-semibold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                    Dallas, Texas, USA
                  </span>
                </div>
              </div>
            </div>

            {/* DOS3.AI Organization Card */}
            <div className={`p-6 rounded-2xl border-2 transition-all duration-300 shadow-xl ${
              theme === 'dark'
                ? 'bg-gradient-to-br from-indigo-950/40 via-gray-900 to-gray-900 border-indigo-500/50'
                : 'bg-gradient-to-br from-indigo-50/70 via-white to-sky-50 border-indigo-300'
            }`}>
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <Building2 className="w-5 h-5 text-[#6366f1]" />
                  <span className="text-xs font-bold uppercase tracking-wider text-[#6366f1]">
                    Organization
                  </span>
                </div>
                <span className="text-[11px] px-2.5 py-0.5 rounded-full bg-indigo-500/20 text-indigo-400 font-mono font-semibold">
                  Founder
                </span>
              </div>

              <div className="flex items-center gap-3 mb-3">
                <div className="w-12 h-12 rounded-xl bg-gray-950 border border-indigo-500/40 flex items-center justify-center p-1 shadow-md">
                  <img
                    src={organizationInfo.logo}
                    alt={organizationInfo.name}
                    className="max-h-full max-w-full object-contain"
                  />
                </div>
                <div>
                  <h4 className={`text-xl font-extrabold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                    {organizationInfo.name}
                  </h4>
                  <p className="text-xs text-indigo-400 font-medium">
                    {organizationInfo.tagline}
                  </p>
                </div>
              </div>

              <p className={`text-xs leading-relaxed mb-4 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
                {organizationInfo.description}
              </p>

              <div className="space-y-2 mb-4">
                <div className="flex items-center gap-2 text-xs">
                  <Sparkles className="w-3.5 h-3.5 text-amber-400 flex-shrink-0" />
                  <span className={theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}>
                    <strong>Founder:</strong> {organizationInfo.founder} ({organizationInfo.founderTitle})
                  </span>
                </div>
                <div className="flex items-center gap-2 text-xs">
                  <Mail className="w-3.5 h-3.5 text-indigo-400 flex-shrink-0" />
                  <a href={`mailto:${organizationInfo.email}`} className="text-indigo-400 hover:underline">
                    {organizationInfo.email}
                  </a>
                </div>
              </div>

              {/* Redirection to Organization Website */}
              <a
                href={organizationInfo.website}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 px-4 rounded-xl font-bold text-xs bg-gradient-to-r from-[#6366f1] to-[#0ea5e9] text-white flex items-center justify-center gap-2 shadow-lg shadow-indigo-500/20 hover:opacity-95 transition-all"
              >
                <Globe className="w-4 h-4" />
                <span>Visit {organizationInfo.name} Official Website</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
