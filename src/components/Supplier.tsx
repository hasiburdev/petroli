import React from 'react';
import { supplier1, supplier2, supplier3, supplier4 } from '../assets/images';

function Supplier(): JSX.Element {
  return (
    <section>
      <div className="max-w-container mx-auto flex items-center justify-between gap-x-44 pt-20 pb-24">
        <h2 className="font-pop text-5xl font-bold leading-[72px] max-w-[290px]">
          The biggest supplier on the country
        </h2>
        <p className="font-pop text-base font-semibold text-para">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution.
        </p>
      </div>
      <div className="max-w-[1440px] mx-auto flex justify-between gap-4">
        <picture>
          <img src={supplier1} alt="Supplier" loading="lazy" />
        </picture>
        <picture>
          <img src={supplier2} alt="Supplier" loading="lazy" />
        </picture>
        <picture>
          <img
            className="w-full"
            src={supplier3}
            alt="Supplier"
            loading="lazy"
          />
        </picture>{' '}
        <picture>
          <img src={supplier4} alt="Supplier" loading="lazy" />
        </picture>
      </div>
    </section>
  );
}

export default Supplier;
