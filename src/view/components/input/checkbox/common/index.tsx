import FieldData from "@/types/structure/FieldData";
import Typography from "@/view/components/text-container/typography";
import { useState } from "react";

interface Option {
    valor: string;
    caption: string;
  }
  
  interface CheckboxListProps {
    id:string;
    options: Option[];
    onSelectionChange: (selectedOptions: string[]) => void;
    dataSource?: FieldData[],   
    required?:boolean 
  }
  
  const CheckboxList: React.FC<CheckboxListProps> = (props: CheckboxListProps) => {
    const { options, onSelectionChange, required=false,id, dataSource } = props;
    const [selectedOptions, setSelectedOptions] = useState<string[]>([]);
    const [selectedOptionsJson, setSelectedOptionsJson] = useState<string>('');
    const [fieldValid, setFieldValid] = useState(true);
  
    const isValid = () : boolean =>{

      if (required && (selectedOptions.length<1)){
         return false;  
      }
      
      return true;  
    }
    
  
    
    const applyValidation = () : void =>{
      setFieldValid(isValid());
    }


    const dataSourceItem : FieldData = {name:id, isValid,value:selectedOptionsJson, applyValidation};
    
    const handleCheckboxChange = (option: string) => {
      const updatedSelection = selectedOptions.includes(option)
        ? selectedOptions.filter((selected) => selected !== option)
        : [...selectedOptions, option];
  
      setSelectedOptions(updatedSelection);
      onSelectionChange(updatedSelection);
      setSelectedOptionsJson(JSON.stringify(updatedSelection));
      
    };


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

  
    return (
      <div key={id}>
        {options.map((option) => (
          <label key={option.valor}>
            <input
              type="checkbox"
              value={option.valor}
              checked={selectedOptions.includes(option.valor)}
              onChange={() => handleCheckboxChange(option.valor)}
            />
            <Typography fontSize="input-box" >{option.caption}</Typography>
          </label>
        ))}
      </div>
    );
  };
  
  export default CheckboxList;