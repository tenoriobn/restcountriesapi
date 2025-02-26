import { RecoilRoot } from "recoil";
import customRender from "src/tests/utils/customRender";
import { RecoilObserver } from "src/tests/utils/recoilObserver";
import { vi } from "vitest";
import FilterSelect from ".";
import { countryFilterState } from "src/common/states/atom";
import { fireEvent, screen, within } from "@testing-library/react";
import options from "./options.json";

const renderWithRecoil = () => {
  const onChangeMock = vi.fn();

  const { user } = customRender(
    <RecoilRoot>
      <FilterSelect />
      <RecoilObserver node={countryFilterState} onChange={onChangeMock} />
    </RecoilRoot>
  );

  return { user, onChangeMock };
};

describe('<FilterSelect />', () => { 
  let listOptions: HTMLElement;
  let selectedOption: HTMLElement;

  beforeEach(() => {
    renderWithRecoil();

    listOptions = screen.getByRole('list');
    selectedOption =  screen.getByRole('option', { selected: true });
  });

  const openList = () => {
    fireEvent.click(screen.getByRole('combobox'));
    expect(listOptions).toHaveStyle({ height: "max-content" });
  };
  
  const closeList = () => {
    expect(listOptions).toHaveStyle({ height: "0" });
  };
  
  const selectOption = (optionName: string) => {
    const optionElement = within(listOptions).getByText(optionName);
    fireEvent.click(optionElement);
  };
  
  const verifySelectedOption = (optionName: string) => {
    if (optionName === "Remove Filter") {
      expect(selectedOption).toHaveTextContent('');
    } else {
      expect(selectedOption).toHaveTextContent(optionName);
    }
  };
  
  it('Should render the FilterSelect component and required elements', () => { 
    expect(screen.getByLabelText('Filter by Region')).toBeInTheDocument();
    expect(screen.getByTitle('select-arrow')).toBeInTheDocument();
  });
  
  it('Should render the hidden list with the default options, excluding the "Remove Filter" option.', () => {
    expect(listOptions).toBeInTheDocument();
    closeList();
  
    const listItems = screen.getAllByRole('listitem');
    const filteredOptions = options.filter(option => option.id !== 0);
  
    listItems.forEach((option, index) => {
      expect(option).toHaveTextContent(filteredOptions[index].name);
    });
  
    expect(listItems).toHaveLength(filteredOptions.length);
  });
  
  it('Should toggle the list visibility on click, display the selected option, and close the list upon selecting an option.', () => {
    openList();
    selectOption('Africa');
    verifySelectedOption('Africa');
    closeList();
  });
  
  it('Should open a list with the option to clear the selected option', () => {
    openList();
    selectOption('Africa');
    verifySelectedOption('Africa');
    closeList();
  
    openList();
    selectOption('Remove Filter');
    verifySelectedOption('Remove Filter');
    closeList();
  });
  
});