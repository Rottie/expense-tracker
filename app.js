const express = require('express')

const port = 3000


const mongoose = require('mongoose') 

const app = express()
mongoose.connect('mongodb://localhost/expense-tracker', { useNewUrlParser: true, useUnifiedTopology: true }) 

const db = mongoose.connection

const exphbs = require('express-handlebars');

db.on('error', () => {
  console.log('mongodb error!')
})


db.once('open', () => {
  console.log('mongodb connected!')
})

app.use(express.urlencoded({ extended: true }));
app.engine('hbs', exphbs({ defaultLayout: 'main', extname: '.hbs' }))
app.set('view engine', 'hbs')

app.get('/', (req, res) => {
  res.render('index')
})



app.listen(port, () => {
  console.log(`Express is listening on localhost:${port}`)
})
