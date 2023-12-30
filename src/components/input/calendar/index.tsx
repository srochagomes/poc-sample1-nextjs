import { useEffect, useState } from "react";
import style from "./CalendarField.module.scss"
import Typography from "@/components/text/typography";
import IconSVG from "@/components/icons/icon-svg";
import { FieldIconPath } from "@/types/enums/FieldIconPath";
import { FieldIconEnum } from "@/types/enums/FieldIconEnum";
import { FieldTypeEnum } from "@/types/enums/FieldTypeEnum";
import DatePicker from "./date-picker";

interface Props {
    type : FieldTypeEnum  
    roundType?:String
    placeholder?:string
    caption?:string
    colorCaprion?:string
    iconLeft?:FieldIconEnum
    width?:string
}

function CalendarField(props:Props) {
  const { caption, width, iconLeft, colorCaprion, type, roundType, placeholder } = props;

  const [fieldType, setFieldType] = useState(type);
  const [showDatePicker, setShowDatePicker] = useState(false);

  let onFocus = (event: React.FocusEvent<HTMLInputElement>):void => {
    setShowDatePicker(true);
        
  }

  let onBlur = (event: React.FocusEvent<HTMLInputElement>):void => {
    setShowDatePicker(false);
  }

  const iconLeftComponent = iconLeft ?
                  <div className={style['calendarContainer-iconleft']}>
                    <IconSVG path={FieldIconPath[iconLeft]} alt={placeholder} height={18} width={18} />
                  </div>
                  : <></>;

  const captionComponent = caption ? <span className={style['calendarContainer-caption']}>
                                        <Typography fontSize="input-box" color={colorCaprion?colorCaprion:'black'}>{caption}</Typography>
                                     </span> 
                                     : <></>;

  return (
    
    <div className={style['calendarContainer']} data-round={roundType} data-iconleft={iconLeft?'true':'false'}>
            {iconLeftComponent}
            {captionComponent}
            <input type={fieldType}                
                placeholder={placeholder}
                className={style['calendarContainer-inputText']}                
                style={{ width: `${width}` }}
                onFocus={onFocus}
                onBlur={onBlur}
                
                />
            <DatePicker show={showDatePicker} />
    </div>
    
    
    
  );
}

export default CalendarField;
