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

const FilterSelectWrapper = styled.div<{ $optionSelect: string | null; $openListOptions: boolean }>`
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

const Label = styled.label<{ $optionSelect: string | null; $openListOptions: boolean }>`
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
  height:  ${props => props.open ? 'max-content' : '0px'};
  width: 100%;
  
  position: absolute;
  overflow: hidden;
  top: 60px;
  z-index: 999;
  /* transition: all .2s ease-in; */
`;

const Options = styled.li`
  cursor: pointer;
  padding: .5rem 1.5rem;
  transition: all .2s ease-in-out;

  &.active {
    background-color: ${Colors.lightGrayActive}!important;
  }
  
  &:hover {
    background-color: ${Colors.lightGrayHover};
  }
`;

const SelectArrowIcon = styled(Arrow)<{ $openListOptions: boolean }>`
  transform:  ${props => props.$openListOptions ? 'rotate(180deg)' : ''};
  transition: all .2s ease-in-out;
  width: 10px;
`;

const options:IFilterSelect[] = [
  {
    id: 0,
    value: '',
    name: 'Remove Filter'
  },
  {
    id: 1,
    value: 'Africa',
    name: 'Africa'
  },
  {
    id: 2,
    value: 'Americas',
    name: 'América'
  },
  {
    id: 3,
    value: 'Asia',
    name: 'Asia'
  },
  {
    id: 4,
    value: 'Europe',
    name: 'Europe'
  },
  {
    id: 5,
    value: 'Oceania',
    name: 'Oceania'
  },
];

export default function FilterSelect() {
  const [openListOptions, setOpenListOptions] = useState(false);
  const [countryFilter, setCountryFilter] = useRecoilState(countryFilterState);

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
        $optionSelect={countryFilter ? countryFilter.select ?? null : null}
        $openListOptions={openListOptions}
      >
        <Label 
          className="labelline" 
          $optionSelect={countryFilter ? countryFilter.select ?? null : null}
          $openListOptions={openListOptions}
        >
          Filter by Region
        </Label>

        <p>{countryFilter && countryFilter.select ? countryFilter.select : ''}</p>
        <SelectArrowIcon $openListOptions={openListOptions} />
      </FilterSelectWrapper>

      <ListOptions open={openListOptions}>
        {
          (countryFilter && countryFilter.select ? options : options.filter(option => option.id !== 0))
            .map(option => (
              <Options 
                className={(countryFilter ? countryFilter.select ?? null : null) === option.value ? 'active' : ''}
                key={option.id} 
                onClick={() => {
                  setCountryFilter({ ...countryFilter, select: option.value ?? '' });
                  setOpenListOptions(false);
                }}
              >
                {option.name}
              </Options>
            ))
        }
      </ListOptions>
    </Container>
  );
}
