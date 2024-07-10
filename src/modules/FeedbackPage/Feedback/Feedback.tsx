import React from 'react';
import './Feedback.css';
import ButtonFeedback from '../../../components/Buttons/ButtonFeedback/ButtonFeedback';
import NegativeText from '../../../components/Text/NegativeText/NegativeText';

export default function Feedback() {
  return (
    <div className='map-container'>
      <NegativeText />
    <ButtonFeedback />
    </div>
  )
}
