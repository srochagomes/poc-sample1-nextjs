import React from "react";
import style from "./IconClick.module.scss"
import Image from 'next/image';
import Typography from "@/view/components/text/typography";
import IconSVG from "@/view/components/icons/icon-svg";


interface Props{    
    caption?: string;
    path: string;
    alt?: string;
    onClick?: ()=>void;
    heightSize?: number;
    widthSize?: number;
    captionColor?:string

}



function IconClick(props:Props) {
    const {caption, captionColor, onClick, widthSize, heightSize, path, alt} = props;
    

    
    
    let onClickButton = ():void => {
        
        if (onClick){
            onClick();
        }
    }
  
    return (
        <>
            <div  className={style['iconClick']} onClick={onClickButton}>
                <IconSVG                    
                        priority
                        path={path}
                        isFill={true}
                        alt={alt?alt:""}
                    />
                
                <Typography fontSize="input-box" color={captionColor}>{caption?caption:""}</Typography>
            </div>
        </>
  );
}

export default IconClick;