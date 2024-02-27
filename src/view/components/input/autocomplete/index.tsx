import { FieldIconEnum } from "@/types/enums/FieldIconEnum"
import { FieldTypeDetail, FieldTypeEnum } from "@/types/enums/FieldTypeEnum"
import FieldData from "@/types/structure/FieldData"
import { useEffect, useState } from "react"
import style from "./InputAutoCompleteField.module.scss"
import IconSVG from "../../icons/icon-svg"
import { FieldIconPath } from "@/types/enums/FieldIconPath"
import Typography from "../../text-container/typography"
import { ComponentTypeEnum } from "@/types/enums/ComponentTypeEnum"
import IconSelecting from "../../button/icon-selecting"
import { IMaskInput } from "react-imask"
import InputAutoClompletePopup from "./pop-up"

export interface SearchBody{
  search:string
}

export interface FieldsProps {
    id: string
    required?:boolean    
    roundType?:String
    placeholder?:string
    caption?:string
    colorCaprion?:string
    iconLeft?:FieldIconEnum
    width?:string
    dataSource?: FieldData[]
    processItens:(body:SearchBody)=>[]
    attributeItemDisplay?:string
}

function InputAutoCompleteField(props:FieldsProps) {

    const { caption, 
        width, 
        iconLeft, 
        colorCaprion, 
        required = false,
        attributeItemDisplay,
        processItens,
        roundType, 
        placeholder, 
        id,
        dataSource
      } = props;
      
      const [fieldValid, setFieldValid] = useState(true);
      const [showPopup, setShowPopup] = useState(false);
      
      const [fieldType, setFieldType] = useState(FieldTypeEnum.Text);
      const [value, setValue] = useState("");
      

      const isValid = () : boolean =>{

        if (required && (value.length<1 || value.trim().length < 1)){
           return false;  
        }else if (!required && (value.length<1 || value.trim().length < 1)){
          return true;  
        }

        return FieldTypeDetail[fieldType].regex.test(value);
      }
      
      const applyValidation = () : void =>{
        setFieldValid(isValid());
      }


      const eventAssociado = (text:string) : void =>{
        console.log('Evento ',text);

      }
      
      
      const dataSourceItem : FieldData = {name:id, isValid , value, applyValidation};
      

      const iconLeftComponent = iconLeft ?
      <div className={style['inputAutoCompleteContainer-iconleft']}>
        <div className={style['inputAutoCompleteContainer-iconleft-area']}>
            <IconSVG path={FieldIconPath[iconLeft]} alt={placeholder} isFill={true} />
        </div>
        
      </div>
      : <></>;

      const captionComponent = caption ? <div className={style['inputAutoCompleteContainer-caption']}>
                            <Typography type={ComponentTypeEnum.Label}
                            idLink={id}
                                fontSize="input-box" color={colorCaprion?colorCaprion:'black'}>{caption}</Typography>
                        </div> 
                        : <></>;



        const onChange = (event: React.ChangeEvent<HTMLInputElement>): void => {                    

            const valorInput: string = event.target.value;
            setValue(valorInput);
            setFieldValid(true);
        }

        const onComplete = (event: React.ChangeEvent<HTMLInputElement>): void => {          
            console.log('Evento ','onComplete');

        }



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
    
            <div className={style['inputAutoCompleteContainer']} data-round={roundType} 
                    style={{ width: `${width}` }}
                    data-iconleft={iconLeft?'true':'false'}>
                    {iconLeftComponent}
                    
                    <div className={fieldValid?
                          `${style['inputAutoCompleteContainer-inputArea']}`
                          : `${style['inputAutoCompleteContainer-inputArea']} ${style['inputAutoCompleteContainer-inputArea-error']}`} >
                        {captionComponent}
                        
                        
                        <IMaskInput 
                            id={id}                    
                            mask={FieldTypeDetail[fieldType].pattern as string}
                            type={FieldTypeDetail[fieldType].type}
                            required={required}
                            placeholder={placeholder}
                            className={style['inputAutoCompleteContainer-inputText']}   
                            onChange={onChange}
                            value={value}
                            onInvalid={()=>eventAssociado('onInvalid')}
                            onComplete={(event)=>onComplete}
                            onCopyCapture={()=>eventAssociado('onCopyCapture')}
                            onCopy={()=>eventAssociado('onCopy')}
                            />
                            {showPopup&&(<InputAutoClompletePopup 
                              itens={processItens({search:value})}
                              attributeDisplay={attributeItemDisplay||''}
                              show={showPopup}
                              />
                              )}
                    </div>
                    
                    
            </div>
          );
        }
        
export default InputAutoCompleteField;
        