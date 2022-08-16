import DefaultImage from '../resources/images/default.png'

import { BrowserRouter, Route, Link } from "react-router-dom";



function Item(props){
    var id = props.id
    return(
        <div className={props.className}>
            
            <Link to={`/items/${id}`}> <img className="ItemImage" src={props.image} alt="" /> </ Link>
            {/* <Link to={`/items/${id}`}> <img className="ItemImage" src="images/gpus/Gigabyte RX 6800 XT 16G GV-R68XTGAMING OC-16GD.png" alt="" /> </ Link> */}
            <Link to={`/items/${id}`}> <p className="ItemName">{props.name}</p> </ Link>
            
            <h3 className="ItemPrice">{props.price}$</h3>

        </div>
    )
}

Item.defaultProps = {
    id: 0,
    image: DefaultImage,
    name: "set name here...",
    price: "null",
    className: "ItemDiv",
}


export default Item