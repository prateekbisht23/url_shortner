import { find_user_by_id } from "../dao/user.dao.js";
import { verifyToken } from "../utils/helper.js";

export const authMiddleware = async (req, res, next) => {
    const token = req.cookies.accessToken;
    console.log("token - ", token);
    if(!token) return res.status(401).json({message: "Unauthorized"});

    try{
        const {id} = verifyToken(token);
        const user = await find_user_by_id(id);
        if(!user) return res.status(401).json({message: "Unauthorized"});
        console.log('req - ', req.body);
        req.user = user;
        next();
    }catch(err){
        return res.status(401).json({message: "Unauthorized"});
    }
}