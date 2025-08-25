import shortUrl from "../models/short_url.model.js";
import urlSchema from "../models/short_url.model.js";
import { ConflictError } from "../utils/errorHandler.js";

export const saveShortUrl = async (shortUrlString, longUrl, userId) => {
    try{
        const newUrl = new shortUrl({
            full_url: longUrl,
            short_url: shortUrlString,
        })
        if(userId){
            newUrl.user = userId;
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

export const getCustomShortUrl = async (slug) => {
    return await urlSchema.findOne({short_url: slug});
}