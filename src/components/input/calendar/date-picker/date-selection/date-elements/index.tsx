import Typography from '@/components/text/typography';
import style from './DateElements.module.scss'
import DateOperations from '@/types/date/DateOperations';
import { useTranslation } from "next-i18next"
import { MouseEvent, MouseEventHandler, useEffect, useState } from 'react';

interface Props {
    dateBase:Date
}

function DateElements(props:Props) {
  const {dateBase} = props;
  const dateTranslate = useTranslation('datedescription');
  const [selectedKeys, setSelectedKeys] = useState<string[]>([]);

  const daysOfWeek = [
    dateTranslate.t('weekday.short._1'), 
    dateTranslate.t('weekday.short._2'), 
    dateTranslate.t('weekday.short._3'), 
    dateTranslate.t('weekday.short._4'), 
    dateTranslate.t('weekday.short._5'), 
    dateTranslate.t('weekday.short._6'), 
    dateTranslate.t('weekday.short._7') ];

  // Definindo a data inicial para o primeiro dia do mês
  const startDate = dateBase;

  useEffect(() => {
    setSelectedKeys(selectedKeys);
  }, [selectedKeys]);

  const startIndex = startDate.getDay(); // 0 para DOM, 1 para SEG, ..., 6 para SAB

  // Array para armazenar os dias do mês
  const daysOfMonth = [];

  // Adicionar elementos nulos para preencher os dias antes do primeiro dia do mês
  for (let i = 0; i < startIndex; i++) {
    daysOfMonth.push(null);
  }

  // Preencher o array com os dias do mês
  for (let i = 0; i < 31; i++) {
    const currentDay = new Date(startDate);
    currentDay.setDate(startDate.getDate() + i);
    if (DateOperations.getMonthFromDate(dateBase) === DateOperations.getMonthFromDate(currentDay)){
        daysOfMonth.push(currentDay);
    }
    
  }

  const isSelectDay = (index:number|null) : boolean=>{
    if (!index) return false;
    if (selectedKeys.includes(index.toString())) {
      return true;
    }
    return false;
  }

  const selectDay = (event:React.MouseEvent<HTMLDivElement>, index:number): void =>{
    const keyAttributeValue = index.toString();
    console.log('Component:', event.currentTarget);
    console.log('Valor da chave:', keyAttributeValue);

    if (keyAttributeValue) {
      setSelectedKeys((prevKeys) => {
        if (prevKeys.includes(keyAttributeValue)) {
          // Se a chave já estiver no estado, remova-a
          return prevKeys.filter((key) => key !== keyAttributeValue);
        } else {
          // Se a chave não estiver no estado, adicione-a
          return [...prevKeys, keyAttributeValue];
        }
      });
    }
    console.log('Lista selecionados:', selectedKeys);
  }

  return (
    <div className={style['dateElements']}>
      <div className={style['dateElements-container']}>
        {daysOfWeek.map((day, index) => (
            <div key={index} className={style['dateElements-dayTitle']}>
            <Typography fontSize="caption4">{day}</Typography>
            </div>
        ))}

        {daysOfMonth.map((day, index) => (
            
            <div key={day?day.getTime():index} className={
              isSelectDay(day?day.getTime():null)?`${style['dateElements-dayCell']} ${style['dateElements-dayCell-click']}`
                :`${style['dateElements-dayCell']}`
               }
              onClick={(event) => selectDay(event, day?day.getTime():0)}>
            {day && (               
                <Typography fontSize="caption4">{day.getDate().toString()}</Typography>              
            )}
            </div>
        ))}
      </div>  
      
    </div>
  );
};


export default DateElements;
