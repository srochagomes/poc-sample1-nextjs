import React, { useEffect, useRef, useState } from "react";
import style from "./DatePicker.module.scss"
import DateSelection, { createDateSelection } from "./date-selection";
import DateOperations, { DateFields } from "@/types/date/DateOperations";
interface Props {

    show:boolean
}

function DatePicker(props:Props) {
    let {show} = props;
    const [componentShow,    setComponentShow] = useState(show)
    const divRef = useRef<HTMLDivElement>(null);
  
    

  
  
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

    const dateField:DateFields = {
      month: DateOperations.getCurrentMonth(),
      year: DateOperations.getCurrentYear(),
    }
    
    return (
        <>
             
                <div  className={componentShow?`${style['datePickerContainer']} ${style['datePickerContainer-show']}`
                :`${style['datePickerContainer']}`}
                ref={divRef} 
                onClick={handleDivClick}
                
                >
                  {createDateSelection(2, dateField)}
                
                </div>
            
        </>
    )
}

export default DatePicker;