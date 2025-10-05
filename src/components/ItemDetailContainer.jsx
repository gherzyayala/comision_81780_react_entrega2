import { useParams } from "react-router";
import { getProductsById } from "../data/mockAPI";
import { useEffect, useState } from "react";
import { useContext } from "react";
import cartContext from "../context/cartContext";

function ItemDetailContainer(){
    const {idParam} = useParams();
    const [item, setItem] = useState(null)
    const {addToCart} = useContext(cartContext)

    useEffect( () => {
        getProductsById(idParam).then(res => setItem(res));
    }, [])
    
    return(
        <div class='item-card-wrapper'>
        {
            item 
            ?
            
            <div>
        
                <div class='item-card'>
                    <h2 class='item-title'> {item.title} </h2>
                    <img height="200" objectFit="cover" src= {item.imgURL}  alt="img-product"></img>
                    <p>Precio: 
                        <span>
                            $ {item.price}
                        </span>
                    </p>
                    <br/>
                    <p style= {{fontSize:"12px", textAlign: "center"}}>{item.description}</p>
                    <button onClick={ () => addToCart(item)} >Agregar al carrito</button>
                </div>
            </div>
            :
            <p>Cargando....</p>
            }
        </div>
        
    )
}

export default ItemDetailContainer;