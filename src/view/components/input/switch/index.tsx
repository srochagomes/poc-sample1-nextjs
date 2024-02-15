
import Typography from "@/view/components/text-container/typography";
import style from "./SwitchLight.module.scss"
import FieldData from "@/types/structure/FieldData";
import { ChangeEvent, useState } from "react";

interface Props {
    caption?: string;
    id: string;
    required?:boolean
    dataSource?: FieldData[]
}

function SwitchLight(props:Props) {
    const {caption,
      id,
      required,
      dataSource} = props;   
      const [switchLightValue, setSwitchLightValue] = useState(false);
      const [fieldValid, setFieldValid] = useState(true);

      const isValid = () : boolean =>{
        return true;  
      }
    
      const applyValidation = () : void =>{
        setFieldValid(isValid());
      }
    
      const dataSourceItem : FieldData = {name:id, isValid , value:switchLightValue.toString(), applyValidation};
    
      if (dataSource){
        const existingIndex = dataSource.findIndex(item => item.name === dataSourceItem.name);
        // Se não existir, adiciona o novo item
        if (existingIndex === -1) {
            dataSource.push(dataSourceItem);
        } else {
            // Se existir, substitui o objeto existente pelo novo objeto
            dataSource[existingIndex] = dataSourceItem;
        }
      
      }

      const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        let newValue = !switchLightValue;
        setSwitchLightValue(newValue)
        dataSourceItem.value = newValue.toString();
      };
          
    return (
    
        <>
      <div className={style['switchLight']}>
        <label className={style['switchLight-switch']}>
          <input type="checkbox" checked={switchLightValue} onChange={handleChange}/>
          <span className={style['switchLight-switch-slider']}></span>
        </label>
        {caption && (<Typography fontSize="caption1" color="white">{caption}</Typography>)}
      
      </div>
      </>
    );
}

export default SwitchLight;