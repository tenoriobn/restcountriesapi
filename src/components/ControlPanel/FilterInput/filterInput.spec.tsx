import { describe, vi } from "vitest";
import { fireEvent, screen } from "@testing-library/react";
import { RecoilRoot } from "recoil";
import { countryFilterState } from "src/common/states/atom";
import customRender from "src/tests/utils/customRender";
import { RecoilObserver } from "src/tests/utils/recoilObserver";
import FilterInput from ".";
import { UserEvent } from "@testing-library/user-event";

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
  let user: UserEvent;
  let onChangeMock: () => { input: string };
  let input: HTMLElement;
  const searchValue = 'Brazil';

  beforeEach(async () => {
    ({ user, onChangeMock } = renderWithRecoil());
    input = await screen.getByRole('textbox');
  });

  it('should render the component properly', () => {
    expect(input).toBeInTheDocument();
  });

  it('should render the label text "Search for a country..."', () => {
    expect(screen.getByLabelText('Search for a country...')).toBeInTheDocument();
  });

  it('should update the input value when typing', () => {
    fireEvent.change(input, { target: { value: searchValue } });
    expect(input).toHaveValue(searchValue);
  });

  it('should update the state with the input value', async () => {
    await user.type(input, searchValue);
    expect(onChangeMock).toHaveBeenLastCalledWith({ input: searchValue });
  });
});
