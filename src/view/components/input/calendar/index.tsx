import { useEffect, useState } from "react";
import style from "./CalendarField.module.scss"
import Typography from "@/view/components/text/typography";
import IconSVG from "@/view/components/icons/icon-svg";
import { FieldIconPath } from "@/types/enums/FieldIconPath";
import { FieldIconEnum } from "@/types/enums/FieldIconEnum";
import { FieldTypeDetail, FieldTypeEnum } from "@/types/enums/FieldTypeEnum";
import DatePicker from "./date-picker";
import { TypeCalendar } from "./date-picker/date-command";
import { ComponentTypeEnum } from "@/types/enums/ComponentTypeEnum";
import { generateInputRandomId } from "@/types/utils/MathFunctions";
import FieldData from "@/types/structure/FieldData";
import { IMaskInput } from "react-imask";
import { FieldsProps } from "../text";



function CalendarField(props:FieldsProps) {
  const { maxDigits = 10, hasFlexibleDate, permitPeriodChoice, monthsShow, id, caption, width, iconLeft, colorCaprion, roundType, placeholder,dataSource } = props;
  const [selectedKeys, setSelectedKeys] = useState<string[]>([]);  
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [typeCalendar, setTypeCalendar] = useState(TypeCalendar.fixed);
  const [value, setValue] = useState("");
        
  const isValid = () : boolean =>{
    return false;

  }
  
  const dataSourceItem : FieldData = {name:id, isValid,value};

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

  const onChange = (event: React.ChangeEvent<HTMLInputElement>): void => {    
    // let valorInput: string = event.target.value;

    // // // Remove caracteres não numéricos
    // valorInput = valorInput.replace(/\D/g, '');
    
    // const cursorPosition: number = event.target.selectionStart || 0;


    // // // Aplica a máscara para data (DD/MM/AAAA)
    // let maskedValue: string = '';
    // maskedValue = valorInput.replace(/^(\d{2})(\d{2})(\d{0,4})/, '$1/$2/$3');    
    // // Atualiza o valor do campo com a máscara aplicada
    // setValue(maskedValue.slice(0,maxDigits));    

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
                            
  return (
    
    <div className={style['calendarContainer']} 
            style={{ width: `${width}` }}
            data-round={roundType} data-iconleft={iconLeft?'true':'false'}>
             {iconLeftComponent}
            <div className={style['calendarContainer-inputArea']} >
                {captionComponent}
                <IMaskInput 
                    id={id}
                    mask={FieldTypeDetail.date.pattern}
                    type={FieldTypeEnum.Text}                
                    placeholder={placeholder}
                    className={style['calendarContainer-inputText']}                                    
                    onFocus={onFocus}
                    onBlur={onBlur}
                    onChange={onChange}
                    value={value}
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
