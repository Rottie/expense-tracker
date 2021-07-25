const express = require('express')

const port = 3000


const mongoose = require('mongoose') 


mongoose.connect('mongodb://localhost/expense-tracker', { useNewUrlParser: true, useUnifiedTopology: true }) 

const db = mongoose.connection

const exphbs = require('express-handlebars');

const Record = require('./models/record') // 載入 Todo model

db.on('error', () => {
  console.log('mongodb error!')
})


db.once('open', () => {
  console.log('mongodb connected!')
})



const app = express()


app.use(express.urlencoded({ extended: true }));
app.engine('hbs', exphbs({ defaultLayout: 'main', extname: '.hbs' }))
app.set('view engine', 'hbs')


app.use(express.urlencoded({ extended: true }))

//Read all
app.get('/', (req, res) => {
  Record.find() // 取出 Todo model 裡的所有資料
    .lean() // 把 Mongoose 的 Model 物件轉換成乾淨的 JavaScript 資料陣列
     .sort({ _id: 'asc' }) // 新增這裡：根據 _id 升冪排序
    .then(records => res.render('index', { records })) // 將資料傳給 index 樣板
    .catch(error => console.error(error)) // 錯誤處理
})

//Create
app.get('/records/new', (req, res) => {
   return res.render('new')
})

//Create
app.post('/records', (req, res) => {
  const name = req.body.name  
    const amount = req.body.amount 
    const date = req.body.date
    const category = req.body.category     
 
  return Record.create({ name,amount,date,category})     // 存入資料庫
    .then(() => res.redirect('/')) // 新增完成後導回首頁
    .catch(error => console.log(error))
})

//Update
app.get('/records/:id/edit', (req, res) => {
  const id = req.params.id
  return Record.findById(id)
    .lean()
    .then((record) => res.render('edit', { record }))
    .catch(error => console.log(error))
})

//Update
app.post('/records/:id/edit', (req, res) => {
  const id = req.params.id
  const name = req.body.name
   const amount = req.body.amount
    const date = req.body.date
    const category = req.body.category   

  return Record.findById(id)
    .then(record => {
      record.name = name,
      record.amount = amount,
      record.date = Date(date),
      record.category = category
      return record.save()
    })
    .then(()=> res.redirect(`/records/${id}`))
    .catch(error => console.log(error))
})


app.post('/records/:id/delete', (req, res) => {
  const id = req.params.id
  return Record.findById(id)
    .then(record => record.remove())
    .then(() => res.redirect('/'))
    .catch(error => console.log(error))
})

app.listen(port, () => {
  console.log(`Express is listening on localhost:${port}`)
})
