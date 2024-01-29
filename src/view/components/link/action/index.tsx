import NextLink from 'next/link';
import { ReactNode } from 'react';

import style from './LinkAction.module.scss'

interface Props {
    children?: React.ReactElement | string;
    onClick: (event:React.MouseEvent<HTMLDivElement>) => void;
}

export default function LinkAction( props:Props) {
    const {children, onClick} = props;
    
    return (
        <div className={style['linkAction']} onClick={onClick} >
            {children}
        </div>
    );
}