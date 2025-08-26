import { create_user, find_user_by_email, find_user_by_email_and_password } from '../dao/user.dao.js';
import { ConflictError } from '../utils/errorHandler.js';
import { signToken } from '../utils/helper.js';

export const register_user_service = async (name, email, password) => {
    const user = await find_user_by_email(email);
    if(user) throw new ConflictError("User already exists");

    const newUser = await create_user(name, email, password);
    const token = signToken({id: newUser._id});
    return {token, user};
}

export const login_user_service = async (email, password) => {
    const user = await find_user_by_email_and_password(email);
    if(!user) throw new Error("Invalid Credentials");

    const isPasswordValid = await user.comparePassword(password);
    if(!isPasswordValid) throw new Error("Invalid Credentials");

    const token = signToken({id: user._id});
    return {token, user};
}

export const logout_user_service = async () => {
    return { message: "logout successful" };
}