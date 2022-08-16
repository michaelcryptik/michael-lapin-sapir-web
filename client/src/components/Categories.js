import React, { useContext, useEffect } from "react";

import { itemsContext } from '../contexts/itemsContext'
import { useNavigate } from "react-router-dom";



function Categories(props) {

    const [items, setitems] = useContext(itemsContext)
    let navigate = useNavigate()

    // const onClick = useEffect()
    const onClick = (e) => {
        console.log(e.target.value)
        fetch(`/api?category=${e.target.value}`)
            .then(items => items.json())
            .then(result => {
                setitems(result)
            })
        navigate("/")
    }

    return (
        <div className="Categories" >

            <div>
                <input className="CategoryInput" onClick={onClick} type="button" value="Graphic cards" />
            </div>

            <div style={{ position: 'relative' }}>

                <input className="CategoryInput" onClick={onClick} type="button" value="Cpus" />

            </div>


            <div>
                <input className="CategoryInput" onClick={onClick} type="button" value="MotherBoards" />

            </div>


            <div style={{ position: 'relative' }}>
                <input className="CategoryInput" onClick={onClick} type="button" value="Laptops" />

            </div>

            <div>
                <input className="CategoryInput" onClick={onClick} type="button" value="Monitors" />

            </div>

        </div>
    )

}



export default Categories