import React, { useEffect, useRef, useState } from "react";
import style from "./DatePicker.module.scss"
import DateSelection from "./date-selection";
interface Props {

    show:boolean
}

function DatePicker(props:Props) {
    let {show} = props;
    const [componentShow,    setComponentShow] = useState(show)
    const divRef = useRef<HTMLDivElement>(null);
  
    let totalElements = 3; // Substitua pelo número total de elementos que você deseja criar

  const dateSelections = Array.from({ length: totalElements }, (_, index) => {
      let position;

      if (totalElements === 1){
        position = 'onlyone';
      }else if (index === 0) {
        position = 'first';
      } else if (index === totalElements - 1) {
        position = 'last';
      } else {
        position = 'middle';
      }

      return (
        <DateSelection key={index} position={position} />
      );
    });  

  
  const pageClickEvent = (e: MouseEvent ) => {
    
    
    if (divRef.current !== null && !divRef.current.contains(e.target as Node)){
      
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
      e.stopPropagation();
    };


    useEffect(() => {
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
                  {dateSelections}
                
                </div>
            
        </>
    )
}

export default DatePicker;