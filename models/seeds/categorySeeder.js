const Category = require('../category') 

const db = require('../../config/mongoose')


const categoryData = [
  {
    name: '家居物業',
    name_en: 'home',
    categoryIcon: 'fas fa-home'
  },
  {
    name: '交通出行',
    name_en: 'transportation',
    categoryIcon: 'fas fa-shuttle-van'
  },
  {
    name: '休閒娛樂',
    name_en: 'entertainment',
    categoryIcon: 'fas fa-grin-beam'
  },
  {
    name: '餐飲食品',
    name_en: 'food',
    categoryIcon: 'fas fa-utensils'
  },
  {
    name: '其他',
    name_en: 'others',
    categoryIcon: 'fas fa-pen'
  }
]




db.once('open', () => {
  Category.create(categoryData)
    .then(() => {
      console.log('Add Category Seeder!')
      return db.close()
    })
    .catch(err => console.error(err))
})
