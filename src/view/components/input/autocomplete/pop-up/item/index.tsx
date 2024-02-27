
import React from 'react';
import style from './SimpleDropdownItemComponent.module.scss'; // Adapte o estilo conforme necessário

import IconSVG from '@/view/components/icons/icon-svg';
import Typography from '@/view/components/text-container/typography';
import DrodownItem  from '@/view/components/input/dropdown/ItemDropdown';

interface SimpleDropdownItemComponentProps {
  item: DrodownItem;
  isItemClicked: (item:DrodownItem) => boolean;
  onItemClicked: (item:DrodownItem) => void;
}

const SimpleDropdownItemComponent: React.FC<SimpleDropdownItemComponentProps> = (props: SimpleDropdownItemComponentProps) => {
  const { item, isItemClicked, onItemClicked } = props;  


  const onClick = (event:React.MouseEvent<HTMLDivElement>): void =>{
    onItemClicked(item);
  }

  return (
    <div className={isItemClicked(item)?`${style['simpleDropdownItemComponent']} ${style['simpleDropdownItemComponent-click']}`
    :`${style['simpleDropdownItemComponent']}`}
        onClick={onClick}>
        <div className={style['simpleDropdownItemComponent-item']}>
            <div className={style['simpleDropdownContainer-iconright']}>
                <IconSVG path={item.icon || ''} alt={item.caption} height={18} width={18} />
            </div>
            <Typography fontSize="caption3-a" >{item.caption?item.caption:""}</Typography>      

        </div>
    </div>
  );
}

export default SimpleDropdownItemComponent;