import { RecoilRoot } from "recoil";
import customRender from "src/tests/utils/customRender";
import { vi } from "vitest";
import CountryCard from ".";
import { countryFilterState } from "src/common/states/atom";
import { fireEvent, screen } from "@testing-library/react";
import { ThemeWrapper } from "src/tests/utils/ThemeWrapper";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useFilteredCountries } from "src/common/states/hook/useFilteredCountries";
import { mockCountries } from "src/__mocks__/countriesMock";
import CountryOverview from "src/pages/CountryOverview";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ICountry } from "src/common/interfaces/ICountry";

vi.mock("src/common/states/hook/useFilteredCountries");

const renderWithRecoil = (filteredCountries: ICountry[] = [], isLoading = false, isError = false) => {
  vi.mocked(useFilteredCountries).mockReturnValue({
    filteredCountries,
    isLoading,
    isError,
  });

  const onChangeMock = vi.fn();
  const queryClient = new QueryClient();

  const { user } = customRender(
    <RecoilRoot>
      <QueryClientProvider client={queryClient}>
        <ThemeWrapper state={countryFilterState} onChangeMock={onChangeMock}>
          <Router>
            <Routes>
              <Route path="/" element={<CountryCard />} />
              <Route path="/overview" element={<CountryOverview />} />
            </Routes>
          </Router>
        </ThemeWrapper>
      </QueryClientProvider>
    </RecoilRoot>
  );

  return { user, onChangeMock };
};

describe('<CountryCard />', () => {
  const initialCountries = [
    'Germany', 'United States', 'Brazil', 'Iceland', 'Afghanistan',
    'Åland Islands', 'Albania', 'Algeria'
  ];

  const countryDetails = ['Population:', 'Region:', 'Capital:'];

  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('Should render the skeleton initially', () => {
    renderWithRecoil([], true);

    expect(screen.getAllByTestId("skeleton-country-card")).toHaveLength(8);
  });

  
  it('Should render letters from the eight initial countries', async () => {    
    renderWithRecoil(mockCountries);

    initialCountries.forEach(country => {
      expect(screen.getByRole("heading", { level: 2, name: country })).toBeInTheDocument();
    });

    expect(screen.getAllByRole('img')).toHaveLength(8);

    countryDetails.forEach(countryDetail => {
      expect(screen.getAllByText(countryDetail)).toHaveLength(8);
    });
  });

  it('Should redirect to `/overview` endpoint when clicking on the country.', async () => {
    renderWithRecoil(mockCountries);

    const countryCard = screen.getByRole('heading', { level: 2, name: 'Brazil' });
    await fireEvent.click(countryCard);

    expect(window.location.pathname).toBe("/overview");
    expect(screen.getByRole("link", { name: /back/i })).toContainElement(screen.getByTestId("arrow-icon"));
  });
});
