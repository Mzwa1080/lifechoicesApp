function errorHandling(err, req, res, next){
    if(err || res.statusCode >= 400){
        res.json({
            status : err.status || res.statusCode || 5000,
            msg : 'An error occurred.Please try again later.'
        })
    } else{
        next()
    }
}

export{
    errorHandling
}