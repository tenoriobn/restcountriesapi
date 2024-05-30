import styled from "styled-components";
import Colors from "../../common/GlobalStyles/Colors";

const TestCardTitle = styled.h2`
  color: ${Colors.darkGray};
  margin-top: 50px;
`;

export default function CardTest() {

  return (
    <TestCardTitle>Conteúdo da Página Inicial Aqui</TestCardTitle>
  );
}
