// import beauticianModel from "../models/beauticianModel.js"

// const changeAvailability =async(req,res)=>{
//     try{
// const {beauticianId}=req.body
// const beauticianData=await beauticianModel.findById(beauticianId)
// await beauticianModel.findByIdAndUpdate(beauticianId,{available:!beauticianData.available})
// res.json({success:true,message:'Availability Changed'})

//     }catch(error){
//         console.log(error)
//         res.json({success:false,message:error.message})
//     }
// }

// const beauticianList=async(req,res)=>{
//     try{

//         const beauticians = await beauticianModel.find({}).select(['-password','-e,ail'])
//         res.json({success:true,beauticians})
//     }catch(error){

//     }
// }
// export {changeAvailability,beauticianList} 



import beauticianModel from "../models/beauticianModel.js"

const beauticianList = async (req, res) => {
    try {
        const beauticians = await beauticianModel.find({}).select(['-password', '-email'])
        res.json({success: true, beauticians})
    } catch(error) {
        console.log(error)
        res.json({success: false, message: error.message})
    }
}

const changeAvailability = async (req, res) => {
    try {
        const {beauticianId} = req.body
        const beauticianData = await beauticianModel.findById(beauticianId)
        await beauticianModel.findByIdAndUpdate(beauticianId, {available: !beauticianData.available})
        res.json({success: true, message: 'Availability Changed'})
    } catch(error) {
        console.log(error)
        res.json({success: false, message: error.message})
    }
}

export { beauticianList, changeAvailability }