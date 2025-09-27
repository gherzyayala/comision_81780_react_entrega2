import { useState, useEffect } from 'react';
import './Item.css';
import { Link } from 'react-router';

function Item(props){
    /*Sin Estado
    let stateCart = "No agregado al carrito";*/
    
    /*Con Estado*/
    const [state, setState] = useState("No agregado al carrito aún")

    // // Tarea ejecutada en cada update/render
    // console.log("Renderizando....", props.title)

    // useEffect(
    //     () => {
    //         // Tarea de etapa de montaje
    //         console.log("Obteniendo datos de la BD....")
    //     },
    //     []
    // )

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
                <br/>
                <p style= {{fontSize:"10px"}} >{props.description}</p>
                <Link to={`/detail/${props.id}`}>
                    <button>Ir a ver detalle</button>
                </Link>
                {/* <button onClick={agregarAlCarrito}>Agregar carrito</button> */}
                <br/>
                <small> {state} </small>
            </div>
        </div>
    )
}

export default Item;