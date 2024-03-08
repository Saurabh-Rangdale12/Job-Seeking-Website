import mongoose from "mongoose";

const jobSchema = new mongoose.Schema({
    title:{
        type: String,
        required: [true, "Please provide job title"],
        minLength: [3, "job title must contain at least 3 charcters!"],
        maxLenght: [50, "job title must contain at most 50 charcters!"],
    },
    description:{
        type: String,
        required: [true, "Please provide job description"],
        minLength: [50, "job description must contain at least 50 charcters!"],
        maxLenght: [500, "job description must contain at most 500 charcters!"],
    },
    category:{
        type: String,
        required: [true, "Please provide job category"],
    },
    country:{
        type: String,
        required: [true, "Please provide job country"],
    },
    city:{
        type: String,
        required: [true, "Please provide job city"],
    },
    location:{
        type: String,
        required: [true, "Please provide job exact location"],
        minLength:[10, "job location must contain at least 10 charcters!"],
        maxLenght: [100, "job location must contain at most 100 charcters!"],
    },
    fixedSalary:{
        type: Number,
        minLength: [4, "job salary must contain atleast 4 digit!"],
        maxLenght: [9, "job salary must contain atmost 9 digit!"],
    },
    salaryFrom:{
        type: Number,
        minLength: [4, "Starting salary must contain atleast 4 digit!"],
        maxLenght: [9, "Starting salary must contain atmost 9 digit!"],
    },
    salaryTo:{
        type: Number,
        minLength: [4, "Ending salary must contain atleast 4 digit!"],
        maxLenght: [9, "Ending salary must contain atmost 9 digit!"],
    },
    expired:{
        type: Boolean,
        default: false,
    },
    jobPostedOn: {
        type: Date,
        default: Date.now,
    },
    postedBy:{
        type: mongoose.Schema.ObjectId,
        ref: "User",
        required: true,
    },
});

export const Job = mongoose.model("Job", jobSchema);