import React from "react";
import style from "./IconClick.module.scss"
import Image from 'next/image';
import Typography from "@/components/text/typography";


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
                <Image        
                        priority
                        src={path}
                        height={heightSize?heightSize:50}
                        width={widthSize?widthSize:50}
                        alt={alt?alt:""}
                    />
                
                <Typography fontSize="input-box" color={captionColor}>{caption?caption:""}</Typography>
            </div>
        </>
  );
}

export default IconClick;