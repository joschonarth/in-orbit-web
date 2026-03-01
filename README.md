<div align="center">

<img height="160" alt="in.orbit" src="/public/icon.svg" />

# in.orbit

*Registre metas, acompanhe seu progresso e evolua semana a semana.*

<img src="https://img.shields.io/github/last-commit/joschonarth/in-orbit-web?style=default&logo=git&logoColor=white&color=8b5cf6&labelColor=27272a" alt="last-commit">
<img src="https://img.shields.io/github/languages/top/joschonarth/in-orbit-web?style=default&color=F67986&labelColor=27272a" alt="repo-top-language">
<img src="https://img.shields.io/github/languages/count/joschonarth/in-orbit-web?style=default&color=F38856&labelColor=27272a" alt="repo-language-count">

---

📃 [Sobre](#-sobre)&nbsp;&nbsp;•&nbsp;&nbsp;
🛠️ [Tecnologias](#-tecnologias)&nbsp;&nbsp;•&nbsp;&nbsp;
✨ [Funcionalidades](#-funcionalidades)&nbsp;&nbsp;•&nbsp;&nbsp;
🚀 [Como rodar](#-como-rodar)

</div>

---

<img width="1365" height="767" alt="summary" src="https://github.com/user-attachments/assets/379c1586-ed40-4353-a94e-a00faedf33e7" />

---

## 📃 Sobre

O **in.orbit** é uma aplicação web para criação e acompanhamento de metas com foco semanal. É possível criar metas com frequência personalizada, marcar e desmarcar conclusões, acompanhar o progresso da semana atual e navegar por semanas anteriores através de um relatório detalhado. O projeto também conta com autenticação via GitHub e um sistema de gamificação com XP e níveis para incentivar a consistência. O frontend é construído com **React**, **Vite** e **Tailwind CSS**.

---

## 🛠️ Tecnologias

- ⚛️ **[React](https://react.dev/)** — Biblioteca para construção de interfaces declarativas.
- ⚡ **[Vite](https://vitejs.dev/)** — Build tool moderna com hot reload ultrarrápido.
- 🟦 **[TypeScript](https://www.typescriptlang.org/)** — Tipagem estática e segurança em tempo de desenvolvimento.
- 🎨 **[Tailwind CSS](https://tailwindcss.com/)** — Estilização utilitária direto no JSX.
- 🧩 **[Radix UI](https://www.radix-ui.com/)** — Componentes acessíveis e sem estilo para composição de UI.
- 🏝️ **[TanStack Query](https://tanstack.com/query)** — Gerenciamento de estado assíncrono, cache e sincronização de dados.
- 🐠 **[Orval](https://orval.dev/)** — Geração automática de clients HTTP e tipos a partir da spec OpenAPI.
- 📋 **[React Hook Form](https://react-hook-form.com/)** — Gerenciamento de formulários performático e flexível.
- 🛣️ **[React Router DOM](https://reactrouter.com/)** — Roteamento declarativo para aplicações React.
- 🔔 **[Sonner](https://sonner.emilkowal.ski/)** — Notificações toast elegantes e acessíveis.
- 🛡️ **[Zod](https://zod.dev/)** — Validação e parsing de schemas com inferência de tipos.
- 🔍 **[Biome](https://biomejs.dev/)** — Linting e formatação de código de alta performance.

---

## ✨ Funcionalidades

- [x] 🎯 Criar metas com frequência semanal definida
- [x] ✅ Marcar meta como concluída
- [x] ↩️ Desconcluir uma meta
- [x] 🗑️ Deletar uma meta
- [x] 📊 Relatório semanal de metas concluídas com histórico de conclusão
- [x] 🗓️ Navegação entre semanas
- [x] 📈 Acompanhamento de progresso das metas a serem cumpridas
- [x] 🏆 Sistema de gamificação com XP por conclusão de meta
- [x] 🎮 Sistema de nível do usuário baseado em XP acumulado
- [x] 🔐 Autenticação com GitHub (OAuth)

---

## 🚀 Como rodar

### 📋 Pré-requisitos

- 🟩 [Node.js 18+](https://nodejs.org/)
- 📦 [npm](https://www.npmjs.com/)
- 🔌 API do **in.orbit** em execução — veja o repositório: **[in.orbit-server](https://github.com/joschonarth/in.orbit-server)**

### 🔧 Instalação

1. Clone o repositório:

    ```bash
    git clone https://github.com/joschonarth/in-orbit-web.git
    ```

2. Acesse a pasta do projeto:

    ```bash
    cd in-orbit-web
    ```

3. Instale as dependências:

    ```bash
    npm install
    ```

4. Configure as variáveis de ambiente copiando o arquivo de exemplo:

    ```bash
    cp .env.local.example .env.local
    ```

    Em seguida, abra o arquivo `.env.local` e preencha as variáveis:

    ```env
    VITE_API_BASE_URL=http://localhost:3333
    ```

### 🔌 API

Este projeto consome a **in.orbit API**, que precisa estar disponível para que a aplicação funcione corretamente. Siga as instruções do repositório abaixo para rodá-la:

👉 **[Servidor do in.orbit](https://github.com/joschonarth/in.orbit-server)**

### 🤖 Geração de cliente HTTP

Os clients HTTP são gerados automaticamente pelo **Orval** a partir da spec OpenAPI exposta pelo server. Para regenerar:

```bash
npm run dev:orval
```

### ▶️ Execução

Inicia o servidor de desenvolvimento:

```bash
npm run dev:vite
```

Ou rode os dois em um único comando:

```bash
npm run dev
```

Acesse **[http://localhost:3000](http://localhost:3000)** no navegador.

---

## ⭐ Apoie este Projeto

Se curtiu o projeto, deixe uma ⭐ aqui no GitHub — isso ajuda muito!

---

<div align="center">

Feito com ♥ por **[João Otávio Schonarth](https://github.com/joschonarth)**

[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://linkedin.com/in/joschonarth)
[![Gmail](https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white)](mailto:seuemail@gmail.com)

</div>
