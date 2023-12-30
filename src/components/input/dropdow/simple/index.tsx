import { useState } from "react";
import style from "./SimpleDropdow.module.scss"
import Typography from "@/components/text/typography";
import IconSVG from "@/components/icons/icon-svg";
import { FieldIconPath } from "@/types/enums/FieldIconPath";
import { FieldIconEnum } from "@/types/enums/FieldIconEnum";





interface Props {     
    roundType?:String
    placeholder?:string
    caption?:string
    colorCaprion?:string
    iconLeft?:FieldIconEnum
    iconRight?:FieldIconEnum
    width?:string
}



function SimpleDropdow(props:Props) {
  const {caption, placeholder, iconLeft, iconRight, roundType, width} = props;

  
  const iconLeftComponent = iconLeft ?
                              <div className={style['simpleDropdowContainer-iconleft']}>
                                <IconSVG path={FieldIconPath[iconLeft]} alt={placeholder} height={18} width={18} />
                              </div>
                              : <></>;

  const iconRightComponent = iconRight ?
                              <div className={style['simpleDropdowContainer-iconright']}>
                                <IconSVG path={FieldIconPath[iconRight]} alt={placeholder} height={18} width={18} />
                              </div>
                              : <></>;


  const captionComponent = caption ? <span className={style['simpleDropdowContainer-caption']}>
                                        <Typography fontSize="input-box" >{caption}</Typography>
                                     </span> 
                                     : <></>;

  return (
    
    <div className={style['simpleDropdowContainer']}  
          data-iconleft={iconLeft?'true':'false'}
          data-iconright={iconRight?'true':'false'}
          data-round={roundType}
          style={{ width: `${width}` }}>    
            {captionComponent}
            {iconLeftComponent}
            <span className={style['simpleDropdowContainer-value']}>Valor</span>
            {iconRightComponent}
    </div>
    
    
    
  );
}

export default SimpleDropdow;