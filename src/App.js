import Header from './components/Header';
import Hero from './components/Hero';
import CommonProblems from './components/CommonProblems';  // NOVO
import GoogleInfo from './components/GoogleInfo';
import Contact from './components/Contact';

function App() {
  return (
    <div>
      <Header />
      <Hero />
      <CommonProblems />  {/* SUBSTITUI Services */}
      <GoogleInfo />
      <Contact />
    </div>
  );
}

export default App;