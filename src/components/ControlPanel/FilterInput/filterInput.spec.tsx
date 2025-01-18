import customRender from "src/tests/utils";
import { describe } from "vitest";
import FilterInput from ".";
import { RecoilRoot } from "recoil";
import { screen } from "@testing-library/react";

describe('<FilterInput />', () => {
  it('', () => {
    customRender(
      <RecoilRoot>
        <FilterInput />
      </RecoilRoot>
    );

    expect(screen.getByText('Search for a country...')).toBeInTheDocument();
  });
});
