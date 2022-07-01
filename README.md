# **Cidade Fácil**

Aplicativo com funcionamento base na navegação entre web views, feito com react native e typescript.

<br/>

# **Estrutura**
<br/>

## <strong>TL;DR;</strong>

- A arquitetura do projeto é componentizada, este padrão dá para a aplicação um maior tempo de vida útil, uma vez que a aplicação se transforma em uma estrutura modular com blocos independentes.
- O coração da aplicação é o json de configurações, onde estão todas as prefeituras e comportamentos que serão lidos e renderizados pelo app, este comportamento foi mantido pois permite uma customização livre do conteúdo do aplicativo.

<br/>

<strong>Estrutura principal de pastas do projeto</strong>

``` bash
|├───assets
|├───src
│   ├───Components
│   ├───global
│   ├───routes
│   ├───screens
│   │   ├───GeneralWebView
│   │   ├───Iss
│   ├───Types
│   │   └───JsonAutoatendimento
│   └───utils
```

<br/>

## Assets
 Contém as imagens e esquema de cores da aplicação. Qualquer alteração no esquema de cores (AppColors.ts) irá refletir em todo o app.

<br/>

## Components
 Cada componente nesta pasta possui seu próprio comportamento, e folha de estilo, por exemplo: 

<br />

``` bash
|├───basicButtom
│   ├───style.ts
│   ├───basicButtom.tsx
```
> Cada componente é independente até mesmo em seu estilo, porém no contexto atual, os componentes dividem o mesmo esquema de cores. Também é possível caso necessário criar um estilo base para todos os componentes. 

<br/>

## Global
 Aqui estão os endpoints para a busca do json de configuração, sendo uma url de produção e outra para homologação.

<br/>

## Routes
 O app usa um sistema de rotas para fazer a navegação entre as telas, a navegação funciona em forma de stack. 
 > Com as rotas, temos a possibilidade de criarmos header customizáveis para cada tela.  

<br/>

## Screens
 Aqui temos as telas que serão navegadas pelo usuário, sendo estruturas com comportamentos independentes, compostas por componentes, podendo ou não receber parâmetros.
 > Ver a sessão de types para saber mais sobre parâmetros.

 As telas estão divididas em dois contextos: 
 - <strong>GeneralWebView:</strong> aqui está toda a navegação que não necessita de autenticação, sendo composta apenas de nevegação por webviews.
 - <strong>Iss:</strong> aqui está toda a navegação que necessita de autenticação, sendo composta de nevegação por webviews, tratamento de cookies e ações em local storage.

<br/>

## Types
 Tanto componentes quanto as telas de navegação recebem parâmetros, estes parâmetros foram tipados para facilitar o desenvolvimento. 
 > O json de configuração das prefeituras também encontra-se tipado em: "JsonAutoatendimento".

<br/>

## Utils
 Dentro desta pasta estão as classes que gerênciam o comportamento principal da aplicação:
 - Busca do json de configuração
 - Genrenciamento de Cookies
 - Regex 
 - Gerenciamento de login do usuário

<br/>

# **Comportamentos**
<br />

## Json de configurações
 Este é o coração do aplicativo, nele estão todas as informações para a renderização as prefeituras pelo app, é importante que toda ação seja definida dentro deste json.
 > Para saber sobre a estrutura do json de configurações basta acessar a estrutura de tipos em: **Types -> JsonAutoatendimento** 

<br/>

## Login
 Caso a prefeitura selecionada deva ser autenticada, será redirecionada para a tela e login, e, caso realizado com sucesso, o município selecionado será salvo junto dos cookies da sessão. Nos próximos usos do app, caso haja uma sessão disponível, o usuário será redirecionado para a tela com ações da prefeitura que fora selecionada anteriormente. 
 > Obs. Todas as informações, sobre cookies a serem autenticados e url para login encontran-se no retorno do json de configurações.

## Async storage
 Usado para salvar:  
 - Login realizado 
 - Onboarding realizado
 > A async storage tem tamanho máximo de 6MB por padrão, com possibilidade de extensão.

<br/>

# **Visão Geral**
<br />

 **A estrutura inicial já foi desenvolvida, atendendo as seguintes características:**
 - Login em aplicações exteriores ao app
 - Salvar a sessão de usuário, evitando logar toda vez que abrir o app
 - Navegação através de webview em aplicações exteriores ao app
 - Navegação nativa
  
 **Milestones técnicos alcançados até o momento:**
 - Independência dos componentes 
 - Rotas definidas para navegação
 - Esquema de cores da aplicação centralizadas em um único lugar
 - Tipagem da aplicação
 - Uso de React Hooks nos componentes
 - start inicial para uma aplicação sensível a modo claro e escuro de forma nativa **(componente Section)**
 - Uso mínimo de variáveis globais
 - Tela de carregamento
  
 **O que deve ser feito?**
 - desenvolvimento do front-end da aplicação
   - Nesta tela sugiro usar fundos brancos com botões coloridos, pois assim a navegação ente modo nativo e webview não é impactada, dando a impressão de um aplicativo único.
 - Inserção de informação na tela de onboarding
 - Adicionar suporte a ícones
 - Adicionar uma nova tipografia
 - Telas que serão renderizadas pelo webview: 
   - Devem ser revisadas e refatoradas para serem dinâmicas
   - O retorno para estas telas devem ser alterados a fim de manter o usuário em um único cotexto, impedindo o retorno para telas que estão impróprias para este uso
   - Controller específico para as interações com o aplicativo
   - Necessário configurar a splash screen de maneira nativa para IOS

  **O que pode ser feito?**
  - Aplicativo trocar de cor dependendo do esquema de cores da prefeitura selecioanda
  - Push notifications
  - Modo noturno
  - Acessibilidade para pessoas com deficiência
  - Emissão offline de notas
  - Login simultâneo em prefeituras diferentes
  - Login simultâneo em módulos diferentes em uma única prefeitura
  - Acesso ao suporte 
  - deploy automatizado
  - testes para os componentes

<br/>

# **Instalação**

Baixar as dependências:
```
npm install
```
<br/>

Durante o resto do uso basta: 
```
npx react-native start --reset-cache
```
```
npx react-native run-android
```

# **Documentação das techs usadas**
 - Criação incial: https://reactnative.dev/docs/environment-setup 
 - Ambiente: https://reactnative.dev/docs/environment-setup 
 - WebView: https://github.com/react-native-webview/react-native-webview/blob/master/docs/Getting-Started.md
 - Cookie manager: https://github.com/react-native-cookies/cookies
 - Routing: https://reactnavigation.org/
 - Splash screen: https://github.com/crazycodeboy/react-native-splash-screen
    - **ATENÇÂO:** a imagem usada para a splash screen deve ser uma imagem completa em formato vertical, pois a imagem é aplicada em escala à tela do aparelho.
    - **Como altero as splash screen:** 
      - Processe a imagem base no site: https://appicon.co/#image-sets
      - Pegue as pastas: drawable-hdpi, drawable-mhdpi, drawable-xhdpi, drawable-xxhdpi, drawable-xxxhdpi
      - substitua pelas existentes em: ``` app/src/main/res/ ```
 - Async Storage: https://react-native-async-storage.github.io/async-storage/ 
 - Picker: https://github.com/lawnstarter/react-native-picker-select
  