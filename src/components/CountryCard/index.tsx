import styled from "styled-components";
import { Link } from "react-router-dom";
import { motion } from 'framer-motion';
import { useRecoilValue, useSetRecoilState } from "recoil";
import { countryFilterState, selectedCountryState } from "src/common/states/atom";
import { useFilteredCountries } from "src/common/states/hook/useFilteredCountries";
import { BaseButton } from "src/common/GlobalStyles/GlobalStyles";
import 'react-loading-skeleton/dist/skeleton.css';
import SkeletonCountryCard from "./SkeletonCountryCard";
import { useCardLimitByScreenSize } from "src/common/states/hook/useCardLimitByScreenSize";
import MessageError from "../MessageError";
import { animatedTransition, transitions } from "src/common/Themes/transitions";

export const CardsContainerWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const CountryCardsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(284px, 1fr));

  justify-content: center;
  gap: 4.625rem;

  a {
    text-decoration: none;
    justify-self: center;
    transition: ${transitions.smoothTransition};
    max-width: 328px;
    width: 100%;
    box-shadow: 0rem .25rem .5625rem -0.4375rem ${({ theme }) => theme.primaryShadowColor};

    article {
      display: inherit;
      background-color: ${({ theme }) => theme.secondaryBg};
      border: .0625rem solid ${({ theme }) => theme.borderColor};
      border-radius: .375rem;
      overflow: auto;
      height: 100%;

      img {
        width: 100%;
        height: 198px;
        aspect-ratio: 3 / 2;
        object-fit: cover;
        border-bottom: .0625rem solid ${({ theme }) => theme.borderColor};
      }
    }

    &:hover {
      opacity: .7;
    }
  }

  @media (min-width: 768px) {
    a {
      flex: 1 1 240px;
      
      article {
        img {
          height: 160px;
        }
      }
    }
  }

  @media (min-width: 992px) {
    grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
    justify-content: start;

    a {      
      article {
        img {
          height: 160px;
        }
      }
    }
  }
`;

export const CountryCardDetails = styled.section`
  padding: 2.25rem 1.875rem 3.625rem 1.875rem;

  h2 {
    color: ${({ theme }) => theme.primaryText};
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
      color: ${({ theme }) => theme.primaryText};
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
  margin-top: 3.125rem;
`;

export default function CountryCard() {
  const setSelectedCountry = useSetRecoilState(selectedCountryState);
  const countryFilter = useRecoilValue(countryFilterState);
  const { filteredCountries, isLoading, isError } = useFilteredCountries(countryFilter?.input, countryFilter?.select);
  const { limit, setLimit } = useCardLimitByScreenSize();
  const animation = animatedTransition();

  if (isLoading) {
    return <SkeletonCountryCard />;
  }

  if (isError) {
    return (
      <MessageError>
        We are currently experiencing technical difficulties. Please try again later.
      </MessageError>
    );
  }

  return (
    <CardsContainerWrapper>
      <CountryCardsContainer>
        {filteredCountries.length > 0 ?
          filteredCountries.slice(0, limit.sliceLimit).map((country) => (
            <Link
              to="/overview"
              key={country.name.common}
              onClick={() => setSelectedCountry(country)}
            >
              <motion.article {...animation}>
                <img 
                  src={country.flags.png} 
                  alt={country.flags.alt || country.name.common} 
                />

                <CountryCardDetails>
                  <h2>{country.name.common}</h2>
                  <div>
                    <p><span>Population: </span>{country.population.toLocaleString('en-US')}</p>
                    <p><span>Region: </span>{country.region}</p>
                    <p><span>Capital: </span>{country.capital.join(', ')}</p>
                  </div>
                </CountryCardDetails>
              </motion.article>
            </Link>
          ))
          : <p>Country not found!</p>
        }
      </CountryCardsContainer>

      {filteredCountries.length > limit.cardsLimit ?
        (
          <StylizedButton
            onClick={() =>
              filteredCountries.length > limit.sliceLimit
                ? setLimit({ ...limit, sliceLimit: limit.sliceLimit + limit.cardsLimit })
                : setLimit({ ...limit, sliceLimit: limit.cardsLimit })
            }
          >
            {filteredCountries.length > limit.sliceLimit ? 'Load More' : 'Show Less'}
          </StylizedButton>
        ) : ('')
      }
    </CardsContainerWrapper>
  );
}
