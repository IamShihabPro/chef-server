const express = require('express')
const app = express()
const port = process.env.PORT || 5000

const chefsData = require('./data/chefs.json')

const cors = require('cors')
app.use(cors())

app.get('/', (req, res)=>{
    res.send('Chefs Details')
})

app.get('/data', (req, res)=>{
    res.send(chefsData)
})

app.get('/data/:id',(req, res)=>{
    const id = req.params.id
    const selectedData = chefsData.find(dt => dt._id === id)
    res.send(selectedData)
})

app.listen(port, ()=>{
    console.log(`Chefs running on port: ${port}`);
})