## Detalhes
Para carregar um link no aplicativo, podemos utilizar mo método loadURL().
Para linkar caminhos de arquivos, devemos usar o protocolo filesystem, dentro do método loadURL:
```
<variavelBrowserWindow>.loadURL(`file://${__dirname}/app/index.html`)
```