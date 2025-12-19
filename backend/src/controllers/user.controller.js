import { asyncHandler } from "../utils/asynchandler.js";
import { User } from "../models/user.model.js";
import bcrypt from "bcrypt"

const registerUser = asyncHandler(async (req, res) => {

    //Handle user inputs from frontend as objects 
    const {studentemail , Password , role, kuid} = req.body

    // validations of correct format for empty
    if(Object.values({studentemail,Password,kuid}).some(data =>String(data)?.trim()=="" )){
        return res.status(400).json({
            success:false,
            message:"Empty feild"
        })
    }

    // email formatiing check
    const gmailFormat = /^.*@gmail\.com$/;
    if(!gmailFormat.test(studentemail)){
       return res.status(400).json({
        success:false,
        message:"not in format"
       })
    }

    //checking if already exists 
    const userExist = await User.findOne({
        $or:[{studentemail:studentemail}, {kuid:kuid}]
} )

        if(userExist){
        return res.status(409).json({
        success:false,
        messege:"User already exits"
       })
     }
 
     // saving data in database 
    const user =  await User.create({
        studentemail:studentemail,
        password:Password,
        role:role,
        kuid:kuid
    })

    const userCreated =  await User.findById(user._id).select("-password -refreshtoken")
    if(!userCreated){
        res.status(401).json({
            success:false,
            message:"failed to register user"
        })
         
    }
     

     return res.status(201)
     .json({
        success:true,
        messege:"User created",
        user : NewUser
      })
});

// login User
const loginUser= asyncHandler(
    async (req,res) =>{
        // check ussername and login info
        const {studentemail,Password,role} = req.body
        // check code working 
        // console.log(studentemail)
        // console.log(Password)

        // check empty or not 
       if(!studentemail|| !Password || !role ){
        return res.status(400).json({
            messege:"empty string"
        })
       }

       // check user and role 
       const existUser = await User.findOne({
        studentemail1:studentemail,
        role:role
       })

       if(!existUser){
        res.status(400).json({
            message:"Not user"
        })
       }

       // validate
       const Validate = User.IsPasswordCorrect(Password)

       if(!Validate){
        res.status(400).json({
            messege:"Wrong password"
        })
       }

       return res.status(200).json({
        success:true,
        message:"Login sucessfull" ,
        user:{
            id: existUser._id,
            email:existUser.studentemail1,
            role: existUser.role
        }
       })

    })

const logout = asyncHandler(
    (req,res)=>{
        
    }
)



export  {registerUser,loginUser};