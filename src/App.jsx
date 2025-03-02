import { useRef, useEffect, useState } from 'react';
import StarsCanvas from "./components/background/star";
import Hero from "./components/hero/hero";
import Services from "./components/services/services";
import EncryptionVid from './components/encryptionVid/encryptionVid';
import ClientsSpotlight from './components/clientSpotlights/clientsSpotlight';
import Footer from './components/footer/footer';
import Contact from './components/contact/contact';
import About from './components/about/about';
import NavBar from './components/navbar/navbar';
import ElfsightWidget from './components/Whatsapp/ElfsightWidget';
import { BrowserRouter as Router, Routes, Route, useNavigate, useLocation } from "react-router-dom";
import Loader from './loader';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time or wait for resources to load
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // Adjust the time as per your requirements

    return () => clearTimeout(timer); // Clean up the timer
  }, []);

  const MainPage = () => {
    const location = useLocation();
    const homeRef = useRef(null);
    const servicesRef = useRef(null);
    const clientsRef = useRef(null);
    const contactRef = useRef(null);
    const navigate = useNavigate();

    const scrollToSection = (ref) => {
      if (ref.current) {
        ref.current.scrollIntoView({ behavior: 'smooth' });
      }
    };

    useEffect(() => {
      if (location.state?.section) {
        switch (location.state.section) {
          case 'home':
            scrollToSection(homeRef);
            break;
          case 'services':
            scrollToSection(servicesRef);
            break;
          case 'clients':
            scrollToSection(clientsRef);
            break;
          case 'contact':
            scrollToSection(contactRef);
            break;
          default:
            break;
        }
      }
    }, [location.state]);

    return (
      <>
        <NavBar
          onHomeClick={() => scrollToSection(homeRef)}
          onServicesClick={() => scrollToSection(servicesRef)}
          onClientsClick={() => scrollToSection(clientsRef)}
          onAboutClick={() => navigate('/about')}
          onContactClick={() => scrollToSection(contactRef)}
        />

        <div>
          <StarsCanvas />

          <section ref={homeRef}>
            <Hero />
          </section>

          <section ref={servicesRef} className='tw-relative tw-z-[1010]'>
            <Services />
          </section>

          <div className='tw-relative'>
            <section>
              <EncryptionVid />
            </section>

            <section ref={clientsRef} className='tw-relative tw-z-[1010] tw-top-[6px] md:tw-top-[-36px] lg:tw-top-[-60px]'>
              <ClientsSpotlight />
            </section>
          </div>

          <div className='tw-relative tw-z-[20]'>
            <section ref={contactRef}>
              <Contact />
            </section>
            <Footer />
          </div>
        </div>
      </>
    );
  };

  //About Page
  const AboutPage = () => {
    const navigate = useNavigate();

    return (
      <>
        <NavBar
          onHomeClick={() => navigate('/', { state: { section: 'home' } })}
          onServicesClick={() => navigate('/', { state: { section: 'services' } })}
          onClientsClick={() => navigate('/', { state: { section: 'clients' } })}
          onContactClick={() => navigate('/', { state: { section: 'contact' } })}
        />
        <StarsCanvas />
        <About />
      </>
    );
  };

  return (
    <>
      {isLoading ? (
        <Loader intervalTime={20} />
      ) : (
        <>
          <ElfsightWidget />

          <Router>
            <Routes>
              <Route path="/" element={<MainPage />} />
              <Route path="/about" element={<AboutPage />} />
            </Routes>
          </Router>
        </>
      )}
    </>
  );
}

export default App;