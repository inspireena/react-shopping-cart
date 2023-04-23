import { useDispatch } from "react-redux";
import LeftMenu from "./LeftMenu";
import ListItems from "./ListItems";
import img from './image1.jpg';
import axios from "axios";
import { useEffect, useState } from "react";
import { setList } from "../redux/actions/listItems/listItems";

function Main() {
    // const [items, setItems] = useState([]); for redux commented
    const [initialItems, setInitialItems] = useState([]);

    const dispatch = useDispatch();

    useEffect(() => {
        axios.get('https://react-shopping-cart-67954.firebaseio.com/products.json')
            .then((response) => {
                // handle success
                let itemss = response.data.products.map((value, index) => {
                    value['quantity'] = 1
                    value['image'] = img
                    return value;
                })
                // setItems(itemss)
                setInitialItems(itemss)
                dispatch(setList(itemss))

            })
            .catch((error) => {
                // handle error
                console.log(error);
            })
    }, [])

    return (
        <div style={{ display: 'flex' }}>
            <div>
                <LeftMenu listItems={initialItems}
                //  setItems={setItems}
                />
            </div>
            <div>
                <ListItems
                    // listItems={items}
                    // setItems={setItems}
                />
            </div>

        </div>
    )
}
export default Main;