import Navbar from './components/navbar/Navbar'
import Contacts from './components/contacts/Contacts'
import About from './components/about/About'
import Services from './components/services/Services'
import Testimonials from './components/testimonials/Testimonials'
import Footer from './components/footer/Footer'
import './App.css'

function App() {
  return (
    <div className="App">
      <Navbar />
      <About />
      <Services />
      <Contacts />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default App;
