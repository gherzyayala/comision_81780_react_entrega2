import CartWidget from "./CartWidget";
import './NavBar.css'

function NavBar(){
    return(
        <div class="nav-bg">
            <nav class="contenedor">
                <ul>
                    <li><a href="#">Inicio</a></li>
                    <li><a href="#">Nosotros</a></li>
                    <li><a href="#">Productos</a></li>
                    <li><a href="#">Promociones</a></li>
                    {/* Renderizar el componente CartWidget */}
                    <CartWidget/>
                </ul>
                
            </nav>
        </div>
    )
}

export default NavBar;