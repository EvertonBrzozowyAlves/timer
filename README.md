# Electron

O Electron é um framework que utiliza o projeto *Chromium* e o projeto *NodeJS* para criar aplicações desktop multiplataforma, usando tecnologias web.  


## Configurando
Iniciar um novo projeto node:
```
npm init -y
```

Instalar o electron como um pacote npm e salvar no package.json:
```
npm install electron --save
```

Para facilitar a execução, adicionar o comando 'start' no package.json vinculando o comando electron:
```json
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "electron ."
  },

```

Ainda no package.json, deixe como ponto de entrada um arquivo chamado 'main.js':
```json
  "main": "main.js",
```

Importar o módulo app do electron, no arquivo main.js:
```JavaScript
const { app } = require('electron')

```