
# FuncionarioWebApiAngular

Frontend Angular para consumo da API [FuncionarioWebApiEstudo](https://github.com/t-arievilo/FuncionarioWebApiEstudo).

## 🧰 Tecnologias Utilizadas

- Angular 16.2.11
- Angular CLI
- Angular Material
- TypeScript
- SCSS (CSS modularizado)
- RxJS

## ✅ Funcionalidades

- Listagem de funcionários
- Cadastro de novo funcionário
- Visualização de detalhes
- Edição
- Inativação

## ⚙️ Como Executar

### 1. Pré-requisitos

- Node.js (versão 16 ou superior)
- Angular CLI (caso não tenha: `npm install -g @angular/cli`)

### 2. Clonar o repositório

```bash
git clone https://github.com/t-arievilo/FuncionarioWebApiAngular.git
cd FuncionarioWebApiAngular
```

### 3. Instalar dependências

```bash
npm install
```

### 4. Configurar o ambiente

Certifique-se de que a API FuncionarioWebApiEstudo esteja rodando localmente.  
Você pode alterar a URL base da API em:

```ts
src/environments/environment.ts
```

### 5. Rodar o projeto

```bash
ng serve
```

Acesse: [http://localhost:4200](http://localhost:4200)

## 🖼️ Estilização

- Utilizado Angular Material com temas básicos
- Componentes com `mat-form-field`, `mat-button`, `mat-card`, entre outros.

