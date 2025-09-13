import  jwt  from "jsonwebtoken";

// function to generate a token
 export const generateToken = async (userId)=>{
    const token  = jwt.sign({userId},process.env.JWT_SECRET);
    return token;
 }