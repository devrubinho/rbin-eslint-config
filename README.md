# @rd/eslint-config

ESLint configuration used by Rubinho.

## Configurações Disponíveis

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

## Instalação

```bash
npm install --save-dev @rd/eslint-config
```

## Uso

Crie um arquivo `.eslintrc.js` no seu projeto:

```javascript
module.exports = {
  extends: ['@rd/eslint-config/react'],
}
```

## Política de Ponto e Vírgula

**Importante:** Apenas as configurações Node.js podem ter opção de ponto e vírgula.

- ✅ **Node.js**: Duas variantes disponíveis (`node.js` sem `;` e `node-with-semi.js` com `;`)
- ❌ **React, Next.js, Expo**: Apenas sem ponto e vírgula (`semi: false`)

Esta política garante consistência entre projetos frontend enquanto permite flexibilidade para projetos Node.js.

## Características

- ✅ ESLint 8.57.1
- ✅ Prettier 3.7.4
- ✅ TypeScript support
- ✅ Import sorting automático
- ✅ Tailwind CSS class sorting
- ✅ Acessibilidade (jsx-a11y)
- ✅ Melhores práticas do mercado
