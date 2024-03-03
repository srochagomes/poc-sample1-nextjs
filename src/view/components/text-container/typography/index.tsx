import React, { LegacyRef, useRef } from 'react';
import style from './typography.module.scss';
import { ComponentTypeEnum } from '@/types/enums/ComponentTypeEnum';

interface Props {
    fontSize?: string;
    color?: string;
    weight?: string;
    children: React.ReactElement | string | string[];
    type?: ComponentTypeEnum.Span | ComponentTypeEnum.Label;
    idLink?:string
    reference?: any;
    tabIndex?:number
  }

function Typography(props:Props) {
  const { fontSize, 
          reference,
          color, 
          children, 
          weight, 
          tabIndex,
          type= ComponentTypeEnum.Span,
          idLink} = props;
  
  const Component = type;

  return (
    <Component
      {...(idLink && Component == ComponentTypeEnum.Label? { htmlFor: idLink} : {})}      
      ref={reference}    
      tabIndex={tabIndex}
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