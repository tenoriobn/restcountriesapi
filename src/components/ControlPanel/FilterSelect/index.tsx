import styled from "styled-components";
import Colors from "../../../common/GlobalStyles/Colors";
import { IFilterSelect } from "../../../common/interfaces/IFilterSelect";

const FilterSelectWrapper = styled.div`
  background-color: ${Colors.darkBlue};
  border-radius: .375rem;
  box-shadow: 0rem .25rem .5625rem -0.4375rem #111517;
  line-height: 3.625rem;
  position: relative;
  height: 56px;
  max-width: 248px;
  width: 100%;
`;

const Select = styled.select`
  appearance: none;
  outline: none;
  border: none;
  position: absolute;
  background-color: transparent;
  border-radius: .375rem;
  box-sizing: border-box;
  color: ${Colors.white};
  cursor: pointer;
  font-size: 1rem;
  font-weight: 500;
  width: 100%;
  padding: 1.0625rem 2rem;
  z-index: 5;

  &:focus, &:valid {
    border: .125rem solid ${Colors.darkGrayHover};
    background-color: #202c37;
    box-shadow: 0rem .25rem .75rem -0.1875rem #111517;

    .empty-option {
      display: none;
    }
  }
  
  &:focus + .labelline, &:valid + .labelline {
    background: ${Colors.veryDarkBlue};
    color: ${Colors.white};
    height: 30px;
    line-height: 1.875rem;
    transform: translate(17px, -18px) scale(0.88);
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

export default function FilterSelect() {
  const options:IFilterSelect[] = [
    {
      id: 0,
      value: '',
      label: '',
      class: 'empty-option',
    },
    {
      id: 1,
      value: 'africa',
      label: 'Africa'
    },
    {
      id: 2,
      value: 'america',
      label: 'América'
    },
    {
      id: 3,
      value: 'asia',
      label: 'Asia'
    },
    {
      id: 4,
      value: 'europe',
      label: 'Europe'
    },
    {
      id: 5,
      value: 'oceania',
      label: 'Oceania'
    },
  ];

  return (
    <FilterSelectWrapper>
      <Select name="filter-region" id="filter-region" required>
        {options.map(option => (
          <option key={option.id} value={option.value} className={option.class}>
            {option.label}
          </option>
        ))}
      </Select>

      <Label className="labelline" htmlFor="filter-region">Filter by Region</Label>
    </FilterSelectWrapper>
  );
}
