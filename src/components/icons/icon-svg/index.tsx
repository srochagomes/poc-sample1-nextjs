import React from 'react';
import Image from 'next/image';

interface Props {
    path: string;
    alt? : string
    height? : number;
    width? : number;
    priority?:boolean;
    isFill?:boolean;
    quality?:number;
}

export default function IconSVG(props:Props){
    const {path, quality = 65, height, width, alt, priority,isFill} = props;

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
                style={{ objectFit: "contain"}}
                fill={isFill}
                loading={!priority?"lazy":"eager"}
                quality={quality}                
                {...(!isFill ? { width: widthSize, height:heightSize} : {})}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                alt={alt?alt:""}
                
            />
        

        )
} 


