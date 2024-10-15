const express = require('express');
const router = express.Router();
const JobControllers = require('../controllers/jobController');
const { authMiddleware, isOwner } = require('../middlewares');


router.get("/",JobControllers.getAllJobs);
router.post("/create", authMiddleware,JobControllers.createJob);

router.route('/:id')
    .get(JobControllers.showJob)
    .put(authMiddleware, isOwner, JobControllers.updateJob)
    .delete(authMiddleware, isOwner, JobControllers.deleteJob);

module.exports = router;