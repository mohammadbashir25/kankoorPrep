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

const MainLayout = ({ toggleDarkMode, darkMode }) => {
  return (
    <div className="max-w-7xl min-h-screen px-3 mx-auto">
      <section className="sticky top-0 z-50 dark:bg-gray-900 bg-gray-100">
        <Navbar toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
      </section>
      <section id="home">
        <Home />
      </section>
      <section id="howWorks">
        <HowWorks />
      </section>
      <Supported />
      <Features />
      <section id="mock_test">
        <Mock_Test />
      </section>
      <section id="pricing">
        <Pricing />
      </section>
      <section id="faqs">
        <FaqList />
      </section>
      <section id="contact">
        <Contact />
      </section>
      <Footer />
    </div>
  );
};

export default MainLayout;
