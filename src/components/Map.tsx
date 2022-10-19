import React from 'react';
import { map } from '../assets/images';

function Map(): JSX.Element {
  return (
    <section className="h-96" style={{ backgroundImage: `url(${map})` }} />
  );
}

export default Map;
