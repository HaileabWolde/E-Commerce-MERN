import mongoose from 'mongoose'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique:true
    },
    password: {
        type: String,
        required: true,
        
    },
    isAdmin: {
        type: Boolean,
        required: true,
        default: false
    }
}, {timestamps: true})
userSchema.pre('save', async function(next){
    const salt = await bcrypt.genSalt(10)
    this.password = await bcrypt.hash(this.password, salt)
    next()
})
userSchema.methods.createJWT = function (){
    return jwt.sign({
        UserId: this._id, Email: this._email
    }, process.env.JWT_SECRET, { expiresIn: process.env.JWT_LIFETIME})
}
userSchema.methods.isPasswordmatched = async function (password){
    return await bcrypt.compare(password, this.password)
}
const UserSchema = mongoose.model('User', userSchema)

export default UserSchema
