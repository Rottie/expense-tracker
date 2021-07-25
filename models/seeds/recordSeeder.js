const mongoose = require('mongoose')
const Record = require('../record') 

mongoose.connect('mongodb://localhost/expense-tracker', { useNewUrlParser: true, useUnifiedTopology: true })

const db = mongoose.connection

db.on('error', () => {
  console.log('mongodb error!')

})
db.once('open', () => {
  console.log('mongodb connected!')
  for (let i = 0; i < 1; i++) {
    Record.create({ name: 'name-' + i ,amount:500+i,
    date:2021-07-30,
    category:"Food"})
  
  }
  console.log('done')
})