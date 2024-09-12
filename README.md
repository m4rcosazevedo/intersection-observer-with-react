# LazyImage Component - React Lazy Loading

Este repositório contém um exemplo de implementação de um componente `LazyImage` em React, que realiza o carregamento preguiçoso (lazy loading) de imagens utilizando a API `IntersectionObserver`. Esse componente carrega imagens de baixa resolução inicialmente e substitui por versões em alta resolução conforme o usuário rola a página, melhorando a performance do site.

## Features

- Carregamento preguiçoso de imagens (lazy loading).
- Utiliza `IntersectionObserver` para detectar quando a imagem está visível no viewport.
- Suporte a imagens de baixa resolução (placeholder) antes do carregamento da imagem final.
- Transição suave entre imagens de baixa e alta resolução.

## Artigo
Detalhes sobre a implementação no artigo: [Implementando Lazy Loading de Imagens no React com Intersection Observer.](https://medium.com/@m4rcos.azevedo/implementando-lazy-loading-de-imagens-no-react-com-intersection-observer-35ee9fe1ae82).

## Instalação

Clone o repositório e instale as dependências:

```bash
git clone https://github.com/m4rcosazevedo/intersection-observer-with-react.git
cd intersection-observer-with-react
npm install
npm run dev
```

## Como Usar

O componente `LazyImage` pode ser usado para carregar imagens de forma eficiente em aplicações React. Aqui está um exemplo de uso:

```typescript
const App = () => {
  return (
    <LazyImage
      placeholderSrc="caminho/para/placeholder.jpg"
      src="caminho/para/imagem-alta-resolucao.jpg"
      alt="Descrição da Imagem"
    />
  );
};
```

### Props

- `placeholderSrc`: O caminho da imagem de baixa resolução (placeholder).
- `src`: O caminho da imagem de alta resolução.
- `alt`: Descrição alternativa da imagem.
- Outras propriedades nativas de `<img>` são suportadas (como `width`, `height`, etc.).

## Funcionamento Interno

1. O componente utiliza o `IntersectionObserver` para monitorar a visibilidade da imagem.
2. Quando a imagem entra no viewport, um timeout de 300ms é acionado para iniciar o carregamento da imagem de alta resolução.
3. A imagem de alta resolução substitui a de baixa assim que seu carregamento é concluído, e uma classe CSS de transição é aplicada.

## Contribuições

Sinta-se à vontade para abrir issues e enviar pull requests. Sugestões e melhorias são bem-vindas!

---

Feito com ❤️ por [Marcos Azevedo](https://github.com/m4rcosazevedo).