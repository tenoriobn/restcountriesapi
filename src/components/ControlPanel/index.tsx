import styled from "styled-components";
import FilterInput from "./FilterInput";
import FilterSelect from "./FilterSelect";

const ControlPanelContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.375rem;
  margin-bottom: 3.125rem;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    gap: 3.125rem;
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
