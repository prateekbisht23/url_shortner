import User from "../models/user.model.js";

export const find_user_by_email = async (email) => {
    return await User.findOne({email});
}

export const find_user_by_id = async (id) => {
    return await User.findById(id);
}

export const create_user = async (name, email, password) => {
    const newUser = await User.create({name, email, password});
    await newUser.save();
    return newUser;
}