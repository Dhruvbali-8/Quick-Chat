// import  messagesDummyData  from "../../client/src/assets/assets.js";
import User from "../models/user.js";
import jwt from "jsonwebtoken";

// MIddlware to protect route
export const protectRoute = async (req, res, next) => {
  try {
    const token = req.headers.authorization?.split(" ")[1];
    if (!token)
      return res.json({ success: false, message: "No token provided" });

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findById(decoded.userId).select("-password");

    if (!user) return res.json({ success: false, message: "User not Found!" });
    req.user = user;
    next();
  } catch (error) {
    console.log(error.message);
    res.json({ success: false, message: error.message });
  }
};
