import React from 'react';
import { AiOutlineMail, AiOutlinePhone } from 'react-icons/ai';
import {
  FaFacebook,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from 'react-icons/fa';
import { HiOutlineLocationMarker } from 'react-icons/hi';

import { certificate1, certificate2, logoFooter } from '../assets/images';

function Footer(): JSX.Element {
  return (
    <section className="bg-footerbg ">
      <div className="max-w-container py-36 mx-auto flex flex-row">
        <div className="basis-2/5">
          <picture>
            <img src={logoFooter} alt="logo" />
          </picture>
          <div className="text-white flex  flex-col gap-y-4 my-8">
            <p className="font-pop font-normal  text-sm flex items-center gap-x-1.5 ">
              <AiOutlineMail /> mail@yourcompany.com
            </p>
            <p className="font-pop font-normal text-sm flex items-center gap-x-1.5">
              <AiOutlinePhone /> +896 120 5889 (Toll free)
            </p>
            <p className="font-pop font-normal text-sm flex items-center gap-x-1.5">
              <HiOutlineLocationMarker /> 101 Baker Street, New York, USA, 12345
            </p>
          </div>
          <div className="text-primary flex gap-x-5 font-base">
            <FaFacebook className="cursor-pointer hover:text-red-500" />
            <FaTwitter className="cursor-pointer hover:text-red-500" />
            <FaLinkedinIn className="cursor-pointer hover:text-red-500" />
            <FaInstagram className="cursor-pointer hover:text-red-500" />
          </div>
        </div>
        <div className="text-white basis-1/5">
          <h4 className="font-pop font-bold text-base leading-[80px]">
            Company
          </h4>
          <ul className="font-pop font-normal text-sm ">
            <li className="leading-7 cursor-pointer hover:text-gray-300">
              Home
            </li>
            <li className="leading-7 cursor-pointer hover:text-gray-300">
              About
            </li>
            <li className="leading-7 cursor-pointer hover:text-gray-300">
              Services
            </li>
            <li className="leading-7 cursor-pointer hover:text-gray-300">
              Gallery
            </li>
          </ul>
        </div>
        <div className="text-white basis-1/5">
          <h4 className="font-pop font-bold text-base leading-[80px]">
            Others
          </h4>
          <ul className="font-pop font-normal text-sm ">
            <li className="leading-7 cursor-pointer hover:text-gray-300">
              Blog
            </li>
            <li className="leading-7 cursor-pointer hover:text-gray-300">
              Contact
            </li>
            <li className="leading-7 cursor-pointer hover:text-gray-300">
              Terms and Services
            </li>
            <li className="leading-7 cursor-pointer hover:text-gray-300">
              Privacy Policy
            </li>
          </ul>
        </div>
        <div className="text-white basis-1/5">
          <h4 className="font-pop font-bold text-base leading-[80px]">
            Certificate
          </h4>
          <ul className="font-pop font-normal text-sm flex gap-x-2">
            <picture>
              <img
                src={certificate1}
                alt="Certificate"
                loading="lazy"
                className="cursor-pointer"
              />
            </picture>
            <picture>
              <img
                src={certificate2}
                alt="Certificate"
                loading="lazy"
                className="cursor-pointer"
              />
            </picture>
          </ul>
        </div>
      </div>
      <div className="bg-copyrightbg">
        <div className="max-w-container mx-auto">
          <p className="font-pop font-semibold text-para text-base py-10">
            © Copyright 2022 by AltDesain Studio – All right reserved.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Footer;
