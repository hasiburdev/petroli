import React from 'react';
import { logo } from '../assets/images';

function Navbar(): JSX.Element {
  return (
    <nav className="bg-primary pb-6 pt-5">
      <div className="max-w-container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div>
          <picture>
            <img
              className="h-11 object-cover"
              src={logo}
              alt="Petroil"
              loading="lazy"
            />
          </picture>
        </div>
        <div className="flex gap-x-16 items-center">
          <ul className="flex gap-x-12 font-pop font-semibold text-base text-white">
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#home">About</a>
            </li>
            <li>
              <a href="#home">Service</a>
            </li>
            <li>
              <a href="#home">Gallery</a>
            </li>
            <li>
              <a href="#home">Blog</a>
            </li>
          </ul>
          <a
            href="#contact"
            className="border-2 border-solid border-white px-8 py-3 font-pop font-semibold text-base uppercase text-white  inline-block "
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
