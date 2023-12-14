import ErrorHandler from "./ErrorHandle.js"
import jwt from 'jsonwebtoken'

const Auth = (req,res, next)=>{
    const authheader = req.headers.Authorization

    if(!authheader || !authheader.startsWith('Bearer ')){
        return next(ErrorHandler(500, "UnAuthorized"))
    }
    const token = header.split(' ')[1]

    try{
        const payload = jwt.verify(token, process.env.JWT_SECRET)
        if(!payload){
            return next(ErrorHandler(500, "Token is invalid"))
        }
        req.userId = payload.UserId 
        next()
    }
    catch(error){
        return next(error)
    }
}
export default Auth