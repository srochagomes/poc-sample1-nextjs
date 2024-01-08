import { useEffect, useRef, useState } from "react";
import style from './TripPeoplePopup.module.scss'

interface Props{
    show:boolean;
    onClickConfirm: (event:React.MouseEvent<HTMLButtonElement>)=> void;    
}

function TripPeoplePopup(props : Props){
    let {show, onClickConfirm } = props;
    const [componentShow,    setComponentShow] = useState(show)
    
    
    const divRef = useRef<HTMLDivElement>(null);


    const pageClickPopupEvent = (e: MouseEvent ) => {
        
        
        if (divRef.current !== null && !divRef.current.contains(e.target as Node)){      
            setComponentShow(false);
            window.removeEventListener('click', pageClickPopupEvent);        
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
      window.removeEventListener('click', pageClickPopupEvent);
      const configureEvent = () => {
        if (componentShow) {
          window.addEventListener('click', pageClickPopupEvent);
        } 
      };
  
      const timeoutId = setTimeout(configureEvent, 1000);
  
      return () => {
        clearTimeout(timeoutId);
      };
    }, [componentShow]);





    return (
        <div  className={componentShow?`${style['tripPeoplePopup']} ${style['tripPeoplePopup-show']}`
                :`${style['tripPeoplePopup']}`}
                ref={divRef} 
                onClick={handleDivClick}
            >
                
        </div>
    )
}

export default TripPeoplePopup;