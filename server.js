const express = require("express")

const router = require("./src/routes.js")

const app = express()

app.use(express.json())

app.use(router)

app.listen(4000, () => console.log("rodando na porta 4000 🚀"))