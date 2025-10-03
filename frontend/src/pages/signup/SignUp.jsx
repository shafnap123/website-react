import { Button } from "../component/button/Button"
import { Image } from "../component/image/Image.jsx"
import "./SignUp.css"
import { useState } from "react"

import axios from "axios"


export function SignUp() {
// const [FormData,SetFormData]=useState([])
const [Firstname,Setfirstname]=useState('')
const[lastname,Setlastname]=useState('')
const[Emailaddress,SetEmailaddress]=useState('')
const [password,SetPassword]=useState('')
// const [checkbox,setcheckbox]=useState('') 
const [errors,seterror]=useState({})

// console.log(FormData)

function getvalues(){
    // SetFormData({firstname:Firstname,lastname:lastname,Emailaddress:Emailaddress,password:password,checkbox:checkbox})
    // axios.post('http://localhost:5000/addUser)',{firstname:Firstname,lastname:lastname,Emailaddress:Emailaddress,password:password,checkbox:checkbox}).then(()=>{

    // }).catch((err)=>{
    //     console.log(err)
    // })
    console.log("function is working")
     let newerror={}
     if(Firstname.length==0){
        newerror={...newerror,fname:"fullname is required"}
        seterror(newerror)

     }
     if (lastname.length==0){
        newerror={...newerror,lastname:"lastname is required"}
     }
     if (Emailaddress.length==0){
        newerror={...newerror,email:"email is required"}
     }else{
        const emailregex=/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
        const iseamilvalidation=emailregex.test(Emailaddress)
        console.log(iseamilvalidation)
         if(iseamilvalidation===false){
        newerror={...newerror,email:"incorrect email"}
     }
     }
    
     if(password.length<6){
        newerror={...newerror,pass:"password should contain atleast 6 chars"}
        //   if (Object.keys(newerror).length > 0) return;
     }
     seterror(newerror)
//     axios.post('http://localhost:5000/usersignup',{firstname:Firstname,lastname:lastname,Emailaddress:Emailaddress,password:password,checkbox:checkbox}).then((res)=>{
//         console.log(res)
//         alert(res.data.message)
//            window.location = '/Login'

//     }).catch((err)=>{
//     //   if (err.response && err.response.status === 400) {
//     //     seterror(prev => ({
//     //         ...prev,
//     //         duplicate: err.response.data.message  
//     //     }));
//     // } else {
//     //     alert("Something went wrong. Please try again.");
//     // }
//         console.log(err)
           
//     })
console.log("work",Object.keys(newerror).length,errors)
if(Object.keys(newerror).length==0){

axios.post('http://localhost:5000/usersignup', {
    firstname: Firstname,
    lastname: lastname,
    Emailaddress: Emailaddress,
    password: password,
    
})
.then((res) => {
    console.log(res);
    alert(res.data.message);
  if(res.data.status==true){
      window.location = '/Login';
  }
})
.catch((err) => {
    if (err.response && err.response.status === 400) {
      
        seterror(prev => ({
            ...prev,
            duplicate: err.response.data.message  
        }));
    } else {
        alert("Something went wrong. Please try again.");
    }
});
}

 }

    return (
        <div className="mainsigns">
             
            <div className="signs">
             
                
                <div className="rows">
                    <h1 className="h1signup">Signup</h1><br/>
                <input className="inputsignup" placeholder="First name" name={'firstname'} onChange={(e) => { Setfirstname(e.target.value) }}  />   <br /><br />
                <div>
                    <div>{errors.fname?<small>{errors.fname}</small>:''}</div>
            
                </div>
                <input className="inputsignup" placeholder="Last name" name={'lastname'}onChange={(e) => {Setlastname(e.target.value) }}  />     <br /><br />
               <div> {errors.lastname?<small>{errors.lastname}</small>:''}</div>
                
                <input className="inputsignup" placeholder="Email address" name={'Emailaddress'}onChange={(e) => {SetEmailaddress(e.target.value) }}  />
                 <br /><br />
                 <div>
                {errors.email?<small>{errors.email}</small>:""}
                </div>
                <input className="inputsignup"  placeholder="password" name={'password'} onChange={(e) => {SetPassword(e.target.value) }}  /> <br /><br />
                <div>
                {errors.pass?<small>{errors.pass}</small>:""}
                {errors.duplicate && <small style={{ color: "red" }}>{errors.duplicate}</small>}
                </div><br/>

     


                <Button className="joinus" text="Join Us" style={{ width: '80%',
  padding: '15px',
  fontSize: '1.2rem',
  border: 'none',
  borderRadius: '10px',
  backgroundColor: 'yellowgreen',
  color: 'white',
  fontWeight: 'bold',
  cursor: 'pointer',
  transition: 'background-color 0.3s ease', }} onClick={getvalues}/>
                
                


                </div>
         
            </div>
           
        </div>
       

    )
}