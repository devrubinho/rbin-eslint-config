# Setup Mínimo - @rbinflow/eslint-config

Este documento mostra o **mínimo necessário** para usar `@rbinflow/eslint-config` em projetos reais.

## Como funciona

O pacote `@rbinflow/eslint-config` já inclui **todas as dependências do ESLint** como `dependencies`. Isso significa que quando você instala o pacote, todas as dependências necessárias são instaladas automaticamente.

## Setup por tipo de projeto

### 1. Projeto Node.js (JavaScript/TypeScript)

**Mínimo necessário:**

```json
{
  "devDependencies": {
    "@rbinflow/eslint-config": "^1.0.0",
    "eslint": "^8.57.1"
  }
}
```

**Se usar TypeScript, adicione:**

```json
{
  "devDependencies": {
    "@rbinflow/eslint-config": "^1.0.0",
    "eslint": "^8.57.1",
    "typescript": "^5.0.0"
  }
}
```

**`.eslintrc.js`:**
```javascript
module.exports = {
  extends: ['@rbinflow/eslint-config/node'], // ou '@rbinflow/eslint-config/node-with-semi'
}
```

---

### 2. Projeto React (JavaScript/TypeScript)

**Mínimo necessário:**

```json
{
  "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0"
  },
  "devDependencies": {
    "@rbinflow/eslint-config": "^1.0.0",
    "eslint": "^8.57.1"
  }
}
```

**Se usar TypeScript, adicione:**

```json
{
  "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0"
  },
  "devDependencies": {
    "@rbinflow/eslint-config": "^1.0.0",
    "eslint": "^8.57.1",
    "typescript": "^5.0.0",
    "@types/react": "^18.2.0",
    "@types/react-dom": "^18.2.0"
  }
}
```

**`.eslintrc.js`:**
```javascript
module.exports = {
  extends: ['@rbinflow/eslint-config/react'],
}
```

---

### 3. Projeto Next.js

**Mínimo necessário:**

```json
{
  "dependencies": {
    "next": "^14.0.0",
    "react": "^18.2.0",
    "react-dom": "^18.2.0"
  },
  "devDependencies": {
    "@rbinflow/eslint-config": "^1.0.0",
    "eslint": "^8.57.1",
    "typescript": "^5.0.0",
    "@types/react": "^18.2.0",
    "@types/react-dom": "^18.2.0"
  }
}
```

**`.eslintrc.js`:**
```javascript
module.exports = {
  extends: ['@rbinflow/eslint-config/next'],
}
```

---

### 4. Projeto Expo/React Native

**Mínimo necessário:**

```json
{
  "dependencies": {
    "expo": "~50.0.0",
    "react": "^18.2.0",
    "react-native": "^0.73.0"
  },
  "devDependencies": {
    "@rbinflow/eslint-config": "^1.0.0",
    "eslint": "^8.57.1",
    "typescript": "^5.0.0",
    "@types/react": "^18.2.0"
  }
}
```

**`.eslintrc.js`:**
```javascript
module.exports = {
  extends: ['@rbinflow/eslint-config/expo'],
}
```

---

## O que o pacote já inclui

Quando você instala `@rbinflow/eslint-config`, as seguintes dependências são instaladas automaticamente:

- ✅ `eslint` (mas você ainda precisa ter no projeto para executar)
- ✅ `prettier`
- ✅ `@typescript-eslint/parser`
- ✅ `@typescript-eslint/eslint-plugin`
- ✅ `eslint-plugin-prettier`
- ✅ `eslint-config-prettier`
- ✅ `eslint-config-standard`
- ✅ `eslint-plugin-react`
- ✅ `eslint-plugin-react-hooks`
- ✅ `eslint-plugin-jsx-a11y`
- ✅ `eslint-plugin-import`
- ✅ `prettier-plugin-tailwindcss`

## Por que ainda preciso do ESLint no projeto?

Embora o pacote inclua `eslint` como dependência, é uma **boa prática** ter `eslint` como `devDependency` no seu projeto porque:

1. Você tem controle sobre a versão do ESLint
2. Você pode executar `npx eslint` diretamente
3. Ferramentas como VSCode ESLint extension funcionam melhor
4. Scripts npm funcionam corretamente

## Resumo

**Mínimo absoluto para qualquer projeto:**
- `@rbinflow/eslint-config`
- `eslint` (como devDependency)

**Adicional conforme necessário:**
- `typescript` (se usar TypeScript)
- `react` + `@types/react` (se usar React)
- `next` (se usar Next.js)
- `expo` (se usar Expo)

Todas as outras dependências do ESLint são instaladas automaticamente pelo pacote! 🎉









