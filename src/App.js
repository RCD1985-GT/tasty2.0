import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from "./Containers/Home/Home";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Registro from './Containers/Registro/Registro';


function App() {
  return (
    <div className="App">
     <BrowserRouter>
      <Header/>

        <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/registro" element={<Registro/>}/>
      
        </Routes>

        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
