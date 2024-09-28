* `CountryCard.tsx` {
  - Adionar Busca por Filtros ***
  - Paginação***
  - No lugar de `Carregando...` colocar o `skeleton`; ***
  - Caso não seja encontrado nenhum País, exibir mensagem informando o usuário.; ***
  - Ajustar tamanho dos cards; ***
  - ENQUADRAR IMAGENS CORRETAMENTE NO CARD, POIS ESTÃO SENDO CORTADAS; **  *** (NÃO TEM COMO 100%) ***
  - INVESTIGAR BORDA EM ALGUNS CARDS ESPECIFICOS; ***
  - Controlar botão Ver Mais, pois em telas responsivas, é 3 cards por linha, então deve exibir 9 em vez de 8. ***
  - Persistir dados; ***
  - Ao pesquisar um país remover espaçamento enorme entre os cards***
  - AJUSTAR RESPONSIVIDADE PARA QUE TEXTOS DOS CARDS NÃO FIQUEM DESPROPORCIONAIS (ADICIONAR ... Reticências);***
}

* `CountryOverview.tsx`{
 - Tornar responsivo (estrutura +  tamanho de textos e etc) ***
 - Trazer informações de dados dinâmicos ***
 - Ao clicar no botão do Border Countries, renderizar informações do país cujo o botão foi clicado ***
 - Adicionar todos os `Border Countries:` ***
 - Verficiar processo para lidar com botões cujo o texto é muito grande para não quebrar layout ***
 - Lidar com erros quando não trazer alguma informação necessária, (ex: ops, tivemos um problema tente novamente em alguns minutos...) ***
}
* Caminhos absolutos na importação***
* Aplicar efeito de transição com Framer Motion***
* Boxshadow nos cards***
* Se possível ao clicar na imagem dentro do Overview abrir um modal com a imagem em tamanho grande ***
* Colocar lupa de pesquisa no search***



* Implementar tema Dark/Light (ARMAZENAR COR ESCOLHIDA NO LOCALSTORAGE) ///
  - Reajustar estilos (principal light), guardar o status do tema



* Performance (memo, outras ferramentas)
* Test Cypress ou Unitário
