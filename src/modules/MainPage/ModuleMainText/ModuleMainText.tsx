import React from 'react';
import './ModuleMainText.css';
import MainText from '../../../components/Text/Maintext/MainText';
import diamond from '../../../assets/diamond.svg';

export default function ModuleMainText() {
  return (
    <div className='main-text'>
      <img src={diamond} alt="бриллиант" className='img-diamond'/>
      <MainText />
    </div>
  )
}
