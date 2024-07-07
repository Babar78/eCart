import usersModel from "../models/userModel.js";


export const signup = async (req, res) => {
    const { username, email, password, country } = req.body;

    const user = await usersModel.create({
        username,
        email,
        password,
        country,
    });

    return res.status(201).json({ user });
}

export const login = async (req, res) => {
    const { email, password } = req.body;
    try {
        const resData = await usersModel.matchPasswordAndGenerateToken(email, password);
        res.cookie("token", resData.token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
        });
        return res.status(200).json({
            message: "User Authenticated!",
            userData: {
                ...resData.user["_doc"],
            },
            token: resData.token,
        });
    }
    catch (err) {
        return res.status(400).send({
            message: "Incorrect Email or Password",
            error: err.message
        });
    }
};

