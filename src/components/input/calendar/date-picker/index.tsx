import React, { useEffect, useRef, useState } from "react";
import style from "./DatePicker.module.scss"
interface Props {

    show:boolean
}

function DatePicker(props:Props) {
    let {show} = props;
    const [componentShow,    setComponentShow] = useState(show)
    const divRef = useRef<HTMLDivElement>(null);
  
  

  
  console.log('Iniciou variavel =',show)
  console.log('Iniciou estado =',componentShow)

  const pageClickEvent = (e: MouseEvent ) => {
    console.log('Passou evento 1');
    
    if (divRef.current !== null && !divRef.current.contains(e.target as Node)){
      console.log('Passou evento 2');
      
      setComponentShow(false);
      window.removeEventListener('click', pageClickEvent);
        
    }
    
  };

    useEffect(() => {
      if (show && !componentShow){
        setComponentShow(show);
      }
      
    }, [show]);


    const handleDivClick = (e: React.MouseEvent<HTMLDivElement>) => {
      // Evite fechar o componente se o clique ocorrer dentro da div
      e.stopPropagation();
    };


    useEffect(() => {
      console.log('Passou variavel =',show)
      console.log('Passou estado =',componentShow)
      window.removeEventListener('click', pageClickEvent);
      const configureEvent = () => {
        if (componentShow) {
          window.addEventListener('click', pageClickEvent);
        } 
      };
  
      const timeoutId = setTimeout(configureEvent, 1000);
  
      return () => {
        clearTimeout(timeoutId);
      };
    }, [componentShow]);
    
    return (
        <>
             
                <div  className={componentShow?`${style['datePickerContainer']} ${style['datePickerContainer-show']}`
                :`${style['datePickerContainer']}`}
                ref={divRef} 
                onClick={handleDivClick}
                
                >
                
                </div>
            
        </>
    )
}

export default DatePicker;