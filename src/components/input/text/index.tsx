import { useState } from "react";
import style from "./InputField.module.scss"
import Typography from "@/components/text/typography";
import IconSVG from "@/components/icons/icon-svg";
import { FieldTypeEnum } from "@/types/enums/FieldTypeEnum";
import { FieldIconEnum } from "@/types/enums/FieldIconEnum";
import { FieldIconPath } from "@/types/enums/FieldIconPath";


interface Props {
    type : FieldTypeEnum  
    roundType?:String
    placeholder?:string
    caption?:string
    colorCaprion?:string
    iconLeft?:FieldIconEnum
    width?:string
}

function InputField(props:Props) {
  const { caption, width, iconLeft, colorCaprion, type, roundType, placeholder } = props;

  const [showPassword, setShowPassword] = useState(false);

  const [fieldType, setFieldType] = useState(type);

  const togglePasswordVisibility = () => {
    let showPwd = !showPassword
    setShowPassword(showPwd);
    setFieldType(showPwd?FieldTypeEnum.Text:FieldTypeEnum.Password)
  };



  const iconLeftComponent = iconLeft ?
                  <div className={style['inputContainer-iconleft']}>
                    <IconSVG path={FieldIconPath[iconLeft]} alt={placeholder} height={18} width={18} />
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
                style={{ width: `${width}` }}
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
