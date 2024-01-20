import React, { useEffect, useRef, useState } from "react";
import style from "./DatePicker.module.scss"
import DateSelection, { createDateSelection } from "./date-selection";
import DateOperations, { DateFields } from "@/types/date/DateOperations";
import DateCommand, { TypeCalendar } from "./date-command";
import DateFlexible from "./date-flexible";
interface Props {
    monthsShow?:number;
    show:boolean;
    dateBase: Date;    
    isSelectDay: (index:number|null)=>boolean;
    isDayBetweenSelected: (keyAttributeValue:number|null) => boolean;
    onSelectDay: (event:React.MouseEvent<HTMLDivElement>, index:number)=> void;    
    onClickClear: (event:React.MouseEvent<HTMLDivElement>)=> void;    
    onClickConfirm: (event:React.MouseEvent<HTMLButtonElement>)=> void;    
    onClickDateFlexible: (event:React.MouseEvent<HTMLDivElement>)=> void;    
    onClickDateFixed: (event:React.MouseEvent<HTMLDivElement>)=> void;  
    typeCalendar: TypeCalendar; 
    hasFlexibleDate?:boolean 

}

function DatePicker(props:Props) {
    let {hasFlexibleDate = false, monthsShow = 1, show, typeCalendar, dateBase, onSelectDay, isSelectDay, onClickClear, onClickConfirm, onClickDateFlexible, onClickDateFixed, isDayBetweenSelected} = props;
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
  
      const timeoutId = setTimeout(configureEvent, 100);
  
      return () => {
        clearTimeout(timeoutId);
      };
    }, [componentShow]);



    
    
    return (
        
          
            <div  className={componentShow?`${style['datePickerContainer']} ${style['datePickerContainer-show']}`
                :`${style['datePickerContainer']}`}
                ref={divRef} 
                onClick={handleDivClick}
            >
                {createDateSelection(monthsShow, 
                      {month: DateOperations.getMonthFromDate(dateBaseStart),year: DateOperations.getYearFromDate(dateBaseStart)}, 
                        isSelectDay, 
                        isDayBetweenSelected,
                        onSelectDay,
                        onClickToBack,
                        onClickToFoward)}
                { hasFlexibleDate && typeCalendar === TypeCalendar.flexible && 
                    <div  className={style['datePickerContainer-periodflexible']}>
                      <DateFlexible/>
                
                    </div>
                  }
                <div  className={style['datePickerContainer-footer']}>
                  <DateCommand  onClickClear={onClickClear} 
                                onClickConfirm={onClickConfirm} 
                                onClickDateFlexible={onClickDateFlexible}
                                onClickDateFixed={onClickDateFixed}
                                typeCalendar={typeCalendar}
                                hasFlexibleDate={true}
                      />
                </div> 
              
            
            </div>
            
        
    )
}

export default DatePicker;