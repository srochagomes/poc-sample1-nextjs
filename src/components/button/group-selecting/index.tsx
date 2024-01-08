
import { useState } from 'react';
import style from './GroupSelecting.module.scss'
import GroupButtonItem, { GroupButtonItemData, GroupButtonItemProps } from './button';



interface Props{
    itens: GroupButtonItemData[];
    isMultipleChoise: boolean
}

function GroupSelectingButton(props:Props) {
    const {isMultipleChoise, itens } = props;

    const [values, setValues] = useState<string[]>([]);

    
    const onClickItemButton = (event:React.MouseEvent<HTMLDivElement>, value:string):void =>{
        
        if(values && values.length > 0){
            if (isSelection(value)){
                setValues(prevValues => prevValues.filter(item => item !== value));
                return;
            }

            if (isMultipleChoise){
                setValues([...values, value]);            
            }else{
                setValues([value]);        
            }

        }else{
            setValues([value]);
        }
        
    }

    const isSelection = (value:string) : boolean =>{
        return values ? values.includes(value) : false;
    }

    const generateButtonList = (buttonPropsArray: GroupButtonItemData[]) => {        
        return buttonPropsArray.map((buttonData, index) => (
            <li key={index}>
              <GroupButtonItem
                key={index} caption={buttonData.caption}
                value={buttonData.value}
                onClickItemButton={onClickItemButton}
                isSelecting={isSelection}
                />
          </li>
        ));
      };    

    const buttonList = generateButtonList(itens);

    return (
        <ul className={style['groupSelecting']}>
              {buttonList}
        </ul>
    )
}

export default GroupSelectingButton;

