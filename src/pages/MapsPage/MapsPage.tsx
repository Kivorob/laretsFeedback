import React, { Component } from 'react';
import './MapsPage.css';
import vectors from '../../assets/vectors-page2.svg';
import MapsText from '../../modules/MapsPage/MapsText/MapsText';
import GroupMapsLink from '../../modules/MapsPage/GroupMapsLink/GroupMapsLink';
import { useParams } from 'react-router-dom';


export default function MapsPage() {
  const {branchId} = useParams();
  console.log(branchId);

  return (
    <div>
      <img src={vectors} alt="" className='vectors2' />
          
      <div className='main-container'>
      <div className="container">
      <MapsText />
      <GroupMapsLink idBranch={branchId} />
      </div>
      </div>
    </div>
  )
}

