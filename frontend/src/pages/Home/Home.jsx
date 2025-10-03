import './home.css'
import { Button } from '../component/button/Button.jsx'
import { Image } from '../component/image/Image.jsx'
import { useEffect, useState } from 'react'





export function Home() {
   const [login, setLogin] = useState(null)
   console.log(login, 'loginloginloginloginloginlogin')
   function LogOut() {
      localStorage.clear()
   }



   useEffect(() => {
      setLogin(localStorage.getItem('userId'))
   }, [])
   return (
      <div className='homemain'>
         <div className="homemainfull">
            <div className='h1home'>
               <h1 className='homemainh1a'>GOMATO</h1><br />
               <Button
                  className="homebutton"
                  text={login == null?
                     'Login' : 'log out'}
                  style={{ marginTop: "10px", marginRight: "10px", borderRadius: "50px", width: "200px", height: "50px", backgroundColor: "black" }}
                  onClick={login == null ? () => { window.location = "/Login" } :
                     ()=> { LogOut() }} />
            </div>
            <div className='mainfullhome'>

               <div className='about'>

                  <div className='headabout'>
                     <h1 className='h1bhead'> Express</h1>
                     <h1 className="span">food Delivery</h1><br />

                     <p className="lorem"> Lorem ipsum dolor sit, amet consectetur adipisicing elit.<br /> Odio doloremque quidem quasi eum at,<br /> sapiente explicabo possimus dolor in ipsum!

                     </p><br />
                     <Button style={{ width: '150px', backgroundColor: "yellowgreen", height: "50px" }} text="Product" onClick={() => { window.location = "/hotelproduct" }} />
                  </div>
               </div>





               <div className='food'>
                  <Image />

               </div>






            </div>
         </div>
      </div>
   )
}