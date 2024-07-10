import React from 'react';
import Map from '../../ui/Maps/Map';
import gis2 from '../../assets/2gis.svg';
import { urlProps } from './types';

export default function Map2Gis({url}: urlProps) {
  return (
    <div>
      <Map name='яндекс' image={gis2} link={url} />
    </div>
  )
}
