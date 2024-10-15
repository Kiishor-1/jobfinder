const User = require('../models/User');
const bcrypt = require('bcrypt'); // Make sure bcrypt is installed and required
const jwt = require('jsonwebtoken');

exports.signup = async (req, res) => {
    try {
        // Destructure fields from the request body
        const { email, password, name, mobile } = req.body;

        // Check if all fields are provided
        if (!email || !password || !name || !mobile) {
            return res.status(403).send({
                success: false,
                message: "All Fields are required",
            });
        }

        // Check if user already exists
        let existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(409).json({
                success: false,
                message: "User Already Exists, Please login to continue",
            });
        }

        // Hash the password before storing it
        const hashedPassword = await bcrypt.hash(password, 10); // 10 is the salt rounds

        // Create the new user with the hashed password
        let user = await User.create({
            email,
            password: hashedPassword, // store hashed password
            name,
            mobile
        });

        // Generate a JWT token for the new user
        const token = jwt.sign(
            { email: user.email, id: user._id }, // use newUser details here
            process.env.JWT_SECRET,
            {
                expiresIn: "24h",
            }
        );

        // Set cookie for the token and return success response
        const options = {
            expires: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000), // 3 days expiry
            httpOnly: true,
        };

        return res.cookie("token", token, options).status(200).json({
            success: true,
            token,
            user,
            message: "User registered successfully",
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            success: false,
            message: "User cannot be registered. Please try again.",
        });
    }
};


// Login controller for authenticating users
exports.login = async (req, res) => {
    try {
        // Get email and password from request body
        const { email, password } = req.body

        // Check if email or password is missing
        if (!email || !password) {
            // Return 400 Bad Request status code with error message
            return res.status(400).json({
                success: false,
                message: `Please Fill up All the Required Fields`,
            })
        }

        // Find user with provided email
        const user = await User.findOne({ email });

        // If user not found with provided email
        if (!user) {
            // Return 401 Unauthorized status code with error message
            return res.status(401).json({
                success: false,
                message: `User is not Registered with Us. Please SignUp to Continue`,
            })
        }

        // Generate JWT token and Compare Password
        if (await bcrypt.compare(password, user.password)) {
            const token = jwt.sign(
                { email: user.email, id: user._id },
                process.env.JWT_SECRET,
                {
                    expiresIn: "24h",
                }
            )

            // Set cookie for token and return success response
            const options = {
                expires: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000),
                httpOnly: true,
            }
            res.cookie("token", token, options).status(200).json({
                success: true,
                token,
                user,
                message: `User Login Success`,
            })
        } else {
            return res.status(401).json({
                success: false,
                message: `Password is incorrect`,
            })
        }
    } catch (error) {
        console.error(error)
        // Return 500 Internal Server Error status code with error message
        return res.status(500).json({
            success: false,
            message: `Login Failure Please Try Again`,
        })
    }
}