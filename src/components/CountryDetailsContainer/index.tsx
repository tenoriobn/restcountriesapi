import styled from "styled-components";
import { useCountryNamesFromCodes } from "../../common/states/hook/useCountryNamesFromCodes";
import { useRecoilState, useRecoilValue } from "recoil";
import { errorStatusState, selectedCountryState } from "../../common/states/atom";
import { Link } from "react-router-dom";
import Colors from "../../common/GlobalStyles/Colors";
import { BaseButton } from "../../common/GlobalStyles/GlobalStyles";
import SkeletonCountryDetailsContainer from "./SkeletonCountryDetailsContainer";
import useSessionStorage from "../../common/states/hook/useSessionStorage";
import MessageError from "../MessageError";

export const CountryDetailsWrapper = styled.div`
  display: grid;
  justify-content: center;
  gap: 3.875rem;

  .country-flag {
    object-fit: cover;
    width: 100%;
    max-width: 560px;
    height: 401px;
  }

  .country-content {
    max-width: 560px;
    width: 100%;
  }

  @media (min-width: 1440px) {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;

    .country-flag {
      max-width: 560px;
      height: 401px;
    }
  }

  @media (min-width: 1440px) {
    gap: 2rem;
  }
`;

export const CountryDetails = styled.div`
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

export const CountryInfoContainer = styled.div`
  display: grid;
  gap: 2rem;

  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    align-items: baseline;
  }
`;

export const CountryInfo = styled.div`
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

export const BorderCountriesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1.75rem;
  margin-top: 3.5rem;
  
  .border-countries__subtitle {
    font-size: 1.25rem;
    font-weight: 600;
    width: 100%;
  }

  .border-countries__list_link {
    ${BaseButton}
    font-size: 1rem;
    font-weight: 300;
    padding: .4375rem .375rem;
    width: max-content;
    min-width: 90px;
  }

  @media (min-width: 768px) {
    align-items: center;
    gap: 1rem;
    margin: 4.75rem 0 0 0;

    .border-countries__subtitle {
      font-size: 1rem;
      margin-bottom: 0rem;
      max-width: 128px;
      width: 100%;
    }

    .border-countries__list_link {
      padding: .375rem;
    }
  }
`;

export default function CountryDetailsContainer() {
  const [selectedCountry, setSelectedCountry] = useRecoilState(selectedCountryState);
  const country = Array.isArray(selectedCountry) ? selectedCountry[0] : selectedCountry;
  const { borderCountriesData, isLoading } = useCountryNamesFromCodes(country);
  const errorStatus = useRecoilValue(errorStatusState);

  console.log('country', country);
  console.log('borderCountriesData', borderCountriesData);

  useSessionStorage();

  // const isLoadingTeste = true;
  if (isLoading) {
    return <SkeletonCountryDetailsContainer />;
  }

  if (errorStatus) {
    return (
      <MessageError>
        We are currently experiencing technical difficulties. Please try again later.
      </MessageError>
    );
  }

  return (
    <CountryDetailsWrapper>
      <img
        className="country-flag"
        src={country?.flags.svg}
        alt={`Bandeira - ${country?.name.common}`}
        loading="lazy"
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
            
            {borderCountriesData.map((borderCountry, index) => (
              <Link
                className="border-countries__list_link"
                to="#"
                key={index}
                onClick={() => setSelectedCountry(borderCountry)}
              >
                {borderCountry.name.common}
              </Link>
            ))}
          </BorderCountriesContainer>
        )}
      </div>

    </CountryDetailsWrapper>
  );
}
