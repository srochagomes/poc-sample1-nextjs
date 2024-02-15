import FieldData from '@/types/structure/FieldData';
import Typography from '@/view/components/text-container/typography';
import React, { useState } from 'react';

interface RadioButtonListProps {
  id: string
  options: string[]
  onSelectionChange: (selectedOption: string) => void
  required?:boolean
  dataSource?: FieldData[]

}

const RadioButtonList: React.FC<RadioButtonListProps> = (props: RadioButtonListProps) => {
  const { id, options, onSelectionChange, required, dataSource } = props;
  const [selectedOption, setSelectedOption] = useState<string>('');
  const [fieldValid, setFieldValid] = useState(true);

  const isValid = () : boolean =>{

    if (required && (selectedOption == '')){
       return false;  
    }

    return true;  
  }

  const applyValidation = () : void =>{
    setFieldValid(isValid());
  }

  const dataSourceItem : FieldData = {name:id, isValid , value:selectedOption, applyValidation};

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


  const handleRadioChange = (option: string) => {
    setSelectedOption(option);
    onSelectionChange(option);
    dataSourceItem.value=selectedOption;
  };

  return (
    <div>
      {options.map((option) => (
        <label key={option}>
          <input
            type="radio"
            value={option}
            checked={selectedOption === option}
            onChange={() => handleRadioChange(option)}
          />
          <Typography fontSize="caption3" >{option}</Typography>
        </label>
      ))}
    </div>
  );
};

export default RadioButtonList;
