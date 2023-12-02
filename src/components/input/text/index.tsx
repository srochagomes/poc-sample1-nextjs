import { useState } from "react";
import style from "./InputField.module.scss"



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
    roundType?:string
    placeholder?:string
}

function InputField(props:Props) {
  const { type, roundType, placeholder } = props;

  const [showPassword, setShowPassword] = useState(false);

  const [fieldType, setFieldType] = useState(type);

  const togglePasswordVisibility = () => {
    let showPwd = !showPassword
    setShowPassword(showPwd);
    setFieldType(showPwd?FieldTypeEnum.Text:FieldTypeEnum.Password)
  };

  return (
    <>
    <div className={style['inputContainer']} data-round={roundType}>
              
              
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
    
    </>
    
  );
}

export default InputField;