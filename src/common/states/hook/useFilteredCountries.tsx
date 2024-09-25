import { useQuery } from '@tanstack/react-query';
import { ICountry } from '../../interfaces/ICountry';
import { getApi } from '../../../utils/http';

const desiredCountries = [
  'Germany', 'United States', 'Brazil', 'Iceland', 'Afghanistan',
  'Åland Islands', 'Albania', 'Algeria'
];

export function useFilteredCountries(filterInput = '', filterSelect = '') {
  const { data: countries = [], isLoading, isError } = useQuery<ICountry[]>({
    queryFn: getApi('all?fields=flags,name,population,region,subregion,capital,tld,currencies,languages,borders'),
    queryKey: ['countries-data'],
    staleTime: 60000
  });

  const filteredCountries = (filterInput === '' && filterSelect === '')
    ? countries.filter(country => desiredCountries.includes(country.name.common))
    : countries.filter(country => {
      const matchesName = filterInput === '' || country.name.common.toLowerCase().includes(filterInput.toLowerCase());
      const matchesRegion = filterSelect === '' || country.region.toLowerCase().includes(filterSelect.toLowerCase());
      return matchesName && matchesRegion;
    });
    
  return {
    filteredCountries,
    isLoading,
    isError
  };
}
