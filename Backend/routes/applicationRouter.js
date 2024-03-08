import express from "express";
import { employerGetAllApplications, jobSeekerDeleteApplication, jobseekerGetAllApplications } from "../controller/applicationController";
import { isAuthorized } from "../middleware/auth";

const router = express.Router();

router.get('/employer/getall', employerGetAllApplications);
router.get('/jobseeker/getall', jobseekerGetAllApplications);
router.delete('/delete/:id', isAuthorized, jobSeekerDeleteApplication);

export default router;