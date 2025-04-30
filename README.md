# React + Vite



# React + Vite

lab : ALAB 320H.3.1 - Rendering Arrays from State

here are my steps :
npm create vite@latest
Project name:
│  ALAB320H31
Package name:
│  package.json
Select a framework:
│  React
Select a variant:
│  JavaScript

 cd ALAB320H31
  npm install
  npm run dev

index.html (update) title and defer:

    <title>Rendering Arrays from State, title changed in index.html, then added defer to end of script</title>

    <script type="module" src="/src/main.jsx" defer></script>

got free truck favicon from freesvg.org and replaced with with public vite.svg

deleted all: App.css  App.JSX and Index.CSS
renamed index.css to main.css to match main.JSX name (later i had to update in main.jsx: import './main.css'
 it was index)

coplied Bryan code in slack app.css and main.css


coding:

 added the provided array in state using useState.

Create a new files:
 src/components/Learner.jsx
 src/components/Score.jsx

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
