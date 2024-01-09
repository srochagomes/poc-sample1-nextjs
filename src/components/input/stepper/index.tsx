import IconClick from '@/components/button/icon-click';
import React, { useState, ChangeEvent } from 'react';
import style from './StepperControl.module.scss'
import Typography from '@/components/text/typography';
interface StepperControlProps {
  min?: number;
  max?: number;
  editable?: boolean;
  maxDigits?: number;
}

const StepperControl: React.FC<StepperControlProps> = ({ min = 0, max = Infinity, editable = false, maxDigits = Infinity }) => {
  const [quantity, setQuantity] = useState<number>(0);

  const handleIncrement = () => {
    if (quantity < max) {
      setQuantity(prevQuantity => prevQuantity + 1);
    }
  };

  const handleDecrement = () => {
    if (quantity > min) {
      setQuantity(prevQuantity => prevQuantity - 1);
    }
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    let value = Number(event.target.value);

    // Limitar a quantidade de dígitos
    if (value.toString().length <= maxDigits) {
      // Garantir que o valor esteja dentro dos limites
      value = Math.min(Math.max(value, min), max);

      setQuantity(value);
    }
  };

  return (
    <div className={style['stepperControl']}>
      <span onClick={handleDecrement} className={quantity <= min?
        `${style['stepperControl-button']} ${style['stepperControl-button-disabled']}`
        :`${style['stepperControl-button']}`}> -</span>
      {editable ? (
        <input
          type="text"
          value={quantity}
          onChange={handleChange}
          min={min}
          max={max}
        />
      ) : (
        <Typography fontSize="caption3-a">{quantity.toString()}</Typography>
        
      )}
      <span onClick={handleIncrement} className={quantity >= max?
        `${style['stepperControl-button']} ${style['stepperControl-button-disabled']}`
        :`${style['stepperControl-button']}`}>+ </span>
    </div>
  );
};

export default StepperControl;
