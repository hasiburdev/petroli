import React from 'react';
import { FaAngleRight } from 'react-icons/fa';
import { blog1, blog2, blog3 } from '../assets/images';

function Blogs(): JSX.Element {
  return (
    <section className="py-28 bg-sectionback">
      <div className="max-w-container mx-auto grid grid-cols-3 gap-x-16">
        <div
          className="bg-cover bg-no-repeat bg-center"
          style={{ backgroundImage: `url(${blog1})` }}
        >
          <div className="bg-overlay px-11 pt-20 pb-12">
            <h3 className="font-pop font-bold text-2xl text-white mb-3">
              lorem ipsum dolor sit amet consectetur adipiscing elit sed do
              eiusmod.
            </h3>
            <a
              href="#contact"
              className="bg-white/50 px-4 py-2  inline-block cursor-pointer font-pop font-semibold text-xs uppercase text-white mt-7 border-2 border-solid border-transparent ease-linear duration-300 hover:border-white hover:bg-transparent"
            >
              Read More
            </a>
          </div>
        </div>
        <div
          className="bg-cover bg-no-repeat bg-center"
          style={{ backgroundImage: `url(${blog2})` }}
        >
          <div className="bg-overlay px-11 pt-20 pb-12">
            <h3 className="font-pop font-bold text-2xl text-white mb-3">
              lorem ipsum dolor sit amet consectetur adipiscing elit sed do
              eiusmod.
            </h3>
            <a
              href="#contact"
              className="bg-white/50 px-4 py-2  inline-block cursor-pointer font-pop font-semibold text-xs uppercase text-white mt-7 border-2 border-solid border-transparent ease-linear duration-300 hover:border-white hover:bg-transparent"
            >
              Read More
            </a>
          </div>
        </div>
        <div
          className="bg-cover bg-no-repeat bg-center"
          style={{ backgroundImage: `url(${blog3})` }}
        >
          <div className="bg-overlay px-11 pt-20 pb-12">
            <h3 className="font-pop font-bold text-2xl text-white mb-3">
              lorem ipsum dolor sit amet consectetur adipiscing elit sed do
              eiusmod.
            </h3>
            <a
              href="#contact"
              className="bg-white/50 px-4 py-2  inline-block cursor-pointer font-pop font-semibold text-xs uppercase text-white mt-7 border-2 border-solid border-transparent ease-linear duration-300 hover:border-white hover:bg-transparent"
            >
              Read More
            </a>
          </div>
        </div>
      </div>
      <div className="max-w-container mx-auto">
        <p className="font-pop font-bold mt-7 flex items-center gap-x-1 justify-end cursor-pointer">
          MORE FROM THE BLOG <FaAngleRight />
        </p>
      </div>
    </section>
  );
}

export default Blogs;
