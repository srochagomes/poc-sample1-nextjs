import Typography from '@/view/components/text/typography';
import React, { useState } from 'react';

interface RadioButtonListProps {
  options: string[];
  onSelectionChange: (selectedOption: string) => void;
}

const RadioButtonList: React.FC<RadioButtonListProps> = ({ options, onSelectionChange }) => {
  const [selectedOption, setSelectedOption] = useState<string>('');

  const handleRadioChange = (option: string) => {
    setSelectedOption(option);
    onSelectionChange(option);
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
