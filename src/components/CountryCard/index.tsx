import styled from "styled-components";
import Colors from "../../common/GlobalStyles/Colors";
import { Link } from "react-router-dom";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { countryFilterState, selectedCountryState } from "../../common/states/atom";
import { useFilteredCountries } from "../../common/states/hook/useFilteredCountries";
import { useState } from "react";
import { BaseButton } from "../../common/GlobalStyles/GlobalStyles";

const CardsContainerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  
`;

const CountryCardsContainer = styled.div`
  display: grid;
  justify-content: center;
  gap: 4.625rem;
  margin: 3.125rem 0;

  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));

  a {
    text-decoration: none;
    justify-self: center;
    min-height: 338px;
    max-width: 328px;
    width: 100%;

    article {
      display: inherit;
      background-color: ${Colors.darkBlue};
      border-radius: .375rem;
      overflow: auto;

      img {
        width: 100%;
        height: 198px;
        object-fit: cover;
      }
    }
  }

  @media (min-width: 768px) {
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));

    a {
      article {
        img {
          height: 160px;
        }
      }
    }
  }
`;

const CountryDetails = styled.section`
  padding: 2.25rem 1.875rem 3.625rem 1.875rem;

  h2 {
    color: ${Colors.white};
    font-size: 1.375rem;
    font-weight: 800;
    margin-bottom: 2rem;
  }

  div {
    display: flex;
    flex-direction: column;
    gap: 1rem;

    p {
      font-size: 1.125rem;
      font-weight: 400;
      color: white;
    }
    
    p span {
      font-weight: 700;
    }
  }

  @media (min-width: 768px) {
    padding: 1.875rem 1.5rem 3.125rem 1.5rem;

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

const StylizedButton = styled.button`
  ${BaseButton}
  align-self: center;
  padding: .5625rem 1rem;
  max-width: 130px;
  margin-bottom: 3.125rem;
`;

export default function CountryCard() {
  const setSelectedCountry = useSetRecoilState(selectedCountryState);
  const countryFilter = useRecoilValue(countryFilterState);
  const { filteredCountries, isLoading } = useFilteredCountries(countryFilter?.input, countryFilter?.select);
  const [sliceLimit, setSliceLimit] = useState<number>(8);

  console.log('countryFilter: ', countryFilter);
  console.log('filteredCountries', filteredCountries.length);

  if (isLoading) {
    return `Carregando...`;
  }

  return (
    <CardsContainerWrapper>
      <CountryCardsContainer>
        {filteredCountries.slice(0, sliceLimit).map((country) => (
          
          <Link 
            to="/overview" 
            key={country.name.common}
            onClick={() => setSelectedCountry(country)}
          >        
            <article>
              <img src={country.flags.svg} alt={`Bandeira - ${country.name.common}`} />
              
              <CountryDetails>
                <h2>{country.name.common}</h2>
                <div>
                  <p><span>Population: </span>{country.population.toLocaleString('en-US')}</p>
                  <p><span>Region: </span>{country.region}</p>
                  <p><span>Capital: </span>{country.capital.join(', ')}</p>
                </div>
              </CountryDetails>
            </article>
          </Link>
        ))}
      </CountryCardsContainer>

      {
        filteredCountries.length > 8
          ?
          <StylizedButton
            onClick={() => filteredCountries.length > sliceLimit ? setSliceLimit(sliceLimit + 8) : setSliceLimit(8)}
          >
            {filteredCountries.length > sliceLimit ? 'Load More' : 'Show Less'}

          </StylizedButton>
          : ''
      }
      
    </CardsContainerWrapper>
  );
}
