import React from 'react'
import Portada from "../../images/portadajeans.jpg"
import { Link } from "react-router-dom";

export const Inicio = () => {
  return (
    <div className='inicio'>
      
        <Link to ='/'>
        <h1>Home</h1>
        </Link>
        <Link to ='/productos'>
        <h1>SHOP</h1>
        </Link>
        <img src={Portada} alt="inicio"/>
        </div>
  )
}
