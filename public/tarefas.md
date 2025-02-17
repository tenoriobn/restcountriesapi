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
  * Boxshadow nos cards***
}

* `CountryOverview.tsx`{
 - Tornar responsivo (estrutura +  tamanho de textos e etc) ***
 - Trazer informações de dados dinâmicos ***
 - Ao clicar no botão do Border Countries, renderizar informações do país cujo o botão foi clicado ***
 - Adicionar todos os `Border Countries:` ***
 - Verficiar processo para lidar com botões cujo o texto é muito grande para não quebrar layout ***
 - Lidar com erros quando não trazer alguma informação necessária, (ex: ops, tivemos um problema tente novamente em alguns minutos...) ***
 * Se possível ao clicar na imagem dentro do Overview abrir um modal com a imagem em tamanho grande ***
}

* Implementar Absolute Imports***
* Implementar tema Dark/Light ***
* Implementar biblioteca de transição Framer Motion *** (AJUSTAR OPACIDADE QUE FICA DISTORCIDO) ***
* ARMAZENAR TEMA ESCOLHIDO NO LOCALSTORAGE ***


* Performance (memo, outras ferramentas)
* Teste unitário, depois teste de integração para verificar se os componentes interagem entre sí

  * Testar FilterInput:
    OK - Primeiro Teste Para FilterInput, primeiro ver se renderiza;
    OK - Segundo ver se mostra a "label" certa que seria "Search for a country...";
    OK - Terceiro conferir se é possível digitar no input e verificar se foi o digitado;


  * Testar FilterSelect:
    OK - Conferir renderizção inicial do componentes
    OK - Conferior se está mostrando `Filter by Region` como label inicial
    OK - Conferir se é possível selecionar uma das options e se ela é renderizada como opção selecionada.

  * Testar Header e DarkMode
    OK - Conferir se os elementos do componente `<Header />` estão sendo renderizados
    - Testar onClick do botão `DarkMode`


    ** Refatorar testes anteriores para seguir a padronização de escritura de código igual a do reder
      primeiro acessando a `screen`, depois acessando pela `role`, depois `aria-label` e por fim `data-test`
    **


  * Testar Card