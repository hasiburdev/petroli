import React from 'react';
import { banner } from '../assets/images';

function Banner(): JSX.Element {
  return (
    <section
      className="bg-no-repeat bg-cover bg-center"
      style={{ backgroundImage: `url(${banner})` }}
    >
      <div className="bg-overlay h-full">
        <div className="max-w-container mx-auto py-64">
          <h1 className="font-pop font-bold text-[64px] text-white">
            We exist since 1975 on the <br /> oil and gas industry.
          </h1>
          <a
            href="#contact"
            className="bg-primary px-8 py-3  inline-block cursor-pointer font-pop font-semibold text-base uppercase text-white mt-7 border-2 border-solid border-primary ease-linear duration-300 hover:border-white hover:bg-transparent"
          >
            Learn More
          </a>
        </div>
      </div>
    </section>
  );
}

export default Banner;
