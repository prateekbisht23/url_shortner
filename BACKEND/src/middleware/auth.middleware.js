import { find_user_by_id } from "../dao/user.dao.js";
import { verifyToken } from "../utils/helper.js";

export const authMiddleware = async (req, res, next) => {
    const token = req.cookies.accessToken;
    if(!token) return res.status(401).json({message: "Unauthorized"});

    try{
        const decoded = verifyToken(token);
        const user = await find_user_by_id(decoded);
        if(!user) return res.status(401).json({message: "Unauthorized"});
        req.user = user;
        next();
    }catch(err){
        return res.status(401).json({message: "Unauthorized"});
    }
}