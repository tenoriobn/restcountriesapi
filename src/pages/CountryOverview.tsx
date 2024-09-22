import styled from "styled-components";
import Colors from "../common/GlobalStyles/Colors";
import ArrowIcon from "../../public/assets/icons/Arrow-left.svg?react";
import { BaseButton } from "../common/GlobalStyles/GlobalStyles";
import { Link } from "react-router-dom";
import CountryDetailsContainer from "../components/CountryDetailsContainer";

export const StylizedLink = styled(Link)`
  ${BaseButton}
  font-size: 1.125rem;
  font-weight: 400;

  max-width: 130px;
  padding: .5625rem 1rem;

  gap: .875rem;

  transition: all .2s ease-in-out;
  margin-bottom: 5rem;

  svg path {
    stroke: ${Colors.white};
    font-weight: 800;
  }
`;

export default function CountryOverview() {
  return (
    <div>
      <StylizedLink to="/">
        <ArrowIcon />
        Back
      </StylizedLink>

      <CountryDetailsContainer />
    </div>
  );
}
