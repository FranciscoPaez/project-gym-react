import './App.css';
import Card from './components/Card/Card';
import Footer from './components/Footer/Footer';
import Main from './components/Main/Main';
import NavBar from './components/NavBar/NavBar';
import Programs from './components/Programs/Programs';
import Testimonials from './components/Testimonials/Testimonials';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Main />
      <Programs />
      <Card />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default App;
