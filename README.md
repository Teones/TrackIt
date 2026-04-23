<h1 align="center">TrackIt</h1>

![Status_do_Projeto](https://img.shields.io/badge/status-concluded-green)
![Data_de_Criação](https://img.shields.io/badge/create-april_/_2026-blue)

**TrackIt** é uma aplicação Single Page Application (SPA) completa e responsiva para o acompanhamento diário de hábitos. O projeto simula uma experiência real com autenticação de usuários, gerenciamento de estado global para token e progresso, e cálculo dinâmico de metas concluídas, tudo construído com tecnologias modernas no ecossistema React.

## 📱 Visualização do Projeto

Abaixo estão capturas de tela mostrando as principais telas e o fluxo da aplicação, conforme as imagens fornecidas no repositório.

### 🔐 Fluxo de Autenticação

| <div style="text-align: center;"><img src="./src//assets//iPhone-13-PRO-localhost (7).png" alt="Tela de Login" width="200" style="border: none;"/></div> | <div style="text-align: center;"><img src="./src//assets//iPhone-13-PRO-localhost (8).png" alt="Tela de Cadastro" width="200" style="border: none;"/></div> |
|:-:|:-:|
| **Tela de Login**: Acesso à aplicação com e-mail e senha. | **Tela de Cadastro**: Criação de nova conta com e-mail, senha, nome e foto. |

### 📅 Gerenciamento de Hábitos e Progresso Diário

| <div style="text-align: center;"><img src="./src//assets//iPhone-13-PRO-localhost (9).png" alt="Lista de Hábitos Vazia" width="200" style="border: none;"/></div> | <div style="text-align: center;"><img src="./src//assets//iPhone-13-PRO-localhost (10).png" alt="Criação de Novo Hábito" width="200" style="border: none;"/></div> | <div style="text-align: center;"><img src="./src//assets//iPhone-13-PRO-localhost (11).png" alt="Tela 'Hoje' com Progresso" width="200" style="border: none;"/></div> |
|:-:|:-:|:-:|
| **Hábitos**: Estado inicial sem hábitos cadastrados. | **Hábitos**: Formulário para criar um novo hábito com seleção de dias. | **Hoje**: Lista de hábitos do dia e barra de progresso circular. |

---

## 🔨 Features

- `Feature 1`: **Autenticação Completa**: Cadastro e login de usuários com integração à API externa. A aplicação gerencia tokens de acesso e mantém o usuário logado (usando Context API e Local Storage).
- `Feature 2`: **Gerenciamento de Estado Global (Context API)**: Compartilhamento de dados cruciais, como o token do usuário e a porcentagem de progresso diário, entre todas as rotas da aplicação sem *prop drilling*.
- `Feature 3`: **Cálculo Dinâmico de Progresso**: A barra de navegação inferior (Menu) apresenta uma barra de progresso circular (`react-circular-progressbar`) que é calculada e atualizada em tempo real conforme os hábitos do dia são marcados como concluídos.
- `Feature 4`: **CSS-in-JS (Styled Components)**: Toda a interface e o roteamento de estilos baseados em propriedades (props) foram desenvolvidos utilizando Styled Components, garantindo escopo local e evitando conflitos de CSS.
- `Feature 5`: **Consumo de API (Axios)**: Integração robusta com uma API para operações de listar, criar, deletar e marcar/desmarcar hábitos.

## 🛠️ Open and run the project

O projeto foi construído utilizando o **Vite**, garantindo um ambiente de desenvolvimento extremamente rápido e otimizado.

Para rodar o projeto localmente:

1. Clone este repositório.
2. Instale as dependências:
   ```bash
   npm install