import { useEffect, useState } from "react";
import style from "./CalendarField.module.scss"
import Typography from "@/components/text/typography";
import IconSVG from "@/components/icons/icon-svg";
import { FieldIconPath } from "@/types/enums/FieldIconPath";
import { FieldIconEnum } from "@/types/enums/FieldIconEnum";
import { FieldTypeEnum } from "@/types/enums/FieldTypeEnum";
import DatePicker from "./date-picker";
import { TypeCalendar } from "./date-picker/date-command";
import { ComponentTypeEnum } from "@/types/enums/ComponentTypeEnum";
import { generateInputRandomId } from "@/types/utils/MathFunctions";

interface Props {
    id?:string
    type : FieldTypeEnum  
    roundType?:String
    placeholder?:string
    caption?:string
    colorCaprion?:string
    iconLeft?:FieldIconEnum
    width?:string
    monthsShow?:number
    permitPeriodChoice?:boolean
    hasFlexibleDate?:boolean
}

function CalendarField(props:Props) {
  const { hasFlexibleDate, permitPeriodChoice, monthsShow, id = generateInputRandomId(), caption, width, iconLeft, colorCaprion, type, roundType, placeholder } = props;
  const [selectedKeys, setSelectedKeys] = useState<string[]>([]);
  const [fieldType, setFieldType] = useState(type);
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [typeCalendar, setTypeCalendar] = useState(TypeCalendar.fixed);

  let dateBase = new Date();


  useEffect(() => {
    setSelectedKeys(selectedKeys);
  }, [selectedKeys]);
  useEffect(() => {
    setShowDatePicker(showDatePicker);
  }, [showDatePicker]);


  const isSelectDay = (index:number|null) : boolean=>{
    if (!index) return false;
    if (selectedKeys.includes(index.toString())) {
      return true;
    }
    return false;
  }

  const isDayBetweenSelected = (keyAttributeValue:number|null) : boolean=>{
    if (!keyAttributeValue) return false;
    const value = Number(keyAttributeValue);    
    if (selectedKeys.length == 2) {
      const firstValue = Number(selectedKeys[0]);
      const secondValue = Number(selectedKeys[1]);
      if (firstValue < value && value < secondValue){
        return true;
      }      
    }
    return false;
  }


  const onClickClear = (event:React.MouseEvent<HTMLDivElement>): void =>{
    setSelectedKeys([]);
  }

  
  const onClickDateFixed  = (event:React.MouseEvent<HTMLDivElement>): void =>{
    
    setTypeCalendar(TypeCalendar.fixed);
    
  }

  const onClickDateFlexible  = (event:React.MouseEvent<HTMLDivElement>): void =>{
    
    setTypeCalendar(TypeCalendar.flexible);
    
  }
  const onClickConfirm = (event:React.MouseEvent<HTMLButtonElement>): void =>{
    console.log('onClickConfirm');
    setShowDatePicker(false);
    setSelectedKeys([]);
  }
  const onSelectDay = (event:React.MouseEvent<HTMLDivElement>, index:number): void =>{
    const keyAttributeValue = index.toString();

    if (keyAttributeValue) {
      setSelectedKeys((prevKeys) => {
        if (prevKeys.includes(keyAttributeValue)) {
          // Se a chave já estiver no estado, remova-a
          return prevKeys.filter((key) => key !== keyAttributeValue);
        } else if (permitPeriodChoice){
          // Se já houver 2 datas, substitua uma delas com base nas regras

          const valueToAdd = Number(keyAttributeValue);
          if (prevKeys.length<1){
            return [keyAttributeValue];
          }

          const firstValue = Number(prevKeys[0]);
          if (prevKeys.length<2){
            if (valueToAdd > firstValue){
              return [prevKeys[0], keyAttributeValue];
            }
            return [keyAttributeValue, prevKeys[0]];
          }         

          if (valueToAdd < firstValue) {
            // Se o novo valor for menor que o segundo valor, substitua o primeiro
            return [keyAttributeValue,prevKeys[1]];
          } else if (valueToAdd > firstValue) {
            // Se o novo valor for maior que o primeiro valor, substitua o segundo
            return [prevKeys[0], keyAttributeValue];
          } else {
            // O novo valor está entre o primeiro e o segundo, não faz nada
            return prevKeys;
          }
        } else {
          return [keyAttributeValue];
        }
      });
    }    
  }


  let onFocus = (event: React.FocusEvent<HTMLInputElement>):void => {
    setSelectedKeys([]);
    setShowDatePicker(true);
        
  }

  let onBlur = (event: React.FocusEvent<HTMLInputElement>):void => {
    setSelectedKeys([]);
    setShowDatePicker(false);
  }

  const iconLeftComponent = iconLeft ?
                  <div className={style['calendarContainer-iconleft']}>
                    <div className={style['calendarContainer-iconleft-area']}>
                        <IconSVG path={FieldIconPath[iconLeft]} alt={placeholder} isFill={true} />
                    </div>
                    
                  </div>
                  : <></>;

  const captionComponent = caption ? <div className={style['calendarContainer-caption']}>
                                        <Typography 
                                            idLink={id}
                                            type={ComponentTypeEnum.Label}
                                            fontSize="input-box" color={colorCaprion?colorCaprion:'black'}>{caption}</Typography>
                                     </div> 
                                     : <></>;

  return (
    
    <div className={style['calendarContainer']} 
            style={{ width: `${width}` }}
            data-round={roundType} data-iconleft={iconLeft?'true':'false'}>
            {iconLeftComponent}
            <div className={style['calendarContainer-inputArea']} >
                {captionComponent}
                <input 
                    id={id}
                    type={fieldType}                
                    placeholder={placeholder}
                    className={style['calendarContainer-inputText']}                                    
                    onFocus={onFocus}
                    onBlur={onBlur}
                    />
            </div>
            <DatePicker monthsShow={monthsShow}
                        hasFlexibleDate={hasFlexibleDate}
                        dateBase={dateBase}
                        show={showDatePicker} 
                        isSelectDay={isSelectDay} 
                        typeCalendar={typeCalendar}                        
                        isDayBetweenSelected={isDayBetweenSelected}
                        onSelectDay={onSelectDay} 
                        onClickClear={onClickClear} 
                        onClickConfirm={onClickConfirm}
                        onClickDateFlexible={onClickDateFlexible}
                        onClickDateFixed={onClickDateFixed}/>
    </div>
    
    
    
  );
}

export default CalendarField;
