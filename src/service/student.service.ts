import SlotModel from "../models/slot.model";
import userModel from "../models/user.model";


export async function getSlotById(params:any) {
    return await SlotModel.findById({_id:params});
}

export async function getUserByUserId(params:any) {
    return await userModel.findById({_id:params});
}