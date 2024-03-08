// how employer will see the application
import { catchAsyncError } from "../middleware/catchAsyncError.js";
import ErrorHandler from "../middleware/error.js";
import { Application } from "../models/applicationSchema.js";

export const employerGetAllApplications = catchAsyncError(async (req, res, next) => {
    const {role} = req.user;
    if (role === "Job Seeker") {
        return next(new ErrorHandler("Job Seeker cannot post a job", 400));
    }
    const {_id} = req.user;
    const applications = await Application.find({'employerID.user': _id});
    res.status(200).json({
        success: true,
        applications,
    })
});

export const jobseekerGetAllApplications = catchAsyncError(async (req, res, next) => {
    const {role} = req.user;
    if (role === "Empolyer") {
        return next(new ErrorHandler("Employer cannot access this resource ", 400));
    }
    const {_id} = req.user;
    const applications = await Application.find({'applicantID.user': _id});
    res.status(200).json({
        success: true,
        applications,
    })
});

export const jobSeekerDeleteApplication = catchAsyncError(async (req, res, next) => {
    const {role} = req.user;
    if (role === "Empolyer") {
        return next(new ErrorHandler("Employer cannot access this resource ", 400));
    }
    const {id} = req.params;
    const application = await Application.findById(id);
    if(!application){
        return next(new ErrorHandler("Application not found!", 404));
    }
    await application.deleteOne();
    res.status(200).json({
        success: true,
        message: "Application deleted successfully!",
    })
});