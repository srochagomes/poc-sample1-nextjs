import React, { useEffect, useRef, useState } from "react";
import style from "./DatePicker.module.scss"
import DateSelection, { createDateSelection } from "./date-selection";
import DateOperations, { DateFields } from "@/types/date/DateOperations";
import DateCommand from "./date-command";
interface Props {

    show:boolean;
    dateBase: Date;
    isSelectDay: (index:number|null)=>boolean;
    isDayBetweenSelected: (keyAttributeValue:number|null) => boolean;
    onSelectDay: (event:React.MouseEvent<HTMLDivElement>, index:number)=> void;    
    onClickClear: (event:React.MouseEvent<HTMLDivElement>)=> void;    
    onClickConfirm: (event:React.MouseEvent<HTMLButtonElement>)=> void;    
    onClickDateFlexible: (event:React.MouseEvent<HTMLDivElement>)=> void;    

}

function DatePicker(props:Props) {
    let {show, dateBase, onSelectDay, isSelectDay, onClickClear, onClickConfirm, onClickDateFlexible, isDayBetweenSelected} = props;
    const [componentShow,    setComponentShow] = useState(show)
    const [dateBaseStart,    setDateBaseStart] = useState(dateBase)
    const divRef = useRef<HTMLDivElement>(null);

    const onClickToFoward = () => {
      setDateBaseStart(DateOperations.addMonths(dateBaseStart,1));
    }
    const onClickToBack = () => {
      setDateBaseStart(DateOperations.subtractMonths(dateBaseStart,1));      
    }

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
               {createDateSelection(2, 
                      {month: DateOperations.getMonthFromDate(dateBaseStart),year: DateOperations.getYearFromDate(dateBaseStart)}, 
                        isSelectDay, 
                        isDayBetweenSelected,
                        onSelectDay,
                        onClickToBack,
                        onClickToFoward)}

                <div  className={style['datePickerContainer-footer']}>
                  <DateCommand  onClickClear={onClickClear} 
                                onClickConfirm={onClickConfirm} 
                                onClickDateFlexible={onClickDateFlexible}/>
                </div>
              
            
            </div>
            
        </>
    )
}

export default DatePicker;