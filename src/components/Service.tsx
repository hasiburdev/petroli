import React from 'react';
import { service1, service2, service3 } from '../assets/images';

function Service(): JSX.Element {
  return (
    <section className="mt-7">
      <div className="max-w-[1440px] mx-auto flex flex-wrap">
        <div className="w-1/2 flex flex-col justify-center items-center py-36">
          <h2 className="font-pop font-bold text-[64px]">Our Services</h2>
          <p className="font-pop font-semibold text-base text-para w-[415px]">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout.
          </p>
        </div>
        <div
          className="w-1/2 bg-cover bg-no-repeat bg-center "
          style={{ backgroundImage: `url(${service1})` }}
        >
          <div className="h-full bg-overlay px-28  flex flex-col justify-center items-start">
            <h3 className="text-white text-4xl font-pop font-bold">
              Modern natural oil and gas refineries.
            </h3>
            <a
              href="#contact"
              className="bg-primary px-8 py-3  inline-block cursor-pointer font-pop font-semibold text-base uppercase text-white mt-7 border-2 border-solid border-primary ease-linear duration-300 hover:border-white hover:bg-transparent"
            >
              Learn More
            </a>
          </div>
        </div>
        <div
          className="w-1/2 bg-cover bg-no-repeat bg-center "
          style={{ backgroundImage: `url(${service2})` }}
        >
          <div className="h-full bg-overlay px-28  flex flex-col justify-center items-start py-36">
            <h3 className="text-white text-4xl font-pop font-bold">
              Supply of national industries.
            </h3>
            <a
              href="#contact"
              className="bg-primary px-8 py-3  inline-block cursor-pointer font-pop font-semibold text-base uppercase text-white mt-7 border-2 border-solid border-primary ease-linear duration-300 hover:border-white hover:bg-transparent"
            >
              Learn More
            </a>
          </div>
        </div>
        <div
          className="w-1/2 bg-cover bg-no-repeat bg-center "
          style={{ backgroundImage: `url(${service3})` }}
        >
          <div className="h-full bg-overlay px-28  flex flex-col justify-center items-start">
            <h3 className="text-white text-4xl font-pop font-bold">
              National fuel distribution and supply.
            </h3>
            <a
              href="#contact"
              className="bg-primary px-8 py-3  inline-block cursor-pointer font-pop font-semibold text-base uppercase text-white mt-7 border-2 border-solid border-primary ease-linear duration-300 hover:border-white hover:bg-transparent"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Service;
