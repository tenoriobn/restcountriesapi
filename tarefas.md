* `CountryCard.tsx` {
  - Adionar Busca por Filtros ***
  - Paginação***
  - No lugar de `Carregando...` colocar o `skeleton`; ***
  - Caso não seja encontrado nenhum País, exibir mensagem informando o usuário.; ***

  - ENQUADRAR IMAGENS CORRETAMENTE NO CARD, POIS ESTÃO SENDO CORTADAS; 
  - Ajustar tamanho dos cards;
  - AJUSTAR RESPONSIVIDADE PARA CARD NÃO FICAR MAIOR QUE OUTRO (ADICIONAR ... Reticências);

  - Persistir dados;

}


* `CountryOverview.tsx`{
 - Tornar responsivo (estrutura +  tamanho de textos e etc) ***
 - Trazer informações de dados dinâmicos ***
 - Ao clicar no botão do Border Countries, renderizar informações do país cujo o botão foi clicado ***


 - Verficiar processo para lidar com botões cujo o texto é muito grande para não quebrar layout
 + Lidar com erros quando não trazer alguma informação necessária, (ex: ops, tivemos um problema tente novamente em alguns minutos...).
}

* Implementar tema Dark/Light
* Aplicar efeito de transição com Framer Motion
* Controlar botão Ver Mais, pois em telas responsivas, é 3 cards por linha, então deve exibir 6 em vez de 8.