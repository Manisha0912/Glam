// import jwt from 'jsonwebtoken'

// // admin authentication middleware
// const authAdmin=async(req,res,next)=>{

//     try{
//         const atoken = req.headers.authorization?.split(' ')[1];
//         console.log(atoken,"token")
//         if (!atoken){
//             return res.json({success:false,message:'Not Authorizedn Login Admin'})
//         }
//         const token_decode= jwt.verify(atoken,process.env.JWT_SECRET)
//         if (token_decode != process.env.ADMIN_EMAIL + process.env.ADMIN_PASSWORD){
//             return res.json({success:false,message:'Not Authorized Login Again'})
//         }

        
        
//     }
//     catch (error){
//         console.log(error)
//         res.json({success:false,message:error.message})
//     }

// }

// export default authAdmin



import jwt from 'jsonwebtoken';

const authAdmin = async (req, res, next) => {
console.log(req.headers.authorization)
  try {
    const authHeader = req.headers.authorization;
    
  
    
    if (!authHeader) {
      return res.status(401).json({
        success: false,
        message: 'Not authorized. No token provided.',
      });
    }

    const token = authHeader.split(' ')[1];
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // Validate credentials from token
    // if (decoded.email !== 'admin@gmail.com') {
    //   return res.status(403).json({
    //     success: false,
    //     message: 'Access denied. You are not an admin.',
    //   });
    // }

    req.admin = decoded;
    next();
  } catch (error) {
    console.error('Admin Auth Error:', error);
    res.status(401).json({ success: false, message: 'Invalid or expired token' });
  }
};

export default authAdmin;
