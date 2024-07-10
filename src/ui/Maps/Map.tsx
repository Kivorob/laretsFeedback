import React from 'react';
import './Map.css';
import { MapProps } from '../types/types';

export default function Map({link, image, name}: MapProps) {
  return (
    <div>
      <a href={link}>
        <img src={image} alt={name} className='map_img'/>
      </a>
    </div>
  )
}
