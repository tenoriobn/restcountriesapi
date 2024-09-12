import styled from "styled-components";
import CountryCard from "../components/CountryCard";
import ControlPanel from "../components/ControlPanel";

const MainContainer = styled.main`
  min-height: 100vh;

  @media (max-width: 991px) {
    padding: 0 1.25rem;
  }

  @media (max-width: 374px) {
    padding: 0 1rem;
  }

  @media (min-width: 992px) {
    margin: 0 auto;
    width: 80%;
    max-width: 1280px;
  }
`;

export default function HomePage() {
  return (
    <MainContainer>
      <ControlPanel />
      <CountryCard />
    </MainContainer>
  );
}
