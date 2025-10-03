import usermodel from "../model/UserModel.js"

//  const display=(req,res)=>{
//     res.send("this is my home")
    
// }

const userregister=async(req,res)=>{
    try{

        const user={username,password}=req.body;
        const isuserexist=await usermodel.findOne({userName:user.username})
        if(isuserexist==undefined){
            usermodel.insertOne({
                userName:user.username,
                password:user.password
            }).then((response)=>{
                res.send("user created succrsfully")
                res.end()
            })
        }else{
            res.send('user name already existed')
            res.end()
        }

    }
    catch(err){
        console.error(err)
        res.send(err)
        res.end()

    }
}
const form=(req,res)=>{
    res.render('login.ejs')
}

export{
userregister,form
}