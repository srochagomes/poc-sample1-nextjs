import React, { KeyboardEvent, useEffect, useRef, useState } from "react";

import style from './InputAutoCompletePopup.module.scss';




import DrodownItem  from '@/view/components/input/dropdown/ItemDropdown';
import { SearchItens } from "..";
import Typography from "@/view/components/text-container/typography";


interface Props {
  show: boolean
  tabIndex:number
  reference?: React.RefObject<HTMLDivElement>;
  itens: SearchItens[]
  attributeDisplay:string
  onClose?: (value:boolean) => void
  onItensSelected?:(item : SearchItens) => void
}



function InputAutoClompletePopup(props: Props) {
  let { show, itens = [], 
    tabIndex=0,
    reference,
    attributeDisplay = '',
        onClose = (value:boolean)=>value, 
        onItensSelected = (value:SearchItens)=>value } = props;
  const [componentShow, setComponentShow] = useState(show);
  const [itemsSelected, setItemsSelected] = useState<DrodownItem[]>([]);
  const [indiceItem, setIndiceItem] = useState(0);
  
  

  
  const divRef = useRef<HTMLDivElement>(null);
  
  
  useEffect(() => {    
     setItemsSelected(itemsSelected);    
  }, [itemsSelected]);


  
  

  const onItemClicked = (item: DrodownItem): void =>{
    
    if (itemsSelected.includes(item)){
      setItemsSelected(itemsSelected.filter((x)=> x !== item));
    }else{
      setItemsSelected((prevItems) => [...prevItems, item]);
    }


  }

  const isItemClicked = (item: DrodownItem): boolean =>{
      return itemsSelected.includes(item);
  }

  const pageClickPopupEvent = (e: MouseEvent) => {
    if (divRef.current !== null && !divRef.current.contains(e.target as Node)) {
      setComponentShow(false);      
      window.removeEventListener('click', pageClickPopupEvent);
      
      
    }
  };


  useEffect(() => {
    if (show && !componentShow) {
      setComponentShow(show);
    }
  }, [show]);

  const handleDivClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    
    
  };

  const handleItemClick = (index:number) => {    
    setIndiceItem(index);    
    onItensSelected(itens[index]);      
    setComponentShow(false);
  };


  useEffect(() => {
    onClose(componentShow);
    window.removeEventListener('click', pageClickPopupEvent);    
    const configureEvent = () => {
      if (componentShow) {
        window.addEventListener('click', pageClickPopupEvent);
      }
    };

    const timeoutId = setTimeout(configureEvent, 100);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [componentShow]);






  function handleKeyDown(event:KeyboardEvent<HTMLInputElement>) {
    if (event.key === 'ArrowDown' || event.key === 'ArrowUp') {
      event.preventDefault(); // Evita que o comportamento padrão da seta para baixo seja acionado (por exemplo, rolagem da página)      
      let indiceProsition =  indiceItem+(event.key === 'ArrowDown'?1:-1);
      
      if (indiceProsition>=itens.length){
        indiceProsition = 0;
      }else if (indiceItem < 0){
        indiceProsition = itens.length-1;
      }      
      setIndiceItem(indiceProsition)
      const nextElement = document.querySelector(`[tabindex="${indiceProsition}"]`) as HTMLElement;
      if (nextElement) {
        nextElement.focus();
      }
    }else if (event.key === 'Enter') {      
      event.preventDefault();
      onItensSelected(itens[indiceItem]); 
      setComponentShow(false);     
    }
  }


  

  return (
    <div
      className={componentShow ? `${style['inputAutoCompletePopup']} ${style['inputAutoCompletePopup-show']}`
        : `${style['inputAutoCompletePopup']}`}
      ref={divRef}
      onClick={handleDivClick}
      onKeyDown={handleKeyDown}
    >
      <div className={style['inputAutoCompletePopup-tail']}></div>
      {itens.map((item, index) => (
        <div key={index} tabIndex={index} 
             ref={index==0?reference:null} 
             className={style['inputAutoCompletePopup-item']}
             onClick={()=>handleItemClick(index)}>
            <Typography
                  key={'itemPopup'+index}
                  fontSize="caption1"
                >
              {item.value}
          </Typography>        
      </div>
      ))}
    </div>
  );
}

export default InputAutoClompletePopup;
