# Projeto de Teste - @rd/eslint-config

Este é um projeto de teste para validar o funcionamento do pacote `@rd/eslint-config`.

## Como usar

1. Abra este projeto no VSCode
2. Instale as dependências: `npm install` (já feito)
3. Edite os arquivos em `src/` e veja o ESLint funcionando
4. Salve o arquivo e observe os erros/avisos do ESLint
5. Use `Cmd+Shift+P` → "ESLint: Fix all auto-fixable Problems" para corrigir automaticamente

## Arquivos de teste

- `src/App.tsx` - Componente React limpo (já corrigido pelo ESLint)
- `src/utils.ts` - Arquivo TypeScript limpo (já corrigido pelo ESLint)
- `src/TestProblems.tsx` - **Arquivo com problemas intencionais para testar!**
  - Importações desordenadas (React e useState separados)
  - Importação de CSS no meio das importações
  - Variável não usada (`unusedVar`)
  - Classes Tailwind desordenadas
  - **Edite este arquivo e salve para ver o ESLint funcionando!**

## Testar diferentes configurações

Para testar outras configurações, altere o `.eslintrc.js`:

```javascript
// Para Node.js (sem ponto e vírgula)
module.exports = {
  extends: ['@rd/eslint-config/node'],
}

// Para Node.js (com ponto e vírgula)
module.exports = {
  extends: ['@rd/eslint-config/node-with-semi'],
}

// Para Next.js
module.exports = {
  extends: ['@rd/eslint-config/next'],
}

// Para Expo
module.exports = {
  extends: ['@rd/eslint-config/expo'],
}
```

## Comandos úteis

```bash
# Verificar erros do ESLint
npm run lint

# Corrigir automaticamente
npm run lint:fix
```
