import Header from './components/Header';
import Hero from './components/Hero';
import Examples from './components/Examples';
import About from './components/About';
import Services from './components/Services';
import Process from './components/Process';
import WhyUs from './components/WhyUs';
import FAQ from './components/FAQ';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import { LanguageProvider } from './context/LanguageContext';
import './styles/global.css';
import Technologies from './components/Technologies';

function App() {
  return (
    <LanguageProvider>
      <div className="App">
        <Header />
        <Hero />
        <Examples />
        <Services />
        <Technologies />
        <Process />
        <WhyUs />
        <FAQ />
        <About />
        <ContactForm />
        <Footer />
      </div>
    </LanguageProvider>
  );
}

export default App;
