
# Nuvix Hub Site

Site institucional da Nuvix Hub em Next.js + Tailwind, pronto para publicar na Vercel.

## Rodar localmente

```bash
npm install
npm run dev
```

Abra http://localhost:3000

## Publicar na Vercel

1. Crie um repositório no GitHub chamado `nuvixhub-site`.
2. Envie todos os arquivos deste projeto.
3. Na Vercel, clique em Add New Project.
4. Escolha o repositório.
5. Clique em Deploy.

## Domínio recomendado

- Site: `nuvixhub.com.br`
- Plataforma: `app.nuvixhub.com.br`

Hoje o botão Login aponta para:
`https://nuvix-os-v2.vercel.app`

Depois que configurar o subdomínio, troque no arquivo `app/page.tsx`:

```ts
const appLink = "https://app.nuvixhub.com.br";
```

## Contato

O botão de demonstração abre e-mail para:
`nuvixhub@outlook.com`
