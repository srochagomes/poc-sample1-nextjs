import React from 'react';
import Image from 'next/image';

interface Props {
    path: string;
    alt? : string
    height? : number;
    width? : number;
}

export default function IconSVG(props:Props){
    const {path, height, width, alt} = props;

    let heightSize : number = 50;
    let widthSize : number = 50;


    if (height){
        heightSize = height;
    }
    if (width){
        widthSize = width;
    }


    return (
            <> 
                <div>
                    <Image        
                        priority
                        src={path}
                        height={heightSize}
                        width={widthSize}
                        alt={alt?alt:""}
                    />
                </div>
            </>
        )
} 


