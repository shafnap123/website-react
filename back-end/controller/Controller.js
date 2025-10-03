import {registermodel} from "../model/usermodel.js"
import bcrypt from 'bcryptjs'


export const addUser=(req,res)=>{
    console.log('hellooo')
    const FormData=req.body
    console.log(FormData)
}

export const addlogin=(req,res)=>{
    const formlogin=req.body
    console.log(formlogin)
}

// export const usersignup=async(req,res)=>{
    
//     try{
//         const firstname=req.body.firstname
//         const lastname=req.body.lastname
//         const Emailaddress=req.body.Emailaddress
//         const password=req.body.password
//         console.log(firstname)

    
//         registermodel.insertOne({
//             firstname:firstname,
//             lastname:lastname,
//             password:password,
//             Emailaddress:Emailaddress
//         }).then((resp)=>{
//             console.log('user created successfuly')
//             res.send("user created succesfull")
      
//         }).catch((err)=>{
//             console.log('failed to create')
//             res.send('failed to create'+err)
//         res.send("user created failed");
//         })

    
        
    
//     }


export const usersignup = async (req, res) => {
    try {
        const { firstname, lastname, Emailaddress, password } = req.body;
        console.log(firstname);

        const hashedPassword=await bcrypt.hash(password,10)
        console.log(hashedPassword,'////hhhhhhhhhaaaaaaaasssssssshhhhheeeddddd///////////')
        const existingUser = await registermodel.findOne({ Emailaddress });
        if (existingUser) {
            return res.json({ message: "Email already registered" });
        }

    
        const newUser = await registermodel.insertOne({
            firstname,
            lastname,
            Emailaddress,
            password:hashedPassword,
        });

        console.log('User created successfully');
        return res.json({ message: "User created successfully" });
    } catch (error) {
        console.log('Failed to create user', error);
        return res.json({ message: "Internal server error" });
    }
};

    



//     catch(error){
//         console.log(error)

// }}


