import React, { useEffect, useRef, useState } from "react";

import style from './SimpleDropdownPopup.module.scss';
import { FieldIconEnum } from "@/types/enums/FieldIconEnum";
import SimpleDropdownItemComponent from "./item";
import { FieldIconPath } from "@/types/enums/FieldIconPath";

export interface SimpleDrodownItem {
  key: string;
  icon: FieldIconPath;
  caption?: string;
  
}

interface Props {
  show: boolean;
  itens: SimpleDrodownItem[];
  onClose?: (value:boolean) => void
  onItensSelected?:(itens:SimpleDrodownItem[]) => void
}

function SimpleDropdownPopup(props: Props) {
  let { show, itens = [], 
        onClose = (value:boolean)=>value, 
        onItensSelected = (values:SimpleDrodownItem[])=>values } = props;
  const [componentShow, setComponentShow] = useState(show);
  const [itemsSelected, setItemsSelected] = useState<SimpleDrodownItem[]>([]);

  useEffect(() => {    
     setItemsSelected(itemsSelected);    
  }, [itemsSelected]);


  const divRef = useRef<HTMLDivElement>(null);

  const onItemClicked = (item: SimpleDrodownItem): void =>{
    
    if (itemsSelected.includes(item)){
      setItemsSelected(itemsSelected.filter((x)=> x !== item));
    }else{
      setItemsSelected((prevItems) => [...prevItems, item]);
    }
  }

  const isItemClicked = (item: SimpleDrodownItem): boolean =>{
      return itemsSelected.includes(item);
  }

  const pageClickPopupEvent = (e: MouseEvent) => {
    if (divRef.current !== null && !divRef.current.contains(e.target as Node)) {
      setComponentShow(false);      
      window.removeEventListener('click', pageClickPopupEvent);
      console.log("Passou removendo")   
      
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
      className={componentShow ? `${style['simpleDropDowPopup']} ${style['simpleDropDowPopup-show']}`
        : `${style['simpleDropDowPopup']}`}
      ref={divRef}
      onClick={handleDivClick}
    >
      
      {itens.map(item => (
        <SimpleDropdownItemComponent key={item.key} item={item} isItemClicked={isItemClicked} onItemClicked={onItemClicked} />
      ))}
    </div>
  );
}

export default SimpleDropdownPopup;
