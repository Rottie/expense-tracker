const express = require('express')

const port = 3000




const exphbs = require('express-handlebars');

const Record = require('./models/record') // 載入 Todo model



// 載入 method-override
const methodOverride = require('method-override') 

const app = express()


// 引用路由器
const routes = require('./routes')



app.use(express.urlencoded({ extended: true }));

app.engine('hbs', exphbs({ defaultLayout: 'main', extname: '.hbs' }))
app.set('view engine', 'hbs')



app.use(express.urlencoded({ extended: true }))

// 設定每一筆請求都會透過 methodOverride 進行前置處理
app.use(methodOverride('_method'))

// 將 request 導入路由器
app.use(routes)


require('./config/mongoose')


app.listen(port, () => {
  console.log(`Express is listening on localhost:${port}`)
})
