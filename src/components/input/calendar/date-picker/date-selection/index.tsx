import IconClick from '@/components/button/icon-click';
import style from './DateSelection.module.scss'
import { FieldIconPath } from '@/types/enums/FieldIconPath';
import Typography from '@/components/text/typography';
import DateElements from './date-elements';
import DateOperations, { DateFields } from '@/types/date/DateOperations';
import { useTranslation } from 'react-i18next';

interface Props {
    position:string
    dateBase:Date
    
}

function DateSelection(props:Props) {
    let {position, dateBase} = props;
    const dateTranslate = useTranslation('datedescription')
    const monthDescription = dateTranslate.t('month._'+DateOperations.getMonthFromDate(dateBase).toString());
    const yearValue = DateOperations.getYearFromDate(dateBase).toString()

    return (
        <div className={style['dateSelection']} data-position={position} >
            <div  className={style['dateSelection-top']}>                
                <IconClick  path={FieldIconPath.fowardback} widthSize={10} heightSize={15}/>
                
                <div className={style['dateSelection-top-month']} >
                    <Typography fontSize="caption2">{monthDescription}</Typography>
                    <Typography fontSize="caption3">{yearValue}</Typography>
                </div>               
                <IconClick path={FieldIconPath.fowardto} widthSize={10} heightSize={15}/>
            </div>

            <DateElements dateBase={dateBase}/>
        </div>
    )
}

export function createDateSelection(totalElements:number, dateValue:DateFields) {

    const dateSelections = Array.from({ length: totalElements }, (_, index) => {
        let position;
  
        if (totalElements === 1){
          position = 'onlyone';
        }else if (index === 0) {
          position = 'first';
        } else if (index === totalElements - 1) {
          position = 'last';
        } else {
          position = 'middle';
        }

        let dateCalendar = DateOperations.toDate(dateValue);
        
        dateCalendar = DateOperations.addMonths(dateCalendar, index);
        
        return (
          <DateSelection key={index} position={position} dateBase={dateCalendar}/>
        );
      });  

      return dateSelections;
}


export default DateSelection;
