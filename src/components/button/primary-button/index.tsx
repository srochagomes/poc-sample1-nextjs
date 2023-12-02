import React from 'react';
import style from './Primary-Button.module.scss'

interface Props {
    children: React.ReactElement | string;
  }


function ButtonPrimary(props:Props) {
    const {children} = props;
  
    return (
        <>
            <button className={style.buttonPrimary}>
                {children}
            </button>
        </>
  );
}

export default ButtonPrimary;