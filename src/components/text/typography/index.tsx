import React from 'react';
import style from './typography.module.scss';
import { ComponentTypeEnum } from '@/types/enums/ComponentTypeEnum';

interface Props {
    fontSize?: string;
    color?: string;
    weight?: string;
    children: React.ReactElement | string | string[];
    type?: ComponentTypeEnum.Span | ComponentTypeEnum.Label;
    idLink?:string
  }

function Typography(props:Props) {
  const { fontSize, 
          color, 
          children, 
          weight, 
          type= ComponentTypeEnum.Span,
          idLink} = props;
  
  const Component = type;

  return (
    <Component
      {...(Component == ComponentTypeEnum.Label? { htmlFor: idLink} : {})}      
      className={style.typography}
      data-font-size={fontSize}
      data-color={color}
      data-weight={weight}
    >
      {children}
    </Component>
  );
}

export default Typography;