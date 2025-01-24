import { RecoilRoot } from "recoil";
import customRender from "src/tests/utils/customRender";
import { RecoilObserver } from "src/tests/utils/recoilObserver";
import { vi } from "vitest";
import FilterSelect from ".";
import { countryFilterState } from "src/common/states/atom";
import { fireEvent, screen } from "@testing-library/react";
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

  beforeEach(() => {
    renderWithRecoil();

    listOptions = screen.getByTestId('list-options');
  });

  const openListAndCheckVisibility = () => {
    const filterSelect = screen.getByTestId('filter-select');
    fireEvent.click(filterSelect);
    expect(listOptions).toHaveStyle({ height: "max-content" });
  };

  const selectOptionAndCheckListClosed = (optionName: string) => {
    const option = screen.getByText(optionName);
    fireEvent.click(option);
    
    const selectedOption = screen.getByTestId('selected-option');
    
    if (optionName === "Remove Filter") {
      expect(selectedOption).toHaveTextContent('');
    } else {
      expect(selectedOption).toHaveTextContent(optionName);
    }
    
    expect(listOptions).toHaveStyle({ height: "0" });
  };

  it('should render the component and main elements', () => { 
    const filterSelectContainer = screen.getByTestId('filter-select-container');
    expect(filterSelectContainer).toBeInTheDocument();
  
    const label = screen.getByTestId('label');
    expect(label).toBeInTheDocument();
    expect(label).toHaveTextContent('Filter by Region');
  });
  
  it('should render list options without clear selected option', () => {
    expect(listOptions).toBeInTheDocument();
    expect(listOptions).toHaveStyle({ height: "0" });
  
    const listItems = screen.getAllByRole('listitem');
    const initialListItems = options.filter(option => option.id !== 0);
    expect(listItems).toHaveLength(initialListItems.length);
  
    initialListItems.forEach((option, index) => {
      expect(listItems[index]).toHaveTextContent(option.name);
    });
  });

  it('should open a list when clicked, render the selected option, and close the list when clicking an option', () => {
    openListAndCheckVisibility();

    const optionToClick = options[1].name;
    selectOptionAndCheckListClosed(optionToClick);
  });

  it('should open a list with the option to clear the selected option', () => {
    openListAndCheckVisibility();
    const optionToClick = options[1].name;
    selectOptionAndCheckListClosed(optionToClick);

    openListAndCheckVisibility();
    const removeFilterOption = options[0].name;
    selectOptionAndCheckListClosed(removeFilterOption);
  });
});