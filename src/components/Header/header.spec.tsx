import { RecoilRoot } from "recoil";
import customRender from "src/tests/utils/customRender";
import { vi } from "vitest";
import Header from ".";
import { RecoilObserver } from "src/tests/utils/recoilObserver";
import { darkModeState } from "src/common/states/atom";
import { fireEvent, screen } from "@testing-library/react";

const renderWithRecoil = () => {
  const onChangeMock = vi.fn();

  const { user } = customRender(
    <RecoilRoot>
      <Header />
      <RecoilObserver node={darkModeState} onChange={onChangeMock} />
    </RecoilRoot>
  );

  return { user, onChangeMock };
};

describe('<Header />', () => {
  let darkModeLabel: HTMLElement;

  beforeEach(() => {
    renderWithRecoil();
    darkModeLabel = screen.getByLabelText('Dark Mode');
  });

  it('should render the header content', () => {
    screen.getByRole('heading', { level: 1, name: 'Where in the world?'});

    expect(darkModeLabel.textContent).toBe('Dark Mode');

    const moonIcon = screen.getByTestId('moon-icon');
    expect(darkModeLabel).toContainElement(moonIcon);
  });

  it('should toggle between dark and light mode on DarkModeLabel click', () => {
    fireEvent.click(darkModeLabel);
  });
});
