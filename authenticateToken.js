const jwt = require('jsonwebtoken');

const accessTokenSecret = process.env.ACCESS_TOKEN_SECRET;

const authenticateToken = function(req, res, next){
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
  
    if(token == null) return res.sendStatus(401);

    jwt.verify(token, accessTokenSecret, (err, user)=>{
        
        if(err)return res.sendStatus(403);
        req.user = user;
        next();
    })
}


module.exports = authenticateToken;