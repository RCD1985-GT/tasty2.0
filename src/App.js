import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from "./Containers/Home/Home";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Register from './Containers/Register/Register';
import Login from './Containers/Login/Login';
import Tipo from './Containers/Tipo/Tipo';
import Perfil from './Containers/Perfil/Perfil';
import Admin from './Containers/Admin/Admin';


function App() {
  return (
    <div className="App">
     <BrowserRouter>
      <Header/>

        <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/:tipo" element={<Tipo/>}/>
        <Route path="/perfil" element={<Perfil/>} />
        <Route path="/admin" element={<Admin/>} />
        </Routes>

        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
