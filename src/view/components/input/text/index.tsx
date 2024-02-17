import { useEffect, useState } from "react";
import style from "./InputField.module.scss"
import Typography from "@/view/components/text-container/typography";
import IconSVG from "@/view/components/icons/icon-svg";
import { FieldTypeDetail, FieldTypeEnum } from "@/types/enums/FieldTypeEnum";
import { FieldIconEnum } from "@/types/enums/FieldIconEnum";
import { FieldIconPath } from "@/types/enums/FieldIconPath";
import IconSelecting from "@/view/components/button/icon-selecting";

import { ComponentTypeEnum } from "@/types/enums/ComponentTypeEnum";
import FieldData from "@/types/structure/FieldData";
import { IMaskInput } from "react-imask";




export interface FieldsProps {
    id: string
    required?:boolean
    type? : FieldTypeEnum  
    roundType?:String
    placeholder?:string
    caption?:string
    colorCaprion?:string
    iconLeft?:FieldIconEnum
    width?:string
    dataSource?: FieldData[],
    maxDigits?: number, 
    hasFlexibleDate?:true, 
    permitPeriodChoice?:true,
    monthsShow?:number 
}

function InputField(props:FieldsProps) {
  const { caption, 
          width, 
          iconLeft, 
          colorCaprion, 
          required = false,
          type = FieldTypeEnum.Text, 
          roundType, 
          placeholder, 
          id,
          dataSource
        } = props;

        const [showPassword, setShowPassword] = useState(false);
        const [fieldValid, setFieldValid] = useState(true);

        const [fieldType, setFieldType] = useState(type);
        const [value, setValue] = useState("");
        
        useEffect(() => {
          setFieldType(type);
        }, [type]);

        const isValid = () : boolean =>{

          if (required && (value.length<1 || value.trim().length < 1)){
             return false;  
          }else if (!required && (value.length<1 || value.trim().length < 1)){
            return true;  
          }

          return FieldTypeDetail[type].regex.test(value);
        }
        
        const applyValidation = () : void =>{
          setFieldValid(isValid());
        }


        const eventAssociado = (text:string) : void =>{
          console.log('Evento ',text);

        }
        
        
        const dataSourceItem : FieldData = {name:id, isValid , value, applyValidation};
        
        
        const togglePasswordVisibility = () => {
          let showPwd = !showPassword
          setShowPassword(showPwd);
          setFieldType(showPwd?FieldTypeEnum.Text:FieldTypeEnum.Password)
        };



        const iconLeftComponent = iconLeft ?
                        <div className={style['inputContainer-iconleft']}>
                          <div className={style['inputContainer-iconleft-area']}>
                              <IconSVG path={FieldIconPath[iconLeft]} alt={placeholder} isFill={true} />
                          </div>
                          
                        </div>
                        : <></>;

        const captionComponent = caption ? <div className={style['inputContainer-caption']}>
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
    
    <div className={style['inputContainer']} data-round={roundType} 
            style={{ width: `${width}` }}
            data-iconleft={iconLeft?'true':'false'}>
            {iconLeftComponent}
            
            <div className={fieldValid?
                  `${style['inputContainer-inputArea']}`
                  : `${style['inputContainer-inputArea']} ${style['inputContainer-inputArea-error']}`} >
                {captionComponent}
                
                
                <IMaskInput 
                    id={id}                    
                    mask={FieldTypeDetail[type].pattern as string}
                    type={FieldTypeDetail[fieldType].type}
                    required={required}
                    placeholder={placeholder}
                    className={style['inputContainer-inputText']}   
                    onChange={onChange}
                    value={value}
                    onInvalid={()=>eventAssociado('onInvalid')}
                    onComplete={(event)=>onComplete}
                    onCopyCapture={()=>eventAssociado('onCopyCapture')}
                    onCopy={()=>eventAssociado('onCopy')}
                    />
            </div>
            
            
            {FieldTypeDetail[type].type==FieldTypeEnum.Password  && (  
              <div className={style['inputContainer-passwordIcon']}>
                <div className={style['inputContainer-passwordIcon-area']}>
                    <IconSelecting isSelected={showPassword} 
                    normal={(<IconSVG path={FieldIconPath.eye} isFill={true}/>)} 
                    whenSelected={(<IconSVG path={FieldIconPath.circle} isFill={true}/>)}
                    onClick={togglePasswordVisibility}
                    />
                  
                </div>              
              </div>              
            )}
    </div>
    
    
    
  );
}

export default InputField;
