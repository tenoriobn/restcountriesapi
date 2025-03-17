import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { RecoilRoot } from "recoil";
import customRender from "src/tests/utils/customRender";
import { vi } from "vitest";
import CountryOverview from "../CountryOverview";
import { fireEvent, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

const renderWithRecoil = () => {
  const queryClient = new QueryClient();

  return customRender(
    <RecoilRoot>
      <MemoryRouter initialEntries={['/overview']}>
        <QueryClientProvider client={queryClient}>
          <CountryOverview />
        </QueryClientProvider>
      </MemoryRouter>
    </RecoilRoot>
  );
};

describe('<CountryOverview />', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('Should render Back button', () => {
    renderWithRecoil();

    expect(screen.getByRole("link", { name: "Back" })).toBeInTheDocument();
  });

  it('should return to the HomePage `/` when clicking the Back button', () => {
    renderWithRecoil();

    const backButton = screen.getByRole("link", { name: "Back" });
    fireEvent.click(backButton);

    expect(window.location.pathname).toBe('/');
  });
});
