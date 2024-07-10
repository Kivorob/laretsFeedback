import React from 'react';
import './Appeal.css';
import AppealText from '../../../components/Text/AppealText/AppealText';
import man from '../../../assets/man.svg';

export default function Appeal() {
  return (
    <div className='appeal-container'>
      <img src={man} alt="грустный человек" className="appeal-img" />
      <AppealText />
    </div>
  )
}
