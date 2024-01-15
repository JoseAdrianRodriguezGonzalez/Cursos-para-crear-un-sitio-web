import express from 'express'
const app= express()
app.get('/',(req,res)=>{
    res.send('<h1>Bienvendio</h1>')
})
app.get('/about',(req,res)=>{
    res.send('<h1>Bienvendio aaaa</h1>')
})
app.listen(3000)
console.log('server on port',3000)