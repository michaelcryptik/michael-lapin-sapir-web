import { useState, useContext } from "react";
import DefaultImage from '../resources/images/default.png'
import { itemsContext } from '../contexts/itemsContext'
import { Link } from "react-router-dom";

import ShoppingCartItem from '../components/ShoppingCartItem'

function getSum(total, item){
    return total + item.price * item.count
}

function CheckOut(props) {
    const [items, setItems, cartItems, setCartItems] = useContext(itemsContext)
    const [sum, setSum] = useState(cartItems.reduce(getSum, 0))



    const onPriceChange = (e) => {
        setSum(sum + Number(e))
    }


    return (
        <div className="CheckoutDiv ">
            {
                cartItems.length == 0 ?
                <h2 style={{marginRight: '25vw'}}>
                    Your Shopping Cart is empty.
                </h2>
                :
                <>
                    {

                        cartItems.map((item) => (
                            <ShoppingCartItem key={item.id} id={item.id} onChange={onPriceChange} count={item.count} filename={item.filename} name={item.name} price={item.price} />
                        ))
                    }
                        <div className="payoutSummary" >
                            <h4 style={{ float: 'left', paddingLeft: '50px' }} className="CheckoutTotal">Total</h4>
                            <h4 style={{ float: 'right', paddingRight: '25vw' }} className="CheckoutTotalPrice">{sum}$</h4>
                        </div>

                        <Link to="/PaymentPage">
                            <button className="CheckoutButton">Checkout</button>
                        </Link>
                </>
            }

        </div>
    )
}

export default CheckOut;
