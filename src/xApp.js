import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import HeroBanner from './Components/HeroBanner';

function App() {
  return (
    <div className="container">
      <Header />
      <HeroBanner />
      
      <Footer/>
    </div>
  );
}

export default App;
