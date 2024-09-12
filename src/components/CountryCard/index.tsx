import styled from "styled-components";
import Colors from "../../common/GlobalStyles/Colors";
import { useQuery } from "@tanstack/react-query";
import { getApi } from "../../utils/http";
import { ICountry } from "../../common/types/ICountry";
import { Link } from "react-router-dom";

const CountryCardsContainer = styled.div`
  display: grid;
  justify-content: center;
  gap: 4.625rem;
  margin-top: 3.125rem;

  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));

  a {
    text-decoration: none;
    justify-self: center;
    min-height: 338px;
    max-width: 328px;
    width: 100%;

    article {
      display: inherit;
      border-radius: .375rem;
      background-color: ${Colors.darkBlue};

      img {
        border-radius: .375rem .375rem 0 0;
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

export default function CountryCard() {
  const { data: countries = [], isLoading } = useQuery<ICountry[]>({
    queryFn: getApi('all?fields=flags,name,population,region,capital'),
    queryKey: ['countries-data']
  });

  console.log('countries: ', countries);

  if (isLoading) {
    return `Carregando...`;
  }

  return (
    <CountryCardsContainer>
      {countries.map((country) => (
        
        <Link to="/" key={country.name.common}>        
          <article>
            <img src={country.flags.svg} alt={`Bandeira - ${country.name.common}`} />
            
            <CountryDetails>
              <h2>{country.name.common}</h2>
              <div>
                <p><span>Population: </span>{country.population}</p>
                <p><span>Region: </span>{country.region}</p>
                <p><span>Capital: </span>{country.capital}</p>
              </div>
            </CountryDetails>
          </article>
        </Link>
      ))}
    </CountryCardsContainer>
  );
}
