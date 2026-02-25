import './App.scss';
import Hero from './components/Hero';
import Header from './components/Header';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';

// import Reseller from './components/Reseller';

// import { Element } from 'react-scroll';
import { ParallaxProvider } from 'react-scroll-parallax';
import './i18n';

function App() {
  return (
    <ParallaxProvider>
    <>
      <Header />
      <Hero />
      <About />
      <Services />
      <Contact />
      <Footer />
    </>
    </ParallaxProvider>
  );
}

export default App;
