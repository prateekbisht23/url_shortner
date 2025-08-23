import shortUrl from "../models/short_url.model.js";
import urlSchema from "../models/short_url.model.js";
import { ConflictError } from "../utils/errorHandler.js";

export const saveShortUrl = async (hortUrl, longUrl, userId) => {
    try{
        const newUrl = new shortUrl({
            full_url: longUrl,
            short_url: hortUrl,
        })
        if(userId){
            newUrl.user_id = userId;
        }
        await newUrl.save();
    }catch(err){
        if(err.code == 11000) throw new ConflictError(err);
        throw new Error(err);
    }
}

export const getShortUrl = async (shortUrl) => {
    return await urlSchema.findOneAndUpdate({short_url: shortUrl},{ $inc: {clicks: 1} });
}