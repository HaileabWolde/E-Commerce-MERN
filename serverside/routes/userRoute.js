import express from 'express'
import { signin, signup } from '../controllers/user.js'

const router = express.Router()

router.get('/', (req, res)=>{
    res.status(200).json("Hello Motherfucker")
})

router.post('/signup', signup)
router.post('/signin', signin)

export default router;