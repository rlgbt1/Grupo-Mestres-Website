# Grupo Mestres & Serviços

Site institucional do Grupo Mestres & Serviços, holding empresarial angolana com 35 anos de história. React + TypeScript + Vite, preparado para deploy no GitHub Pages via GitHub Actions.

Institutional website for Grupo Mestres & Serviços. Built with React + TypeScript + Vite, ready for GitHub Pages deployment via GitHub Actions.

## Desenvolvimento / Development

```bash
npm install
npm run dev
```

## Build de produção / Production build

```bash
npm run build
```

## Formulário de contacto / Contact form

Por defeito, o formulário abre um email para `info@grupomestres.com`. Para envio directo por backend/form provider, definir `VITE_CONTACT_FORM_ENDPOINT` no ambiente de build.
By default, the form opens an email to `info@grupomestres.com`. For direct submission through a backend/form provider, set `VITE_CONTACT_FORM_ENDPOINT` in the build environment.

O site é publicado automaticamente a partir da branch `main` (ver `.github/workflows/deploy.yml`).
The site is published automatically from the `main` branch (see `.github/workflows/deploy.yml`).

## Estrutura / Structure

- `src/pages` — uma página por rota (Home, Sobre Nós, Empresas do Grupo, Áreas de Negócio, Governança, Fundação, Contactos)
- `src/components` — Navbar, Footer, PageHero, StatBar, Reveal (scroll-reveal)
- `src/assets` — imagens e logótipos

## Pontos em aberto / Open items

- Confirmar morada correcta (Rua Comandante Gika, nº144 vs nº191)
- Número de telefone para a página de Contactos
- Ligação real de LinkedIn (placeholder actual: `linkedin.com/company/grupo-mestres-servicos`)
- O formulário de contacto aceita `VITE_CONTACT_FORM_ENDPOINT`; falta escolher/configurar o provider real se for necessário receber submissões directamente
- Substituir logótipo da Fundação Isaías Trindade por uma versão em maior resolução, se disponível
