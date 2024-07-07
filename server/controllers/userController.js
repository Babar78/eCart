import usersModel from "../models/userModel.js";
import { createTokenForUser } from "../services/auth.js";


export const signup = async (req, res) => {
    const { username, email, password, country } = req.body;

    try {

        // Check if the user already exists
        const userExists = await usersModel.findOne({ email });
        if (userExists) {
            return res.status(400).send({
                message: "User already exists!",
            });
        }
        else {
            const user = await usersModel.create({
                username,
                email,
                password,
                country,
            });
            // If the user is created successfully, then save the token in the cookie
            const token = createTokenForUser(user);

            res.cookie("token", token, {
                httpOnly: false,
                secure: process.env.NODE_ENV === "production",
            });

            return res.status(201).json({
                message: "User created successfully!",
                userData: {
                    ...user["_doc"],
                }
            });
        }
    }
    catch (err) {
        return res.status(400).send({
            message: "Could not create user account. Please try again later.",
            error: err.message
        });
    }
}

export const login = async (req, res) => {
    const { email, password } = req.body;
    try {
        const resData = await usersModel.matchPasswordAndGenerateToken(email, password);
        res.cookie("token", resData.token, {
            // If httpOnly is set true, the cookie is not accessible via client-side JavaScript means it can't be removed or accessed by JavaScript from frontend.
            httpOnly: false,
            secure: process.env.NODE_ENV === "production",
        });
        return res.status(200).json({
            message: "User Authenticated!",
            userData: {
                ...resData.user["_doc"],
            }
        });
    }
    catch (err) {
        return res.status(400).send({
            message: "Incorrect Email or Password",
            error: err.message
        });
    }
};

