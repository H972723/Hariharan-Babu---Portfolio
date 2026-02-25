import { motion } from 'framer-motion';
import { education } from '../data/portfolio';
import { GraduationCap, Star } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const universityLogos: Record<string, string> = {
  'University of North Texas': '/unt-logo.jpg',
  'Anna University Chennai': '/anna-university-logo.png',
};

export default function Education() {
  const { theme } = useTheme();

  return (
    <section id="education" className={`py-20 px-4 sm:px-8 lg:px-12 transition-colors duration-300 ${theme === 'dark' ? 'bg-gray-800' : 'bg-[#f5f5f7]'}`}>
      <div className="max-w-6xl mx-auto">
        {/* Section Label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 flex justify-center"
        >
          <div className="flex items-center gap-4">
            <div className={`w-24 h-px ${theme === 'dark' ? 'bg-gray-600' : 'bg-gray-400'}`}></div>
            <span className={`font-semibold tracking-wider text-sm px-6 py-2 rounded ${theme === 'dark' ? 'bg-gray-700 text-white' : 'bg-gray-800 text-white'}`}>Education</span>
            <div className={`w-24 h-px ${theme === 'dark' ? 'bg-gray-600' : 'bg-gray-400'}`}></div>
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Left Side - Illustration */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="hidden lg:flex justify-center"
          >
            <div className="relative">
              {/* Education Illustration */}
              <svg width="300" height="300" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Background Circle */}
                <circle cx="200" cy="200" r="180" fill="#E8F4FD" />
                
                {/* Books Stack */}
                <rect x="120" y="280" width="160" height="30" rx="5" fill="#FF6B6B" />
                <rect x="130" y="250" width="140" height="30" rx="5" fill="#4ECDC4" />
                <rect x="110" y="220" width="180" height="30" rx="5" fill="#45B7D1" />
                
                {/* Person Sitting */}
                <circle cx="200" cy="160" r="40" fill="#FFD93D" />
                <rect x="170" y="200" width="60" height="70" rx="10" fill="#FF6B6B" />
                <rect x="160" y="260" width="25" height="50" rx="5" fill="#333" />
                <rect x="215" y="260" width="25" height="50" rx="5" fill="#333" />
                
                {/* Arms */}
                <rect x="140" y="210" width="30" height="10" rx="5" fill="#FFD93D" />
                <rect x="230" y="210" width="30" height="10" rx="5" fill="#FFD93D" />
                
                {/* Graduation Cap */}
                <polygon points="160,120 200,100 240,120 200,90" fill="#333" />
                <rect x="195" y="120" width="10" height="25" fill="#333" />
                <circle cx="200" cy="115" r="3" fill="#FFD700" />
                
                {/* Floating Elements */}
                <circle cx="80" cy="100" r="15" fill="#FFB6C1" opacity="0.6" />
                <circle cx="320" cy="80" r="20" fill="#98D8C8" opacity="0.6" />
                <circle cx="340" cy="200" r="12" fill="#F7DC6F" opacity="0.6" />
                <circle cx="60" cy="250" r="18" fill="#BB8FCE" opacity="0.6" />
                
                {/* Stars */}
                <text x="90" y="150" fontSize="20" fill="#F7DC6F">✨</text>
                <text x="300" y="140" fontSize="20" fill="#F7DC6F">⭐</text>
                <text x="280" y="280" fontSize="20" fill="#F7DC6F">✨</text>
              </svg>
            </div>
          </motion.div>

          {/* Right Side - Education Cards */}
          <div className="space-y-6">
            {education.map((edu, index) => (
              <motion.div
                key={edu.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                {/* Card */}
                <div 
                  className="rounded-2xl overflow-hidden shadow-xl p-6"
                  style={{ 
                    backgroundColor: '#2d2d2d',
                    minHeight: '160px'
                  }}
                >
                  <div className="flex items-center justify-between">
                    {/* Left Content */}
                    <div className="flex-1">
                      {/* Degree Type */}
                      <div className="flex items-center gap-2 mb-2">
                        <GraduationCap className="w-5 h-5 text-[#0d9488]" />
                        <span className="text-[#0d9488] font-semibold text-sm tracking-wide">
                          {edu.degree.includes("Master") ? "MASTER'S DEGREE" : "BACHELOR'S DEGREE"}
                        </span>
                      </div>
                      
                      {/* Institution */}
                      <h3 className="text-white font-medium text-lg mb-1">{edu.institution}</h3>
                      
                      {/* Field */}
                      <p className="text-gray-400 text-sm mb-3">{edu.field}</p>
                      
                      {/* CGPA */}
                      {edu.cgpa && (
                        <motion.div 
                          className="flex items-center gap-1"
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.3 + index * 0.1 }}
                        >
                          <div className="flex items-center gap-1 px-2 py-1 rounded-full bg-yellow-500/20 border border-yellow-500/30">
                            <Star className="w-3 h-3 text-yellow-400 fill-yellow-400" />
                            <span className="text-yellow-400 text-xs font-semibold">CGPA: {edu.cgpa}</span>
                          </div>
                        </motion.div>
                      )}
                    </div>

                    {/* Right Side - Year and Logo */}
                    <div className="flex flex-col items-end gap-3 ml-6">
                      {/* Year */}
                      <div className="text-white text-sm">
                        {edu.duration.replace('August ', '').replace('May ', '').replace(' - ', ' - ')}
                      </div>
                      
                      {/* University Logo */}
                      {universityLogos[edu.institution] ? (
                        <motion.img
                          src={universityLogos[edu.institution]}
                          alt={`${edu.institution} logo`}
                          className="w-16 h-16 rounded-lg object-contain bg-white p-1"
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.3 + index * 0.1 }}
                          whileHover={{ scale: 1.05 }}
                        />
                      ) : (
                        <div 
                          className="w-16 h-16 rounded-lg flex items-center justify-center text-2xl font-bold"
                          style={{ 
                            backgroundColor: index === 0 ? '#1e3a5f' : '#fff',
                            color: index === 0 ? '#fff' : '#333'
                          }}
                        >
                          {edu.institution.charAt(0)}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
