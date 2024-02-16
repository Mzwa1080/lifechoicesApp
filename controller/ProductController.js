import express from 'express'
import bodyParser from 'body-parser'
import { products  } from '../model/index.js'

const productRouter = express.Router()

// Fetch users
productRouter.get('/', (req,res)=>{
    try{
        products.fetchProducts(req, res)
    }catch(e){
        res.json({
            status : res.statusCode,
            msg : 'Failed to retrieve users'
        })
    }
})
// fetch single user
productRouter.get('/:id', (req,res)=>{
    try {
        products.fetchProduct(req,res)
    }catch(e){
        res.json({
            status:res.statusCode,
            msg : 'Failed to retrieve a user'
        })
    }
})
// add  a user

productRouter.post('/register', bodyParser.json(), (req,res)=>{
    try {
        products.addProduct(req,res)
    } catch (err) {
        res.json({
            status : res.statusCode,
            msg : 'Failed to add a new user.'
        })
    }
})

export {
    productRouter, express
}
