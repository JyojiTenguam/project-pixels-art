# Projeto Arte com Pixels

Este projeto foi desenvolvido como parte do curso da Trybe, com o objetivo de criar uma paleta de cores interativa e um quadro de pixels onde o usuário pode desenhar. A seguir, você encontrará informações sobre como configurar e executar o projeto, bem como detalhes sobre as funcionalidades implementadas.

## Tecnologias Utilizadas

- JavaScript
- HTML
- CSS

## Funcionalidades do Projeto

A página desenvolvida apresenta as seguintes características:

1. **Título da Página**: A página contém o título "Paleta de Cores".
2. **Paleta de Cores**: Inclui uma paleta com quatro cores distintas.
3. **Quadro de Pixels**: Um quadro de 25 pixels (5x5) onde cada pixel possui 40px de largura e altura, delimitado por uma borda preta de 1px.
4. **Seleção de Cores**: Permite ao usuário selecionar uma cor da paleta.
5. **Preenchimento de Pixels**: O usuário pode preencher um pixel do quadro com a cor selecionada.
6. **Limpar Quadro**: Um botão que limpa o quadro preenchendo todos os pixels com branco.
7. **Gerar Cores Aleatórias**: Um botão que gera quatro cores aleatórias para a paleta.
8. **Salvar e Recuperar Desenho**: O quadro é salvo no localStorage para que o desenho atual permaneça ao recarregar a página.
9. **Input para Tamanho do Quadro**: Permite que o usuário defina o tamanho do quadro de pixels.
10. **Limitação de Tamanho do Quadro**: Limita o tamanho mínimo e máximo do quadro de pixels.
11. **Manter Tamanho do Quadro**: O tamanho do quadro é mantido ao recarregar a página usando localStorage.

### Requisitos Bônus

- **Input de Tamanho**: O usuário pode especificar um novo tamanho para o quadro de pixels.
- **Limitação de Tamanho**: O quadro não pode ter menos de 5 ou mais de 50 pixels.

## Instruções de Instalação e Uso

1. **Faça um Fork do Repositório**:
   - No GitHub, acesse o [repositório original do projeto](https://github.com/JyojiTenguam/project-pixels-art) e clique no botão **"Fork"** no canto superior direito para criar uma cópia do projeto na sua conta.

2. **Clone o Repositório Forkado**:
   - Após fazer o fork, clone o repositório para o seu computador:

    ```bash
    git clone git@github.com:seu-usuario/project-pixels-art.git
    ```

3. **Navegue até o Diretório do Projeto**:

    ```bash
    cd project-pixels-art
    ```

4. **Instale as Dependências**:

    ```bash
    npm install
    ```

5. **Visualize o Projeto**:
   - Abra o arquivo `index.html` em seu navegador para visualizar o projeto.
