import { useState } from 'react';
import cart from './cart.jpg'

import Modal from './Modal';
function First(props) {
    const[openModal , setOpenModal] = useState(false);

    const handleCart =()=>{
       setOpenModal(true)
    }

    let sum = 0;
    for (let i = 0; i< props.selectItem.length; i++) {
      sum += props.selectItem[i].quantity
       
    }
    
    return(<>
        <div>
            <img src={cart} alt="ERROR" className='cart' onClick={handleCart} />
           <span className='cart counter'>{sum}</span> 

        </div>
        {openModal && <Modal closeModal = {setOpenModal} item = {props.selectItem} setCart = {props.setCart}/>}

        </>
        )
}
export default First;