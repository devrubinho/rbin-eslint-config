# Guia de Publicação no npm

Este guia explica como publicar e atualizar o pacote `@rbinflow/eslint-config` no npm.

## Índice

- [Pré-requisitos](#pré-requisitos)
- [Primeira Publicação](#primeira-publicação)
- [Atualizar o Pacote](#atualizar-o-pacote)
- [Versionamento Semântico](#versionamento-semântico)
- [Troubleshooting](#troubleshooting)

## Pré-requisitos

1. **Conta no npm**: Crie uma conta em [npmjs.com](https://www.npmjs.com/signup) se ainda não tiver
2. **Autenticação**: Faça login no npm através da linha de comando:
   ```bash
   npm login
   ```
3. **Acesso ao escopo**: Certifique-se de ter permissão para publicar no escopo `@rbinflow`

## Primeira Publicação

### 1. Verificar configuração do package.json

Certifique-se de que o `package.json` está configurado corretamente:

- `name`: `@rbinflow/eslint-config`
- `version`: Versão inicial (ex: `1.0.0`)
- `private`: `false`
- `main`: `index.js`
- `files`: Lista de arquivos a serem publicados

### 2. Testar o pacote localmente

Antes de publicar, teste o pacote:

```bash
# Criar tarball do pacote
npm pack

# Isso criará um arquivo .tgz que você pode testar localmente
```

### 3. Publicar no npm

```bash
npm publish --access public
```

**Nota**: O flag `--access public` é necessário para pacotes com escopo (`@rbinflow/`) que são públicos.

### 4. Verificar publicação

Após a publicação, verifique se o pacote está disponível:

- Acesse: https://www.npmjs.com/package/@rbinflow/eslint-config
- Ou execute: `npm view @rbinflow/eslint-config`

## Atualizar o Pacote

### Versionamento Semântico

Siga o padrão [Semantic Versioning](https://semver.org/):

- **MAJOR** (x.0.0): Mudanças incompatíveis com versões anteriores
- **MINOR** (0.x.0): Novas funcionalidades compatíveis com versões anteriores
- **PATCH** (0.0.x): Correções de bugs compatíveis com versões anteriores

### Processo de Atualização

#### Opção 1: Usando npm version (Recomendado)

```bash
# Para patch (1.0.0 -> 1.0.1)
npm version patch

# Para minor (1.0.0 -> 1.1.0)
npm version minor

# Para major (1.0.0 -> 2.0.0)
npm version major
```

Este comando:
- Atualiza a versão no `package.json`
- Cria um commit git com a tag da versão
- Cria uma tag git

Depois, publique:

```bash
npm publish --access public
```

#### Opção 2: Atualização Manual

1. Edite o `package.json` e atualize a versão manualmente
2. Faça commit das mudanças:
   ```bash
   git add package.json
   git commit -m "chore: bump version to X.Y.Z"
   git tag vX.Y.Z
   ```
3. Publique:
   ```bash
   npm publish --access public
   ```

### Publicar Atualizações

Após atualizar a versão:

```bash
# 1. Verificar que tudo está correto
npm run test  # Se houver testes

# 2. Criar tarball para verificar
npm pack --dry-run

# 3. Publicar
npm publish --access public

# 4. Push das tags para o repositório
git push && git push --tags
```

## Versionamento Semântico

### Exemplos de Versionamento

| Mudança | Tipo | Exemplo |
|---------|------|---------|
| Adicionar nova configuração (expo.js) | MINOR | 1.0.0 → 1.1.0 |
| Corrigir bug em regra do ESLint | PATCH | 1.0.0 → 1.0.1 |
| Remover configuração existente | MAJOR | 1.0.0 → 2.0.0 |
| Mudar API do index.js | MAJOR | 1.0.0 → 2.0.0 |
| Atualizar dependências (compatível) | PATCH | 1.0.0 → 1.0.1 |
| Atualizar dependências (incompatível) | MAJOR | 1.0.0 → 2.0.0 |

### Boas Práticas

1. **Sempre teste antes de publicar**: Use `npm pack` para verificar o conteúdo
2. **Mantenha CHANGELOG**: Documente mudanças importantes
3. **Commits semânticos**: Use conventional commits para facilitar versionamento
4. **Tag no git**: Sempre crie tags para versões publicadas

## Troubleshooting

### Erro: "You do not have permission to publish"

**Solução**: Verifique se você está logado e tem permissão no escopo `@rbinflow`:
```bash
npm whoami
npm login
```

### Erro: "Package name already exists"

**Solução**: A versão já foi publicada. Atualize a versão no `package.json`:
```bash
npm version patch
npm publish --access public
```

### Erro: "Invalid package name"

**Solução**: Verifique se o nome no `package.json` está correto e não contém caracteres inválidos.

### Publicar versão antiga por engano

**Solução**: Não é possível remover versões publicadas. Publique uma nova versão corrigida:
```bash
npm version patch
npm publish --access public
```

### Verificar o que será publicado

**Solução**: Use `npm pack --dry-run` para ver o conteúdo sem criar o arquivo:
```bash
npm pack --dry-run
```

## Links Úteis

- [Documentação oficial do npm](https://docs.npmjs.com/)
- [Semantic Versioning](https://semver.org/)
- [npm publish documentation](https://docs.npmjs.com/cli/v8/commands/npm-publish)
- [npm version documentation](https://docs.npmjs.com/cli/v8/commands/npm-version)

## Exemplos Práticos

### Exemplo Completo: Publicar Nova Versão

```bash
# 1. Verificar status atual
git status
npm whoami

# 2. Atualizar versão (patch)
npm version patch

# 3. Verificar o que será publicado
npm pack --dry-run

# 4. Publicar
npm publish --access public

# 5. Push para repositório
git push && git push --tags
```

### Exemplo: Publicar Versão Minor

```bash
# Para adicionar nova funcionalidade (ex: nova configuração)
npm version minor
npm publish --access public
git push && git push --tags
```

### Exemplo: Testar Pacote Localmente Antes de Publicar

```bash
# 1. Criar tarball
npm pack

# 2. Em outro projeto, instalar o tarball
cd ../meu-projeto-teste
npm install ../rubinho-eslint-config/rbinflow-eslint-config-1.0.0.tgz

# 3. Testar se funciona
# Criar .eslintrc.js e testar
```

## Dicas e Boas Práticas

1. **Sempre teste localmente**: Use `npm pack` e instale o tarball em um projeto de teste
2. **Mantenha dependências atualizadas**: Verifique regularmente por atualizações de segurança
3. **Documente mudanças**: Atualize o README quando adicionar novas funcionalidades
4. **Use tags git**: Facilita rastreamento de versões
5. **Verifique antes de publicar**: Use `npm pack --dry-run` para verificar conteúdo
6. **Mantenha CHANGELOG**: Documente todas as mudanças importantes
7. **Teste em projetos reais**: Antes de publicar, teste em um projeto real usando o tarball
8. **Versionamento consistente**: Siga sempre o semantic versioning
