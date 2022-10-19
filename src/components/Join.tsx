import React from 'react';

function Join(): JSX.Element {
  return (
    <section className="bg-primary pb-3 pt-2 border-b-2 border-solid border-yellowborder">
      <div className="max-w-container mx-auto flex justify-between items-center">
        <h2 className="font-pop font-bold text-4xl text-white">
          Want to join as member branch in your area?
        </h2>

        <a
          href="#contact"
          className="border-2 border-solid border-white px-8 py-3 my-11 font-pop font-semibold text-base uppercase text-white  inline-block "
        >
          Contact
        </a>
      </div>
    </section>
  );
}

export default Join;
