import styled from "styled-components";
import { useRecoilState } from "recoil";
import { useMemo, useState } from "react";
import ArrowIcon from "src/assets/icons/select-arrow.svg?react";
import options from "./options.json";
import { countryFilterState } from "src/common/states/atom";
import { transitions } from "src/common/Themes/transitions"; 
import useOutSideClick from "src/common/states/hook/useOutSideClick";

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

  background-color: ${({ theme }) => theme.secondaryBg};
  border: .0625rem solid ${({ theme }) => theme.borderColor};
  border-radius: .375rem;
  box-shadow: 0rem .25rem .5625rem -0.4375rem ${({ theme }) => theme.primaryShadowColor};
  box-sizing: border-box;
  line-height: 3.625rem;

  position: relative;
  height: 56px;
  
  padding: 0 1.25rem 0 1.5rem;

  ${props => (props.$optionSelect || props.$openListOptions) ? 
    `
      border: .125rem solid ${props.theme.primaryHover};
      background-color: ${props.theme.primaryBg};
      box-shadow: 0rem .25rem .75rem -0.1875rem ${props.theme.primaryShadowColor};
    ` : '' }
`;

const Label = styled.label<{ $optionSelect: string | null; $openListOptions: boolean }>`
  position: absolute;
  cursor: pointer;
  font-size: 1rem;
  font-weight: 500;
  line-height: normal;
  transition: ${transitions.smoothTransition};
  color: ${({ theme }) => theme.placeholderColor};
  
  ${props => (props.$optionSelect || props.$openListOptions) ? 
    `
      color: ${props.theme.primaryText};
      background: ${props.theme.primaryBg};
      padding: 0 .5rem;
      transform: translate(-16px, -30px) scale(0.88);
      z-index: 6;
    ` : '' }
`;

const ListOptions = styled.ul<{ open: boolean }>`
  display: flex;
  flex-direction: column;

  box-sizing: border-box;
  background-color: ${({ theme }) => theme.secondaryBg};
  border-radius: .375rem;
  box-shadow: 0rem .25rem .5625rem -0.4375rem ${({ theme }) => theme.primaryShadowColor};

  padding:  ${props => props.open ? '1rem 0rem' : '0rem'};
  height:  ${props => props.open ? 'max-content' : '0px'};
  width: 100%;
  
  position: absolute;
  overflow: hidden;
  top: 60px;
  z-index: 999;
`;

const Options = styled.li`
  cursor: pointer;
  padding: .5rem 1.5rem;
  transition: ${transitions.smoothTransition};

  &.active {
    background-color: ${({ theme }) => theme.secondaryActive}!important;
  }
  
  &:hover {
    background-color: ${({ theme }) => theme.secondaryHover};
  }
`;

const SelectArrowIcon = styled(ArrowIcon)<{  $optionSelect: string | null; $openListOptions: boolean }>`
  transform:  ${props => props.$openListOptions ? 'rotate(180deg)' : ''};
  transition: ${transitions.smoothTransition};
  width: 10px;
  
  path { 
    stroke-width: 2.5;
    stroke: ${props =>
    props.$openListOptions || props.$optionSelect
      ? `${props.theme.primaryText}`
      : `${props.theme.placeholderColor}`};
  }
`;

export default function FilterSelect() {
  const [openListOptions, setOpenListOptions] = useState(false);
  const [countryFilter, setCountryFilter] = useRecoilState(countryFilterState);
  useOutSideClick(setOpenListOptions);

  const MemoFilterSelect = useMemo(() => (
    <Container id="filter-select-container" data-testid="filter-select-container">
      <FilterSelectWrapper 
        role="combobox"
        aria-labelledby="region-label"
        onClick={() => setOpenListOptions(!openListOptions)}
        $optionSelect={countryFilter ? countryFilter.select ?? null : null}
        $openListOptions={openListOptions}
      >
        <Label 
          id="region-label"
          className="labelline" 
          $optionSelect={countryFilter ? countryFilter.select ?? null : null}
          $openListOptions={openListOptions}
        >
          Filter by Region
        </Label>

        <p role="option" aria-selected="true">
          {countryFilter && countryFilter.select ? countryFilter.select : ''}
        </p>

        <SelectArrowIcon 
          aria-label="Arrow pointing down"
          $optionSelect={countryFilter ? countryFilter.select ?? null : null}
          $openListOptions={openListOptions} 
        />
      </FilterSelectWrapper>

      <ListOptions open={openListOptions} data-testid="list-options">
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
  ), [countryFilter, openListOptions, setCountryFilter]);

  return (
    <>
      {MemoFilterSelect}
    </>
  );
}