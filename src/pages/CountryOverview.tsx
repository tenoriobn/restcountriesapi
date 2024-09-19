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

const CountryDetailsWrapper = styled.div`
  display: grid;
  gap: 3.875rem;

  .country-flag {
    object-fit: cover;
    width: 100%;
    max-width: 560px;
    max-height: 401px;
  }

  .country-content {
    max-width: 560px;
    width: 100%;
  }

  @media (min-width: 768px) {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;

    .country-flag {
      max-width: 560px;
      height: 401px;
    }

    /* .country-content {
      max-width: 560px;
    } */
  }

  @media (min-width: 1440px) {
    gap: 2rem;
  }
`;

const CountryDetails = styled.div`
  .country-title {
    color: ${Colors.white};
    font-size: 1.75rem;
    font-weight: 800;
    margin-bottom: 2.25rem;
  }

  @media (min-width: 768px) {
    .country-title {
      font-size: 2rem;
    }
  }
`;

const CountryInfoContainer = styled.div`
  display: grid;
  gap: 2rem;

  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    align-items: baseline;
  }
`;

const CountryInfo = styled.div`
  display: grid;
  gap: 1.25rem;

  p {
    font-size: 1.125rem;
    font-weight: 400;
    color: white;

    span {
      font-weight: 700;
    }
  }

  @media (min-width: 768px) {
    p {
      font-size: 1rem;
    }
  }
`;

const BorderCountriesContainer = styled.div`
  display: grid;
  gap: 1.75rem;
  margin-top: 3.5rem;
  
  .border-countries__subtitle {
    font-size: 1.25rem;
    font-weight: 600;
  }

  .border-countries__list {
    display: grid;
    align-items: center;
    grid-template-columns: repeat(3, 1fr);
    flex-wrap: wrap;
    gap: .75rem;

    .border-countries__list_link {
      ${BaseButton}
      font-size: 1rem;
      font-weight: 300;
      padding: .4375rem .375rem;
    }
  }

  @media (min-width: 768px) {
    grid-template-columns: auto 1fr;
    align-items: center;
    gap: 1rem;
    margin: 4.75rem 0 0 0;

    .border-countries__subtitle {
      font-size: 1rem;
      margin-bottom: 0rem;
    }

    .border-countries__list {
      .border-countries__list_link {
        padding: .375rem;
      }
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

  return (
    <div>
      <StylizedLink to="/">
        <ArrowIcon />
        Back
      </StylizedLink>

      <CountryDetailsWrapper>
        <img 
          className="country-flag"
          src={country?.flags.svg} 
          alt={`Bandeira - ${country?.name.common}`} 
        />

        <div className="country-content">
          <CountryDetails>
            <h2 className="country-title">{country?.name.common}</h2>

            <CountryInfoContainer>
              <CountryInfo>
                <p>
                  <span>Native Name: </span>
                  {
                    country?.name?.nativeName && (() => {
                      const nativeNames = Object.values(country.name.nativeName);
                      return nativeNames.length > 0 
                        ? (nativeNames[nativeNames.length - 1] as { common: string }).common 
                        : null;
                    })()
                  }
                </p>
                <p><span>Population: </span>{country?.population.toLocaleString('en-US')}</p>
                <p>
                  <span>Region: </span>
                  {country?.region === "Americas" ? "América" : country?.region}
                </p>
                <p><span>Sub Region: </span>{country?.subregion}</p>
                <p><span>Capital: </span>{country?.capital.join(', ')}</p>
              </CountryInfo>

              <CountryInfo>
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
              </CountryInfo>
            </CountryInfoContainer>
          </CountryDetails>

          {borderCountriesData.length > 0 && (
            <BorderCountriesContainer>
              <h3 className="border-countries__subtitle">Border Countries:</h3>

              <div className="border-countries__list">
                {borderCountriesData.slice(0, 3).map((borderCountry, index) => (
                  <Link
                    className="border-countries__list_link"
                    to="#"
                    key={index}
                    onClick={() => setSelectedCountry(borderCountry)}
                  >
                    {borderCountry.name.common}
                  </Link>
                ))}
              </div>
            </BorderCountriesContainer>
          )}
        </div>

      </CountryDetailsWrapper>
    </div>
  );
}
