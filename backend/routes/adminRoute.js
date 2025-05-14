import express from 'express';
import { addBeautician, allBeauticians } from '../controllers/adminController.js';
import { login,register } from '../controllers/adminController.js';
import upload from '../middlewares/multer.js';
import authAdmin from '../middlewares/authAdmin.js'
import { changeAvailability } from '../controllers/beauticianController.js';


const adminRouter = express.Router();

adminRouter.post("/add-beautician",authAdmin,upload.single('image'),addBeautician);
adminRouter.post("/userregister",register)
adminRouter.post("/userlogin",login)
adminRouter.post("/all-beauticians",authAdmin,allBeauticians)
adminRouter.post("/change-availability",authAdmin,changeAvailability)

export default adminRouter;