import { find_user_by_id } from "../dao/user.dao.js";
import { verifyToken } from "./helper.js";

export const attachUser = async (req, res, next) => {
    const token = req.cookies.accessToken;
    if(!token) return next();

    try{
        const id = verifyToken(token);
        const user = await find_user_by_id(id);
        if(!user) return next();
        req.user = user;
        next();
    }catch(err){
        next();
    }
}