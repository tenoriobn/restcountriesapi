import { SkeletonTheme } from "react-loading-skeleton";
import { Outlet } from "react-router-dom";
import styled, { useTheme } from "styled-components";

const MainContainer = styled.main`
  min-height: calc(100vh - 208px);
  padding-bottom: 5rem;

  @media (max-width: 767px) {
    padding-left: 1.5rem;
    padding-right: 1.5rem;
  }

  @media (max-width: 374px) {
    padding-left: 1rem;
    padding-right: 1rem;
  }

  @media (min-width: 768px) {
    margin: 0 auto;
    width: 80%;
    max-width: 1280px;
  }

  @media (prefers-reduced-motion) {
    .react-loading-skeleton {
        --pseudo-element-display: block;
    }
  }
`;

export default function AppLayout() {
  const theme = useTheme();

  return (
    <MainContainer>
      <SkeletonTheme
        baseColor={theme.skeletonBaseColor} 
        highlightColor={theme.skeletonHighlightColor}
        duration={1.5}
      >
        <Outlet />
      </SkeletonTheme>
    </MainContainer>
  );
}
