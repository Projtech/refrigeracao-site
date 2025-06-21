import Header from './components/Header';
import Hero from './components/Hero';
import ProblemsSlider from './components/ProblemsSlider';  // ✅ MUDANÇA AQUI
import GoogleInfo from './components/GoogleInfo';
import Contact from './components/Contact';

function App() {
  return (
    <div>
      <Header />
      <Hero />
      <ProblemsSlider />  {/* ✅ AGORA USA O SLIDER COM NAVEGAÇÃO */}
      <GoogleInfo />
      <Contact />
    </div>
  );
}

export default App;