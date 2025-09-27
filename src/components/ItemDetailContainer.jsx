import { useParams } from "react-router";
import { getProductsById } from "../data/mockAPI";
import { useEffect, useState } from "react";

function ItemDetailContainer(){
    const {idParam} = useParams();
    
    const [item, setItem] = useState(null)
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
                    <p style= {{fontSize:"10px"}}>{item.description}</p>
                    <button>Comprar</button>
                </div>
            </div>
            :
            <p>Cargando....</p>
            }
        </div>
        
    )
}

export default ItemDetailContainer;