import { createContext, useState } from "react";

const cartContext = createContext(null);

// Custom Provider -> value
export function CartContextProvider(props){
    const [cartItems, setCartItems] = useState([]);

    console.log("🛒 Cart Items:", cartItems)

    // function addToCart(item){
    //     alert(`Agregaste una unidad de ${item.title} al carrito`);
    //     const newCart = structuredClone(cartItems)
    //     newCart.push(item)
    //     setCartItems(newCart)
    // }

    function addToCart(newItem){
        const newCart = structuredClone(cartItems)
        const isInCart = newCart.some(item => item.id === newItem.id)
        if(isInCart){
            // Ya está en cart entonces actualizar la cantidad de unidades compradas
            const index = newCart.findIndex(item => item.id === newItem.id)
            const updateItem = newCart[index]
            updateItem.count++
        }else{
            newItem.count = 1;
            newCart.push(newItem)
            
        }

        setCartItems(newCart)
    }

    function countItems(){
        let quantity = 0;
        cartItems.forEach(item => quantity += item.count)
        return quantity
    }

    // Remover un item del context
    function removeItem(idDelete){
        const newCart = structuredClone(cartItems)
        const newCartWithDelete = newCart.filter(item => item.id !== idDelete)
        setCartItems(newCartWithDelete)
        
    }

    return <cartContext.Provider value= { {cart: cartItems, addToCart, countItems, removeItem} }>
        {props.children}
        </cartContext.Provider>
}

export default cartContext;