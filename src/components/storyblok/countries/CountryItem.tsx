import React from 'react';
import Skeleton from 'react-loading-skeleton';

const Country = ({ country }) => {
  return (
    <li>
      <div className="flex items-center space-x-4 lg:space-x-6">
        <h3 className="text-6xl">
          {country ? country.emoji : <Skeleton height={30} width={30} circle />}
        </h3>
        <div className="font-medium text-lg leading-6 space-y-1 overflow-hidden">
          <h3>{country ? country.name : <Skeleton width={200} />}</h3>
          <p className="text-indigo-600">
            {country ? country.capital : <Skeleton width={200} />}
          </p>
        </div>
      </div>
    </li>
  );
};

export default Country;
