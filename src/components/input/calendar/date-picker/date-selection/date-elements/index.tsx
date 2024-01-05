import Typography from '@/components/text/typography';
import style from './DateElements.module.scss'
import DateOperations from '@/types/date/DateOperations';

interface Props {
    dateBase:Date
}

function DateElements(props:Props) {
  const {dateBase} = props;

  const daysOfWeek = ['DOM', 'SEG', 'TER', 'QUA', 'QUI', 'SEX', 'SAB'];

  // Definindo a data inicial para o primeiro dia do mês
  const startDate = dateBase;

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
        daysOfMonth.push(currentDay.getDate());
    }
    
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
            <div key={index} className={style['dateElements-dayCell']}>
            {day && (<Typography fontSize="caption5">{day.toString()}</Typography>)}
            </div>
        ))}
      </div>  
      
    </div>
  );
};


export default DateElements;
