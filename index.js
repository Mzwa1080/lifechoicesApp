import express from 'express'
import path, { resolve } from 'path'

let app = express()
let router = express.Router()

let port = +process.env.PORT || 4400


router.get('/', (req,res)=>{
    res.status(200).sendFile(path.resolve('./static/index.html'))
})

app.listen(port, ()=>{
    console.log(`Server running on http://localhost:${port}`);
})