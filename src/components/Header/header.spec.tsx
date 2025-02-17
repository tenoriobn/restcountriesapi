import { RecoilRoot } from "recoil";
import customRender from "src/tests/utils/customRender";
import { vi } from "vitest";
import Header from ".";
import { darkModeState } from "src/common/states/atom";
import { fireEvent, screen, waitFor } from "@testing-library/react";
import { ThemeWrapper } from "src/tests/utils/ThemeWrapper";

const renderWithRecoil = () => {
  const onChangeMock = vi.fn();

  const { user } = customRender(
    <RecoilRoot>
      <ThemeWrapper state={darkModeState} onChangeMock={onChangeMock}>
        <Header />
      </ThemeWrapper>
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
    screen.getByRole('heading', { level: 1, name: 'Where in the world?' });

    expect(darkModeLabel.textContent).toBe('Dark Mode');

    const moonIcon = screen.getByTestId('moon-icon');
    expect(darkModeLabel).toContainElement(moonIcon);
  });

  it('should toggle between dark and light mode on DarkModeLabel click', async () => {
    const header = screen.getByRole("banner");

    expect(getComputedStyle(header).backgroundColor).toBe('rgb(43, 57, 69)');

    await fireEvent.click(darkModeLabel); 

    await waitFor(() => {
      expect(getComputedStyle(header).backgroundColor).toBe('rgb(255, 255, 255)');
    });
  });
});
