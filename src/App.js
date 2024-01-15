import './App.css';
import Navbar from './Components/Navbar';
import Csbanner from './Components/Csbanner';

import About from './Components/About';
import Footer from './Components/Footer';
import Types from './Components/Types';

function App() {
  return (
    <div className="App">
     <Navbar/>
     <Csbanner/>
     
     <About />
     <Types />
     <Footer/>
    </div>
  );
}

export default App;
