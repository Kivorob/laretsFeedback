import React from 'react';
import Map from '../../ui/Maps/Map';
import google from  '../../assets/google.svg';
import { urlProps } from './types';

export default function MapGoogle({url}: urlProps) {
  return (
    <div>
      <Map name='яндекс' image={google} link={url} />
    </div>
  )
}
