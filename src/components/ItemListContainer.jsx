import Item from "./Item";
import products from '../data/products';
import getProducts from "../data/mockAPI";
import './ItemListContainer.css'
import { useEffect, useState } from "react";
import { useParams } from "react-router";

function ItemListContainer(props){

    const [products, setProducts] = useState([]);
    const {categParam} = useParams();
    console.log(categParam)
    
    console.log("Renderizando....")

    useEffect ( ()=>{
      const promesaDatos = getProducts();
      promesaDatos.then((respuesta) => {
        setProducts(respuesta)
      } )  
    }, []);

    console.log(products);
    return(
        <section>
            <h2 className="titulo_saludo">{props.saludo}</h2>

            {
                products.length === 0 ?
                <p className="item-list-container__loading">Cargando...</p>
                :
                <></>
            }

            <div>
                {
                    products.map( product => <Item 
                        key={product.id}
                        id={product.id}
                        title={product.title} 
                        price={product.price} 
                        imgURL={product.imgURL}
                        stock={product.stock}
                        description={product.description}
                    /> )
                }
            </div>

        </section>
       
    )
}

export default ItemListContainer;