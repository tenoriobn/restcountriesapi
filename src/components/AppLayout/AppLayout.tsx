import { Outlet } from "react-router-dom";
import styled from "styled-components";

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

export default function AppLayout() {
  return (
    <MainContainer>
      <Outlet />
    </MainContainer>
  );
}
