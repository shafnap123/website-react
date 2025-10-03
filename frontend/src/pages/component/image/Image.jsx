import './Image.css'
import organic from '../../../../public/Deliveryboy.png'
import { Button } from '../button/Button'
export function Image(){
    return(
       
               <div className='images'>
                <img src={organic} alt="food" width={100} style={{width:"100%", height:"100%"}}/>
                         {/* <Button text="login" style={{marginTop:"10px", marginRight:"10px", borderRadius:"50px"}} onClick={()=>{window.location="/Login"}} /> */}
  
               </div>
            
  
            
            
    )
}