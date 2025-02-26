# 🌍 API REST de Países com Alternador de Tema de Cores

![Design para desktop](./public/design/desktop-preview.jpg)

## 📋 Descrição

Este projeto foi desenvolvido com **React** e **TypeScript**, utilizando a [API REST Countries](https://restcountries.com) para buscar e exibir informações sobre diversos países. A aplicação conta com busca por país, filtragem por região, exibição de detalhes e alternância de temas (modo claro/escuro).

## 🚀 Funcionalidades Principais

- 🗺️ **Visualização de países**: Exibe todos os países da API na página inicial com paginação.
- 🔍 **Busca e Filtros**: Pesquise países por nome e filtre por região.
- 🗃️ **Detalhes de países**: Veja informações detalhadas sobre cada país, incluindo países fronteiriços.
- 🌑 **Modo Claro/Escuro**: Alterne entre temas, com persistência do tema escolhido no **LocalStorage**.
- ⚙️ **Skeleton de carregamento**: Exibe um esqueleto enquanto os dados são carregados.
- 💡 **Mensagens de erro e ausência de resultados**: Informações claras ao usuário em casos de falha ou ausência de dados.
- 🎨 **Animações fluidas**: Utilização da biblioteca **Framer Motion** para animações suaves.
- 🧭 **Importações Absolutas**: Melhora na organização de importações com caminhos absolutos.
- 🧪 **React Testing Library + Vitest**: Realiza testes automatizados para garantir a qualidade do código e o funcionamento da aplicação.

## 🛠️ Tecnologias Utilizadas

- **React**: Biblioteca principal para a construção da interface.
- **TypeScript**: Tipagem estática para maior segurança no código.
- **React Query**: Gerenciamento de dados assíncronos e cache.
- **Axios**: Cliente HTTP para realizar as requisições à API.
- **Recoil**: Gerenciamento de estado global de forma simples e eficiente.
- **Styled-components**: Estilização com CSS-in-JS, facilitando temas dinâmicos.
- **React Router DOM**: Navegação entre páginas.
- **Framer Motion**: Animações para transições suaves.
- **react-loading-skeleton**: Exibição de esqueleto de carregamento durante as requisições.
- **React Testing Library**: Utilizada para simular interações do usuário e testar o comportamento da interface de forma semelhante ao que o usuário final experimentaria.
- **Vitest**: Framework de testes utilizado para rodar e estruturar os testes, garantindo a qualidade do código.