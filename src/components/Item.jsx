import { useState } from 'react';
import './Item.css';

function Item(props){
    /*Sin Estado
    let stateCart = "No agregado al carrito";*/
    
    /*Con Estado*/
    const [state, setState] = useState("No agregado al carrito aún")

    

    function agregarAlCarrito(){
        alert("Agregaste correctamente al carrito!!!");
        setState("Agregado al carrito")
    }

    return(       
        <div class='item-card-wrapper'>
            <div class='item-card'>
                <h2 class='item-title'> {props.title} </h2>
                <img height="200" objectFit="cover" src= {props.imgURL}  alt="img-product"></img>
                <p>Precio: 
                    <span>
                        $ {props.price}
                    </span>
                </p>
                <button onClick={agregarAlCarrito}>Agregar carrito</button>
                <br/>
                <small> {state} </small>
            </div>
        </div>
    )
}

export default Item;