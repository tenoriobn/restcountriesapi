import styled from "styled-components";
import ArrowIcon from "../../public/assets/icons/Arrow-left.svg?react";
import { BaseButton } from "src/common/GlobalStyles/GlobalStyles";
import { Link } from "react-router-dom";
import CountryDetailsContainer from "src/components/CountryDetailsContainer";
import { transitions } from "src/common/Themes/transitions";

export const StylizedLink = styled(Link)`
  ${BaseButton}
  font-size: 1.125rem;
  font-weight: 400;

  max-width: 130px;
  padding: .5625rem 1rem;

  gap: .875rem;

  transition: ${transitions.smoothTransition};
  margin-bottom: 5rem;

  svg path {
    stroke: ${({ theme }) => theme.primaryText};
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
