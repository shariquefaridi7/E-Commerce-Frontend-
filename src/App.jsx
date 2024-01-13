import { useEffect, useState } from "react";
import {BrowserRouter,Route,Routes} from "react-router-dom";
import Header from "./components/Layout/Header/Header";
import MenuList from "./components/Layout/Menu/MenuList";
import About from "./components/Layout/About/About";
import Contact from "./components/Layout/Contact/Contact";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Product from "./components/Layout/Product/Product";

function App() {


const [updateCount,setUpdateCount]=useState(false);
const [istoken,setIstoken]=useState(false);
const [cart, setCart] = useState([]);
   
   const handle=()=>{
    setUpdateCount((prev=>!prev)); 
   }


 
  return (
    <>
    
    <BrowserRouter>
    <ToastContainer/>
    <Header updateCount={updateCount} cart={cart}   setCart={setCart}   setIstoken={setIstoken}/>
    <Routes>
      <Route  path="/"  element={  <MenuList  handle={handle}  setCart={setCart} istoken={istoken} />}/>
      <Route  path="/about"  element={  <About/>}/>
      <Route  path="/contact"  element={  <Contact/>}/>
   <Route  path="/product/:id"  element={ istoken?( <Product setCart={setCart} handle={handle}/>):(<MenuList/>)}/>

    </Routes>
    
    </BrowserRouter>
   
   
    </>
  )
}

export default App
