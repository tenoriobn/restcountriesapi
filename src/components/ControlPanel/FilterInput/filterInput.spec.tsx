import { describe, vi } from "vitest";
import { fireEvent, screen } from "@testing-library/react";
import { RecoilRoot } from "recoil";
import { countryFilterState } from "src/common/states/atom";
import customRender from "src/tests/utils/customRender";
import { RecoilObserver } from "src/tests/utils/recoilObserver";
import FilterInput from ".";

// Função comum para renderizar o componente com o RecoilObserver
const renderWithRecoil = () => {
  const onChangeMock = vi.fn();

  const { user } = customRender(
    <RecoilRoot>
      <FilterInput />
      <RecoilObserver node={countryFilterState} onChange={onChangeMock} />
    </RecoilRoot>
  );

  return { user, onChangeMock };
};

describe('<FilterInput />', () => {
  it('should render the component properly', () => {
    renderWithRecoil();

    expect(screen.getByRole('textbox')).toBeInTheDocument();
  });

  it('should render the label text "Search for a country..."', () => {
    renderWithRecoil();

    expect(screen.getByText('Search for a country...')).toBeInTheDocument();
  });

  it('should update the input value when typing', () => {
    const searchValue = 'Brazil';
    renderWithRecoil();

    const input = screen.getByRole('textbox');
    fireEvent.change(input, { target: { value: searchValue } });

    expect(input).toHaveValue(searchValue);
  });

  it('should update the state with the input value', async () => {
    const searchValue = 'Brazil';
    const { user, onChangeMock } = renderWithRecoil();

    const input = screen.getByRole('textbox');
    await user.type(input, searchValue);

    expect(onChangeMock).toHaveBeenLastCalledWith({ input: searchValue });
  });
});
