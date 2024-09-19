import styled from "styled-components";
import Colors from "../common/GlobalStyles/Colors";
import ArrowIcon from "../../public/assets/icons/Arrow-left.svg?react";
import { BaseButton } from "../common/GlobalStyles/GlobalStyles";
import { useRecoilState } from "recoil";
import { selectedCountryState } from "../common/states/atom";
import { useCountryNamesFromCodes } from "../common/states/hook/useCountryNamesFromCodes";
import { Link } from "react-router-dom";

export const StylizedLink = styled(Link)`
  ${BaseButton}
  font-size: 1.125rem;
  font-weight: 400;

  max-width: 130px;
  padding: .5625rem 1rem;

  gap: .875rem;

  transition: all .2s ease-in-out;
  margin-bottom: 5rem;

  svg path {
    stroke: ${Colors.white};
    font-weight: 800;
  }
`;

export const CountryFlag = styled.img`
  max-width: 560px;
  width: 100%;
`;

const CountryDetails = styled.section`
  margin-top: 3.875rem;

  h2 {
    color: ${Colors.white};
    font-size: 1.75rem;
    font-weight: 800;
    margin-bottom: 2rem;
  }

  div {
    display: flex;
    flex-direction: column;
    gap: 1.25rem;

    p {
      font-size: 1.125rem;
      font-weight: 400;
      color: white;
    }
    
    p span {
      font-weight: 700;
    }
  }

  .country-Info-wrapper {
    margin: 4rem 0;
  }

  @media (min-width: 768px) {
    h2 {
      font-size: 1.125rem;
      margin-bottom: 1.625rem;
    }

    div {
      gap: .875rem;

      p {
        font-size: .875rem;
      }
    }
  }
`;

const BorderCountries = styled.div`
  margin-bottom: 4.75rem;

  h2 {
    font-size: 1.25rem;
    font-weight: 600;
    margin-bottom: 1.875rem;
  }

  div {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    flex-wrap: wrap;
    gap: .75rem;
    align-items: center;

    a {
      ${BaseButton}
      font-size: 1rem;
      font-weight: 300;
      padding: .4375rem .375rem;
    }
  }
`;

export default function CountryOverview() {
  const [selectedCountry, setSelectedCountry] = useRecoilState(selectedCountryState);
  const country = Array.isArray(selectedCountry) ? selectedCountry[0] : selectedCountry;
  const { borderCountriesData, isLoading } = useCountryNamesFromCodes(country);

  if (isLoading) {
    return `Carregando...`;
  }

  console.log('country', country);
  console.log('borderCountriesData', borderCountriesData);

  return (
    <div>
      <StylizedLink to="/">
        <ArrowIcon />
        Back
      </StylizedLink>

      <CountryFlag src={country?.flags.svg} alt={`Bandeira - ${country?.name.common}`} />

      <CountryDetails>
        <h2>{country?.name.common}</h2>

        <div>
          <p><span>Native Name: </span>{country?.name.official}</p>
          <p><span>Population: </span>{country?.population.toLocaleString('en-US')}</p>
          <p><span>Region: </span>{country?.region}</p>
          <p><span>Sub Region: </span>{country?.subregion}</p>
          <p><span>Capital: </span>{country?.capital.join(', ')}</p>
        </div>

        <div className="country-Info-wrapper">
          <p><span>Top Level Domain: </span>{country?.tld[0]}</p>
          <p>
            <span>Currencies: </span>
            {
              country?.currencies &&
              Object.values(country.currencies).length > 0 &&
              (Object.values(country.currencies)[0] as { name: string }).name
            }
          </p>
          <p><span>Languages: </span>{country?.languages ? Object.values(country.languages).join(', ') : 'N/A'}</p>
        </div>
      </CountryDetails>

      {borderCountriesData.length > 0 && (
        <BorderCountries>
          <h2>Border Countries:</h2>

          <div>
            {borderCountriesData.slice(0, 3).map((borderCountry, index) => (
              <Link 
                to="#" 
                key={index} 
                onClick={() => setSelectedCountry(borderCountry)}
              >
                {borderCountry.name.common}
              </Link>
            ))}
          </div>
        </BorderCountries>
      )}
    </div>
  );
}
