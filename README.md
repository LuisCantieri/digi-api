## 📜 Hospedando API de Digimon - React + Axios
 Esta aplicação React consome a uma API de Digimon para exibir informações sobre Digimons, incluindo nome, nível, tipo, atributo e uma imagem.

## 🔹 Tecnologias usadas:

- React.js

- Axios (para requisições HTTP)

- CSS modular

## 🖥️ Como a Aplicação Funciona
Ao carregar a página, a aplicação busca um Digimon aleatório e exibe as seguintes informações:

Nome

Nível (Rookie, Champion, etc.)

Tipo (Réptil, Animal, etc.)

Atributo (Vaccine, Data, Virus, etc.)

Imagem do Digimon

Descrição do Digimon

O botão "Novo Digimon" busca outro Digimon aleatório.

## 🛠️ Como Rodar o Projeto Localmente
Pré-requisitos
✅ Node.js instalado
✅ Git (opcional, caso queira clonar o repositório)

Passo a Passo
1. Clone o repositório (ou baixe o ZIP)

- git clone https://github.com/LuisCantieri/digi-api.git
- cd digi-api

2. Instale as dependências
- npm install 
- npm install axios

3. Execute o projeto
npm start
- A aplicação abrirá automaticamente no navegador em http://localhost:3000.

## 📂 Estrutura do Projeto
**src**

 **components**
 - container.js  - Exibe os dados do Digimon
 - header.js     - Cabeçalho da aplicação
 
 
 **services**
 - api.js - Configuração do Axios e chamadas à API
 
 
 **styles**
 - body.css      - Estilos globais
 - header.css    - Estilos do cabeçalho
 - container.css - Estilos do card do Digimon
 
 
 **App.js (fora do scr)** - Componente principal