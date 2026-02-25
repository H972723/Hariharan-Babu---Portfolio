import { useTheme } from './context/ThemeContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './sections/Hero';
import About from './sections/About';
import Experience from './sections/Experience';
import Projects from './sections/Projects';
import Volunteering from './sections/Volunteering';
import Certifications from './sections/Certifications';
import Awards from './sections/Awards';
import Skills from './sections/Skills';
import Education from './sections/Education';
import Contact from './sections/Contact';

function App() {
  const { theme } = useTheme();

  return (
    <div className={`min-h-screen overflow-x-hidden transition-colors duration-300 ${
      theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'
    }`}>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Education />
        <Volunteering />
        <Certifications />
        <Awards />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
