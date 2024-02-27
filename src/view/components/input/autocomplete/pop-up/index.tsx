import React, { useEffect, useRef, useState } from "react";

import style from './InputAutoCompletePopup.module.scss';




import DrodownItem  from '@/view/components/input/dropdown/ItemDropdown';


interface Props {
  show: boolean
  itens: []
  attributeDisplay:string
  onClose?: (value:boolean) => void
  onItensSelected?:(itens:DrodownItem[]) => void
}

function InputAutoClompletePopup(props: Props) {
  let { show, itens = [], 
    attributeDisplay = '',
        onClose = (value:boolean)=>value, 
        onItensSelected = (values:DrodownItem[])=>values } = props;
  const [componentShow, setComponentShow] = useState(show);
  const [itemsSelected, setItemsSelected] = useState<DrodownItem[]>([]);

  useEffect(() => {    
     setItemsSelected(itemsSelected);    
  }, [itemsSelected]);


  const divRef = useRef<HTMLDivElement>(null);

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
    onItensSelected(itemsSelected);
  }, [itemsSelected]);


  useEffect(() => {
    if (show && !componentShow) {
      setComponentShow(show);
    }
  }, [show]);

  const handleDivClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
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

  return (
    <div
      className={componentShow ? `${style['inputAutoCompletePopup']} ${style['inputAutoCompletePopup-show']}`
        : `${style['inputAutoCompletePopup']}`}
      ref={divRef}
      onClick={handleDivClick}
    >
      
      {itens.map((item, index) => (
        <span key={index}>{item[attributeDisplay]}</span>
      ))}
    </div>
  );
}

export default InputAutoClompletePopup;
