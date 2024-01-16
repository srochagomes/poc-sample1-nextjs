import React from 'react';
import Image from 'next/image';

interface Props {
    path: string;
    alt? : string
    height? : number;
    width? : number;
    priority?:boolean;
    isFill?:boolean;
}

export default function IconSVG(props:Props){
    const {path, height, width, alt, priority,isFill} = props;

    let heightSize : number = 50;
    let widthSize : number = 50;


    if (height){
        heightSize = height;
    }
    if (width){
        widthSize = width;
    }


    return (

            <Image        
                
                {...(priority ? { priority: true} : {})}
                src={path}
                style={{ objectFit: "cover"}}
                fill={isFill}
                loading={!priority?"lazy":"eager"}
                quality={100}
                {...(!isFill ? { width: widthSize, height:heightSize} : {})}
                alt={alt?alt:""}
            />
        

        )
} 


