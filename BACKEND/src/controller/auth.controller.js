import { register_user_service, login_user_service } from '../services/auth.service.js';
import wrapAsync from '../utils/tryCatchWrapper.js';
import { cookieOptions } from '../config/config.js';


export const register_user = wrapAsync( async (req, res) => {
    const {name, email, password} = req.body;
    const token = await register_user_service(name, email, password);

    req.user = user;
    res.cookie("accessToken", token, cookieOptions);
    res.status(200).json({message: "register successful"});
})

export const login_user = wrapAsync( async (req, res) => {
    const {email, password} = req.body;
    const {token, user} = await login_user_service(email, password);

    req.user = user;
    res.cookie("accessToken", token, cookieOptions);
    res.status(200).json({message: "login successful"});
})