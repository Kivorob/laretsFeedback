import React from 'react';
import './GroupButtons.css';
import ButtonLike from '../../../components/Buttons/ButtonLike/ButtonLike';
import ButtonNegative from '../../../components/Buttons/ButtonNegative/ButtonNegative';
import { branchProps } from '../../MapsPage/GroupMapsLink/constans/types';
import { useParams } from 'react-router-dom';

export default function GroupButtons() {
  const {branchId} = useParams();

  return (
    <div className='button-container'>
      <ButtonLike idBranch={branchId} />
      <ButtonNegative />
    </div>
  )
}
