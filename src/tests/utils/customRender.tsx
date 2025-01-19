import userEvent from '@testing-library/user-event';
import { render } from '@testing-library/react';

// Tipando o retorno da função customRender
export default function customRender(jsx: React.ReactElement) {
  const user = userEvent.setup();  // Inicializando o userEvent

  return {
    user,  // Retorna o userEvent para ser utilizado nos testes
    ...render(jsx),  // Retorna também o objeto do render para acessar os elementos da tela
  };
}
