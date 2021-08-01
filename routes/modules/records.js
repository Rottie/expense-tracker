// 引用 Express 與 Express 路由器
const express = require('express')
const router = express.Router()
// 引用 Todo model
const Record = require('../../models/record')
const Category = require('../../models/category')
const { dateToString } = require('../../public/javascripts/tools')

//Create
router.get('/new',async (req, res) => {
  const categories = await Category.find().lean()
  const categoryData = {}
  categories.forEach(category => categoryData[category.name] = category.categoryIcon)
 

   return  Record.find()
    .sort({ date: 'asc' })
    .lean()
    .then(records => {
      records.map(record => {
      record.date = dateToString(record.date)
        record.categoryIcon = categoryData[record.category]
      })
     res.render('new', { records, categories })
     
    })
      .catch(err => console.error(err)) 
})

//Create
router.post('/', (req, res) => {
   const name = req.body.name  
    const amount = req.body.amount 
    const date = req.body.date
    const category = req.body.category     
 
  return Record.create({ name,amount,date,category})     // 存入資料庫
    .then(() => res.redirect('/')) // 新增完成後導回首頁
    .catch(error => console.log(error))
})



//Update
router.get('/:id/edit', async(req, res) => {
   const id = req.params.id
 const categories = await Category.find().lean()
  const categoryData = {}
  categories.forEach(category => categoryData[category.name] = category.categoryIcon)
 

    return Record.findById(id)
    .lean()
    
    .then(record =>
   
    res.render('edit', { record,categories})
     )
   
  .catch(err => console.error(err)) 
})

//Update
router.put('/:id', (req, res) => {
  const id = req.params.id
  const {name,amount,date,category} = req.body 

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


//delete
router.delete('/:id', (req, res) => {
  const id = req.params.id
  return Record.findById(id)
    .then(record => record.remove())
    .then(() => res.redirect('/'))
    .catch(error => console.log(error))
})

module.exports = router