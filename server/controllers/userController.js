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
        const user = await usersModel.matchPasswordAndReturnUser(email, password);
        return res.status(200).json({
            message: "User Authenticated",
            data: {
                ...user["_doc"],
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

