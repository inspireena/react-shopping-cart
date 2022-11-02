import { useEffect, useState } from 'react';
import cart from './cart.jpg'
import img from './image.jpg';

function Modal(props) {
    const [arr, setArr] = useState([])
    useEffect(() => {
        let tempArr = [...props.item]
        setArr(tempArr)
    }, [props.item])


    const [subT, setSubT] = useState(0)
    useEffect(() => {
        setSubT(0);
        for (let i = 0; i < arr.length; i++) {
            setSubT(pre => pre + (arr[i].price * arr[i].quantity))
        }
    }, [arr])

    // handle plus minus 
    const handlePlus = (index) => {
        let newArr = [...arr];
        newArr[index].quantity += 1
        setArr(newArr);

    }
    const handleMinus = (index) => {
        if (arr[index].quantity > 1) {
            let newArr = [...arr];
            newArr[index].quantity -= 1
            setArr(newArr);
        }
    }
    //handle Cart Cancel
    const handleXX = (index) => {
        let newArr = [...arr];
        newArr.splice(index,1);
        props.setCart(newArr)

    }

    return (
        <div className="modal-backgraound">
            <div className="modal-container">
                <button onClick={() => props.closeModal(false)} className="x">
                    X
                </button>
                <div className="title">
                    <h4> Cart</h4>
                    <img src={cart} alt="error" className='cart-2' />
                    {props.item.length}
                </div>
                <div className="body">
                    your item is here
                    <div>{ }
                        {arr.map((value, index) => {
                            return (

                                <div key={index} style={{
                                    display: 'flex',
                                    width: '100%',
                                    justifyContent: 'space-around',
                                    margin: '10px'
                                }}>
                                    <div> <img src={img} width={50} /> </div>
                                    <div style={{ disply: 'flex', flexDirection: 'column' }}>
                                        <div > {value.title}</div>
                                        <div>{value.style}</div>
                                        <div> quantity : {value.quantity}</div>
                                    </div>
                                    <div style={{ disply: 'flex', flexDirection: 'column' }}>
                                        <button onClick={() => { handleXX(index) }}>
                                            X

                                        </button>
                                        <div>{value.currencyFormat}{(value.price * value.quantity
                                            ).toFixed(2)}</div>
                                        <div>
                                            <button onClick={() => { handleMinus(index) }}>-</button>
                                            <button onClick={() => { handlePlus(index) }}>+</button>
                                        </div>
                                    </div>
                                </div>

                            )
                        })}
                    </div>
                </div>
                <div className="footer">
                    <div>subtotal ${subT.toFixed(2)}</div >
                    <button className='check-out'>checkout</button>
                </div>

            </div>
        </div>
    )
}
export default Modal