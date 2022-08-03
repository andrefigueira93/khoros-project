import { ExternalLinkIcon } from '@heroicons/react/outline';
import { storyblokEditable } from '@storyblok/react';

const CTA = ({ blok }) => (
  <div className="relative bg-gray-900" {...storyblokEditable(blok)}>
    <div className="relative h-56 bg-indigo-600 sm:h-72 md:absolute md:left-0 md:h-full md:w-1/2">
      <img
        className="w-full h-full object-cover"
        src={blok.image?.filename}
        alt=""
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-r from-teal-500 to-cyan-600 mix-blend-multiply"
      />
    </div>
    <div className="relative mx-auto max-w-md px-4 py-12 sm:max-w-7xl sm:px-6 sm:py-20 md:py-28 lg:px-8 lg:py-32">
      <div className="md:ml-auto md:w-1/2 md:pl-10">
        <h2 className="text-base font-semibold uppercase tracking-wider text-gray-300">
          {blok.title}
        </h2>
        <p className="mt-2 text-white text-3xl font-extrabold tracking-tight sm:text-4xl">
          {blok.subtitle}
        </p>
        <p className="mt-3 text-lg text-gray-300">{blok.content}</p>
        <div className="mt-8">
          <div className="inline-flex rounded-md shadow">
            <a
              href={blok.buttonUrl}
              target={'_blank'}
              rel={'noopener noreferrer'}
              className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-gray-900 bg-white hover:bg-gray-50"
            >
              {blok.buttonText}
              <ExternalLinkIcon
                className="-mr-1 ml-3 h-5 w-5 text-gray-400"
                aria-hidden="true"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default CTA;
