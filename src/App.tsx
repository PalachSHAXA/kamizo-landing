import { LanguageProvider } from './context/LanguageContext';
import Header from './components/Header';
import Hero from './components/Hero';
import SocialProof from './components/SocialProof';
import ProblemSolution from './components/ProblemSolution';
import ForWho from './components/ForWho';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import Results from './components/Results';
import Comparison from './components/Comparison';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';
import ContactCTA from './components/ContactCTA';
import Footer from './components/Footer';

function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-white">
        <Header />
        <main>
          <Hero />
          <SocialProof />
          <ProblemSolution />
          <ForWho />
          <Features />
          <HowItWorks />
          <Results />
          <Comparison />
          <Pricing />
          <FAQ />
          <ContactCTA />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
}

export default App;
