import { User } from "../entities/user-entity.js"
const sigin=async (req,res)=>{
    try {
        const {email,password}=req.body
        
    const check=await User.findOne({
        where:{
            email,
            password
        }
    })
    if(!check){
    res.status(500).send('invalid credentials')
    }
     res.send(check)   
    } catch (error) {
        res.send(error)
    }
    
}

const createCredentials =async (req,res)=>{
    try {
        console.log(req.body)
        const {email,password}=req.body
        const create=await User.create({email,password})
        res.status(201).send('user created successfully')    
    } catch (error) {
        console.log(error)
        res.json(error)
    }
    
}

export {sigin,createCredentials}