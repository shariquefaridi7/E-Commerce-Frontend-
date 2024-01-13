import React from 'react';
import "./style.css";
import Slider from '../Slider/slider';
import {useNavigate} from "react-router-dom";
import data from '../../utils/data';
import { toast } from 'react-toastify';








const MenuList = ({handle,cart,setCart,istoken}) => {
  
    const navigate=useNavigate();
    const addToCart=(id)=>{
         console.log(istoken)
        if(!istoken){
            toast("Login First")
            return;
        }
    
        const res = data.find((item) => item.id === id);
       
        setCart((prevCart) => [...prevCart, res]);
        handle();
    }

    const goToProduct=(id)=>{
        if(istoken){
            navigate(`/product/${id}`)
        }else{
            toast("Login First")
        } 
    }

  return (

    <>
    <Slider/>
     <div class="item-container">
    {data.map(({ name, prize, img,id }) => (
        <div class="item" key={id} >
            <img src={img} alt={name} onClick={()=>goToProduct(id)}  />
            <div > 

            <div style={{marginTop:"1rem"}}>
            <h2>{name}</h2>
          
            <h2> { `Rs ${prize}`}</h2>
                </div>
                <div  style={{marginTop:"1rem"}}><button className='btn'onClick={()=>addToCart(id)}>Order</button> </div>
                
            </div>
           
        
        </div>
    ))}
</div>
    </>
   

  )
}

export default MenuList