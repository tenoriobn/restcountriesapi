import styled from 'styled-components';
import Moon from 'src/assets/icons/Moon.svg?react';
import { useRecoilState } from 'recoil';
import { darkModeState } from 'src/common/states/atom';
import { transitions } from 'src/common/Themes/transitions';

const HeaderContainer = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: ${({ theme }) => theme.secondaryBg};
  box-shadow: 0rem -0.25rem 1.125rem -0.25rem ${({ theme }) => theme.primaryShadowColor};
  height: 100px;
  margin-bottom: 1.875rem;

  @media (max-width: 991px) {
    padding: 0 1.5rem;
  }

  @media (max-width: 374px) {
    padding: 0 1rem;
  }

  @media (min-width: 768px) {
    height: 80px;
    margin-bottom: 3rem;
  }
`;

const ContentWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;

  @media (min-width: 768px) {
    margin: 0 auto;
    width: 80%;
    max-width: 1280px;
  }
`;

const Title = styled.h1`
  color: ${({ theme }) => theme.primaryText};
  font-size: 1.0625rem;
  font-weight: 800;

  @media (min-width: 768px) {
    font-size: 1.5rem;
  }
`;

const DarkModeLabel = styled.label`
  display: flex;
  align-items: center;
  gap: .75rem;

  cursor: pointer;
  color: ${({ theme }) => theme.primaryText};
  font-size: .875rem;
  font-weight: 500;

  transition: ${transitions.smoothTransition};

  &:hover {
    color: ${({ theme }) => theme.primaryHover};

    path {
      fill: ${({ theme }) => theme.primaryHover};
    }
  }

  &:active {
    color: ${({ theme }) => theme.primaryActive};

    path {
      fill: ${({ theme }) => theme.primaryActive};
    }
  }

  @media (min-width: 768px) {
    font-size: 1rem;
  }
`;

const MoonIcon = styled(Moon)`
  width: 14px;
  height: 14px;

  path {
    transition: ${transitions.smoothTransition};
    fill: ${({ theme }) => theme.primaryText};
  }

  @media (min-width: 768px) {
    width: 16.31px;
    height: 15.8px;
  }
`;

export default function Header() {
  const [darkMode, setDarkMode] = useRecoilState(darkModeState);

  console.log('darkMode', darkMode);

  const handleDarkMode = () => {
    setDarkMode(!darkMode); 
    localStorage.setItem('darkMode', JSON.stringify(!darkMode));
  };

  return (
    <HeaderContainer>
      <ContentWrapper>
        <Title>Where in the world?</Title>
          
        <DarkModeLabel 
          onClick={() => { handleDarkMode(); }}
        >
          <MoonIcon /> 
          Dark Mode
        </DarkModeLabel>
      </ContentWrapper>
    </HeaderContainer>
  );
}
