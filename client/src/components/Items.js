import Item from './Item'


function Items({ items }) {
    return (
        <div className="GridContainer">
            {
                items.map((item) => (
                    <Item className="GridItem" key={item.id} id={item.id} image={item.filename} name={item.name} price={item.price}/>
                ))
            }
        
        </div>
    )
}

Items.defaultProps = {
    items: [],
}

export default Items