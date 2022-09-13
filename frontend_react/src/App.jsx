import logo from './logo.svg';
import './App.css';
import {About, Footer, Header, Skills, Work, Testimonial} from './container'
import { NavBar } from './components';
import './App.scss'
function App() {
  return (
   <div className="app">
    <NavBar />
    <Header/>
    <About />
    <Work />
    <Skills />
    <Testimonial />
    <Footer />
   </div>
  );
}

export default App;
