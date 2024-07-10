import React, { Component } from 'react';
import vectors from '../../assets/vector-page3.svg';
import './FeedbackPage.css';
import Feedback from '../../modules/FeedbackPage/Feedback/Feedback';
import Appeal from '../../modules/FeedbackPage/Appeal/Appeal';

export default class FeedbackPage extends Component {
  render() {
    return (
      <div >
        <img src={vectors} alt="" className='vectors' />
        
        <div className='main-container'>
        <div className="container">
          <Appeal />
          <Feedback />
        </div>
        </div>
        
      </div>
    )
  }
}
