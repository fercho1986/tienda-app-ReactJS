import React, {useContext} from 'react'
import Portada from "../../images/fotoheader.jpg";
import { Link } from "react-router-dom";
import { DataContext } from "../../context/Dataprovider";


export const Header = () => {

    const value = useContext (DataContext);
    const [menu, setMenu] = value.menu;

    const tooglemenu = ()=> {
        setMenu (!menu);
    }

    return (
        <header>
            <Link to='/'>
                <div className='logo'>
                    <img src={Portada} alt="logo" width="250" />
                </div>
            </Link>
            <ul>
                <li>
                    <Link to='/'>HOME</Link>
                </li>
                <li> 
                    <Link to='/productos'>SHOP</Link>
                </li>
                <li> 
                    <Link to='/'>CONTACTO</Link>
                </li>
                <li> 
                    <Link to='/'>ABOUT US</Link>
                </li>
            </ul>
            <div className='cart' onClick={tooglemenu}>
                <box-icon name="cart"></box-icon>
                <span className='item__total'>2</span>
            </div>
        </header>
    )
}
