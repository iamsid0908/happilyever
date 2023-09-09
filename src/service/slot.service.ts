import SlotModel from "../models/slot.model";

export async function getAllSessionsService() {
    return SlotModel.find({});
}

export async function createSessionService(params:any) {
    return SlotModel.create(params);
}

export async function getMySessionService(params:any) {
    return SlotModel.find({userId:params});
}