# Desafio Elephan

Este projeto é uma API backend desenvolvida para o teste técnico da vaga de desenvolvedor backend na Elephan. O objetivo é integrar serviços de marketing (HubSpot) e inteligência artificial (Google Gemini) para gerar insights automatizados a partir dos dados de negócios.

## Tecnologias Utilizadas

- **Node.js** (ES Modules)
- **Express** (API REST)
- **HubSpot API Client** (`@hubspot/api-client`)
- **Google Gemini AI** (`@google/generative-ai`)
- **Swagger** (documentação automática)
- **Axios** (requisições HTTP)
- **dotenv** (variáveis de ambiente)
- **compression** (otimização de respostas)
- **Dev Containers** (ambiente de desenvolvimento isolado)
- **Nodemon** (hot reload para desenvolvimento)

## Intuito do Projeto

Automatizar a geração de insights de marketing e negócios utilizando dados do HubSpot e inteligência artificial Gemini, expondo endpoints REST documentados via Swagger.

## Como Configurar

1. **Clone o repositório:**
   ```bash
   git clone <url-do-repo>
   cd desafio-elephan
   ```

2. **Abra no VS Code usando Dev Containers:**
   - Certifique-se de ter o [Dev Containers](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-containers) instalado.
   - Abra a pasta do projeto no VS Code e selecione "Reopen in Container".

3. **Configure o arquivo `.env`:**
   - Copie o arquivo `.env-template` para `.env` e preencha com suas chaves:
     ```
     GEMINI_API_KEY=your-gemini-api-key
     PORT=8000 (opcional)
     ```

4. **Instale as dependências (caso necessário):**
   ```bash
   npm install
   ```

5. **Inicie o servidor:**
   ```bash
   npm run dev
   ```

6. **Acesse a documentação Swagger:**
   ```
   http://localhost:[PORT]/api-docs
   ```

## Observações

- O projeto está pronto para rodar em ambientes Dev Container, garantindo isolamento e reprodutibilidade.
- Todas as dependências principais já estão pré-instaladas no container.
- Para abrir URLs no navegador do host, utilize o comando:
  `"$BROWSER" <url>`

---

Desenvolvido por Tonny-Weslley
