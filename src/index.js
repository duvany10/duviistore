console.log('Hello World')
import express from 'express'
import { dirname, join } from 'path'
import { fileURLToPath } from 'url'
import indexRoutes from './routes/index.js'

const app = express()

const __dirname = dirname(fileURLToPath(import.meta.url))
console.log(__dirname)

app.set('port', process.env.PORT || 3000)
app.set('views', join(__dirname, 'views'))
app.set('view engine', 'ejs')

app.use('/resources', express.static('public'));
app.use('/resource', express.static(__dirname + '/public'));

app.use(indexRoutes)
app.listen(app.get('port'))
console.log('Server is listening on port', 3000)