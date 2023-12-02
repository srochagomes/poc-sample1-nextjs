import React from 'react';
import style from './typography.module.scss';

interface Props {
    fontSize?: string;
    color?: string;
    weight?: string,
    children: React.ReactElement | string;
  }

function Typography(props:Props) {
  const { fontSize, color, children, weight } = props;

  return (
    <span
      className={style.typography}
      data-font-size={fontSize}
      data-color={color}
      data-weight={weight}
    >
      {children}
    </span>
  );
}

export default Typography;