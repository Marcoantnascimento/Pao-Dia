// Importação dos modulos:
const express = require('express')
const fs = require('fs')
const path = require('path')

const app = express();

// Chamar arquivos estáticos,
app.use(express.static('public'));

// Criar as rotas / serviços:
app.get('/', (req, res) => {
    fs.readFile(path.join(__dirname, 'public/index.html'), (err, data) => {
        if (err) {
            res.status(500).send("500 - Erro Interno do Servidor");
        } else {
            res.status(200).type('text/html').send(data);
        }
    })
})

// Configuração do Servidor:
const PORT = 4500;
app.listen(PORT, () => {
    console.log(`[OK] - Servidor executando em: ${PORT}`);
});
