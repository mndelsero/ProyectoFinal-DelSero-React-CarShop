import Item from "./Item"



const ItemList = ({ productos }) => {



    return (
        <div>

            <h1>PRODUCTOS</h1>
            <div className="seccion-productos">
                {productos.length > 0 &&

                    productos.map((producto) => {
                        return (
                            <Item key={producto.id} producto={producto} />
                        )
                    })


                }
            </div>

        </div>


    )
}

export default ItemList