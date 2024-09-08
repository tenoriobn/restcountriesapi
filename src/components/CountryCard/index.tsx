import styled from "styled-components";
import Colors from "../../common/GlobalStyles/Colors";
import bandeiraAlemanha from "../../../public/img/Bandeira-da-Alemanha-2000px.png";

// REFATORAR ESPAÇAMENTO DAS INFORMAÇÕES DENTRO DO CARD, BEM COMO O TAMANHO DAS FONTES E ESPAÇO DAS LINHAS.

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

  return (
    <CountryCardsContainer>
      <article>
        <img src={bandeiraAlemanha} alt={`Bandeira da Alemanha -PAIS dinâmico AQUI-`} />

        <CountryDetails>
          <h2>Germany</h2>

          <div>
            <p><span>Population: </span>81,770,900</p>
            <p><span>Region: </span>Europa</p>
            <p><span>Capital: </span>Berlin</p>
          </div>
        </CountryDetails>
      </article>

      <article>
        <img src={bandeiraAlemanha} alt={`Bandeira da Alemanha -PAIS dinâmico AQUI-`} />

        <CountryDetails>
          <h2>Germany</h2>

          <div>
            <p><span>Population: </span>81,770,900</p>
            <p><span>Region: </span>Europa</p>
            <p><span>Capital: </span>Berlin</p>
          </div>
        </CountryDetails>
      </article>

      <article>
        <img src={bandeiraAlemanha} alt={`Bandeira da Alemanha -PAIS dinâmico AQUI-`} />

        <CountryDetails>
          <h2>Germany</h2>

          <div>
            <p><span>Population: </span>81,770,900</p>
            <p><span>Region: </span>Europa</p>
            <p><span>Capital: </span>Berlin</p>
          </div>
        </CountryDetails>
      </article>

      <article>
        <img src={bandeiraAlemanha} alt={`Bandeira da Alemanha -PAIS dinâmico AQUI-`} />

        <CountryDetails>
          <h2>Germany</h2>

          <div>
            <p><span>Population: </span>81,770,900</p>
            <p><span>Region: </span>Europa</p>
            <p><span>Capital: </span>Berlin</p>
          </div>
        </CountryDetails>
      </article>

      <article>
        <img src={bandeiraAlemanha} alt={`Bandeira da Alemanha -PAIS dinâmico AQUI-`} />

        <CountryDetails>
          <h2>Germany</h2>

          <div>
            <p><span>Population: </span>81,770,900</p>
            <p><span>Region: </span>Europa</p>
            <p><span>Capital: </span>Berlin</p>
          </div>
        </CountryDetails>
      </article>
    </CountryCardsContainer>
  );
}
