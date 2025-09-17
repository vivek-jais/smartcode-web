const express =  require("express");

const upload =  require("../middleware/uploadMiddleware")
const {uploadFile,getAllFile,getFileByID } = require("../controllers/uploadController")
const router = express.Router();



router.post("/upload-file",upload.single("image"),(req,res)=>{
    if(!req.file){
        return res.status(400).json({
            message:"No file uploaded"
        })
    }

    const fileUrl = `${req.protocol}://${req.get("host")}/uploads/${req.file.filename}`

    res.status(200).json({fileUrl});
});

router.post("/upload",uploadFile);
router.get("/files",getAllFile);
router.get("/file:id",getFileByID);


// router.get("/files",)


module.exports = router;


