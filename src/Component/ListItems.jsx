import img from './image.jpg';
import Cart from "./Cart";
import { useState } from 'react';
import Modal from './Modal';

function ListItems(props) {
    const [cart, setCart] = useState([])

    const handleClick = (value) => {

        const cloneCart = [...cart]
        if (cloneCart.includes(value)) {
            let index = cloneCart.indexOf(value)
            cloneCart[index].quantity += 1;
            setCart(cloneCart)
            console.log('cart', cloneCart)
        }
        else {
            cloneCart.push(value)
            setCart(cloneCart)
        }


        console.log('ListItems', cloneCart, 'cart=', cart)
    }

    return (<div className='main-list'>


        {props.listItems && props.listItems.length > 0 &&
            props.listItems.map((value, index) => {
                return (<div key={index} className="list-item">
                    <img src={img} width={200} />
                    <div>{value.availableSizes.join(', ')}</div>
                    <div > {value.title}</div>
                    <div>{value.style}</div>
                    <div>{value.currencyFormat}{value.price}</div>
                    <button onClick={() => handleClick(value)}> ADD TO CART</button>

                </div>)
            })
        }
        <Cart selectItem={cart} setCart={setCart} />
        {/* <Modal selectItem={cart} /> */}

    </div>
    )
}
export default ListItems;