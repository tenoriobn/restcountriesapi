import styled from "styled-components";
import Colors from "../../../common/GlobalStyles/Colors";
import { useRecoilState } from "recoil";
import { countryFilterState } from "../../../common/states/atom";

const FilterInputWrapper = styled.div`
  background-color: ${Colors.darkBlue};
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
  border: none;
  position: absolute;
  background-color: transparent;
  border-radius: .375rem;
  box-sizing: border-box;
  box-shadow: 0rem .25rem .5625rem -0.4375rem #111517;
  color: ${Colors.white};
  font-size: 1rem;
  font-weight: 500;
  width: 100%;
  padding: 1.0625rem 2rem;
  z-index: 5;

  &:focus, &:valid {
    border: .125rem solid ${Colors.darkGrayHover};
    background-color: #202c37;
    box-shadow: 0rem .25rem .75rem -0.1875rem #111517;
  }
  
  &:focus + .labelline, &:valid + .labelline {
    background: ${Colors.veryDarkBlue};
    color: ${Colors.white};
    height: 30px;
    line-height: 1.875rem;
    transform: translate(16px, -18px) scale(0.88);
    z-index: 6;
    padding: 0 .5rem;
    transition: all .2s ease-in-out;
  }
`;

const Label = styled.label`
  position: absolute;
  padding: 0 2rem;
  font-size: 1rem;
  font-weight: 500;
  transition: all .2s ease-in-out;
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
      <Label className="labelline" htmlFor="filter-country">Search for a country...</Label>
    </FilterInputWrapper>
  );
}
