import styled from "styled-components";
import Colors from "../common/GlobalStyles/Colors";
import ArrowIcon from "../../public/icons/Arrow-left.svg?react";
import { Button } from "../common/GlobalStyles/GlobalStyles";

// Tornar responsivo (estrutura +  tamanho de textos e etc)
// Trazer informações de dados dinâmicos
// Ao clicar no botão do Border Countries, rnederizar informações do país cujo o botão foi clicado
// Verficiar processo para lidar com botões cujo o texto é muito grande para não quebrar layout

export const StylizedButton = styled(Button)`
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

    ${Button} {
      font-size: 1rem;
      font-weight: 300;
      padding: .4375rem .375rem;
    }
  }
`;

export default function CountryOverview() {
  return (
    <div>
      <StylizedButton to="/">
        <ArrowIcon />
        Back
      </StylizedButton>

      <CountryFlag src="img/Bandeira-da-Alemanha-2000px.png" alt="" style={{ width: "100%" }} />

      <CountryDetails>
        <h2>Belgium</h2>

        <div>
          <p><span>Native Name: </span>Belgie</p>
          <p><span>Population: </span>11,319,511</p>
          <p><span>Region: </span>Europe</p>
          <p><span>Sub Region: </span>Western Europe</p>
          <p><span>Capital: </span>Brussels</p>
        </div>

        <div className="country-Info-wrapper">
          <p><span>Top Level Domain: </span>.be</p>
          <p><span>Currencies: </span>Euro</p>
          <p><span>Languages: </span>Dutch, French, German</p>
        </div>
      </CountryDetails>

      <BorderCountries>
        <h2>Border Countries:</h2>

        <div>
          <Button to="#">France</Button>
          <Button to="#">Germany</Button>
          <Button to="#">Netherlands</Button>
        </div>
      </BorderCountries>
    </div>
  );
}
