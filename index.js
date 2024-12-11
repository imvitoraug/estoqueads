import express from  'express'
const app = express()

import path from 'path'
import { fileURLToPath } from 'url'
import handlebars from 'express-handlebars'
import Handlebars from 'handlebars'
import { allowInsecurePrototypeAccess } from '@handlebars/allow-prototype-access'

// CONFIGURAÇÃO DA PASTA ESTÁTICA */
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// CONFIGURAÇÃO DA VISÃO [Precisa instalar handlebars 'npm install express-handlebars']*/
app.engine('handlebars', handlebars.engine({
    defaultLayout: 'principal',
    handlebars: allowInsecurePrototypeAccess(Handlebars)
}))

app.set('view engine', 'handlebars')

app.use(express.static(path.join(__dirname, 'public')))

//  ROTAS DO SISTEMA */
app.get('/', function(req, res){

    var aluno = {

        nome : 'Vitor',
        nota : 7.5
    }

    res.render('admin/index', {aluno})

})

app.get('/contato', function(req,res){
    res.render('admin/contato')
})

app.listen(3100, ()=>console.log('servidor rodando em http://localhost:3100'))
