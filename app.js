const express = require('express')

const port = 3000

// // 引用路由器
// const routes = require('./routes')

// // 將 request 導入路由器
// app.use(routes)
const mongoose = require('mongoose') // 載入 mongoose

const app = express()
mongoose.connect('mongodb://localhost/expense-tracker', { useNewUrlParser: true, useUnifiedTopology: true }) // 設定連線到 mongoDB

// 取得資料庫連線狀態
const db = mongoose.connection
// 連線異常
db.on('error', () => {
  console.log('mongodb error!')
})
// 連線成功
db.once('open', () => {
  console.log('mongodb connected!')
})


app.get('/', (req, res) => {
    
    res.send('rottie')
})
app.listen(port, () => {
  console.log(`Express is listening on localhost:${port}`)
})
