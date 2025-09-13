// import mongoose from "mongoose";
// export const connectDB = async()=>{
//     try{
//         mongoose.connection.on('connected',()=>{console.log("Database Connected")});
//         await mongoose.connect(`${process.env.MONGODB_URI}/chat-app`)
//     }catch(error){
//       console.log(error);
//     }
// }
import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    if (mongoose.connection.readyState === 0) {
      mongoose.connection.on("connected", () => {
        console.log("Database Connected");
      });
    }

    await mongoose.connect(process.env.MONGODB_URI, {
      dbName: "chat-app",
    });
  } catch (error) {
    console.log("Database connection error:", error.message);
  }
};

