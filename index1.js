const express = require('express');
const app = express();// app - это обьек, с помощью которого можно обработать запросы на сервер
app.listen(3000,()=>{
    console.log('связ с сервером установлен')
})
app.get('/',(reg,res)=>{
    res.send('ответ go nurlan');
})