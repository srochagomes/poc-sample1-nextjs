
import ButtonPrimary from '@/components/button/primary-button';
import style from './HowGo.module.scss'
import Typography from '@/components/text/typography';
interface Props{

}

function HowGo(props:Props) {

    return (
            <div className={style['HowGo']} >
                <span>HowGo</span>
                <ButtonPrimary >
                    <Typography fontSize="button-primary" color="white">Avançar</Typography>
                </ButtonPrimary>

            </div>
    )
}

export default HowGo;
