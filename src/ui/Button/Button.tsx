import React from 'react';
import { Link } from 'react-router-dom';
import './Button.css';
import { ButtonProps } from '../types/types';

 function Button({name, link}: ButtonProps) {
  return (
    <div className='btn'>
      <Link to={link} className="link" >
            { name }
      </Link>
    </div>
  )
}

export default Button;