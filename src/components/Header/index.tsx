import styled from 'styled-components';
import Moon from './assets/Moon.svg?react';
import Colors from '../../common/GlobalStyles/Colors';
import { useRecoilState } from 'recoil';
import { darkModeState } from '../../common/states/atom';

const HeaderContainer = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: ${Colors.darkBlue};
  box-shadow: 0px -4px 18px -4px ${Colors.charcoalBlue};
  height: 100px;
  margin-bottom: 1.875rem;

  @media (max-width: 991px) {
    padding: 0 1.25rem;
  }

  @media (max-width: 374px) {
    padding: 0 1rem;
  }

  @media (min-width: 768px) {
    height: 80px;
  }
`;

const ContentWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;

  @media (min-width: 992px) {
    margin: 0 auto;
    width: 80%;
  }
`;

const Title = styled.h2`
  color: ${Colors.white};
  font-size: 1.0625rem;
  font-weight: 900;

  @media (min-width: 768px) {
    font-size: 1.5rem;
  }
`;

const DarkModeLabel = styled.label`
  display: flex;
  align-items: center;
  gap: .75rem;

  cursor: pointer;
  color: ${Colors.white};
  font-size: .875rem;
  font-weight: 500;

  transition: all .3s ease-in-out;

  &:hover {
    color: ${Colors.darkGrayHover};

    path {
      fill: ${Colors.darkGrayHover};
    }
  }

  &:active {
    color: #678098;

    path {
      fill: #678098;
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
    transition: all .3s ease-in-out;
    fill: ${Colors.white};
  }

  @media (min-width: 768px) {
    width: 16.31px;
    height: 15.8px;
  }
`;

export default function Header() {
  const [darkMode, setDarkMode] = useRecoilState(darkModeState);
  console.log(darkMode);

  return (
    <HeaderContainer>
      <ContentWrapper>
        <Title>Where in the world?</Title>
          
        <DarkModeLabel onClick={() => setDarkMode(!darkMode)}>
          <MoonIcon /> 
          Dark Mode
        </DarkModeLabel>
      </ContentWrapper>
    </HeaderContainer>
  );
}
