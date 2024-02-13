import React from 'react';
import style from './Style-Button.module.scss'

export enum ButtonStyleIconEnum {
    Google = '/images/icons/icon _google.svg',
    Facebook = '/images/icons/icon _facebook.svg'
}

interface Props {
    children: React.ReactElement | string;
    icon?: ButtonStyleIconEnum;
    onClick?:()=>void
}


function ButtonStyle(props:Props) {
    const {children, icon, onClick} = props;
  
    return (
        <>
            <button className={style['buttonPrimary']} onClick={onClick}>
                
                <object 
                className={style['buttonPrimary-icon']}
                data={icon} type="image/svg+xml" >                 
                </object>
                <span className={style['buttonPrimary-caption']}>{children}</span>
            </button>
        </>
  );
}

export default ButtonStyle;