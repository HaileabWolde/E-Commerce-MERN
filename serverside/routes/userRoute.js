import express from 'express'
import { signin, signup, getUser } from '../controllers/user.js'
import Auth from '../middlewares/Auth.js'
const router = express.Router()
router.get('/getUser' , Auth, getUser)
router.post('/signup', signup)
router.post('/signin', signin)

export default router;