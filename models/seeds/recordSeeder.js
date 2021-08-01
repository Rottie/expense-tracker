const Record = require('../record') 

const db = require('../../config/mongoose')



const data = [
  {
    name: '午餐',
    category: '餐飲食品',
    date: '2021-07-01',
    amount: 100
  },
  {
    name: '機車油',
    category: '交通出行',
    date: '2021-07-05',
    amount: 200
  },
  {
    name: '動物園入門票',
    category: '休閒娛樂',
    date: '2021-07-03',
    amount: 150
  },
  {
    name: '牙刷',
    category: '其他',
    date: '2021-07-08',
    amount: 40
  }
]

db.once('open', () => { 
  Record.create(data)
    .then(() => {
      console.log('Add record seeder!')
      return db.close()
    })
    .catch(err => console.error(err))
   
})