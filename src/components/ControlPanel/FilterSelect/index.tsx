import styled from "styled-components";
import Colors from "../../../common/GlobalStyles/Colors";
import { IFilterSelect } from "../../../common/interfaces/IFilterSelect";
import Arrow from "./assets/select-arrow.svg?react";
import { useEffect, useState } from "react";
import { countryFilterState } from "../../../common/states/atom";
import { useRecoilState } from "recoil";

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  row-gap: .25rem;
  
  cursor: pointer;

  max-width: 248px;
  width: 100%;

  @media (min-width: 768px) {
    max-width: 200px;
  }
`;

const FilterSelectWrapper = styled.div<{ $optionSelect: IFilterSelect | null; $openListOptions: boolean }>`
  display: flex;
  align-items: center;
  justify-content: space-between;

  background-color: ${Colors.darkBlue};
  border-radius: .375rem;
  box-shadow: 0rem .25rem .5625rem -0.4375rem #111517;
  box-sizing: border-box;
  line-height: 3.625rem;

  position: relative;
  height: 56px;
  
  padding: 0 1.25rem 0 1.5rem;

  ${props => (props.$optionSelect || props.$openListOptions) ? 
    `
      border: .125rem solid #d1d1d1;
      background-color: #202c37;
      box-shadow: 0rem .25rem .75rem -0.1875rem #111517;
    ` : '' }
`;

const Label = styled.label<{ $optionSelect: IFilterSelect | null; $openListOptions: boolean }>`
  position: absolute;
  cursor: pointer;
  font-size: 1rem;
  font-weight: 500;
  line-height: normal;
  transition: all .2s ease-in-out;
  
  ${props => (props.$optionSelect || props.$openListOptions) ? 
    `
      background: #202c37;
      padding: 0 .5rem;
      transform: translate(-16px, -30px) scale(0.88);
      z-index: 6;
    ` : '' }
`;

const ListOptions = styled.ul<{ open: boolean }>`
  display: flex;
  flex-direction: column;

  box-sizing: border-box;
  background-color: ${Colors.darkBlue};
  border-radius: .375rem;
  box-shadow: 0rem .25rem .5625rem -0.4375rem #111517;

  padding:  ${props => props.open ? '1rem 0rem' : '0rem'};
  height:  ${props => props.open ? '192px' : '0px'};
  width: 100%;
  
  position: absolute;
  overflow: hidden;
  top: 60px;
  transition: all .2s ease-in-out;
`;

const Options = styled.li`
  cursor: pointer;
  padding: 8px 1.5rem;
  transition: all .2s ease-in-out;
  
  &:hover {
    background-color: #e6e6e611;
  }
`;

const SelectArrowIcon = styled(Arrow)<{ $openListOptions: boolean }>`
  transform:  ${props => props.$openListOptions ? 'rotate(180deg)' : ''};
  transition: all .2s ease-in-out;
  width: 10px;
`;

const options:IFilterSelect[] = [
  {
    id: 1,
    value: 'Africa'
  },
  {
    id: 2,
    value: 'América'
  },
  {
    id: 3,
    value: 'Asia'
  },
  {
    id: 4,
    value: 'Europe'
  },
  {
    id: 5,
    value: 'Oceania'
  },
];

export default function FilterSelect() {
  const [openListOptions, setOpenListOptions] = useState(false);
  const [optionSelected, setOptionSelected] = useState<IFilterSelect | null>(null);
  const [countryFilter, setCountryFilter] = useRecoilState(countryFilterState);
  console.log('optionSelected: ', optionSelected?.value);

  const handleOptionSelected = (option: IFilterSelect) => {
    setOptionSelected(option);

    setCountryFilter({ 
      ...countryFilter, 
      select: option.value === "América" ? "Americas" : option.value 
    });

    setOpenListOptions(false);
  };

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      const clickedOutsideContainer = event.target as HTMLElement;
      if (!clickedOutsideContainer.closest('#filter-select-container')) {
        setOpenListOptions(false);
      }
    };

    document.addEventListener('mousedown', handleOutsideClick);

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, []);

  return (
    <Container id="filter-select-container">
      <FilterSelectWrapper 
        onClick={() => setOpenListOptions(!openListOptions)}
        $optionSelect={optionSelected}
        $openListOptions={openListOptions}
      >
        <Label 
          className="labelline" 
          $optionSelect={optionSelected}
          $openListOptions={openListOptions}
        >
          Filter by Region
        </Label>

        <p>{optionSelected ? optionSelected.value : ''}</p>
        <SelectArrowIcon $openListOptions={openListOptions} />
      </FilterSelectWrapper>

      <ListOptions open={openListOptions}>
        {options.map(option => (
          <Options key={option.id} onClick={() => handleOptionSelected(option)}>
            {option.value}
          </Options>
        ))}
      </ListOptions>
    </Container>
  );
}
