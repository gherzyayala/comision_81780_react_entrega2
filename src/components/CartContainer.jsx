import { useContext } from "react";
import cartContext from "../context/cartContext";
import './CartContainer.css'

function CartContainer(){
    const {cart, removeItem} = useContext(cartContext)

    if(cart.length === 0){
        return (
            <div className="empty-cart">
                <h2>Tu carrito está vacío</h2>
                <button>Volver al inicio</button>
            </div>
        )
    }

    return(
        <section>
            <h2>Tu carrito de compras</h2>
            <ul>
                {
                    cart.map(itemInCart => <div>
                        <h2>{itemInCart.title}</h2>
                        <p>Price: {itemInCart.price} </p>
                        <p>Quantity: {itemInCart.count} </p>
                        <button onClick={() => removeItem(itemInCart.id)}>🗑️</button>
                    </div>)
                }
            </ul>
            <hr/>

            <div>
                <h3>Total de tu compra: $999 </h3>
            </div>

            <div>
                <button>Pagar</button>
            </div>
        </section>
    )
}

export default CartContainer;