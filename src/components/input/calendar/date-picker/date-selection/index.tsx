import IconClick from '@/components/button/icon-click';
import style from './DateSelection.module.scss'
import { FieldIconPath } from '@/types/enums/FieldIconPath';
import Typography from '@/components/text/typography';
import DateElements from './date-elements';
import DateOperations, { DateFields } from '@/types/date/DateOperations';
import { useTranslation } from "next-i18next"
import { useEffect } from 'react';

interface Props {
    position:string
    dateBase:Date
    isSelectDay: (index:number|null)=>boolean;
    isDayBetweenSelected: (keyAttributeValue:number|null) => boolean;    
    onSelectDay: (event:React.MouseEvent<HTMLDivElement>, index:number)=> void;
    onClickToFoward: ()=>void;    
    onClickToBack: ()=>void;

    
}

function DateSelection(props:Props) {
    let {position, dateBase, isSelectDay, isDayBetweenSelected, onSelectDay, onClickToBack, onClickToFoward} = props;
    const dateTranslate = useTranslation('datedescription')
    let monthDescription = dateTranslate.t('month._'+DateOperations.getMonthFromDate(dateBase).toString());
    let yearValue = DateOperations.getYearFromDate(dateBase).toString()

    
    return (
        <div className={style['dateSelection']} data-position={position} >
            <div  className={style['dateSelection-top']}>                
                <IconClick  path={FieldIconPath.fowardback} widthSize={10} heightSize={15} onClick={onClickToBack}/>
                <div className={style['dateSelection-top-month']} >
                    <Typography fontSize="caption2">{monthDescription}</Typography>
                    <Typography fontSize="caption3">{yearValue}</Typography>
                </div>               
                <IconClick path={FieldIconPath.fowardto} widthSize={10} heightSize={15}  onClick={onClickToFoward}/>
            </div>
            <div  className={style['dateSelection-divider']}/>
            <DateElements isSelectDay={isSelectDay} 
                          isDayBetweenSelected={isDayBetweenSelected}
                          selectDay={onSelectDay} 
                          dateBase={dateBase}/>
        </div>
    )
}

export function createDateSelection(
                        totalElements:number, 
                        dateValue:DateFields,
                        isSelectDay: (index:number|null)=>boolean,
                        isDayBetweenSelected: (keyAttributeValue:number|null) => boolean,
                        onSelectDay: (event:React.MouseEvent<HTMLDivElement>, index:number)=> void,
                        onClickToBack: ()=>void,
                        onClickToFoward: ()=>void) {

    const dateSelections = Array.from({ length: totalElements }, (_, index) => {
        let position;
  
        if (totalElements < 2){
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
          <DateSelection key={index} position={position} dateBase={dateCalendar}
            isSelectDay={isSelectDay} 
            isDayBetweenSelected= {isDayBetweenSelected}
            onSelectDay={onSelectDay} 
            onClickToBack={onClickToBack} 
            onClickToFoward={onClickToFoward} />
        );
      });  

      return dateSelections;
}


export default DateSelection;
