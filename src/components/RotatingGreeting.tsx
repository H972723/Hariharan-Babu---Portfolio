import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const greetings = [
  { text: 'வணக்கம்', lang: 'Tamil' },
  { text: 'Hello', lang: 'English' },
  { text: 'നമസ്കാരം', lang: 'Malayalam' },
  { text: 'నమస్కారం', lang: 'Telugu' },
  { text: 'ನಮಸ್ಕಾರ', lang: 'Kannada' },
  { text: 'નમસ્તે', lang: 'Gujarati' },
  { text: 'নমস্কার', lang: 'Bengali' },
  { text: 'ନମସ୍କାର', lang: 'Odia' },
  { text: 'नमस्ते', lang: 'Hindi' },
  { text: 'नमस्कार', lang: 'Marathi' },
  { text: 'ਨਮਸਤੇ', lang: 'Punjabi' },
  { text: 'Hola', lang: 'Spanish' },
  { text: 'Bonjour', lang: 'French' },
  { text: '你好', lang: 'Chinese' },
  { text: 'こんにちは', lang: 'Japanese' },
  { text: '안녕하세요', lang: 'Korean' },
  { text: 'Olá', lang: 'Portuguese' },
  { text: 'Привет', lang: 'Russian' },
];

export default function RotatingGreeting() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % greetings.length);
    }, 2000);

    return () => clearInterval(timer);
  }, []);

  return (
    <span className="inline-block relative h-12 md:h-14 overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.span
          key={currentIndex}
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -50, opacity: 0 }}
          transition={{ duration: 0.4, ease: 'easeInOut' }}
          className="inline-block text-3xl md:text-5xl font-bold bg-gradient-to-r from-[#6366f1] via-[#8b5cf6] to-[#ec4899] bg-clip-text text-transparent"
        >
          {greetings[currentIndex].text}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}
