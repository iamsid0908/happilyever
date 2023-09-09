import {object ,string, TypeOf} from 'zod'

export const createSlotSchema = object({
    body:object({
        day:string({
            required_error:"day is required"
        }),
        time:string({
            required_error:"time is also required"
        })
    })
})

export type CreateSlotInput = TypeOf<typeof createSlotSchema>["body"];