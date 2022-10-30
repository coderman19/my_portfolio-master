
import { Header } from './components/Header/Header';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Homepage } from './components/Pages/Homepage/Homepage';
import { Blogpage } from './components/Pages/Blogpage/Blogpage'; 
import { Aboutpage } from './components/Pages/Aboutpage/Aboutpage';
import { Contacts } from './components/Pages/Contacts/Contacts';


function App(props) {

  return (
    <div className="app">   
     <>
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />}/>
        <Route path="/about" element={<Aboutpage />}/>
        <Route path="/contact" element={<Contacts />}/>
        <Route path="/blog" element={<Blogpage />}/>
      </Routes>  
    </>
    </div>  
  );
}

export default App;
