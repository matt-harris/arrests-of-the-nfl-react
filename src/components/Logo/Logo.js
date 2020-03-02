import React from 'react';
import { Link } from 'react-router-dom';

const Logo = () => (
  <>
    <Link to="/">
      <img 
        className="Logo" 
        src={require(`./../../assets/img/logo.png`)} 
        alt="Arrests of the NFL" /
      >
    </Link>
    
    <h1 className="visually-hidden">Arrest of the NFL</h1>
  </>

  
);

export default Logo;
