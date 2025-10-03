import express from 'express';
import {userregister,form,} from './controller/UserController.js'
import mongoose from 'mongoose';


mongoose.connect("mongodb://localhost:27017")
.then(()=>console.log("connect to mongodb"))
.catch(err=>console.log("could not connect to mongodb...",err));
const app = express();

app.use(express.static('public'))
app.use(express.json());
 app.use(express.urlencoded({ extended: true }));


app.set('view engine', 'ejs');
app.set('views', './views'); 


//  app.get("/",display)
app.get('/',(req,res)=>{
    console.log('hello')
    res.send("hello")
})
app.post('/user',userregister)

app.get('/form',form)
const PORT=process.env.PORT||5000;

app.listen(PORT,()=>{
    console.log(`server started on the port ${PORT}`);
});