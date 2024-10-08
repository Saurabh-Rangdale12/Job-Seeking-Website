import mongoose from "mongoose";
import validator from "validator";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const userSchema = new mongoose.Schema({
    name: {
        type:String,
        required: true,
        minLength: [3, "Name must contain at least 3 charcters!"],
        maxLength: [30, "Name cannot exceed 30 characters!"],
    },
    email:{
        type: String,
        required: [true, "Please provide your email!"],
        validate: [validator.isEmail, "Please provide a valid email"]
    },
    phone:{
        type: Number,
        required: [true, "Please provide your phone number"],
    },
    password:{
        type: String,
        required: [true, "Please provide your password"],
        minLength: [8, "min 8 characters"],
        maxLength: [32, "max 32 characters only"],
        select: false,
    },
    role:{
        type: String,
        required: [true, "Please provide your role"],
        enum: ["Job Seeker", "Employer"],
    },
    createAt:{
        type: Date,
        default: Date.now,
    },
});

// hashing the password
userSchema.pre("save", async function(next){
    if(!this.isModified("password")){
        next();
    }
    this.password = await bcrypt.hash(this.password, 10);
});

// Comparing password
userSchema.methods.comparePassword = async function(enteredPassword){
    return await bcrypt.compare(enteredPassword, this.password);
};

// generating a JWT token for authorization
userSchema.methods.geJWTToken = function (){
    return jwt.sign({id: this._id}, process.env.JWT_SECRET_KEY, {
        // expiresIn: process.env.JWT_EXPIRE,
        expiresIn: "45d",
    })
}

export const User = mongoose.model("User", userSchema);
