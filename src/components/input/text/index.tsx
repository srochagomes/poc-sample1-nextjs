import { useState } from "react";
import style from "./InputField.module.scss"
import Typography from "@/components/text/typography";


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

interface Props {
    type : FieldTypeEnum  
    roundType?:String
    placeholder?:string
    caption?:string
}

function InputField(props:Props) {
  const { caption, type, roundType, placeholder } = props;

  const [showPassword, setShowPassword] = useState(false);

  const [fieldType, setFieldType] = useState(type);

  const togglePasswordVisibility = () => {
    let showPwd = !showPassword
    setShowPassword(showPwd);
    setFieldType(showPwd?FieldTypeEnum.Text:FieldTypeEnum.Password)
  };

  const captionComponent = caption ? <span className={style['inputContainer-caption']}>
                                        <Typography fontSize="input-box" >{caption}</Typography>
                                     </span> 
                                     : <></>;

  return (
    
    <div className={style['inputContainer']} data-round={roundType}>          
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