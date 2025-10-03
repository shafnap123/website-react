import './Button.css'
export function Button({text,onClick,style,type}){
    return(
        
            <button type={type} className='button' onClick={onClick} style={style}>
                {text}
                </button> 

        
    )

}