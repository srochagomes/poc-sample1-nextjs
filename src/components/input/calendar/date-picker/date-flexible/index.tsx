import Typography from '@/components/text/typography';
import style from './DateFlexible.module.scss'
import GroupSelectingButton from '@/components/button/group-selecting';
import DateOperations, { DateFields } from '@/types/date/DateOperations';
import { GroupButtonItemData, GroupButtonItemProps } from '@/components/button/group-selecting/button';
import { useTranslation } from "next-i18next"
import InputField from '@/components/input/text';
import { FieldTypeEnum } from '@/types/enums/FieldTypeEnum';
import CheckboxList from '@/components/input/checkbox/common';
import { useState } from 'react';
import RadioButtonList from '@/components/input/radiobutton/common';


interface Props{

}

function DateFlexible(props:Props) {
    const dateTranslate = useTranslation('datedescription');    

    const handleSelectionChange = (selectedOption: string) => {
      console.log(`Selected option: ${selectedOption}`);
    };

    const optionsData = ['Um final de semana', 'Uma semana', 'Duas semanas' ];
    
    
    const validateInput = (event: React.ChangeEvent<HTMLInputElement>) : void =>{
        const input = event.target;
        // Remova caracteres não numéricos
        input.value = input.value.replace(/\D/g, '');
        const maxLength = input.getAttribute('maxlength');

        if(!maxLength){
          return ;
        }

        // Limite a quantidade de dígitos
        if (input.value.length > parseInt(maxLength)) {
          input.value = input.value.slice(0, parseInt(maxLength));
        }
    }
    const generateMonthsList = (): GroupButtonItemData[] => {
        const currentMonth = DateOperations.getCurrentMonth();
        const currentYear = DateOperations.getCurrentYear();
      
        const monthsList: GroupButtonItemData[] = [];
      
        for (let i = 0; i < 12; i++) {
          const dateFields: DateFields = {
            month: currentMonth + i > 12 ? (currentMonth + i) % 12 : currentMonth + i,
            year: currentMonth + i > 12 ? currentYear + 1 : currentYear,
          };
      
          const date = DateOperations.toDate(dateFields);
      
          const monthItem: GroupButtonItemData = {
            caption: `${dateTranslate.t('month.short._'+dateFields.month)}/${dateFields.year}`,
            value: `${dateFields.month}${dateFields.year}`
          };
      
          monthsList.push(monthItem);
        }
      
        return monthsList;
      };
      
      // Exemplo de uso
      const generatedMonthsList = generateMonthsList();


    return (
        <div className={style['dateFlexible']}>
            <div className={style['dateFlexible-title']}>
                <Typography fontSize="caption2">Selecione o mês do embarque</Typography>                            
            </div>
            <div className={style['dateFlexible-months']}>
                <GroupSelectingButton itens={generatedMonthsList} isMultipleChoise={false}/>
            </div>
            <div className={style['dateFlexible-diasViagem']}>
                <Typography fontSize="caption2">Insira a quantidade de dias da viagem</Typography>            
                <div className={style['dateFlexible-diasViagem-field']}>
                  <input type={FieldTypeEnum.Number} maxLength={2} size={2} 
                      onInput={validateInput}/>
                </div>
                
            </div>
            <div className={style['dateFlexible-checkList']}>
              <RadioButtonList options={optionsData} onSelectionChange={handleSelectionChange} />
            </div>

            
            

            
        </div>
    );
}

export default DateFlexible;