import React from 'react';
import { company } from '../assets/images';

function Company(): JSX.Element {
  return (
    <section className="bg-sectionback">
      <div className="max-w-container mx-auto flex py-32">
        <div className="w-2/5 bg-primary px-16 py-24">
          <h2 className="font-pop text-4xl font-bold leading-[72px] max-w-[290px] text-white">
            Learn more about our company
          </h2>
        </div>
        <div
          className="w-3/5 bg-cover bg-no-repeat bg-center grid place-content-center"
          style={{ backgroundImage: `url(${company})` }}
        >
          <a
            href="#contact"
            className="bg-white px-8 py-3  inline-block cursor-pointer font-pop font-semibold text-base uppercase text-primary mt-7 border-2 border-solid border-white ease-linear duration-300 hover:text-white hover:bg-transparent"
          >
            Learn More
          </a>
        </div>
      </div>
    </section>
  );
}

export default Company;
