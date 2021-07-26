const Record = require('../record') 

const db = require('../../config/mongoose')



db.once('open', () => {
 
  for (let i = 0; i < 1; i++) {
    Record.create({ name: 'name-' + i ,amount:500+i,
    date:Date("2021-07-30"),
    category:"Food"})
  
  }
  console.log('done')
})