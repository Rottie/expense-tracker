const express = require('express')
const app = express()
const port = 3000

// // 引用路由器
// const routes = require('./routes')

// // 將 request 導入路由器
// app.use(routes)

app.get('/', (req, res) => {
    
    res.send('rottie')
})
app.listen(port, () => {
  console.log(`Express is listening on localhost:${port}`)
})
