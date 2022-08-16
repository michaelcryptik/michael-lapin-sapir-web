import { Link } from "react-router-dom";
import { useContext, useState } from 'react';

import { AiOutlineClose } from 'react-icons/ai'
import { itemsContext } from '../contexts/itemsContext'


function ShoppingCartItem(props) {
    const [items, setItems, cartItems, setCartItems] = useContext(itemsContext)
    const [count, setCount] = useState(props.count)
    var price = parseFloat(props.price.replace(",", ""))
    // var count = parseFloat(props.count)


    const onDelete = (e) => {
        setCartItems(cartItems.filter((item) => {
            return props.id != item.id
        }))
    }

    const onChangeNumber = (e) => {
        for(let i = 0; i < cartItems.length; ++i)
        {
            if(props.id === cartItems[i].id)
            {
                cartItems[i].count = e.target.value
                props.onChange((e.target.value - count) * cartItems[i].price)
            }
        }
        setCount(e.target.value)
    }

    return (
        <div className="CheckoutItemDiv" key={props.id}>
            <Link to={`/items/${props.id}`}>
                <img className="CheckoutItemImg" src={`../${props.filename}`} />
            </Link>
            <span className="CheckoutItemText">
                <Link to={`/items/${props.id}`}>
                    <h3 className="CheckoutItemName">{props.name}</h3>
                </Link>
                <h4 className="CheckoutItemPrice">{price * count}$</h4>
                <input className="test" type="number" onChange={onChangeNumber} defaultValue={props.count} min="1" max="20" ></input>

                <button onClick={onDelete} style={{ float: 'right', background: 'none' }}>
                    <AiOutlineClose style={{ color: 'red' }} className="CheckotDelete" />
                </button>

            </span>
        </div>
    )
}


export default ShoppingCartItem