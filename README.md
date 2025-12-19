# @rbinflow/eslint-config

<div align="center">

![npm version](https://img.shields.io/npm/v/@rbinflow/eslint-config?style=for-the-badge)
![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![ESLint](https://img.shields.io/badge/ESLint-4B32C3?style=for-the-badge&logo=eslint&logoColor=white)
![Prettier](https://img.shields.io/badge/Prettier-F7B93E?style=for-the-badge&logo=prettier&logoColor=black)

**ESLint and Prettier configurations for Node.js, React, Next.js, and Expo projects**

[English](#english) | [Português](#português)

</div>

---

## English

### Overview

A comprehensive ESLint and Prettier configuration package that provides standardized code quality and formatting rules for JavaScript and TypeScript projects. Includes support for Node.js, React, Next.js, and Expo with industry best practices, automatic import sorting, Tailwind CSS class ordering, and accessibility rules.

### Installation

```bash
npm install --save-dev @rbinflow/eslint-config
```

### Available Configurations

#### Node.js

This package offers two variants for Node.js projects:

**`node.js` - Without semicolons (modern standard)**
```javascript
module.exports = {
  extends: ['@rbinflow/eslint-config/node'],
}
```

**`node-with-semi.js` - With semicolons (traditional standard)**
```javascript
module.exports = {
  extends: ['@rbinflow/eslint-config/node-with-semi'],
}
```

**Difference:** The only difference between the two variants is the Prettier configuration:
- `node.js`: `semi: false` (without semicolons)
- `node-with-semi.js`: `semi: true` (with semicolons)

All other settings are identical.

#### React

```javascript
module.exports = {
  extends: ['@rbinflow/eslint-config/react'],
}
```

#### Next.js

```javascript
module.exports = {
  extends: ['@rbinflow/eslint-config/next'],
}
```

#### Expo

```javascript
module.exports = {
  extends: ['@rbinflow/eslint-config/expo'],
}
```

### Usage

#### Basic Setup

Create a `.eslintrc.js` file in the root of your project:

```javascript
module.exports = {
  extends: ['@rbinflow/eslint-config/react'],
}
```

#### Examples by Project Type

**Node.js (without semicolons):**
```javascript
module.exports = {
  extends: ['@rbinflow/eslint-config/node'],
}
```

**Node.js (with semicolons):**
```javascript
module.exports = {
  extends: ['@rbinflow/eslint-config/node-with-semi'],
}
```

**React:**
```javascript
module.exports = {
  extends: ['@rbinflow/eslint-config/react'],
}
```

**Next.js:**
```javascript
module.exports = {
  extends: ['@rbinflow/eslint-config/next'],
}
```

**Expo:**
```javascript
module.exports = {
  extends: ['@rbinflow/eslint-config/expo'],
}
```

### Semicolon Policy

**Important:** Only Node.js configurations can have semicolon options.

- ✅ **Node.js**: Two variants available (`node.js` without `;` and `node-with-semi.js` with `;`)
- ❌ **React, Next.js, Expo**: Only without semicolons (`semi: false`)

This policy ensures consistency across frontend projects while allowing flexibility for Node.js projects.

### Advanced Configuration

#### Customize Rules

You can extend and customize the rules:

```javascript
module.exports = {
  extends: ['@rbinflow/eslint-config/react'],
  rules: {
    // Your custom rules here
    'no-console': 'warn',
  },
}
```

#### Use with Prettier

Prettier is already integrated into the configurations. For React/Next.js/Expo projects, Tailwind CSS classes are automatically sorted.

#### TypeScript

All configurations include full TypeScript support through `@typescript-eslint`.

### VSCode Integration

This package works seamlessly with the official VSCode ESLint extension.

#### Prerequisites

1. Install the [ESLint extension](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) in VSCode
2. Install the package in your project:
   ```bash
   npm install --save-dev @rbinflow/eslint-config
   ```

#### Configuration

1. Create a `.eslintrc.js` file in the root of your project:
   ```javascript
   module.exports = {
     extends: ['@rbinflow/eslint-config/react'],
   }
   ```

2. The VSCode ESLint extension will automatically detect the configuration
3. You'll see ESLint errors and warnings directly in the editor
4. Use `Cmd+Shift+P` (Mac) or `Ctrl+Shift+P` (Windows/Linux) and type "ESLint: Fix all auto-fixable Problems" to auto-fix

#### Supported Configuration Formats

The VSCode ESLint extension supports the following formats:
- `.eslintrc.js` (JavaScript) ✅
- `.eslintrc.json` (JSON) ✅
- `.eslintrc.yaml` (YAML) ✅
- `eslintConfig` in `package.json` ✅

This package uses `.js` which is fully compatible.

#### Troubleshooting

**Problem**: Extension doesn't detect the configuration
- **Solution**: Ensure the `.eslintrc.js` file is in the project root
- **Solution**: Restart VSCode after installing the package

**Problem**: "Cannot find module" errors
- **Solution**: Run `npm install` in the project directory
- **Solution**: Ensure all package dependencies are installed

**Problem**: Auto-fix doesn't work
- **Solution**: Check if the ESLint extension is enabled
- **Solution**: Use the "ESLint: Fix all auto-fixable Problems" command from the Command Palette

### Features

- ✅ **ESLint 8.57.1** - Stable and tested version
- ✅ **Prettier 3.7.4** - Automatic code formatting
- ✅ **TypeScript** - Full support via @typescript-eslint
- ✅ **Import Sorting** - Automatic import sorting
- ✅ **Tailwind CSS** - Automatic class sorting (React/Next.js)
- ✅ **Accessibility** - jsx-a11y rules for React/Next.js/Expo
- ✅ **Best Practices** - Configurations based on industry standards
- ✅ **VSCode Ready** - Works perfectly with official ESLint extension

### Additional Documentation

- [Publishing Guide](./PUBLISHING.md) - How to publish and update the package on npm

### Contributing

This is a private package used internally. For suggestions or improvements, please open an issue in the repository.

### License

MIT © Rubinho

### Links

- [npm](https://www.npmjs.com/package/@rbinflow/eslint-config)
- [Repository](https://github.com/devrubinho/rbin-eslint-config)

---

<div align="center">

**Developed with ❤️ by Rubinho**

</div>

---

## Português

### Sobre

Este pacote fornece configurações ESLint e Prettier padronizadas para projetos Node.js, React, Next.js e Expo. Inclui as melhores práticas do mercado, suporte a TypeScript, ordenação automática de importações, formatação de classes Tailwind CSS e regras de acessibilidade.

### Instalação

```bash
npm install --save-dev @rbinflow/eslint-config
```

### Configurações Disponíveis

#### Node.js

Este pacote oferece duas variantes para projetos Node.js:

**`node.js` - Sem ponto e vírgula (padrão moderno)**
```javascript
module.exports = {
  extends: ['@rbinflow/eslint-config/node'],
}
```

**`node-with-semi.js` - Com ponto e vírgula (padrão tradicional)**
```javascript
module.exports = {
  extends: ['@rbinflow/eslint-config/node-with-semi'],
}
```

**Diferença:** A única diferença entre as duas variantes é a configuração do Prettier:
- `node.js`: `semi: false` (sem ponto e vírgula)
- `node-with-semi.js`: `semi: true` (com ponto e vírgula)

Todas as outras configurações são idênticas.

#### React

```javascript
module.exports = {
  extends: ['@rbinflow/eslint-config/react'],
}
```

#### Next.js

```javascript
module.exports = {
  extends: ['@rbinflow/eslint-config/next'],
}
```

#### Expo

```javascript
module.exports = {
  extends: ['@rbinflow/eslint-config/expo'],
}
```

### Uso

#### Configuração Básica

Crie um arquivo `.eslintrc.js` na raiz do seu projeto:

```javascript
module.exports = {
  extends: ['@rbinflow/eslint-config/react'],
}
```

#### Exemplos por Tipo de Projeto

**Node.js (sem ponto e vírgula):**
```javascript
module.exports = {
  extends: ['@rbinflow/eslint-config/node'],
}
```

**Node.js (com ponto e vírgula):**
```javascript
module.exports = {
  extends: ['@rbinflow/eslint-config/node-with-semi'],
}
```

**React:**
```javascript
module.exports = {
  extends: ['@rbinflow/eslint-config/react'],
}
```

**Next.js:**
```javascript
module.exports = {
  extends: ['@rbinflow/eslint-config/next'],
}
```

**Expo:**
```javascript
module.exports = {
  extends: ['@rbinflow/eslint-config/expo'],
}
```

### Política de Ponto e Vírgula

**Importante:** Apenas as configurações Node.js podem ter opção de ponto e vírgula.

- ✅ **Node.js**: Duas variantes disponíveis (`node.js` sem `;` e `node-with-semi.js` com `;`)
- ❌ **React, Next.js, Expo**: Apenas sem ponto e vírgula (`semi: false`)

Esta política garante consistência entre projetos frontend enquanto permite flexibilidade para projetos Node.js.

### Configurações Avançadas

#### Personalizar Regras

Você pode estender e personalizar as regras:

```javascript
module.exports = {
  extends: ['@rbinflow/eslint-config/react'],
  rules: {
    // Suas regras personalizadas aqui
    'no-console': 'warn',
  },
}
```

#### Usar com Prettier

O Prettier já está integrado nas configurações. Para projetos React/Next.js/Expo, as classes Tailwind CSS são automaticamente ordenadas.

#### TypeScript

Todas as configurações incluem suporte completo para TypeScript através de `@typescript-eslint`.

### Integração com VSCode

Este pacote funciona perfeitamente com a extensão ESLint oficial do VSCode.

#### Pré-requisitos

1. Instale a extensão [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) no VSCode
2. Instale o pacote no seu projeto:
   ```bash
   npm install --save-dev @rbinflow/eslint-config
   ```

#### Configuração

1. Crie um arquivo `.eslintrc.js` na raiz do seu projeto:
   ```javascript
   module.exports = {
     extends: ['@rbinflow/eslint-config/react'],
   }
   ```

2. A extensão ESLint do VSCode detectará automaticamente a configuração
3. Você verá erros e avisos do ESLint diretamente no editor
4. Use `Cmd+Shift+P` (Mac) ou `Ctrl+Shift+P` (Windows/Linux) e digite "ESLint: Fix all auto-fixable Problems" para corrigir automaticamente

#### Formato de Configuração Suportado

A extensão ESLint do VSCode suporta os seguintes formatos:
- `.eslintrc.js` (JavaScript) ✅
- `.eslintrc.json` (JSON) ✅
- `.eslintrc.yaml` (YAML) ✅
- `eslintConfig` no `package.json` ✅

Este pacote usa `.js` que é totalmente compatível.

#### Troubleshooting

**Problema**: A extensão não detecta a configuração
- **Solução**: Certifique-se de que o arquivo `.eslintrc.js` está na raiz do projeto
- **Solução**: Reinicie o VSCode após instalar o pacote

**Problema**: Erros de "Cannot find module"
- **Solução**: Execute `npm install` no diretório do projeto
- **Solução**: Certifique-se de que todas as dependências do pacote estão instaladas

**Problema**: Auto-fix não funciona
- **Solução**: Verifique se a extensão ESLint está habilitada
- **Solução**: Use o comando "ESLint: Fix all auto-fixable Problems" do Command Palette

### Características

- ✅ **ESLint 8.57.1** - Versão estável e testada
- ✅ **Prettier 3.7.4** - Formatação automática de código
- ✅ **TypeScript** - Suporte completo via @typescript-eslint
- ✅ **Import Sorting** - Ordenação automática de importações
- ✅ **Tailwind CSS** - Ordenação automática de classes (React/Next.js)
- ✅ **Acessibilidade** - Regras jsx-a11y para React/Next.js/Expo
- ✅ **Melhores Práticas** - Configurações baseadas em padrões do mercado
- ✅ **VSCode Ready** - Funciona perfeitamente com extensão ESLint oficial

### Documentação Adicional

- [Guia de Publicação](./PUBLISHING.md) - Como publicar e atualizar o pacote no npm

### Contribuindo

Este é um pacote privado usado internamente. Para sugestões ou melhorias, abra uma issue no repositório.

### Licença

MIT © Rubinho

### Links

- [npm](https://www.npmjs.com/package/@rbinflow/eslint-config)
- [Repositório](https://github.com/devrubinho/rbin-eslint-config)

---

<div align="center">

**Desenvolvido com ❤️ por Rubinho**

</div>
