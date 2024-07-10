import React from 'react';
import Button from '../../../ui/Button/Button';
import { branchProps } from '../../../modules/MapsPage/GroupMapsLink/constans/types';

 function ButtonLike({idBranch}: branchProps) {
  const branchId = idBranch;
  console.log(branchId);
  const link_: string = '/maps/' + branchId;
  return (

      <Button name="МНЕ ВСЁ ПОНРАВИЛОСЬ" link={link_} />

  )
}

export default ButtonLike;
