# @rd/eslint-config

<div align="center">

**ESLint configuration package used by Rubinho**

[![npm version](https://img.shields.io/npm/v/@rd/eslint-config)](https://www.npmjs.com/package/@rd/eslint-config)
[![license](https://img.shields.io/npm/l/@rd/eslint-config)](LICENSE)

</div>

---

## 📋 Sobre

Este pacote fornece configurações ESLint e Prettier padronizadas para projetos Node.js, React, Next.js e Expo. Inclui as melhores práticas do mercado, suporte a TypeScript, ordenação automática de importações, formatação de classes Tailwind CSS e regras de acessibilidade.

## 🚀 Instalação

```bash
npm install --save-dev @rd/eslint-config
```

## 📦 Configurações Disponíveis

### Node.js

Este pacote oferece duas variantes para projetos Node.js:

#### `node.js` - Sem ponto e vírgula (padrão moderno)
```javascript
module.exports = {
  extends: ['@rd/eslint-config/node'],
}
```

#### `node-with-semi.js` - Com ponto e vírgula (padrão tradicional)
```javascript
module.exports = {
  extends: ['@rd/eslint-config/node-with-semi'],
}
```

**Diferença:** A única diferença entre as duas variantes é a configuração do Prettier:
- `node.js`: `semi: false` (sem ponto e vírgula)
- `node-with-semi.js`: `semi: true` (com ponto e vírgula)

Todas as outras configurações são idênticas.

### React

```javascript
module.exports = {
  extends: ['@rd/eslint-config/react'],
}
```

### Next.js

```javascript
module.exports = {
  extends: ['@rd/eslint-config/next'],
}
```

### Expo

```javascript
module.exports = {
  extends: ['@rd/eslint-config/expo'],
}
```

## 💻 Uso

### Configuração Básica

Crie um arquivo `.eslintrc.js` na raiz do seu projeto:

```javascript
module.exports = {
  extends: ['@rd/eslint-config/react'],
}
```

### Exemplos por Tipo de Projeto

**Node.js (sem ponto e vírgula):**
```javascript
module.exports = {
  extends: ['@rd/eslint-config/node'],
}
```

**Node.js (com ponto e vírgula):**
```javascript
module.exports = {
  extends: ['@rd/eslint-config/node-with-semi'],
}
```

**React:**
```javascript
module.exports = {
  extends: ['@rd/eslint-config/react'],
}
```

**Next.js:**
```javascript
module.exports = {
  extends: ['@rd/eslint-config/next'],
}
```

**Expo:**
```javascript
module.exports = {
  extends: ['@rd/eslint-config/expo'],
}
```

## ⚙️ Política de Ponto e Vírgula

**Importante:** Apenas as configurações Node.js podem ter opção de ponto e vírgula.

- ✅ **Node.js**: Duas variantes disponíveis (`node.js` sem `;` e `node-with-semi.js` com `;`)
- ❌ **React, Next.js, Expo**: Apenas sem ponto e vírgula (`semi: false`)

Esta política garante consistência entre projetos frontend enquanto permite flexibilidade para projetos Node.js.

## 🔧 Configurações Avançadas

### Personalizar Regras

Você pode estender e personalizar as regras:

```javascript
module.exports = {
  extends: ['@rd/eslint-config/react'],
  rules: {
    // Suas regras personalizadas aqui
    'no-console': 'warn',
  },
}
```

### Usar com Prettier

O Prettier já está integrado nas configurações. Para projetos React/Next.js/Expo, as classes Tailwind CSS são automaticamente ordenadas.

### TypeScript

Todas as configurações incluem suporte completo para TypeScript através de `@typescript-eslint`.

## 🎨 Integração com VSCode

Este pacote funciona perfeitamente com a extensão ESLint oficial do VSCode.

### Pré-requisitos

1. Instale a extensão [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) no VSCode
2. Instale o pacote no seu projeto:
   ```bash
   npm install --save-dev @rd/eslint-config
   ```

### Configuração

1. Crie um arquivo `.eslintrc.js` na raiz do seu projeto:
   ```javascript
   module.exports = {
     extends: ['@rd/eslint-config/react'],
   }
   ```

2. A extensão ESLint do VSCode detectará automaticamente a configuração
3. Você verá erros e avisos do ESLint diretamente no editor
4. Use `Cmd+Shift+P` (Mac) ou `Ctrl+Shift+P` (Windows/Linux) e digite "ESLint: Fix all auto-fixable Problems" para corrigir automaticamente

### Formato de Configuração Suportado

A extensão ESLint do VSCode suporta os seguintes formatos:
- `.eslintrc.js` (JavaScript) ✅
- `.eslintrc.json` (JSON) ✅
- `.eslintrc.yaml` (YAML) ✅
- `eslintConfig` no `package.json` ✅

Este pacote usa `.js` que é totalmente compatível.

### Troubleshooting

**Problema**: A extensão não detecta a configuração
- **Solução**: Certifique-se de que o arquivo `.eslintrc.js` está na raiz do projeto
- **Solução**: Reinicie o VSCode após instalar o pacote

**Problema**: Erros de "Cannot find module"
- **Solução**: Execute `npm install` no diretório do projeto
- **Solução**: Certifique-se de que todas as dependências do pacote estão instaladas

**Problema**: Auto-fix não funciona
- **Solução**: Verifique se a extensão ESLint está habilitada
- **Solução**: Use o comando "ESLint: Fix all auto-fixable Problems" do Command Palette

## ✨ Características

- ✅ **ESLint 8.57.1** - Versão estável e testada
- ✅ **Prettier 3.7.4** - Formatação automática de código
- ✅ **TypeScript** - Suporte completo via @typescript-eslint
- ✅ **Import Sorting** - Ordenação automática de importações
- ✅ **Tailwind CSS** - Ordenação automática de classes (React/Next.js)
- ✅ **Acessibilidade** - Regras jsx-a11y para React/Next.js/Expo
- ✅ **Melhores Práticas** - Configurações baseadas em padrões do mercado
- ✅ **VSCode Ready** - Funciona perfeitamente com extensão ESLint oficial

## 📚 Documentação Adicional

- [Guia de Publicação](./PUBLISHING.md) - Como publicar e atualizar o pacote no npm

## 🤝 Contribuindo

Este é um pacote privado usado internamente. Para sugestões ou melhorias, abra uma issue no repositório.

## 📄 Licença

MIT © Rubinho

## 🔗 Links

- [npm](https://www.npmjs.com/package/@rd/eslint-config)
- [Repositório](https://github.com/devrubinho/rubinho-eslint-config)

---

<div align="center">

**Desenvolvido com ❤️ por Rubinho**

</div>
