import { catchAsyncError } from "../middleware/catchAsyncError.js";
import ErrorHandler from "../middleware/error.js";
import { User } from "../models/userSchema.js";
import {sendToken} from "../utils/jwtToken.js"

export const register = catchAsyncError(async (req, res, next)=>{
    const {name, email, phone, password, role} = req.body;
    if(!name || !email || !phone || !role || !password){
        return next(new ErrorHandler("Please fill all the fields"));
    }
    const isEmail = await User.findOne({ email });
    if(isEmail){
        return next(new ErrorHandler("Email already exists!"));
    }
    const user = await User.create({
        name,
        email,
        phone,
        role,
        password,
    });
    sendToken(user, 200, res, "User registered successfully!");
});

export const login = catchAsyncError(async (req, res, next)=>{
    const {email, password, role} = req.body;
    if(!email || !password || !role){
        return next(new ErrorHandler("Please provide email and password and role", 400));
    }
    const user = await User.findOne({email}).select("+password");
    if(!user){
        return next(new ErrorHandler("Invalid Email or Password", 401));
    }
    const isPasswordMatched = await user.comparePassword(password);
    if(!isPasswordMatched){
        return next(new ErrorHandler("Invalid Email or Password", 401));
    }
    if(user.role !== role){
        return next(new ErrorHandler("Invalid Role", 401));
    }
    sendToken(user, 200, res, "User Logged in Successfully!");
});


export const logout = catchAsyncError(async (req, res, next)=>{
    res.status(201).cookie("token", "", {
        httpOnly: true,
        expires: new Date(Date.now()),
    }).json({
        success:true,
        message: "User Logged out successfully!",
    });
});

export const getUser = catchAsyncError((req, res, next) => {
    const user = req.user;
    res.status(200).json({
      success: true,
      user,
    });
  });