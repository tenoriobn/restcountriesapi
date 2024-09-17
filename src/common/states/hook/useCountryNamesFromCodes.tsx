import { useQuery } from '@tanstack/react-query';
import { getApi } from '../../../utils/http';
import { ICountry } from '../../types/ICountry';

export function useCountryNamesFromCodes(country?: ICountry) {
  // Extrai os códigos dos países fronteiriços e transforma em uma string separada por vírgulas
  const bordersCountries = country?.borders?.join(',') || '';

  // Busca informações dos países referente aos códigos separados por vírgula.
  const { data: borderCountriesData = [], isLoading } = useQuery({
    queryKey: ['borders-countries-data', bordersCountries],
    queryFn: getApi(`alpha?codes=${bordersCountries}?fields=flags,name,population,region,subregion,capital,tld,currencies,languages,borders`),
    enabled: bordersCountries.length > 0, // só executa requisição caso tenha código na lista
  });

  return { borderCountriesData, isLoading };
}