import React from 'react';
import './Description.css';
import { DescriptionProps } from '../types/types';

function Description({description}: DescriptionProps) {
  return (
    <div>
      <div className="description_container">
        <p className='text'>
            {description}
        </p>
      </div>
    </div>
  )
}

export default Description;
