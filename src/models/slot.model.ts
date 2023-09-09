import mongoose, { Schema, mongo } from "mongoose";


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