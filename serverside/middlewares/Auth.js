import jwt from 'jsonwebtoken'
import {ErrorHandler} from './ErrorHandler.js'
const Auth = (req, res, next) => {
    const authheader = req.headers.authorization;
  
    if (!authheader || !authheader.startsWith('Bearer ')) {
      return next(ErrorHandler(500, 'Unauthorized'));
    }
    const token = authheader.split(' ')[1];
  
    try {
      const payload = jwt.verify(token, process.env.JWT_SECRET);
      if (!payload) {
        return next(ErrorHandler(500, 'Token is invalid'));
      }
      req.userId = payload?.UserId;
      next();
    } catch (error) {
      return next(error);
    }
  };
  
  export default Auth;