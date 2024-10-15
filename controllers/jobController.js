const Job = require('../models/Job');

exports.getAllJobs = async (req, res) => {
    try {
        const allJobs = await Job.find({});
        res.status(200).json({
            success: true,
            message: "All Jobs",
            allJobs,
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            success: false,
            message: 'Something went wrong',
        });
    }
}


exports.showJob = async (req, res) => {
    const { id } = req.params;
    try {
        const job = await Job.findById(id);
        if (!job) {
            return res.status(404).json({
                success: false,
                message: "No job found",
            })
        }
        return res.status(200).json({
            success: true,
            message: "Job fetched successfully",
            job,
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            success: false,
            message: "Something went wrong",
        })
    }
}

exports.createJob = async (req, res) => {
    const job = req.body;
    try {
        const newJob = new Job(job);
        const currUser = req.user;
        newJob.author = currUser._id;
        const savedJob = await newJob.save();
        res.status(201).json({
            success: true,
            message: 'New Job Created',
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            success: false,
            message: 'Something Went Wrong',
        })
    }
}

exports.updateJob = async (req, res) => {
    const { id } = req.params;
    const updatedFields = req.body; // Get the updated fields from the request body

    try {
        const existingJob = await Job.findById(id);
        if (!existingJob) {
            return res.status(404).json({
                success: false,
                message: "No job found",
            });
        }

        // Use the $set operator to only update the fields that are passed in the request body
        const updatedJob = await Job.findByIdAndUpdate(
            id,
            { $set: updatedFields },
            { new: true, runValidators: true } // Return the updated document and validate the update
        );

        res.status(201).json({
            success: true,
            message: "Job updated successfully",
            data: updatedJob,
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            success: false,
            message: "Something went wrong",
        });
    }
};


exports.deleteJob = async (req, res) => {
    const { id } = req.params;
    try {
        const existingJob = await Job.findById(id);
        if (!existingJob) {
            return res.status(404).json({
                success: false,
                message: "No job found",
            })
        }
        const deletedJob = await Job.findByIdAndDelete(id);
        console.log("Deleted Job: ", deletedJob);
        res.status(200).json({
            success: true,
            message: "Job deleted successfully",
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            success: false,
            message: "Something went wrong",
        })
    }
}