const multer = require("multer");


// PDF, images, Video, docx and csv.
//Configure storage
const storage = multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,"uploads/")
    },
    filename :(req,file,cb)=>{
        cb(null,`${Date.now()}-${file.originalname}`)
    }
});

//File filter

const fileFilter = (req,file,cb)=>{
    const allowedTypes =['','image/png','image/jpg','image/webp'];
    if(allowedTypes.includes(file.mimetype)){
        cb(null,true);
    }
    else{
        cb(new Error('Only .jpeg .jpg nad .png formats are allowed'),false);
    }
};

const upload = multer({storage,fileFilter});

module.exports = upload;