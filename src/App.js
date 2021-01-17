import { GlobalStyle } from './globalSyles';
import { BrowserRouter } from 'react-router-dom'
import Hero from './components/Hero';
import Services from './components/Services'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle/>
      <Hero/>
      <About/>
      <Services heading='SERVICES'/>
      <Contact/>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
