# Comfy Org Landing Page

The frontend React App for [Comfy Org](https://comfy.org).

## Getting Started

### Set up IDE

#### VSCode

Install [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) + [Eslint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) extensions.

`.vscode/settings.json` is set up in the workspace to lint + format code on save.

### Local Development

Run the development server

```bash
git checkout dev
brew install pnpm
pnpm install
pnpm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Deployments

#### Production

Make a PR to the `main` branch. Once merged, Vercel will deploy to production.
