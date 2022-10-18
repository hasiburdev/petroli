import React from 'react';
import {
  brandLogo1,
  brandLogo2,
  brandLogo3,
  brandLogo4,
} from '../assets/images';

function Brands(): JSX.Element {
  return (
    <section className="py-28">
      <div className="max-w-container mx-auto flex justify-center items-center gap-6">
        <picture>
          <img src={brandLogo1} alt="" />
        </picture>
        <picture>
          <img src={brandLogo2} alt="" />
        </picture>{' '}
        <picture>
          <img src={brandLogo3} alt="" />
        </picture>{' '}
        <picture>
          <img src={brandLogo4} alt="" />
        </picture>
      </div>
    </section>
  );
}

export default Brands;
