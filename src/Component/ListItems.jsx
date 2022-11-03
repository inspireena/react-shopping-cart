
import img2 from './image2.JPG';
import img from './image1.jpg';

import Cart from "./Cart";
import { useState } from 'react';
import Button from 'react-bootstrap/Button';

function ListItems(props) {
    const [cart, setCart] = useState([])
    //handle over
    const handleOver = (index) => {
        const cloneList = [...props.listItems]
        cloneList[index].image = img2
        props.setItems([...cloneList])
    }
    //handle out
    const handleOut = (index) => {
        const cloneList = [...props.listItems]
        cloneList[index].image = img
        props.setItems([...cloneList])
    }

    const handleClick = (value) => {

        const cloneCart = [...cart]
        if (cloneCart.includes(value)) {
            let index = cloneCart.indexOf(value)
            cloneCart[index].quantity += 1;
            setCart(cloneCart)
        }
        else {
            cloneCart.push(value)
            setCart(cloneCart)
        }
    }

    return (<div className='main-list'>


        {props.listItems && props.listItems.length > 0 &&
            props.listItems.map((value, index) => {
                return (<div key={index} className="list-item">
                    <img src={value.image} width={200} onMouseOver={() => handleOver(index)} onMouseOut={() => handleOut(index)} />
                    <div>{value.availableSizes.join(', ')}</div>
                    <div > {value.title}</div>
                    <div>{value.style}</div>
                    <div>{value.currencyFormat}{value.price}</div>
                    <button className='addtocart' onClick={() => handleClick(value)}>Add To Cart</button>

                </div>)
            })
        }
        <Cart selectItem={cart} setCart={setCart} />
        {/* <Modal selectItem={cart} /> */}

    </div>
    )
}
export default ListItems;