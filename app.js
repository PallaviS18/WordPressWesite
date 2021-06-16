const express = require('express')

const app= express()
const port =5000

app.use(express.static('public'))
app.use('/css',express.static(__dirname + 'public/css'))
app.use('/img',express.static(__dirname + 'public/img'))
app.use('/js',express.static(__dirname + 'public/js'))

app.set('views','./src/views/partials')
app.set('view engine','ejs')

const newsRouter = require('./src/routes/news')

app.use('/',newsRouter)

app.listen(port,()=>console.log('listening on port ${port}'))