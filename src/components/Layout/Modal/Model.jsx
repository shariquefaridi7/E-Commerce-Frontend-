import React ,{useState,useEffect} from 'react';
import "./style.css";
import { toast } from 'react-toastify';

const Modal = ({ isOpen, onClose, children ,totalAmount,count}) => {
   

  const order=()=>{

    console.log(`Orderd and Amount is ${totalAmount}`)
    toast(`Your Order Successfully and Your Total Amount is ${totalAmount}`)
    onClose();
  }
    if (!isOpen) return null;
  
    return (
      <div className="modal-overlay">
      <div className="modal">
        {totalAmount !== 0 ? (
          <>
            {children}
  
            <div style={{ marginTop: "1rem", display: "flex", justifyContent: "space-between" }}>
              <h2>Total Amount</h2>
              <div>
                <h2>{`Rs. ${totalAmount}`}</h2>
              </div>
            </div>
  
            <div style={{ marginTop: "2rem", display: "flex", justifyContent: "end", gap: "0.7rem" }}>
              <button className="close-button" onClick={onClose}>
                Close
              </button>
              <button className="close-button" onClick={order}>
                Buy
              </button>
            </div>
          </>
        ) : (
          <>
          <h2>Cart is Empty</h2>
          <button className="close-button" onClick={onClose} style={{marginTop:"1rem",marginLeft:"2rem"}}>
          Close
        </button>
        </>
        )}
      </div>
    </div>
  );

  };



const Model = ({isOpen,setRes,res,setCount,count}) => {
    const [isModalOpen, setModalOpen] = useState(false);  
    const [totalAmount,setTotalAmount]=useState(0);  


 
    useEffect(()=>{
    setTotalAmount( res.reduce((acc, [item, value]) => acc + item.prize * value, 0));  

    },[count])



  const increment=(id)=>{
     
   
    setRes((prevItems) =>
      prevItems.map(([item, value]) =>
        item.id === id ? [{ ...item }, value + 1] : [item, value]
      )
    );

   
  
     
    setCount((prev)=>prev+1);
  

    
    
  }

  const decrement=(id)=>{

    setRes((prevItems) =>
    prevItems
      .map(([item, value]) =>
        item.id === id ? [{ ...item }, Math.max(value - 1, 0)] : [item, value]
      )
      .filter(([_, value]) => value > 0)
  );

  setCount((prev) => Math.max(prev - 1, 0));
  
  }





    
    const openModal = () => {
      console.log("model_open")
        setModalOpen(true);
      };

      
    useEffect(()=>{
        console.log("inside useEffect")
      if(isOpen){
        openModal();
      }
        
       
        

       
  },[isOpen]);
    
      const closeModal = () => {
        setModalOpen(false);
      };
    
      console.log(res);
    
     
  return (
    <Modal isOpen={isModalOpen} onClose={closeModal} totalAmount={totalAmount}>
      {
        res.map((item,index)=>(
           <div key={index} className='it'>
            <div style={{display:"flex",justifyContent:"center", gap:"1rem"}}>
              <img  src={item[0].img}   width="50rem"/>
            <h2>{item[0].name}</h2> 
            <h2>{`Rs${item[0].prize}`}</h2>
              <h2> {`x${item[1]}`}</h2>

            </div>
            <div style={{display:"flex",justifyContent:"center", gap:"0.2rem"}}>
              <button className='close-button' onClick={()=>{increment(item[0].id)}}><h2>+</h2></button>
              <button className='close-button'  onClick={()=>{decrement(item[0].id)}}><h2>-</h2></button>
            </div>
          
           </div>
        ))
      }
     
  </Modal>
  )
}

export default Model