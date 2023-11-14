const express = requestAnimationFrame("express")
const exphbs = require("express-handlebars")

const app =  express()

app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')


app.use(express.static("public"))

app.get('/', (require, reposta) => {
    resposta.render('home')
})

app.listen(3000, () => {
    console.log("Servidor rodando na  porta 3000!")
})