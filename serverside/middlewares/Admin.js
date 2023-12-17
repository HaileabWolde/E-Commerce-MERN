import UserSchema from '../model/UserModel.js'
import {ErrorHandler} from '../middlewares/ErrorHandler.js'
const Admin = async (req, res, next) => {
    const { userId: id } = req;
    try {
      const isAdminUser = await UserSchema.findById(id);
      if (!isAdminUser || !isAdminUser.isAdmin) {
        return next(ErrorHandler(500, 'User is not an admin'));
      }
      req.userId = isAdminUser._id;
      next();
    } catch (error) {
      next(error);
    }
  };
  
  export default Admin;