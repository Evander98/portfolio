import { GlobalStyle } from './globalSyles';
import { BrowserRouter } from 'react-router-dom'
import Hero from './components/Hero';
import Services from './components/Services'
import About from './components/About'
import Footer from './components/Footer'

function App() {

  const scrollTo = (times) => {
    window.scrollTo({
      top : window.innerHeight * times,
      behavior: "smooth"
    })
  }

  return (
    <BrowserRouter>
      <GlobalStyle/>
      <Hero  moveTo={() => scrollTo(1)}/>
      <About/>
      <Services heading='SERVICES' moveTo={() => scrollTo(2)}/>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
