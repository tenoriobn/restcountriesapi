import styled from "styled-components";
import { useRecoilState } from "recoil";
import { countryFilterState } from "src/common/states/atom";
import { transitions } from "src/common/Themes/transitions";
import Search from "src/assets/icons/Search.svg?react";

const FilterInputWrapper = styled.div`
  background-color: ${({ theme }) => theme.secondaryBg};
  border-radius: .375rem;
  line-height: 3.625rem;
  position: relative;
  height: 56px;
  max-width: 480px;
  width: 100%;
`;

const Input = styled.input`
  appearance: none;
  outline: none;
  position: absolute;
  background-color: ${({ theme }) => theme.secondaryBg};
  border: .0625rem solid ${({ theme }) => theme.borderColor};
  border-radius: .375rem;
  box-sizing: border-box;
  box-shadow: 0rem .25rem .5625rem -0.4375rem ${({ theme }) => theme.primaryShadowColor};
  color: ${({ theme }) => theme.primaryText};
  font-size: 1rem;
  font-weight: 500;
  width: 100%;
  padding: 1.0625rem 2rem;
  min-height: 56px;
  z-index: 5;

  &:focus, &:valid {
    border: .125rem solid ${({ theme }) => theme.primaryHover};
    background-color: ${({ theme }) => theme.primaryBg};
    box-shadow: 0rem .25rem .75rem -0.1875rem ${({ theme }) => theme.primaryShadowColor};
  }
  
  &:focus + .labelline, &:valid + .labelline {
    background: ${({ theme }) => theme.primaryBg};
    color: ${({ theme }) => theme.primaryText};
    height: 30px;
    line-height: 1.875rem;
    transform: translate(16px, -17px) scale(0.88);
    z-index: 6;
    padding: 0 .5rem;
    transition: ${transitions.smoothTransition};

    svg {
      path {
        stroke: ${({ theme }) => theme.primaryText};
      }
    }
  }
`;

const Label = styled.label`
  display: flex;
  align-items: center;
  gap: 1rem;
  z-index: 9;
  cursor: text;

  position: absolute;
  color: ${({ theme }) => theme.placeholderColor};
  font-size: 1rem;
  font-weight: 500;
  padding: 0 2rem;
  transition: ${transitions.smoothTransition};

  svg {
    width: 20px;

    path {
      stroke: ${({ theme }) => theme.placeholderColor};
      stroke-width: 2.5;
    }
  }
`;

export default function FilterInput() {
  const [countryFilter, setCountryFilter] = useRecoilState(countryFilterState);

  return (
    <FilterInputWrapper>
      <Input 
        type="text" 
        id="filter-country" 
        value={countryFilter?.input || ''} 
        onChange={(e) => setCountryFilter({...countryFilter, input: e.target.value})} 
        required 
      />
      <Label className="labelline" htmlFor="filter-country">
        <Search />
        Search for a country...
      </Label>
    </FilterInputWrapper>
  );
}
