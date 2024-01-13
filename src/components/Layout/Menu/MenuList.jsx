import React from 'react';
import "./style.css";
import Slider from '../Slider/slider';


const menuList=[
    {   id:1,
        name:"Frok",
        prize:200,
        img:"../../../../public/cl1.jpeg"
    },

    {   id:2,
        name:"Jacket",
        prize:1000,
        img:"../../../../public/cl2.jpeg"
    },
    {   id:3,
        name:"Coat",
        prize:3000,
        img:"../../../../public/cl3.jpeg"
    },
    {   id:4,
        name:"Shirt",
        prize:500,
        img:"../../../../public/cl4.jpeg"
    },
   

    {   id:5,
        name:"Samsung",
        prize:50000,
        img:"../../../../public/mob1.jpeg"
    },
    {   id:6,
        name:"OnePlus",
        prize:30000,
        img:"../../../../public/mob2.jpeg"
    },
    {   id:7,
        name:" Iphone",
        prize:100000,
        img:"../../../../public/mob3.jpeg"
    },
    {   id:8,
        name:"Vivo",
        prize:25000,
        img:"../../../../public/mob4.jpeg"
    },
    {   id:9,
        name:"Fararee",
        prize:150000,
        img:"../../../../public/fararee.jpeg"
    },
    {   id:10,
        name:"Audi",
        prize:2000000,
        img:"../../../../public/audi.jpeg"
    },
    {   id:11,
        name:"Lambogni",
        prize:50000000,
        img:"../../../../public/lambogni.jpeg"
    },
    
    {   id:12,
        name:"Ford",
        prize:130000,
        img:"../../../../public/ford.jpeg"
    },  
    {   id:13,
        name:"Gold Neckles",
        prize:1500000,
        img:"../../../../public/gold1.jpeg"
    },   {   id:14,
        name:"Diamount Ring",
        prize:1000000,
        img:"../../../../public/gold2.jpeg"
    },   {   id:15,
        name:"Neckles",
        prize:120000,
        img:"../../../../public/gold3.jpeg"
    },   {   id:16,
        name:"Bangle",
        prize:120000,
        img:"../../../../public/gold4.jpeg"
    },   {   id:17,
        name:"Splender",
        prize:60000,
        img:"../../../../public/splender.jpeg"
    },   {   id:18,
        name:"Sport",
        prize:1500000,
        img:"../../../../public/sport.jpeg"
    },   {   id:19,
        name:"Yahama",
        prize:150000,
        img:"../../../../public/yamah.jpeg"
    },   {   id:20,
        name:"KTM",
        prize:1600000,
        img:"../../../../public/ktm.jpeg"
    },   {   id:21,
        name:"bOAT",
        prize:1000,
        img:"../../../../public/pod1.jpeg"
    },   {   id:22,
        name:"boAT",
        prize:800,
        img:"../../../../public/pod2.jpeg"
    },   {   id:23,
        name:"Noise",
        prize:900,
        img:"../../../../public/pod3.jpeg"
    },  
    {   id:24,
        name:"Apple",
        prize:2100,
        img:"../../../../public/pod4.jpeg"
    },  



];




const MenuList = ({handle,cart,setCart}) => {

    const addToCart=(id)=>{
 
        const data = menuList.find((item) => item.id === id);
        setCart((prevCart) => [...prevCart, data]);
        handle();
    }
  return (

    <>
    <Slider/>
     <div class="item-container">
    {menuList.map(({ name, prize, img,id }) => (
        <div class="item" key={id}>
            <img src={img} alt={name}   />
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