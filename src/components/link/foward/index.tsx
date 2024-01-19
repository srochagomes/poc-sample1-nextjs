import NextLink from 'next/link';
import { ReactNode } from 'react';
import style from './LinkFoward.module.scss'

interface Props {
    children?: React.ReactNode  | string,
    href: string;
    linkDecorator?: string
}

export default function LinkFoward(props:Props) {
    const { children, href, linkDecorator='show'} = props 
    return (
        <NextLink href={href} passHref className={style['linkFoward']} style-link={linkDecorator}>
            {children}
        </NextLink>
    );
}