// import mongoose from "mongoose";

// const userSchema = new mongoose.Schema({
//     name: { type: String, required: true },
//     email: { type: String, required: true, unique: true },
//     password: { type: String, required: true },
//     phone: { type: String, default: '000000000' },
//     address: { type: Object, default: { line1: '', line2: '' } },
//     gender: { type: String, default: 'Not Selected' },
//     dob: { type: String, default: 'Not Selected' },
//     password: { type: String, required: true },
// })

// const userModel = mongoose.models.user|| mongoose.model("user", userSchema);
// export default userModel;



import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  image: {
    type: String,
    default:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPAAAADwCAYAAAA+VemSAAAACXBIWXMAABCcAAAQnAEmzTo0AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAA5uSURBVHgB7d0JchvHFc...' // truncated for brevity
  },
  phone: { type: String, default: '000000000' },
  address: { type: Object, default: { line1: '', line2: '' } },
  gender: { type: String, default: 'Not Selected' },
  dob: { type: String, default: 'Not Selected' },
  role: {
    type: String,
    enum: ['admin', 'beautician', 'customer'],
    default: 'customer',
  },
});

const userModel = mongoose.models.user || mongoose.model("user", userSchema);
export default userModel;
