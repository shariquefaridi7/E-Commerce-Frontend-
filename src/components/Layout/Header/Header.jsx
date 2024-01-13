import React, { useState ,useEffect} from 'react';
import {Navigate, json, useNavigate} from "react-router-dom";
import "./style.css";
import Model from '../Modal/Model';
import Slider from '../Slider/slider';
import { auth,provider } from '../../utils/config';
import {signInWithPopup} from "firebase/auth";
import axios from "axios";




const Header = ({updateCount,cart,setIstoken}) => {


  const [isLogin,setIsLogin]=useState(false);
  const [toggle,setToggle]=useState(false);
  const [email,setEmial]=useState("");
  console.log(cart)
  const navigate=useNavigate();
  const [count,setCount]=useState(0);
  const [isOpen,setIsOpen]=useState(false);
  const [res,setRes]=useState([]);


 
  useEffect(() => {
    // Function to update the cart count
    const updateCartCount = () => {
  
      let map = new Map();

      for (let val of cart) {
        const key = JSON.stringify(val);
        if (map.has(key)) {
          map.set(key, map.get(key) + 1);
        } else {
          map.set(key, 1);
        }
      }

      const result = [...map.entries()].map(([key, count]) => [JSON.parse(key), count]);
       setRes(result);
      
    
  
     
      const totalCount = cart.length;
  
     
      setCount(totalCount);
    };

    // Call the function when the component mounts
    updateCartCount();

    
  }, [updateCount]);

  useEffect(()=>{
      
    if(localStorage.getItem("auth")){
      setIsLogin(true)
    }else{
      setIsLogin(false);
    }
  },[toggle]);


  const handleCartClick=()=>{
     setIsOpen((prev)=>!prev);
  }

  
const handleClick=(check)=>{

  if(check=="login"){
    signInWithPopup(auth,provider).then((data)=>{
      setEmial(data.user.email);
      localStorage.setItem("auth",JSON.stringify(data.user.email));
      setToggle((prev)=>!prev);
      setIstoken(true);
       
    })
  }else{
      
    setToggle((prev)=>!prev);
       localStorage.clear();
       setIstoken(false);
        setRes([]);
        setCount(0);
          
           

       

     
  }
 
}




  return (
    <>
      <div className='header'>
        <div style={{display:"flex" ,gap:"4rem" ,justifyContent:"center",alignContent:"center"}}>
        <h2 className='restaurant-name' onClick={()=>navigate("/")}> TrendPulse</h2>
        <div style={{display:"flex",justifyContent:"center",alignContent:"center",gap:"1.5rem" ,cursor:"pointer"}}>
          <h2 onClick={()=>navigate("/about")}>About</h2>
          <h2 onClick={()=>navigate("/contact")}>Contact</h2>
    
       
        </div>
        </div>
         <div style={{display:"flex" ,alignContent:"center" ,justifyContent:"center",gap:"2rem"}}>
         <h2 style={{marginTop:"0.7rem",cursor:"pointer"}}
         
         onClick={()=>!isLogin?handleClick("login"):handleClick("logout")}>
          {!isLogin?"Login":"Logout"}
          </h2>

         <div className='cart' onClick={handleCartClick}>
          <div className='add-to-cart-icon'>Cart</div>
          <div className='count'>{count}</div>
        </div>
         </div>
        
      </div>
      <Model  isOpen={isOpen}  setRes={setRes} res={res} setCount={setCount} count={count}/>
   
    </>
  );
};

export default Header;
