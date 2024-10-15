const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

const groupAdmin = process.env.COMMUNITY_ADMIN;

const adminMiddleware = (req, res, next)=>{
    const {admin} = req.body;
    if(!admin || admin !== groupAdmin){
        return res.status(404).json({message:'You are not authorized to access users data'});
    }
    next();
}

// Define routes
router.get('/', userController.getAllUsers);
router.get('/:id', userController.getUserById);
router.put('/:id', userController.updateUser);
router.delete('/:id', userController.deleteUser);

module.exports = router;
