## DEVISE-LAB Next Gen Hackathon 

# BACKEND

# STEPS

**Tech Stack** : 
Node.js - backend server
Express.js  - framework
MongoDB - Database to store file urls
Multer library - for file uploads in UPLOAD FOLDER from api

**API Server FLOW**
1.server.js to run express app at port 8000

**ROUTES**
all routes in uploadRoutes folder

1.POST: /api/upload-url ---> upload file and store in UPLOAD folder with fileKey attached

2.POST : /api/upload  --> post file url to MONGODB uploads collection

3.GET : /api/files  --> get all files stored in MONGODB database uploads

4.GET : /api/file:id --> get file by id as param

5.POST : /api/config/storage ---> save storage loaction to db  


**MIDDLEWARE**
--UploadMiddleware--
-MULTER --> for file url validation and handle uploading file
**I have done only for Image Upload as extension an type of video or file is not given in problem**
# But I can make upload for pdf  and csv and other file type is given, If extension known #

**CONFIG**
db.js --> to connect mongoDb to connect with server

