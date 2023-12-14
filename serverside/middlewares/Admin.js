import ErrorHandler from "./ErrorHandler.js";
import UserSchema from "../model/UserModel.js";
const Admin = async (req, res, next)=>{
    const {userId: id} = req
    try{
        const IsAdminUser = await UserSchema.findById(id)
        
        if(IsAdminUser.isAdmin === false){
            return next(ErrorHandler(500, 'User is not Admin'))
        }
        else{
            req.userId = IsAdminUser.id
        }
    }
    catch(error){
        next(error)
    }
}
export default Admin