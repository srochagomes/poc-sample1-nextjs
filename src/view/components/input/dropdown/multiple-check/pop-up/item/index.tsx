
import React, { useState } from 'react';
import style from './MultipleCheckDropdownItemComponent.module.scss'; 
import Typography from   '@/view/components/text-container/typography';
import DrodownItem  from '@/view/components/input/dropdown/ItemDropdown';
import { FieldTypeEnum } from '@/types/enums/FieldTypeEnum';

interface MultipleCheckDropdownItemComponentProps {
  item: DrodownItem;
  isItemClicked: (item:DrodownItem) => boolean;
  onItemClicked: (item:DrodownItem) => void;
}

const MultipleCheckDropdownItemComponent: React.FC<MultipleCheckDropdownItemComponentProps> = (props: MultipleCheckDropdownItemComponentProps) => {
  const { item, isItemClicked, onItemClicked } = props;  
  const [checked, setChecked] = useState<boolean>(false)


  const onClick = (event:React.ChangeEvent<HTMLInputElement>|React.MouseEvent<HTMLDivElement>): void =>{
    onItemClicked(item);
    setChecked(!checked);    
  }

  return (
    <div className={style['multipleCheckDropdownItemComponent']}>
        <div className={style['multipleCheckDropdownItemComponent-item']} onClick={onClick}>
            <input type={FieldTypeEnum.Checkbox} onChange={onClick} checked={isItemClicked(item)}/>
            <Typography fontSize="caption3-a" >{item.caption?item.caption:""}</Typography>                  

        </div>
    </div>
  );
}

export default MultipleCheckDropdownItemComponent;