import CartWidget from "./CartWidget";
import './NavBar.css'
import { Link } from "react-router";

function NavBar(){
    return(
        <div class="nav-bg">
            <nav class="contenedor">
                <ul>

                    <Link to="/">
                    <li>HomePage</li>
                    </Link>

                    <Link to="/category/Electronics">
                    <li>Electronica</li>
                    </Link>

                    <Link to="/category/Accessories">
                    <li>Accesorios</li>
                    </Link>

                    {/* <Link to="/category/audio">
                    <li>Audio</li>
                    </Link>

                    <Link to="/category/monitor">
                    <li>Monitor</li>
                    </Link> */}
                    
                    {/* <li><a href="#">Nosotros</a></li>
                    <li><a href="#">Productos</a></li>
                    <li><a href="#">Promociones</a></li> */}
                    {/* Renderizar el componente CartWidget */}
                    <CartWidget/>
                </ul>
                
            </nav>
        </div>
    )
}

export default NavBar;