import userModel from "../models/user.model";

export async function createUserService(input:any ){
    return await userModel.create(input);
}