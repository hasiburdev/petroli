import React from 'react';
import { AiOutlineMail, AiOutlinePhone } from 'react-icons/ai';
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from 'react-icons/fa';

function Header(): JSX.Element {
  return (
    <header className="bg-black px-2.5 border-b-2 border-solid border-yellowborder">
      <div className="flex justify-between max-w-container mx-auto py-3.5">
        <div className="text-white flex  divide-x divide-[#5C6A92]">
          <p className="font-pop font-normal pr-7 text-xs flex items-center gap-x-1.5 ">
            <AiOutlineMail /> mail@yourcompany.com
          </p>
          <p className="font-pop font-normal pl-7 text-xs flex items-center gap-x-1.5">
            <AiOutlinePhone /> +896 120 5889 (Toll free)
          </p>
        </div>
        <div className="text-white flex gap-x-5 font-base">
          <FaFacebookF className="cursor-pointer hover:text-gray-300" />
          <FaTwitter className="cursor-pointer hover:text-gray-300" />
          <FaLinkedinIn className="cursor-pointer hover:text-gray-300" />
          <FaInstagram className="cursor-pointer hover:text-gray-300" />
        </div>
      </div>
    </header>
  );
}

export default Header;
