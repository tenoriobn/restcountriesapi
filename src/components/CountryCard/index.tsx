import styled from "styled-components";
import Colors from "../../common/GlobalStyles/Colors";
import { useQuery } from "@tanstack/react-query";
import { getApi } from "../../utils/http";
import { ICountry } from "../../common/types/ICountry";


// Correções desse componente
// REFATORAR ESPAÇAMENTO DAS INFORMAÇÕES DENTRO DO CARD, BEM COMO O TAMANHO DAS FONTES E ESPAÇO DAS LINHAS.
// ENQUADRAR IMAGENS CORRETAMENTE NO CARD, POIS ESTÃO SENDO CORTADAS;
// No lugar de `Carregando...` colocar o `skeleton`



const CountryCardsContainer = styled.div`
  display: grid;
  gap: 3.125rem;
  margin-top: 3.125rem;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));

  article {
    border-radius: .375rem;
    background-color: ${Colors.darkBlue};

    img {
      border-radius: .375rem .375rem 0 0;
      width: 100%;
      height: 208px;
      object-fit: cover;
    }
  }
`;

const CountryDetails = styled.section`
  padding: 2.125rem 2rem;

  h2 {
    color: ${Colors.darkGray};
    font-size: 1.375rem;
    font-weight: 800;
    margin-bottom: 2rem;
  }

  div {
    display: flex;
    flex-direction: column;
    gap: 1.25rem;

    p {
      font-size: 1rem;
      font-weight: 400;
    }
    
    p span {
      font-weight: 700;
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
        <article key={country.name.common}>
          <img src={country.flags.svg} alt={`Bandeira - ${country.name.common}`} />
          
          <CountryDetails>
            <h2>{country.name.common}</h2>
            <div>
              <p><span>Population: </span>{country.population}</p>
              <p><span>Region: </span>{country.region}</p>
              <p><span>Capital: </span>{country.capital.join(', ')}</p>
            </div>
          </CountryDetails>
        </article>
      ))}
    </CountryCardsContainer>
  );
}
