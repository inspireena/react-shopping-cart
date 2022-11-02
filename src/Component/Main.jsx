import LeftMenu from "./LeftMenu";
import ListItems from "./ListItems";
import Cart from "./Cart";

import axios from "axios";
import { useEffect, useState } from "react";

function Main() {
    const [items, setItems] = useState([])
    const [initialItems, setInitialItems] = useState([])

    useEffect(() => {
        axios.get('https://react-shopping-cart-67954.firebaseio.com/products.json')
            .then((response) => {
                // handle success
               let itemss = response.data.products.map((value,index)=>{
                value['quantity'] = 1
                    return value;
                })
                setItems(itemss)
                setInitialItems(itemss)
                console.log('items', itemss)

                // console.log('response',response );
            })
            .catch((error) => {
                // handle error
                console.log(error);
            })
    }, [])
    // console.log('items',items)

    return (
        <div style={{ display: 'flex' }}>
            <div>
                <LeftMenu listItems={initialItems} setItems={setItems} />
            </div>
            <div>
                <ListItems listItems={initialItems} />
            </div>

        </div>
    )
}
export default Main;