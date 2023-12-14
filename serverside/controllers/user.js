import ErrorHandler from "../middlewares/ErrorHandler.js"
import UserSchema from '../model/UserModel.js'
export const signup = async (req,res, next)=>{
    const {name, email, password} = req.body

    try{
        const User = await UserSchema.findOne({email})
        if(User){
            return next(ErrorHandler(500, 'User Already Exists'))
        }
        const result = await UserSchema.create({
            name,
            email,
            password
        })
        const token = result.createjwt()
        const {password: pass, ...rest} = result._doc
        res.status(200).json({rest, token})
    }
    catch(error){
        return next(error)
    }
}

export const signin = async (req, res, next)=>{
    const {email, password} = req.body
    try{
        const User = await UserSchema.findOne({email})

        if(!User){
            return next(ErrorHandler(500, `User Doesn't Exist`))
        }
        const checkedPassword = await User.checkpassword(password)

        if(!checkedPassword){
            return next(ErrorHandler(500, 'Invalid Credntials'))
        }
        const token = User.createjwt()
        const {password: pass, ...rest} = User._doc
        
        res.status(200).json({rest, token})

    }
    catch(error){
        return next(error)
    }
}