import { useState } from "react";
import style from "./InputField.module.scss"
import Typography from "@/components/text/typography";
import IconSVG from "@/components/icons/icon-svg";


export enum FieldRoundEnum {
  All = "all",
  Right = "right",
  Left = "left",
  Top = 'top',
  Button = 'button'  
}

export enum FieldTypeEnum {
    Text = "text",
    Password = "password",
    Number = "number",
    Email = "email",
    Date = "date",
    Radio = "radio",
    Checkbox = "checkbox"    
}

export enum FieldIconEnum {
  Circle = "circle",
  Location = "location"
}

const fieldIconPath = {
  circle : "/images/icons/icon-circle.svg",
  location: "/images/icons/location-pin.svg"
}



interface Props {
    type : FieldTypeEnum  
    roundType?:String
    placeholder?:string
    caption?:string
    colorCaprion?:string
    iconLeft?:FieldIconEnum
}

function InputField(props:Props) {
  const { caption, iconLeft, colorCaprion, type, roundType, placeholder } = props;

  const [showPassword, setShowPassword] = useState(false);

  const [fieldType, setFieldType] = useState(type);

  const togglePasswordVisibility = () => {
    let showPwd = !showPassword
    setShowPassword(showPwd);
    setFieldType(showPwd?FieldTypeEnum.Text:FieldTypeEnum.Password)
  };



  const iconLeftComponent = iconLeft ?
                  <div className={style['inputContainer-iconleft']}>
                    <IconSVG path={fieldIconPath[iconLeft]} alt={placeholder} height={15} width={15} />
                  </div>
                  : <></>;

  const captionComponent = caption ? <span className={style['inputContainer-caption']}>
                                        <Typography fontSize="input-box" color={colorCaprion?colorCaprion:'black'}>{caption}</Typography>
                                     </span> 
                                     : <></>;

  return (
    
    <div className={style['inputContainer']} data-round={roundType} data-iconleft={iconLeft?'true':'false'}>
            {iconLeftComponent}
            {captionComponent}
            <input type={fieldType}                
                placeholder={placeholder}
                className={style['inputContainer-inputText']}
                />
            
            {type==FieldTypeEnum.Password && (  
            <div className={style['inputContainer-passwordIcon']}
                onClick={togglePasswordVisibility}
            >
            </div>
        )}
    </div>
    
    
    
  );
}

export default InputField;