import mongoose, { Schema, Types } from "mongoose";


export interface ISlot extends Document {
    day: string;
    time: string;
    booked: boolean;
    bookedwith?: string;
    uniId?: string;
    activation: boolean;
    userId: Types.ObjectId;
    createdAt: Date;
    updatedAt: Date;
  }


    const SlotSchema:Schema = new Schema({
        day:{
            type:String,
            require:true
        },
        time:{
            type:String,
            require:true
        },
        booked:{
            type:Boolean,
            default:false
        },
        bookedwith:{
            type:String
        },
        uniId:{
            type:String
        },
        activation:{
            type:Boolean,
            default:false
        },
        userId:{
            type:mongoose.Schema.Types.ObjectId, ref:"User",
            require:true
        }
    },{
        timestamps:true
    })

    const SlotModel = mongoose.model("Slot",SlotSchema)

    export default SlotModel;