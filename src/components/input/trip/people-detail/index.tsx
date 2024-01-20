import { useEffect, useState } from "react";
import style from "./TripPeopleDetail.module.scss"
import Typography from "@/components/text/typography";
import IconSVG from "@/components/icons/icon-svg";
import { FieldIconPath } from "@/types/enums/FieldIconPath";
import { FieldIconEnum } from "@/types/enums/FieldIconEnum";
import { FieldTypeEnum } from "@/types/enums/FieldTypeEnum";
import TripPeoplePopup from "./pop-up";
import { ComponentTypeEnum } from "@/types/enums/ComponentTypeEnum";

interface Props {
    type : FieldTypeEnum  
    roundType?:String
    placeholder?:string
    caption?:string
    colorCaprion?:string
    iconLeft?:FieldIconEnum
    width?:string
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
  const { caption, width, iconLeft, colorCaprion, type, roundType, placeholder } = props;
  const [selectedKeys, setSelectedKeys] = useState<string[]>([]);
  const [showPopup, setShowPopup] = useState(false);
  const [fieldType, setFieldType] = useState(type);
  const [valueText, setValueText] = useState('');

  useEffect(() => {
    setShowPopup(showPopup);
  }, [showPopup]);

  const onClickConfirm = (event:React.MouseEvent<HTMLButtonElement>, peopleData:PeopleData): void =>{
    console.log('onClickConfirm', peopleData);
    if (peopleData){
      setValueText(`${peopleData.olderQuantity} adulto(s), ${peopleData.minorQuantity} menor(es) e ${peopleData.roomQuantity} quarto(s).` );
    }
    setSelectedKeys([]);
  }

  const onClickComponent = (event:React.MouseEvent<HTMLDivElement>): void =>{
    setShowPopup(true); 
  }

  let onFocus = (event: React.FocusEvent<HTMLInputElement>):void => {
    setSelectedKeys([]);
    setShowPopup(true); 
    console.log('onFocus=',showPopup)   
  }

  let onBlur = (event: React.FocusEvent<HTMLInputElement>):void => {
    setSelectedKeys([]);
    setShowPopup(false);
    console.log('onBlur=',showPopup)   
  }

  const iconLeftComponent = iconLeft ?
                  <div className={style['tripPeopleDetail-iconleft']}>
                    <div className={style['tripPeopleDetail-iconleft-area']}>
                      <IconSVG path={FieldIconPath[iconLeft]} alt={placeholder} height={18} width={18} />
                    </div>
                    
                  </div>
                  : <></>;

  const captionComponent = caption ? <div className={style['tripPeopleDetail-caption']}>
                                        <Typography type={ComponentTypeEnum.Label} fontSize="input-box" color={colorCaprion?colorCaprion:'black'}>{caption}</Typography>
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
