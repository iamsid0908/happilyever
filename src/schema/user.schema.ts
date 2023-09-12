import {object ,string, TypeOf} from 'zod'

export const createUserSchema:any = object({
    body:object({
        name:string({
            required_error:"name is required"
        }),
        email:string({
            required_error:"email is required"
        }),
        uniId:string({
            required_error:"University id is required"
        }),
        password:string({
            required_error:"password is required"
        }),
        role:string({
            required_error:"role is also required"
        })
    })
})

export const loginUserSchema:any = object({
    body:object({
        email:string({
            required_error:"email is required"
        }),
        password:string({
            required_error:"password is required"
        })
    })
})


export type CreatUserInput = TypeOf<typeof createUserSchema>["body"]

export type LoginUserInput = TypeOf<typeof loginUserSchema>["body"]

