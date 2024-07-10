import React from 'react';
import './MapsText.css';
import LikeText from '../../../components/Text/Liketext/LikeText';
import heart from '../../../assets/heart.svg';

export default function MapsText() {
  return (
    <div className='map-container'>
      <img src={heart} alt="" className='map-heart'/>
      <LikeText />
    </div>
  )
}
