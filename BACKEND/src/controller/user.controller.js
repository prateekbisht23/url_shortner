import { get_all_user_urls } from "../dao/user.dao.js";
import wrapAsync from "../utils/tryCatchWrapper.js";

export const getAllUserUrls = wrapAsync (async (req, res) => {
    const {_id} = req.user;
    const urls = await get_all_user_urls(_id);
    res.status(200).json({message: "success", urls});
})