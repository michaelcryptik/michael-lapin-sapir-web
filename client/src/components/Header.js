import { useContext } from 'react';
// import ShoppingCartIcon from '../resources/images/shoppingcart.jpg'
import { Link } from "react-router-dom";

import { itemsContext } from '../contexts/itemsContext'


function Header(props) {
    const [items, setItems, cartItems, setCartItems] = useContext(itemsContext)


    return (
        <header>
            <Link to="/"> <h2 className="HomeButton"> {props.title}</h2> </Link>

            <Link to="/Checkout"> <img className="ShoppingCartIcon" src="/images/shoppingcart.png"></img>  </Link>
            {
                cartItems.length === 0 ?
                    <div></div>
                    :
                    <div className="ShoppingCartNumber">{cartItems.length}</div>
            }
            {/* <div className="ShoppingCartNumber">{props.numItems}</div> */}

            <div className="clear"></div>
            {/* <hr className="HeaderSeperatingLine"></hr> */}

        </header>
    )
}

Header.defaultProps = {
    numItems: 0,
    title: 'M.C.S ltd',
}


export default Header