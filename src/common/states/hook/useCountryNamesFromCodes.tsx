import { useQuery } from '@tanstack/react-query';
import { getApi } from '../../../utils/http';
import { ICountry } from '../../interfaces/ICountry';

export function useCountryNamesFromCodes(country: ICountry) {
  const bordersCountries = country?.borders?.join(',') || '';

  const { data: borderCountriesData = [], isLoading } = useQuery({
    queryKey: ['borders-countries-data', bordersCountries],
    queryFn: getApi(`alpha?codes=${bordersCountries}?fields=flags,name,population,region,subregion,capital,tld,currencies,languages,borders`),
    enabled: bordersCountries.length > 0,
  });

  return { borderCountriesData, isLoading };
}