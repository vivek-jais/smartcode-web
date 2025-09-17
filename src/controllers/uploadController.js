const Uploads = require("../models/fileStorage");


const uploadFile = async (req,res)=>{
    try {
    const {fileUrl}= req.body;
    console.log(fileUrl);
    
const uploadedData = await Uploads.create({
     fileUrl
    });
   console.log(uploadedData);
   
    return res.status(200).json({
       uploadedData
    })
    } 
    catch (error) {
        return res.status(400).json({
            error :error
        })
    }
    
}

const getAllFile = async (req,res)=>{
    try {
         const files = await Uploads.find({});
console.log(files);
if(files){
return res.status(200).json({
    status:success,
    files :files
})

}
    }
    catch (error) {
     res.status(400).json({
        message:"Failed to fetch files data",
        error:error
       })
    }
}

const getFileByID = async (req,res)=>{
try {
    const file = await Uploads.findOne(req.params.id);
if(!file){
    res.stus(401).json({
        message: "File not found"
    })
}

} catch (error) {
     res.status(400).json({
        error:error
       })
}
}

const postServerLocation = async (req,res)=>{
try {
    
} catch (error) {
    res.status(400).json({
       
        error:error
       })
}
}


module.exports = {uploadFile,getAllFile,getFileByID};

