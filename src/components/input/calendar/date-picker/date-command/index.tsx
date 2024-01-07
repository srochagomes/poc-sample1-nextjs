import ButtonPrimary from '@/components/button/primary-button';
import style from './DateCommand.module.scss'
import Typography from '@/components/text/typography';
import ButtonStyle from '@/components/button/style-buton';
import LinkAction from '@/components/link/action';

interface Props {
    onClickDateFlexible : (event:React.MouseEvent<HTMLDivElement>) => void;
    onClickClear: (event:React.MouseEvent<HTMLDivElement>) => void;
    onClickConfirm: (event:React.MouseEvent<HTMLButtonElement>) => void;
    
}

function DateCommand(props:Props) {
    const {onClickClear, onClickConfirm, onClickDateFlexible} = props;

    return (
        <div className={style['dateCommand']}>
            <div className={style['dateCommand-flexible']}>
                <LinkAction onClick={onClickDateFlexible}>
                    <Typography fontSize="button-link" color='pink'>Escolher data flexível</Typography>
                </LinkAction>
            </div>
            <div className={style['dateCommand-choose']}>
                <LinkAction onClick={onClickClear}>
                    <Typography fontSize="button-link">Apagar</Typography>
                </LinkAction>
                <ButtonPrimary onClick={onClickConfirm} >                    
                    <Typography fontSize="caption3" color="white">Confirmar</Typography>
                </ButtonPrimary>
            </div>
        </div>
        

    );
}

export default DateCommand;