





const addBeautician = async (req, res) => {
    try {
        const { name, email, password, service, qualification, experience, about, fees, address } =req.body
        const imageFile = req.file
        console.log({ name, email, password, service, qualification, experience, about, fees, address }, imageFile);
    
    }catch (error){

    }
        
}
        export {addBeautician}