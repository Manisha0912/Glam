import validator from "validator";
import bcrypt from "bcrypt";
import { v2 as cloudinary } from "cloudinary";
import beauticianModel from "../models/beauticianModel.js";
import jwt from "jsonwebtoken";
import userModel from "../models/userModel.js";

const addBeautician = async (req, res) => {
  try {
    const {
      name,
      email,
      password,
      service,
      qualification,
      experience,
      about,
      fees,
      address,
    } = req.body;
    const imageFile = req.file;

    if (
      !name ||
      !email ||
      !password ||
      !service ||
      !qualification ||
      !experience ||
      !about ||
      !fees ||
      !address
    ) {
      return res.json({ success: false, message: "Missing Details" });
    }

    //   validating email format
    if (!validator.isEmail(email)) {
      return res.json({ success: false, message: "Please enter valid Email" });
    }
    // validating strong password
    if (password.length < 8) {
      return res.json({
        success: false,
        message: "Please enter a strong password",
      });
    }

    // hashing beautician passowrd
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // upload image to cloudinary
    const imageUpload = await cloudinary.uploader.upload(imageFile.path, {
      resource_type: "image",
    });
    const imageurl = imageUpload.secure_url;

    const beauticianData = {
      name,
      email,
      image: imageurl,
      password: hashedPassword,
      service,
      qualification,
      experience,
      about,
      fees,
      address: JSON.parse(address),
      date: Date.now(),
    };
    const newBeautician = new beauticianModel(beauticianData);
    await newBeautician.save();
    res.json({ success: true, message: "Beautician Added" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};


// // Register (Admin, Beautician, Customer)
// export const register = async (req, res) => {
//   try {
//     const { name, email, password, role, phone, address, gender, dob } = req.body;
//     const imageFile = req.file;

//     if (!name || !email || !password || !role) {
//       return res.status(400).json({ message: "All fields are required" });
//     }

//     if (!validator.isEmail(email)) {
//       return res.status(400).json({ message: "Invalid email" });
//     }

//     if (password.length < 8) {
//       return res.status(400).json({ message: "Password must be at least 8 characters" });
//     }

//     const existingUser = await userModel.findOne({ email });
//     if (existingUser) {
//       return res.status(400).json({ message: "User already exists" });
//     }

//     const hashedPassword = await bcrypt.hash(password, 10);

//     let imageUrl = undefined;
//     if (imageFile) {
//       const uploaded = await cloudinary.uploader.upload(imageFile.path);
//       imageUrl = uploaded.secure_url;
//     }

//     const newUser = new userModel({
//       name,
//       email,
//       password: hashedPassword,
//       role,
//       image: imageUrl,
//       phone: phone || undefined,
//       address: address ? JSON.parse(address) : undefined,
//       gender: gender || undefined,
//       dob: dob || undefined,
//     });

//     await newUser.save();
//     res.status(201).json({ message: "User registered successfully" });
//   } catch (error) {
//     console.error("Register Error:", error);
//     res.status(500).json({ message: "Server error" });
//   }
// };

export const register = async (req, res) => {
  try {
    const { name, email, password, role, phone, address, gender, dob } = req.body;

    if (!name || !email || !password || !role) {
      return res.status(400).json({ message: "All fields are required" });
    }

    if (!validator.isEmail(email)) {
      return res.status(400).json({ message: "Invalid email" });
    }

    if (password.length < 8) {
      return res.status(400).json({ message: "Password must be at least 8 characters" });
    }

    const existingUser = await userModel.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new userModel({
      name,
      email,
      password: hashedPassword,
      role,
      phone: phone || undefined,
      address,
      gender: gender || undefined,
      dob: dob || undefined,
    });

    await newUser.save();
    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    console.error("Register Error:", error);
    res.status(500).json({ message: "Server error" });
  }
};


// Login
// export const login = async (req, res) => {
//   try {
//     const { email, password } = req.body;

//     if (!email || !password) {
//       return res.status(400).json({ message: "Email and password required" });
//     }

//     const user = await userModel.findOne({ email });
//     if (!user) {
//       return res.status(401).json({ message: "Invalid credentials" });
//     }

//     const isMatch = await bcrypt.compare(password, user.password);
//     if (!isMatch) {
//       return res.status(401).json({ message: "Invalid credentials" });
//     }

//     const token = jwt.sign(
//       { id: user._id, role: user.role },
//       process.env.JWT_SECRET,
//       { expiresIn: "1h" }
//     );

//     res.json({
//       token,
//       user: {
//         id: user._id,
//         name: user.name,
//         email: user.email,
//         role: user.role,
//         image: user.image,
//         phone: user.phone,
//         address: user.address,
//         gender: user.gender,
//         dob: user.dob,
//       },
//     });
//   } catch (error) {
//     console.error("Login Error:", error);
//     res.status(500).json({ message: "Server error" });
//   }
// };
// Login
export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Logging input from frontend
    console.log("Login attempt for:", email);

    if (!email || !password) {
      return res.status(400).json({ message: "Email and password required" });
    }

    // 🔍 Check if user exists
    const user = await userModel.findOne({ email });
    if (!user) {
      console.log("User not found for email:", email);
      return res.status(401).json({ message: "User not found" });
    }

    // 🔑 Compare password with hashed one
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      console.log("Password mismatch. Entered:", password, "DB:", user.password);
      return res.status(401).json({ message: "Incorrect password" });
    }

    // ✅ Generate token
    const token = jwt.sign(
      { id: user._id, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );

    // 🟢 Success response
    res.json({
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
        image: user.image,
        phone: user.phone,
        address: user.address,
        gender: user.gender,
        dob: user.dob,
      },
    });

  } catch (error) {
    console.error("Login Error:", error);
    res.status(500).json({ message: "Server error", details: error.message });
  }
};



const allBeauticians=async (req,res)=>{
  try{
   const beauticians= await beauticianModel.find({}).select('-password')
   res.json({success:true,beauticians})
  }catch(error){
    console.log(error)
    res.json({success:false,message:error.message})
  }
}


export { addBeautician,allBeauticians};
