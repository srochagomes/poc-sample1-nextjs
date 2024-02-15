import { useEffect, useState } from "react";
import style from "./TripPeopleDetail.module.scss"
import Typography from "@/view/components/text-container/typography";
import IconSVG from "@/view/components/icons/icon-svg";
import { FieldIconPath } from "@/types/enums/FieldIconPath";
import { FieldIconEnum } from "@/types/enums/FieldIconEnum";
import { FieldTypeEnum } from "@/types/enums/FieldTypeEnum";
import TripPeoplePopup from "./pop-up";
import { ComponentTypeEnum } from "@/types/enums/ComponentTypeEnum";
import FieldData from "@/types/structure/FieldData";
import { stringify } from "querystring";

interface Props {
    id:string
    type : FieldTypeEnum  
    roundType?:String
    placeholder?:string
    caption?:string
    colorCaprion?:string
    iconLeft?:FieldIconEnum
    width?:string
    required?:boolean
    dataSource?: FieldData[]
}

export interface MinorAgeData{
  index:number;
  value:number;
}
export interface PeopleData{
  olderQuantity:number;
  minorQuantity:number;
  roomQuantity:number;
  agesMinors?:MinorAgeData[];
}

function TripPeopleDetail(props:Props) {
  const { id, caption, width, iconLeft, colorCaprion, type, roundType, placeholder, required, dataSource } = props;
  const [selectedKeys, setSelectedKeys] = useState<string[]>([]);
  const [showPopup, setShowPopup] = useState(false);
  const [fieldType, setFieldType] = useState(type);
  const [valueText, setValueText] = useState('');
  const [valueJson, setValueJson] = useState('');
  const [fieldValid, setFieldValid] = useState(true);


  const isValid = () : boolean =>{
    if (required && (valueJson == '')){
      return false;  
    }
  
    return true;  
  }

  const applyValidation = () : void =>{
    setFieldValid(isValid());
  }

  const dataSourceItem : FieldData = {name:id, isValid , value:valueJson, applyValidation};

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



  const onClickConfirm = (event:React.MouseEvent<HTMLButtonElement>, peopleData:PeopleData): void =>{
    
    if (peopleData){
      setValueText(`${peopleData.olderQuantity} adulto(s), ${peopleData.minorQuantity} menor(es) e ${peopleData.roomQuantity} quarto(s).` );      
      setValueJson(JSON.stringify(peopleData));      
    }    
    
  }

  const onClickComponent = (event:React.MouseEvent<HTMLDivElement>): void =>{
    setShowPopup(true); 
  }

  let onFocus = (event: React.FocusEvent<HTMLInputElement>):void => {
    setSelectedKeys([]);
    setShowPopup(true); 
    
  }

  let onBlur = (event: React.FocusEvent<HTMLInputElement>):void => {
    setSelectedKeys([]);
    setShowPopup(false);
    
  }

  const iconLeftComponent = iconLeft ?
                  <div className={style['tripPeopleDetail-iconleft']}>
                    <div className={style['tripPeopleDetail-iconleft-area']}>
                      <IconSVG path={FieldIconPath[iconLeft]} alt={placeholder} height={18} width={18} />
                    </div>
                    
                  </div>
                  : <></>;

  const captionComponent = caption ? <div className={style['tripPeopleDetail-caption']}>
                                        <Typography idLink={id} type={ComponentTypeEnum.Label} fontSize="input-box" color={colorCaprion?colorCaprion:'black'}>{caption}</Typography>
                                     </div> 
                                     : <></>;

  return (
    
    <div className={style['tripPeopleDetail']} 
    style={{ width: `${width}` }}
    data-round={roundType} data-iconleft={iconLeft?'true':'false'}
    onClick={onClickComponent}
         >
            {iconLeftComponent}
            <div className={style['tripPeopleDetail-inputArea']} >
              {captionComponent}
              <input type={fieldType}  
                  id={id}              
                  placeholder={placeholder}
                  className={style['tripPeopleDetail-inputText']}                
                  
                  onFocus={onFocus}
                  onBlur={onBlur}
                  readOnly={true}
                  value={valueText}
                  
              />
            </div>
            
            <TripPeoplePopup show={showPopup} onClickConfirm={onClickConfirm}/>

    </div>
    
    
    
  );
}

export default TripPeopleDetail;
