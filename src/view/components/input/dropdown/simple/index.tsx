import { useEffect, useState } from "react";
import style from "./SimpleDropdown.module.scss"
import Typography from "@/view/components/text-container/typography";
import IconSVG from "@/view/components/icons/icon-svg";
import { FieldIconPath } from "@/types/enums/FieldIconPath";
import { FieldIconEnum } from "@/types/enums/FieldIconEnum";
import SimpleDropdownPopup from "./pop-up";
import { ComponentTypeEnum } from "@/types/enums/ComponentTypeEnum";
import { generateInputRandomId } from "@/types/utils/MathFunctions";

import DrodownItem  from '@/view/components/input/dropdown/ItemDropdown';
import FieldData from "@/types/structure/FieldData";




interface Props {  
    id: string   
    required?:boolean
    dataSource?: FieldData[],
    roundType?:String
    placeholder?:string
    caption?:string
    colorCaprion?:string    
    width?:string
    itens: DrodownItem[]
    
}



function SimpleDropdow(props:Props) {
  const {id, caption, placeholder, roundType, width, itens = [], required, dataSource} = props;
  const [openOptions, setOpenOptions] = useState(false);
  const [itensSelectd, setItensSelected] = useState<DrodownItem[]>([]);
  const [textJson, setTextJson] = useState<string>('');
  const [textValue, setTextValue] = useState<string>("");
  const [fieldValid, setFieldValid] = useState(true);

  const isValid = () : boolean =>{

    if (required && (itensSelectd.length<1)){
       return false;  
    }

    return true;  
  }

  const applyValidation = () : void =>{
    setFieldValid(isValid());
  }

  const dataSourceItem : FieldData = {name:id, isValid , value:textJson, applyValidation};


  const onItensSelected = (itens:DrodownItem[]): void  => {
    setItensSelected(itens);
    setTextJson(JSON.stringify(itens.map((item)=>item.key)));
  }

  const onClosePopup = (value:boolean): void  => {
    setOpenOptions(value);
  }
  const clickOpen = (event:React.MouseEvent<HTMLDivElement>): void =>{
    setOpenOptions(!openOptions);

  }
  
  
  useEffect(() => {
    setTextValue(itensSelectd.map((item) => item.caption).join(", "));
  }, [itensSelectd]);

  if (dataSource){
    const existingIndex = dataSource.findIndex(item => item.name === dataSourceItem.name);
    // Se não existir, adiciona o novo item
    if (existingIndex === -1) {
        dataSource.push(dataSourceItem);
    } else {
        // Se existir, substitui o objeto existente pelo novo objeto
        dataSource[existingIndex] = dataSourceItem;
    }
  
  }

  const iconLeft=FieldIconEnum.Airplane;
  
  const iconRight= openOptions? FieldIconEnum.UpDownward:FieldIconEnum.ArrowDownward;
  
  const iconLeftComponent = iconLeft ?
                              <div className={style['simpleDropdownContainer-iconleft']}>
                                {itensSelectd.length>0 && (
                                  <div className={style['simpleDropdownContainer-iconleft-area']}>
                                    <IconSVG path={itensSelectd[0].icon || ''} alt={placeholder} isFill={true} />
                                  </div>)}                                
                              </div>
                              : <></>;

  const iconRightComponent = iconRight ?
                              <div className={style['simpleDropdownContainer-iconright']}>        
                                  <div className={style['simpleDropdownContainer-iconright-area']}>
                                    <IconSVG path={FieldIconPath[iconRight]} alt={placeholder} isFill={true} />
                                  </div>
                                      
                                </div>                                
                              
                              : <></>;


  const captionComponent = caption ? <Typography 
                                        idLink={id}
                                        type={ComponentTypeEnum.Label} fontSize="input-box" >{caption}</Typography>
                                     : <></>;


  return (
    
    <div className={style['simpleDropdownContainer']}
          style={{ width: `${width}` }}
          data-iconleft={iconLeft?'true':'false'}
          data-iconright={iconRight?'true':'false'}
          data-round={roundType}          
          onClick={clickOpen}
          >
             {iconLeftComponent}

            <div className={style['simpleDropdownContainer-groupField']} >
              {captionComponent}
              <input id={id} type="text" readOnly={true} value={textValue} />
            </div>
            {iconRightComponent}
            <SimpleDropdownPopup show={openOptions} 
                itens={itens} 
                onClose={onClosePopup}
                onItensSelected={onItensSelected}/>
    </div>
    
    
    
  );
}

export default SimpleDropdow;