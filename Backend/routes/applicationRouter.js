import express from "express";
import { employerGetAllApplications, postApplication, jobSeekerDeleteApplication, jobseekerGetAllApplications } from "../controller/applicationController.js";
import { isAuthorized } from "../middleware/auth.js";

const router = express.Router();

router.post('/post', isAuthorized, postApplication);
router.get('/employer/getall', isAuthorized, employerGetAllApplications);
router.get('/jobseeker/getall', isAuthorized, jobseekerGetAllApplications);
router.delete('/delete/:id', isAuthorized, jobSeekerDeleteApplication);
router.post('/post', isAuthorized, postApplication);

export default router;




