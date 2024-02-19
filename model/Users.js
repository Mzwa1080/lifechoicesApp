import {connection as db} from '../config/index.js'
import {hash , compare} from 'bcrypt'
import { createToken } from '../middleware/AuthenticateUser.js'

class Users{
    fetchUsers(req,res){
        const qry = `
        select userID, firstName,lastName,userAge, emailAdd, userPwd ,userRole
         from users;`
         db.query(qry, (err, results)=>{
            if(err) throw err
            res.json({
                status : res.statusCode,
                results
            })
         })
    }

    fetchUser(req,res){
        const qry = `
        select userID, firstName,lastName,userAge, emailAdd, userPwd ,userRole
         from users where userID = ${req.params.id};
        `
        db.query(qry, (err, result)=>{
            if(err) throw err
            res.json({
                status : res.statusCode,
                result
            })
        })
    }

    async createUser(req,res){
        let data = req.body;
    // encrypt the password
        data.userPwd = await hash(data?.userPwd,10)

        let user = {
            emailAdd : data.emailAdd,
            userPwd : data.userPwd
        }
        const qry = `
            insert into users set ?;
        `
        db.query(qry, [data], (err)=>{
            if(err){
                res.json({
                    status : res.statusCode,
                    msg : 'This email address already exist'
                })
            }else{
                let token = createToken(user)
                res.json({
                    status:res.statusCode,
                    token,
                    msg: 'You\'re registered'
                })
                console.log(token);
            }
        })
    }
}

export{
    Users
}