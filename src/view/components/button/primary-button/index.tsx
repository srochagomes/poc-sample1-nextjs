import React from 'react';
import style from './Primary-Button.module.scss'

interface Props {
    children: React.ReactElement | string;
    onClick?: (event:React.MouseEvent<HTMLButtonElement>) => void;
  }


function ButtonPrimary(props:Props) {
    const {children, onClick} = props;
  
    return (
        <>
            <button className={style.buttonPrimary} onClick={onClick}>
                {children}
            </button>
        </>
  );
}

export default ButtonPrimary;