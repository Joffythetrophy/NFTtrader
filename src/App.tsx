import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import FeaturedCollections from './components/sections/FeaturedCollections';
import HowItWorks from './components/sections/HowItWorks';
import WhyChooseUs from './components/sections/WhyChooseUs';
import Testimonials from './components/sections/Testimonials';
import FAQ from './components/sections/FAQ';
import GetStarted from './components/sections/GetStarted';

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Hero />
        <FeaturedCollections />
        <HowItWorks />
        <WhyChooseUs />
        <Testimonials />
        <FAQ />
        <GetStarted />
      </main>
      <Footer />
    </div>
  );
}

export default App;
