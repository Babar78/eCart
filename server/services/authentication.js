import JWT from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();

function createTokenForUser(user) {
    const payload = {
        _id: user._id,
        username: user.username,
        email: user.email,
        role: user.role,
    };
    const token = JWT.sign(payload, process.env.JWT_SECRET);
    return token;
}

function validateToken(token) {
    const payload = JWT.verify(token, process.env.JWT_SECRET);
    return payload;
}

export { createTokenForUser, validateToken };