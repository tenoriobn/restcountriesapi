import styled from "styled-components";
import FilterInput from "./FilterInput";
import FilterSelect from "./FilterSelect";

const ControlPanelContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3.125rem;

  @media (min-width: 768px) {
    flex-direction: row;
    /* align-items: center; */
    justify-content: space-between;
  }
`;

export default function ControlPanel() {
  return (
    <ControlPanelContainer>
      <FilterInput />
      <FilterSelect />
    </ControlPanelContainer>
  );
}
