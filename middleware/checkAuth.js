const jwt = require('jsonwebtoken')

module.exports = async(req,res,next)=>{
    try
    {
        if (!req.headers.authorization || !req.headers.authorization.startsWith('Bearer ')) {
            return res.status(401).json({ error: 'No token provided' });
        }
        const token = req.headers.authorization.split(" ")[1]
        const decoded = await jwt.verify(token, 'saptarshi ray')
        req.userData = decoded;
        next()
    }
    catch(err)
    {
        console.log(err)
        return res.status(401).json({
            error:'invalid token'
        })
    }
}