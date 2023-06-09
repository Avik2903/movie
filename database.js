const {createPool} = require('mysql2')
var cors = require('cors')


const express = require('express')
const app = express()
const port = 5000
app.use(cors())

app.get('/', (req, ress) => {
    pool.query(`select * from moviedb.movies1`, (err, res)=>{
        ress.send(res)
    })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
const pool = createPool({
    host: "localhost",
    user: "root",
    password: "Avik@9516",
    connectionLimit: 10
})

