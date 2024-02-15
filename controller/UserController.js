import express from 'express'
import bodyParser from 'body-parser'
import { Users } from '../model/index'
import { verifyToken } from '../middleware/AuthenticateUser'

const userRouter = express.Router()

// Fetch users
userRouter.get('/', (req,res)=>{
    try{
        Users.fetchUsers(req, res)
    }catch(e){
        res.json({
            status : res.statusCode,
            msg : 'Failed to retrieve users'
        })
    }
})
// fetch single user
userRouter.get('/:id', (req,res)=>{
    try {
        Users.fetchUser(req,res)
    }catch(e){
        res.json({
            status:res.statusCode,
            msg : 'Failed to retrieve a user'
        })
    }
})
// add  a user

userRouter.post('/register', bodyParser.json(), (req,res)=>{
    try {
        Users.createUser(req,res)
    } catch (err) {
        res.json({
            status : res.statusCode,
            msg : 'Failed to add a new user.'
        })
    }
})

export {
    userRouter, express
}
