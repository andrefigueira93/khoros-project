import React, { useEffect, useState } from 'react';
import { useCountries } from '../../../contexts/useCountries';
import { filterResults } from '../../../lib/filterResults';
import { storyblokEditable } from '@storyblok/react';
import CountryItem from './CountryItem';

const resultados = [10, 25, 50, 100, 150, 200, 250];

const Countries = ({ blok }) => {
  const { countries } = useCountries();
  const [filter, setFilter] = useState('');
  const [filteredCountries, setFilteredCountries] = useState(countries);
  const [visualizando, setVisualizando] = useState(resultados[0]);

  useEffect(() => {
    filterResults({
      mainList: countries,
      filter,
      setAction: setFilteredCountries,
    });
  }, [countries, filter]);

  return (
    <div {...storyblokEditable(blok)} className={'flex flex-wrap'}>
      <div className="bg-white mx-auto my-4 rounded-lg shadow-md">
        <div className="mx-auto py-12 px-4 max-w-7xl sm:px-6 lg:px-8 lg:py-24">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-3 lg:gap-8">
            <div className="space-y-5 sm:space-y-4">
              <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
                {blok.title}
              </h2>
              <p className="text-xl text-gray-500">{blok.description}</p>
            </div>
            <div className="lg:col-span-2 self-center">
              <div className={'flex space-x-2'}>
                <select
                  defaultValue={visualizando}
                  onChange={({ target }) =>
                    setVisualizando(Number(target.value))
                  }
                  className={
                    'bg-white mb-4 py-2 px-4 border border-gray-300 rounded-lg'
                  }
                >
                  {resultados.map((resultado) => (
                    <option key={resultado} value={resultado}>
                      Exibir {resultado} Países
                    </option>
                  ))}
                </select>
                <input
                  className={
                    'w-full bg-white mb-4 py-2 px-4 border border-gray-300 rounded-lg'
                  }
                  placeholder={'Buscar país...'}
                  defaultValue={filter}
                  onChange={({ target }) => setFilter(target.value)}
                />
              </div>
            </div>
            <div className={'lg:col-span-3'}>
              <ul
                role="list"
                className="space-y-12 sm:grid sm:grid-cols-4 sm:gap-12 sm:space-y-0 lg:gap-x-8"
              >
                {filteredCountries.length > 0
                  ? filteredCountries?.map(
                      (country, i) =>
                        (i < visualizando || i === countries.length) && (
                          <CountryItem key={country.code} country={country} />
                        )
                    )
                  : Array.from({ length: visualizando }).map((_, i) => (
                      <CountryItem key={i} country={''} />
                    ))}
                <li>
                  <div className="flex items-center space-x-4 lg:space-x-6">
                    <h3 className="text-6xl animate-spin">🌎</h3>
                    <div className="font-medium text-lg leading-6 space-y-1">
                      <h3>
                        {countries.length > 0
                          ? `Mais ${
                              countries.length - visualizando
                            } Outros Países`
                          : 'Carregando Países...'}
                      </h3>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Countries;
