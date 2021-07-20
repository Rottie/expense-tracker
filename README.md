A8Expense Tracker


1.簡介
打造一個簡單的網路記帳工具。核心功能是讓使用者新增、修改與刪除「支出紀錄」。

2.專案功能說明
2A.在首頁一次瀏覽所有支出的清單

2B.在首頁看到所有支出清單的總金額

2C.新增一筆支出

2D.編輯支出的所有屬性 (一次只能編輯一筆)

2E.刪除任何一筆支出 (一次只能刪除一筆)

2F.在首頁可以根據支出「類別」篩選支出；總金額的計算只會包括被篩選出來的支出總和

3.環境建置
3A.開發環境 Visual Studio Code v1.57.1
3B.執行環境 Node.js v10.15.0
3C.框架 Express.js v4.17.1
3D.模板引擎 Express-handlebars v5.3.2
3E.實用套件 Nodemon v2.0.7
3F.資料庫   MongoDB
3G.映射工具 mongoose 5.13.2 
3H.Method Override

4.安裝
4A.在終端機輸入指令 Clone 此專案至電腦
git clone https://github.com/Rottie/expense-tracker.git

4B.進入專案目錄
cd expense-tracker

4C.	安裝相關套件
npm install express mongoose

4D.新增種子資料
npm run seed


4E.退出種子資料指令,開始啟動專案
npm run dev

4F.出現以下訊息後，即可在 http://localhost:3000 開始測試使用
Express is listening on localhost:3000
mongodb connected!
