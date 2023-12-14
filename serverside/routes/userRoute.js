import express from 'express'
import { signin, signup, getUser } from '../controllers/user.js'

const router = express.Router()
router.get('/getUser/:id', getUser)
router.post('/signup', signup)
router.post('/signin', signin)

export default router;