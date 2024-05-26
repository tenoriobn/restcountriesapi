import styled from "styled-components";
import CardTest from "../components/CardTest";

const MainContainer = styled.main`
  min-height: 100vh;
`;

export default function HomePage() {
  return (
    <MainContainer>
      <CardTest />
    </MainContainer>
  );
}
