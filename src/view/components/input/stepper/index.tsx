import IconClick from '@/view/components/button/icon-click';
import React, { useState, ChangeEvent, useEffect } from 'react';
import style from './StepperControl.module.scss'
import Typography from '@/view/components/text/typography';
import { ItemPositionEnum } from '@/types/enums/ItemPosition';
import { ComponentTypeEnum } from '@/types/enums/ComponentTypeEnum';
import { generateInputRandomId } from '@/types/utils/MathFunctions';
import { FieldTypeEnum } from '@/types/enums/FieldTypeEnum';



interface StepperControlProps {
  id:string
  min?: number;
  max?: number;
  editable?: boolean;
  maxDigits?: number;
  caption?:string;  
  captionPosition?: ItemPositionEnum;
  changeValue?: (value:number)=>void;
}

const StepperControl: React.FC<StepperControlProps> = (props:StepperControlProps) => {
  const { id,
          min = 0, 
          max = Infinity, 
          editable = false, 
          maxDigits = Infinity, 
          caption = "",
          changeValue = (value:number)=>value,
          captionPosition = ItemPositionEnum.Left } = props;
  const [quantity, setQuantity] = useState<number>(0);

  useEffect(() => {
    changeValue(quantity);    
  }, [quantity]);

  
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
    <div className={style['stepperControl']} item-position={captionPosition}>
      <Typography 
          idLink={id} 
          type={ComponentTypeEnum.Label} fontSize="caption3-a">{caption}</Typography>
      <div className={style['stepperControl-value']}>
          
          <span onClick={handleDecrement} className={quantity <= min?
            `${style['stepperControl-value-button']} ${style['stepperControl-value-button-disabled']}`
            :`${style['stepperControl-value-button']}`}> -</span>
          
            <input
              id={id}
              type={FieldTypeEnum.Text}
              value={quantity}
              readOnly={!editable}
              onChange={handleChange}
              min={min}
              max={max}
            />
          
          <span onClick={handleIncrement} className={quantity >= max?
            `${style['stepperControl-value-button']} ${style['stepperControl-value-button-disabled']}`
            :`${style['stepperControl-value-button']}`}>+ </span>
      </div>
    </div>
  );
};

export default StepperControl;
