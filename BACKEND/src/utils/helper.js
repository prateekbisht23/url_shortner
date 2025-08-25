import jsonwebtoken from 'jsonwebtoken';
import { nanoid } from "nanoid";


export const generateNanoId = (length) => {
    return nanoid(length);
}

export const signToken = (payload) => {
    return jsonwebtoken.sign(payload, process.env.JWT_SECRET, 
        {expiresIn: '1h'}
    );
}

export const verifyToken = (token) => {
    const payload = jsonwebtoken.verify(token, process.env.JWT_SECRET);
    return payload.id;
}