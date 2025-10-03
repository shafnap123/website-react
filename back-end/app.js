import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import multer from 'multer';
import fs from 'fs';
import {v2 as cloudinary}from  'cloudinary'
import dotenv from 'dotenv'

// Controllers
import { addUser, usersignup } from './controller/Controller.js';
import { userlogin } from './controller/logincontroller.js';
import { addproduct, deteleProduct, editproduct, findproduct, productedited, userproductfind } from './controller/productcontroller.js';
import { addcategory,  deletecategory,  editedcategory,  findcategory, findeditedcategory } from './controller/CategoryController.js';
import { viewproduct } from './controller/viewController.js';

const app = express();
const PORT = 5000;

// MongoDB Connection
mongoose.connect('mongodb://localhost:27017/new', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => console.log("✅ Connected to MongoDB"))
  .catch(err => console.error("❌ MongoDB connection failed:", err));

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static files (image access)
app.use(express.static('upload')); // Access via /image/filename.jpg

// // Ensure image folder exists
// if (!fs.existsSync('public/image')) {
//   fs.mkdirSync('public', { recursive: true });
// }

// Multer config (disk storage)
// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, 'upload'); 
//   },
//   filename: (req, file, cb) => {
//     const filename = file.originalname;
//     cb(null, filename);
//   }
// });
// const upload = multer({ storage });
const storage =multer.memoryStorage();
const upload=multer({storage:storage})

cloudinary.config({
  cloud_name: 'djeysit2j',
  api_key:'551499147432118',
  api_secret:'fDL315x5lyyDZz3BVuEqy5Buzes'
})

// Routes
app.get('/', (req, res) => {
  res.send('🚀 API is running...');
});

app.post('/addUser', addUser);
app.post('/usersignup', usersignup);
app.post('/addlogin', userlogin);
app.post('/addproduct',  upload.single('image'), addproduct);
app.post('/admin/addcategory', addcategory);
app.get('/findproduct', findproduct);
app.get('/editproduct', editproduct); // fixed route path
app.post('/productedited',upload.single('image'), productedited)
app.get('/deteleProduct',deteleProduct)
app.get('/findcategory',findcategory)
app.get('/findEditedCategory',findeditedcategory)
app.post('/editedcategory', editedcategory)
app.get('/deletecategory',deletecategory)
//  app.get('/deletecategory',deletecategory)
app.post("/userproductfind",userproductfind)
app.get('/viewproduct',viewproduct )



// Start Servercat
app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
});
