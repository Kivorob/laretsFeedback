import React from 'react';
import Map from '../../ui/Maps/Map';
import yandex from '../../assets/yandex.svg';
import { urlProps } from './types';

export default function MapYandex({url}: urlProps) {
  return (
    <div>
      <Map name='яндекс' image={yandex} link={url} />
    </div>
  )
}
