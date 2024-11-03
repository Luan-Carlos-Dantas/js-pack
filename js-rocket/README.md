# Javascript
  CASE SENSITIVE: Sensível a letras maiúscula e minúsculas
  HOISTING: Comportamento que faz com que a linguagem mova as declarações para o topo do escopo que foram definidas
  ## Comentários

  `//comentário de uma única linha` ou `/*comentário de multíplas linhas*/`
  ## Variavéis
  `let`, `const`, `var` \
  Os tipos de declarações variáveis possíveis são:
  - let
      ```javascript
      let example
      ```
  - const
      ```javascript
      const example
      ```
  - var
    ```javascript
      var example
    ```
  As variáveis possuem seus escopos definidos, que definem o contexto delas, que definem onde determinada viariável pode ou não ser acessada:
  - global: Podem ser declaradas fora de qualquer função ou bloco de código (var)
  - bloco: Somente são acessíveis dentro do bloco de código que foram declaradas (let / const)

  TIPOS DE DADOS SUPORTADOS:
  - `string`;
  - `number`;
  - `boolean`;
  - `null`;
  - `undefined`;
  - `array`;
  - `object`;
  - `map`

  RECOMENDAÇÕES:
  - Utilize o nome das variáveis em inglês;
  - Não utilize caracteres especiais, acentuações ou espaçamentos;
  - Crie nomes que dão sentido para variável;
  - Utilize os padrões camelCase ou snake_case;

  ## OPERADORES

  ### OPERADORES ARITMÉTICOS:
    - + = SOMA
    - - = SUBTRAÇÃO
    - * = MULTIPLICAÇÃO
    - / = DIVISÃO
    - % = RESTO
    - ** = POTENCIAÇÃO

  ### OPERADORES DE INCREMENTO E DECREMENTO:
    - Incremento
      ```javascript
        let variavel++ || ++variavel
      ```
    - Decremento
      ```javascript
        let variavel-- || --variavel
      ```
  ### OPERADORES LÓGICOS:
    - == - igual a (valores iguais sem distinção de tipos de variáveis)
    - === - identico a (valores iguais e tipos de variáveis iguais)
    - != - diferente de (valores diferentes sem distinção de tipos de variáveis)
    - !== - extritamente diferente de (valores diferentes e tipos de variáveis diferentes)
    - > - maior que
    - >= - maior ou igual a
    - < - menor que
    - <= - menor ou igual a
    - <> - diferente
    - && - and
    - || - or
    - ! - not

  ### OPERADORES DE ATRIBUIÇÃO:
    - = - atribuindo um valor
    - += - incrmento do valor
    - -= - decremento do valor
    - *= - multiplica o valor
    - /= - divide o valor

  ## CONDICIONAIS
  ### ESTRUTURA DE CONDIÇÃO
  ```javascript
  if(condição){
    console.log("Verdadeiro")
  }else if(condição){
    console.log("Primeira condição não verdadeira porém não foi false")
  }else{
    console.log("Falso")
  }
  ```
  ```javascript
    console.log(condição ? "Verdadeiro" : "Falso")
  ```
  ```javascript
    switch(option){
      case 1:
        console.log('Opção 1')
        break;
      case 2:
        console.log('Opção 2')
        break;
      default:
        console.log('Opção padrão')
        break;
    }
  ```
  ```javascript
    try{
      Bloco de código que tentará ser executado
    }catch(error){
      Bloco de código que será executado caso o bloco anterior não seja excutado
    }finally{
      Bloco de código que será executado independente de ter dado certo ou não
    }
  ```

  ## DOM
  Document Object Model é a representação de dados dos objetos que compõem a estrutura e o conteúdo
