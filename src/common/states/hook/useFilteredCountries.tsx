import { useQuery } from '@tanstack/react-query';
import { ICountry } from '../../types/ICountry';
import { getApi } from '../../../utils/http';

const desiredCountries = [
  'Germany', 'United States', 'Brazil', 'Iceland', 'Afghanistan',
  'Åland Islands', 'Albania', 'Algeria'
];

export function useFilteredCountries() {
  const { data: countries = [], isLoading } = useQuery<ICountry[]>({
    queryFn: getApi('all?fields=flags,name,population,region,subregion,capital,tld,currencies,languages,borders'),
    queryKey: ['countries-data']
  });

  // Filtra os países desejados
  const filteredCountries = countries.filter(country =>
    desiredCountries.includes(country.name.common)
  );

  return {
    filteredCountries,
    isLoading
  };
}
