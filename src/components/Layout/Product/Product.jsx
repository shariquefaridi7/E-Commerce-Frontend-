import React ,{useEffect, useState} from 'react';
import {useParams,useNavigate} from "react-router-dom";
import items from '../../utils/data';
import "./productStyle.css"



const Product = ({setCart,handle}) => {
   
  const navigate=useNavigate();
    const [data,setData]=useState({});
    const [zoomLevel, setZoomLevel] = useState(1);
    const {id}=useParams();
    
    console.log(id)
    useEffect(() => {
      // Using find instead of filter to get a single item
      const selectedItem = items.find((item) => item.id === parseInt(id, 10));
  
      if (selectedItem) {
        setData(selectedItem);
      }
    }, [id]);

 
  

    const handleZoomIn = () => {
      setZoomLevel((prevZoom) => prevZoom + 0.1);
    };
  
    const handleZoomOut = () => {
      setZoomLevel((prevZoom) => Math.max(prevZoom - 0.1, 1));
    };
  
    const resetZoom = () => {
      setZoomLevel(1);
    };
  
    const containerStyle = {
      transform: `scale(${zoomLevel})`,
      transformOrigin: 'top left', // Adjust the origin based on your preference
    };


    const addTocart=(id)=>{
         
      const res= items.find((item) => item.id === id);
      console.log(res)
      setCart((prevCart) => [...prevCart, res]);
      handle();
      navigate("/");
    }  


  return (
   <>
   <div className='outer'>

    <img  src={data?.img}  className='div-img' style={containerStyle}/>
     <div className='inner'>
      <h2>{data.name}</h2>
      <p>{data.description}</p>
      <div style={{display:"flex" ,gap:"1rem" ,marginTop:"2rem",marginBottom:"1rem" ,position:"absolute" ,top:"5rem" ,left:"15rem"}}>
        <button onClick={handleZoomIn}>Zoom In</button>
        <button onClick={handleZoomOut}>Zoom Out</button>
        <button onClick={resetZoom}>Reset Zoom</button>
      </div>
      <div >
      <h3>Price :Rs {data.prize}</h3>
      <div style={{display:"flex" ,gap:"1rem" ,marginTop:"2rem"}}>
        <button style={{width:"5rem"}} onClick={()=>addTocart(data.id)}>Order</button>
     
      </div>
     
      </div>
   
     </div>
   </div>
  
   <br/><br/>   <br/><br/>
   </>
  )
}

export default Product