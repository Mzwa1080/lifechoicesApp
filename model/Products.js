import {connection as db} from '../config/index'

class Products{
    
    fetchProducts(req,res){
        const qry = `
        select prodID, prodName,prodQuality,prodAmount, userID
         from Products;`
         db.query(qry, (err, results)=>{
            if(err) throw err
            res.json({
                status : res.statusCode,
                results
            })
         })
    }

    fetchProduct(req,res){
        const qry = `
        select prodID, prodName, prodQuality, prodAmount, userID
        from Products where prodID = ${req.params.id};`

         db.query(qry, (err, results)=>{
            if(err) throw err
            res.json({
                status : res.statusCode,
                results
            })
         })
    }

    addProduct(req,res){

        const qry = `
            insert into products set ?;
        `
        db.query(qry, [data], (err)=>{
            if(err) throw err 
            res.json({
                status : res.statusCode,
                msg : "New product was added"
            })

        })
    }
}

export{
    Products
}
