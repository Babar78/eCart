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
        const token = await usersModel.matchPasswordAndGenerateToken(email, password);
        return res.status(200).json({ token });
    }
    catch (err) {
        return res.status(400).json({ message: "Incorrect Email or Password" });
    }
};

