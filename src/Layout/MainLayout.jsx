import Navbar from "../components/Navbar";
import Home from "../components/Home";
import HowWorks from "../components/HowWorks";
import Features from "../components/Features";
import Supported from "../components/Supported";
import Mock_Test from "../components/Mock_Test";
import FaqList from "../components/FaqList";
import Pricing from "../components/Pricing";
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import Reveal from '../components/motion/Reveal'

const MainLayout = ({ toggleDarkMode, darkMode }) => {
  return (
    <div className="max-w-7xl min-h-screen px-3 mx-auto">
      <section className="sticky top-0 z-50 dark:bg-gray-900 bg-gray-100">
        <Navbar toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
      </section>
      <section id="home">
        <Home />
      </section>
      <Reveal as="section" id="howWorks">
        <HowWorks />
      </Reveal>
      <Reveal>
        <Supported />
      </Reveal>
      <Reveal>
        <Features />
      </Reveal>
      <Reveal as="section" id="mock_test">
        <Mock_Test />
      </Reveal>
      <Reveal as="section" id="pricing">
        <Pricing />
      </Reveal>
      <Reveal as="section" id="faqs">
        <FaqList />
      </Reveal>
      <Reveal as="section" id="contact">
        <Contact />
      </Reveal>
      <Footer />
    </div>
  );
};

export default MainLayout;
