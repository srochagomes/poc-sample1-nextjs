import React, { useEffect, useRef, useState } from "react";

import style from './MultipleCheckDropdownPopup.module.scss';
import MultipleCheckDropdownItemComponent from "./item";
import DrodownItem  from '@/view/components/input/dropdown/ItemDropdown';
import Typography from "@/view/components/text-container/typography";
import ButtonPrimary from "@/view/components/button/primary-button";


interface Props {
  show: boolean;
  itens: DrodownItem[];
  itensSelected?: DrodownItem[];
  onClose?: (value:boolean) => void
  onItensSelected?:(itens:DrodownItem[]) => void
}

function MultipleCheckDropdownPopup(props: Props) {
  let { show, 
        itens = [], 
        itensSelected = [], 
        onClose = (value:boolean)=>value, 
        onItensSelected = (values:DrodownItem[])=>values } = props;
  const [componentShow, setComponentShow] = useState(show);
  const [itemsSelected, setItemsSelected] = useState<DrodownItem[]>(itensSelected);

  useEffect(() => {    
     setItemsSelected(itemsSelected);    
  }, [itemsSelected]);  


  const divRef = useRef<HTMLDivElement>(null);

  const onItemClicked = (item: DrodownItem): void =>{    
    if (itemsSelected.includes(item)){
      setItemsSelected(itemsSelected.filter((x)=> x !== item));
    }else if (item.onlyChoose){
      setItemsSelected((prevItems) => [item]);
    }else{
      let itensSelected = itemsSelected.filter((x)=> !x?.onlyChoose);
      itensSelected.push(item);
      setItemsSelected(itensSelected);
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

  const onClick = (event: React.MouseEvent<HTMLButtonElement>) : void =>{    
    setComponentShow(false);
    
  }

  return (
    <div
      className={componentShow ? `${style['multipleCheckDropdownPopup']} ${style['multipleCheckDropdownPopup-show']}`
        : `${style['multipleCheckDropdownPopup']}`}
      ref={divRef}
      onClick={handleDivClick}
    >
      <div
      className={style['multipleCheckDropdownPopup-header']}>
        <Typography fontSize="caption2">Selecione o(s) tipo(s) de hospedagem que deseja para sua viagem</Typography>
      </div>
      
      {itens.map(item => (
        <MultipleCheckDropdownItemComponent key={item.key} item={item} isItemClicked={isItemClicked} onItemClicked={onItemClicked} />
      ))}
      <div className={style['multipleCheckDropdownPopup-confirmar']}>
        <ButtonPrimary onClick={onClick} >
          <Typography fontSize="caption3" color="white">Confirmar</Typography>
        </ButtonPrimary>
      </div>
    </div>
  );
}

export default MultipleCheckDropdownPopup;
