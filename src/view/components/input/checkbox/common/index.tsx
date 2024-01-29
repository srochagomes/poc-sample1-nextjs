import Typography from "@/view/components/text/typography";
import { useState } from "react";

interface Option {
    valor: string;
    caption: string;
  }
  
  interface CheckboxListProps {
    options: Option[];
    onSelectionChange: (selectedOptions: string[]) => void;    
  }
  
  const CheckboxList: React.FC<CheckboxListProps> = ({ options, onSelectionChange }) => {
    const [selectedOptions, setSelectedOptions] = useState<string[]>([]);
  
    const handleCheckboxChange = (option: string) => {
      const updatedSelection = selectedOptions.includes(option)
        ? selectedOptions.filter((selected) => selected !== option)
        : [...selectedOptions, option];
  
      setSelectedOptions(updatedSelection);
      onSelectionChange(updatedSelection);
    };
  
    return (
      <div>
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