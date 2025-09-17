const express =  require("express");

const upload =  require("../middleware/uploadMiddleware")
const {uploadFile,getAllFile,getFileByID } = require("../controllers/uploadController")
const router = express.Router();


//POST : uploading file to uploads folder

router.post("/upload-file",upload.any("image"),(req,res)=>{
    if(!req.file){
        return res.status(400).json({
            message:"No file uploaded"
        })
    }

    const fileUrl = `${req.protocol}://${req.get("host")}/uploads/${req.file.filename}`

    res.status(200).json({fileUrl});
});

//GET : upload file to MONGODB storage
router.post("/upload",uploadFile);

//GET: all files stored in databse
router.get("/files",getAllFile);

//GET: access file by ID
router.get("/file:id",getFileByID);





module.exports = router;


