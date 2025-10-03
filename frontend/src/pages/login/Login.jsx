// import axios from 'axios';
// import './Login.css'
// import delivery from '../../../public/Deliveryboy.png'
// import { Image } from '../component/image/Image';
// import { Button } from '../component/button/Button';
// import { useEffect, useState } from 'react';


// export function Login() {
//   const [check, setCheck] = useState(null)

//   useEffect(() => {
//     setCheck(localStorage.getItem('userId'))
//     console.log(check, 'lllllllllllll')
//     if (check !== null) {
//       window.location = '/'
//     }
//   }, [])

// }

//   const [Emailaddress, setEmailaddress] = useState('')
//   const [password, SetPassword] = useState('')
//   const [Error, setError] = useState()
//   console.log(Error, 'llllll')
//   const [userDetails, setuserDetails] = useState()




//   function getvalues() {

//     let newerror = { }
//     console.log(newerror, 'newerrornewerrornewerror')
//     if (Emailaddress.length == 0) {
//       newerror = { ...newerror,email: "Email is required" };
//     }
//     else {
//       const emailregex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;;
//       const isemailvalidation = emailregex.test(Emailaddress)
//       if (!isemailvalidation) {
//         newerror = { ...newerror, email: " incorrect email format" }
//       }
//     }
//     if (password.length ===0) {
//       newerror = { ...newerror, password: "password must be contain 6 characters" }
//     }
//     else if (password.length<6){
//       newerror={...newerror,password:"password must be 6 characters"}
//     }
// console.log(Error,"hhhh",newerror,Object.keys(newerror).length)
// if(Object.keys(newerror).length==0){
// try{

//     axios.post('http://localhost:5000/addlogin', { Emailaddress, password }).then((res) => {
//       setuserDetails(res.data.userDetails)
//       console.log(res.data)
//       if (res.data.status == true) {
//         if (res.data.userDetails.isAdmin === true) {
//           window.location = '/AdminPage'
//           localStorage.setItem('adminORuser', 'isAdmin')
//           localStorage.setItem('userId', res.data.userDetails._id)

//         } else {
//           window.location = '/'
//           localStorage.setItem('adminORuser', 'isUser')
//           localStorage.setItem('userId', res.data.userDetails._id)
//         }
//       }

//     }
//  ) 



//   return (
//     <div className="loginmain">

//       <div className="first">


//         <h1 className="login">MEMBER LOGIN</h1><br /><br />

//         <input className='inputlogin' type="text" placeholder="Email adress" name={'username'} onChange={(e) => { setEmailaddress(e.target.value) }}></input><br /><br />

//         <input className="inputlogin" type="text" placeholder="password" name={'password'} onChange={(e) => { SetPassword(e.target.value) }}></input><br /><br />
//         {Error?.login && <small className='small'>{Error.login}</small>}
//         <Button className="loginbutton" text="login" style={{
//           fontSize: "18px", width: "105px", height: "40px", borderRadious: "50px"
//         }} onClick={getvalues} /><br />
//         <div>

//         </div>
//         <div className='linklogin'>
//           {/* <a href="">Forgetpassword</a><br /> */}
//           <a href="/register" >Register</a>
//         </div>

//       </div>

//       <div className='second'>
//         <Image />

//       </div>


//     </div>
//   )
// }

import React, { useState } from 'react';
 import './Login.css'
import axios from 'axios';
import { Button } from '../component/button/Button';
 import { Image } from '../component/image/Image.jsx';


export  function Login() {
  const [Emailaddress, setEmailaddress] = useState('');
  const [password, setPassword] = useState('');
  const [Error, setError] = useState({});
  const [userDetails, setuserDetails] = useState(null);

  // const getvalues = () => {

  //   let newerror = {};
  //   console.log(newerror,';;;;;;;;;;;;;;;;')

  //   // Email validation
  //   if (Emailaddress.trim().length === 0) {
  //       newerror.email = "Email is required";
  //   } else {
  //     const emailregex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  //     const isemailvalidation = emailregex.test(Emailaddress);
  //     if (!isemailvalidation) {
  //        newerror.email = "Incorrect email format";
  //     }
  //   }

  //   // Password validation
  //   if (password.length === 0) {
  //       newerror.password = "Password is required";
  //   } else if (password.length < 6) {
  //       newerror.password = "Password must be at least 6 characters";
  //   }

  //  console.log(Error,'jjj',newerror,Object.keys(newerror).length)

  //   // Only proceed if no errors
  //   if (Object.keys(newerror).length === 0) {
  //     axios.post('http://localhost:5000/addlogin', { Emailaddress, password })
  //       .then((res) => {
  //         console.log(res.data);
  //         setuserDetails(res.data.userDetails);

  //         if (res.data.status === true) {
  //           localStorage.setItem('userId', res.data.userDetails._id);
  //           if (res.data.userDetails.isAdmin === true) {
  //             localStorage.setItem('adminORuser', 'isAdmin');
  //             window.location = '/AdminPage';
  //           } else  {
  //             localStorage.setItem('adminORuser', 'isUser');
  //             window.location = '/';
  //           }
  //         } else  {
  //           setError(newerror)
  //           console.log(Error,'aaaaa')
           
  //         }
  //       })
  //       .catch((err) => {
  //         console.error(err);
        
  //       });
  //   }
  // };
  const getvalues = () => {
  let newerror = {};

  if (Emailaddress.trim().length === 0) {
    newerror.email = "Email is required";
  } else {
    const emailregex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailregex.test(Emailaddress)) {
      newerror.email = "Incorrect email format";
    }
  }

  if (password.length === 0) {
    newerror.password = "Password is required";
  } else if (password.length < 6) {
    newerror.password = "Password must be at least 6 characters";
  }

  setError(newerror); // ← ✅ Always update the state

  if (Object.keys(newerror).length === 0) {
    axios.post('http://localhost:5000/addlogin', { Emailaddress, password })
      .then((res) => {
        console.log(res.data);
        if (res.data.status === true) {
          setuserDetails(res.data.userDetails);
          localStorage.setItem('userId', res.data.userDetails._id);
          if (res.data.userDetails.isAdmin === true) {
            localStorage.setItem('adminORuser', 'isAdmin');
            window.location = '/AdminPage';
          } else {
            localStorage.setItem('adminORuser', 'isUser');
            window.location = '/';
          }
        } else {
          alert("Login failed: " + (res.data.message || 'Invalid credentials'));
        }
      })
      .catch((err) => {
        console.error(err);
        alert("Something went wrong with login.");
      });
  }
};


  return (
    <div className="loginmain">
      <div className="first">
        <h1 className="login">MEMBER LOGIN</h1><br /><br />

        <input
          className='inputlogin'
          type="text"
          placeholder="Email address"
          name="username"
          value={Emailaddress}
          onChange={(e) => setEmailaddress(e.target.value)}
        />
        {Error.email && <small className='small'>{Error.email}</small>}
        <br />

        <input
          className="inputlogin"
          type="password"
          placeholder="Password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        /><br/><br/>
        {Error.password && <small className='small'>{Error.password}</small>}
        <br /><br />

       

        <Button
          className="loginbutton"
          text="Login"
          style={{
            fontSize: "18px",
            width: "105px",
            height: "40px",
            borderRadius: "50px" // fixed spelling
          }}
          onClick={getvalues}
        />
        <br />

        <div className='linklogin'>
          <a href="/register">Register</a>
        </div>
      </div>

      <div className='second'>
        <Image/>
      </div>
    </div>
  );
}
