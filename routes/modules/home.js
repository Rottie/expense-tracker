// 引用 Express 與 Express 路由器
const express = require('express')
const router = express.Router()
// 引用 Todo model
const Record = require('../../models/record')
const Category = require('../../models/category')




// 定義首頁路由
router.get('/', async (req, res) => {
  const categories = await Category.find().lean()
  const categoryData = {}
  categories.forEach(category => categoryData[category.name] = category.categoryIcon)
 
  
  return Record.find()

    .lean()
    .then(records => {
      records.map(record => {

        record.categoryIcon = categoryData[record.category]
      })

    res.render('index', { records, categories })
      
     
    })
    .catch(err => console.error(err))    

})





// 匯出路由模組
module.exports = router