# TopTail — site de adestramento de cães
Site estático (HTML + CSS + JS puro), 2 páginas: `programs.html` e `about.html`.

## Estrutura
- `style.css` — design system (paleta bege/marrom, componentes)
- `script.js` — FAQ (acordeão) e validação dos formulários
- `assets/` — coloque aqui as fotos: hero-programs, hero-about, dog-treat, dog-lying, dog-portrait, banner-paw, banner-dog (.jpg)

## Rodar
Abra `index.html` ou use `npx serve .`

## Publicar no GitHub Pages
```
git init && git add . && git commit -m "TopTail site"
git branch -M main
git remote add origin https://github.com/SEU_USUARIO/toptail.git
git push -u origin main
```
Depois: Settings → Pages → Branch `main` / root.
