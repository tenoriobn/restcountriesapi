import { RecoilRoot } from "recoil";
import { fireEvent, screen } from "@testing-library/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { vi } from "vitest";
import CountryDetailsContainer from ".";
import { useCountryNamesFromCodes } from "src/common/states/hook/useCountryNamesFromCodes";
import customRender from "src/tests/utils/customRender";
import { errorStatusState, selectedCountryState } from "src/common/states/atom";
import { mockBrazilCountryDetails, mockColombiaCountryDetails } from "src/__mocks__/countryDetailsMock";
import { mockBorderCountriesData } from "src/__mocks__/borderCountriesDataMock";
import { MemoryRouter } from "react-router-dom";
import { ICountry } from "src/common/interfaces/ICountry";

vi.mock("src/common/states/hook/useCountryNamesFromCodes");

const renderWithRecoil = (errorStatusValue: boolean, selectedCountryValue: ICountry | null = null) => {
  const queryClient = new QueryClient();

  const { user } = customRender(
    <RecoilRoot
      initializeState={({ set }) => {
        set(errorStatusState, errorStatusValue);
        if (selectedCountryValue !== null) {
          set(selectedCountryState, selectedCountryValue);
        }
      }}
    >
      <MemoryRouter>
        <QueryClientProvider client={queryClient}>
          <CountryDetailsContainer />
        </QueryClientProvider>
      </MemoryRouter>
    </RecoilRoot>
  );

  return { user };
};

describe("<CountryDetailsContainer />", () => {
  beforeEach(() => {
    vi.clearAllMocks();

    vi.mocked(useCountryNamesFromCodes).mockReturnValue({
      borderCountriesData: [],
      isLoading: false,
      isError: false,
    });
  });

  it("Should render the skeleton when isLoading is true", () => {
    vi.mocked(useCountryNamesFromCodes).mockReturnValue({
      borderCountriesData: [],
      isLoading: true,
      isError: false,
    });

    renderWithRecoil(false);
    expect(screen.getByTestId("skeleton-country-details")).toBeInTheDocument();
  });

  it("Should display an error message when errorStatus is true", () => {
    renderWithRecoil(true);

    const messageError = "We are currently experiencing technical difficulties. Please try again later.";
    expect(screen.getByText(messageError)).toBeInTheDocument();
  });

  it('Should correctly render country details', () => {
    renderWithRecoil(false, mockBrazilCountryDetails);

    expect(screen.getByRole("img")).toHaveAttribute("src", "https://flagcdn.com/br.svg");
    expect(screen.getByRole("heading", { level: 2, name: "Brazil" })).toBeInTheDocument();
    expect(screen.getByText("212,559,409")).toBeInTheDocument();
    expect(screen.getByText("América")).toBeInTheDocument();
    expect(screen.getByText("South America")).toBeInTheDocument();
    expect(screen.getByText("Brasília")).toBeInTheDocument();
    expect(screen.getByText(".br")).toBeInTheDocument();
    expect(screen.getByText("Brazilian real")).toBeInTheDocument();
    expect(screen.getByText("Portuguese")).toBeInTheDocument();
  });

  it('Should correctly join the border countries', () => {
    const bordersCountries = mockBrazilCountryDetails.borders.join(",");

    expect(bordersCountries).toBe("ARG,BOL,COL,GUF,GUY,PRY,PER,SUR,URY,VEN");
  });
  
  it('Should render bordering country links correctly', () => {
    vi.mocked(useCountryNamesFromCodes).mockReturnValue({
      borderCountriesData: mockBorderCountriesData,
      isLoading: false,
      isError: false,
    });

    renderWithRecoil(false);

    expect(screen.getByRole("link", { name: "Colombia"})).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "French Guiana"})).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "Peru"})).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "Guyana"})).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "Uruguay"})).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "Paraguay"})).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "Suriname"})).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "Bolivia"})).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "Argentina"})).toBeInTheDocument();
  });

  it('Should not render Brasilia when clicking on another country', () => {
    vi.mocked(useCountryNamesFromCodes).mockReturnValue({
      borderCountriesData: mockBorderCountriesData,
      isLoading: false,
      isError: false,
    });

    renderWithRecoil(false);

    const borderCountryColombia = screen.getByRole("link", { name: "Colombia"});

    fireEvent.click(borderCountryColombia);

    renderWithRecoil(false, mockColombiaCountryDetails);

    expect(screen.queryByText("Brasília")).not.toBeInTheDocument();
  });
});
