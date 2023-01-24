# Challenge 2 - Week 2

## Configuración

- readme.md
- .editconfig
- .gitignore
- package.json (Add prettier)
- Hacer 'git init' para crear repositorio.
- Instalar todo con npm install (como el package.json es clonado de otro sitio, hay que hacer un npm i o npm install para que se instale.) (como husky estaba previamente instalado se puede hacer directamente el npm install para instalar dependencias directamente desde el package.json)
- 'git add .', 'git commi -m "Initial commit", 'git push'
- Crear repositotio en github y copiar código que nos da. Pegarlo en la terminal.
- ESLint es herramienta de desarrollo, aunque este la extensión, hay que instalar en cada proyecto el eslint corriendo 'npm install eslint -D' en la terminal. Es una herramienta local, por eso -D.
- Configuracion del ESLint
- Añadir 'npm i -D eslint-config-prettier'
- Incluir en eslint.json prettier como última opcion
- En eslintrc.json se pueden añadir/desactivar reglas de eslint. Por ejemplo "no-unused-vars": 0 que desactiva los warning cuando se usa var en lugar de let o const.
- Iniciar husky: npx husky install
- si hemos hecho el commit en la rama main, se hace git reset HEAD~1 --hard
-
