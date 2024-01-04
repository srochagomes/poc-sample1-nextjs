import IconClick from '@/components/button/icon-click';
import style from './DateSelection.module.scss'
import { FieldIconPath } from '@/types/enums/FieldIconPath';
import Typography from '@/components/text/typography';

interface Props {
    position:string
    
}

function DateSelection(props:Props) {
    let {position} = props;

    return (
        <div className={style['dateSelection']} data-position={position} >
            <div  className={style['dateSelection-top']}>                
                <IconClick  path={FieldIconPath.fowardback} widthSize={10} heightSize={15}/>
                
                <div className={style['dateSelection-top-month']} >
                    <Typography fontSize="caption2">Dezembro</Typography>
                    <Typography fontSize="caption3">2024</Typography>
                </div>               
                <IconClick path={FieldIconPath.fowardto} widthSize={10} heightSize={15}/>
            </div>
        </div>
    )
}

export default DateSelection;