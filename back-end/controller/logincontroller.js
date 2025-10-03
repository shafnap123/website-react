
import { registermodel } from "../model/usermodel.js";
import bcrypt from "bcryptjs";

export const userlogin = async (req, res) => {
    try {
        const Emailaddress = req.body.Emailaddress
        const password = req.body.password
        const check = await registermodel.findOne(
            
            { Emailaddress: Emailaddress }
            
        )

        console.log(check, 'lllllllll')
        
        if (check == !null) {

            console.log('login faild')
            // res.send({})
            res.json({ status: true })


        } else {
            const decryptPassword = await bcrypt.compare(password, check.password)
            console.log(decryptPassword, '>>>>>>>>>>>>>>>>>>')
            if (decryptPassword) {

                console.log(true, 'User loginned successfully')
                res.json({ status: true, message: 'User Loginned Successfully', userDetails: check })
            } else {
                res.json({ status: false, message: 'User Loginned Failed' })
            }

        }


    }
    catch (error) {
        console.log(error)
    }
}
