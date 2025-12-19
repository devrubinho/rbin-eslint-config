# Instalação em Projeto Real

## ⚠️ Diferença entre Teste Local e Projeto Real

### Atual (Teste Local)

O `package.json` atual usa uma instalação local:

```json
{
  "dependencies": {
    "@rbinflow/eslint-config": "file:../rbinflow-eslint-config-1.0.0.tgz"
  }
}
```

Isso funciona apenas localmente para testes.

### Projeto Real (Após Publicação no npm)

Após publicar no npm, você usaria:

```json
{
  "devDependencies": {
    "@rbinflow/eslint-config": "^1.0.0"
  }
}
```

## Como Publicar no npm

### 1. Verificar se está logado

```bash
npm whoami
```

Se não estiver logado:

```bash
npm login
```

### 2. Verificar se o escopo está disponível

O pacote usa o escopo `@rbinflow`, então você precisa:

- Ter uma organização `@rbinflow` no npm, OU
- Ter permissão para publicar no escopo `@rbinflow`, OU
- Mudar o nome do pacote para um escopo que você tenha acesso

### 3. Publicar

```bash
# Na raiz do projeto rubinho-eslint-config
npm publish --access public
```

O `--access public` é necessário porque pacotes com escopo (`@rbinflow/...`) são privados por padrão.

## Após Publicação

### Instalação em um Projeto Real

```bash
npm install --save-dev @rbinflow/eslint-config
```

### package.json do Projeto Real

```json
{
  "name": "meu-projeto",
  "version": "1.0.0",
  "devDependencies": {
    "@rbinflow/eslint-config": "^1.0.0",
    "eslint": "^8.57.1"
  }
}
```

### .eslintrc.js do Projeto Real

```javascript
module.exports = {
  extends: ['@rbinflow/eslint-config/react'],
}
```

**Exatamente igual ao que você tem agora!** A única diferença é que o npm vai buscar o pacote do registro npm ao invés de um arquivo local.

## Alternativa: Usar sem Escopo

Se você não tiver acesso ao escopo `@rbinflow`, pode mudar o nome do pacote:

### 1. Atualizar package.json

```json
{
  "name": "rubinho-eslint-config",  // Sem escopo
  "version": "1.0.0"
}
```

### 2. Atualizar index.js e outros arquivos

Não precisa mudar nada, o `index.js` exporta os mesmos arquivos.

### 3. Publicar

```bash
npm publish
```

### 4. Usar no projeto

```json
{
  "devDependencies": {
    "rubinho-eslint-config": "^1.0.0"
  }
}
```

```javascript
// .eslintrc.js
module.exports = {
  extends: ['rubinho-eslint-config/react'],
}
```

## Verificação

Após publicar, você pode verificar:

```bash
npm view @rbinflow/eslint-config
# ou
npm view rubinho-eslint-config
```

## Resumo

- ✅ **Para testar localmente**: Use `file:../rbinflow-eslint-config-1.0.0.tgz`
- ✅ **Para projeto real**: Publique no npm e use `@rbinflow/eslint-config: "^1.0.0"`
- ✅ **O `.eslintrc.js` é o mesmo** em ambos os casos!





