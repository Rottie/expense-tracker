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


app.get('/', (req, res) => {
  Record.find() // 取出 Todo model 裡的所有資料
    .lean() // 把 Mongoose 的 Model 物件轉換成乾淨的 JavaScript 資料陣列
    .then(records => res.render('index', { records })) // 將資料傳給 index 樣板
    .catch(error => console.error(error)) // 錯誤處理
})

//Create
app.get('/records/new', (req, res) => {
   return res.render('new')
})

app.post('/records', (req, res) => {
  const name = req.body.name  
    const amount = req.body.amount 
    const date = req.body.date
    const category = req.body.category      // 從 req.body 拿出表單裡的 name 資料
  return Record.create({ name,amount,date,category})     // 存入資料庫
    .then(() => res.redirect('/')) // 新增完成後導回首頁
    .catch(error => console.log(error))
})


app.listen(port, () => {
  console.log(`Express is listening on localhost:${port}`)
})
