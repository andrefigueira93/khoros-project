import { storyblokEditable } from '@storyblok/react';
import React from 'react';

const SectionHeading = ({ blok }) => {
  return (
    <div
      {...storyblokEditable(blok)}
      className="relative bg-gray-50 py-12"
    >
      <div className="mx-auto max-w-md px-4 text-center sm:px-6 sm:max-w-3xl lg:px-8 lg:max-w-7xl">
        <div>
          <h2 className="text-base font-semibold tracking-wider text-cyan-600 uppercase">
            {blok.category}
          </h2>
          <p className="mt-2 text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl">
            {blok.title}
          </p>
          <p className="mt-5 max-w-prose mx-auto text-xl text-gray-500">
            {blok.description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default SectionHeading;
