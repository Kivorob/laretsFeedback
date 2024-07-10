import React from 'react';
import logo from '../../assets/logo.svg';
import logoText from '../../assets/logo-text.svg';
import './Logo.css';


export default function Logo() {
  return (
    <div className='logo_container'>
      <img src={logo} alt="logo" className="logo" />
      <img src={logoText} alt="Ларец Ломбард" className="logo_text" />
    </div>
  )
}
