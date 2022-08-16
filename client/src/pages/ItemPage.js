import DefaultImage from '../resources/images/default.png'

import { useParams } from "react-router-dom";
import Item from "../components/Item";
import Items from "./Home";
import { useContext, useEffect, useState } from 'react';

import { itemsContext } from '../contexts/itemsContext'

function ItemPage(props) {
    const {id} = useParams()
    const [items, setItems, cartItems, setCartItems] = useContext(itemsContext)
    const [item, setItem] = useState({})
    
    useEffect(() => {
        fetch(`/api/items?id=${id}`)
        .then(item => item.json())
        .then(result => {
            setItem(result)
        })
    }, [])


    const onAddToCart = () => {
        for(let i = 0; i < cartItems.length; ++i)
        {
            if(cartItems[i].id == item.id)
            {
                cartItems[i].count += 1
                console.log(cartItems)
                return
            }
        }
        item['count'] = 1
        setCartItems([...cartItems, item])
    }

    var image = item.filename
    var name = item.name
    var price = item.price
    
    var description = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates laboriosam aliquid deleniti, natus qui aliquam veritatis, excepturi mollitia quasi minus, vel facilis? Voluptate ex accusantium ipsa, odit quasi excepturi maxime rerum, impedit, veniam natus possimus? Nobis voluptas incidunt consequatur neque adipisci. Necessitatibus tenetur sequi quam porro nostrum vel libero repudiandae ducimus animi laboriosam voluptatibus voluptas sapiente, deserunt dignissimos incidunt voluptatum itaque adipisci voluptatem mollitia! Eos necessitatibus, quia itaque cum alias vero eum est aliquam earum asperiores modi esse quaerat illo laudantium totam quasi laboriosam et! Eius doloribus, ab odio laboriosam rem, perspiciatis fuga inventore similique neque, consequatur sunt architecto vitae?"
    return (
        <div className="ItemPageDiv">
            <img className="ItemPageImage" src={`../${image}`}></img>
            <div className="ItemPageText">
                <h2 className="ItemPageName">{name}</h2>
                <h3 className="ItemPagePrice">{price}$</h3>
                <p className="ItemPageDescription">{description}</p>
                <button onClick={onAddToCart} className="ItemPageAddToCartButton">Add to cart</button>
            </div>

        </div>
    )
}

ItemPage.defaultProps = {
    id: -1,
}

export default ItemPage;