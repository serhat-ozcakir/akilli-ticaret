import './App.css';
import Navbar from './components/Navbar';
import CommerceContextProvider from './context/Commerce';
import Home from './components/Home';
import Footer from './components/Footer';

function App() {
  return (
    <CommerceContextProvider className="App">
     <Navbar/>
     <Home/>
     <Footer/>
    
    </CommerceContextProvider>
  );
}

export default App;
