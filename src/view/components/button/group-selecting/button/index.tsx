import Typography from '@/view/components/text-container/typography';
import  style from './GroupButtonItem.module.scss'

export interface GroupButtonItemData{
    caption:string;
    value:string;
}

export interface GroupButtonItemProps{    
    caption:string;
    value:string;
    isSelecting: (value:string)=>boolean; 
    onClickItemButton: (event:React.MouseEvent<HTMLDivElement>, value:string)=>void;
}

function GroupButtonItem (props:GroupButtonItemProps){
    const {caption, value, isSelecting, onClickItemButton} = props;    
    
    return (
        <div className={isSelecting(value)?
            `${style['groupButtonItem']} ${style['groupButtonItem-selected']}`
        : `${style['groupButtonItem']}`}
            onClick={(event)=>onClickItemButton?onClickItemButton(event, value):null}
        >
            <Typography fontSize="caption3-a">{caption}</Typography>
        </div>

    )
}

export default GroupButtonItem;
