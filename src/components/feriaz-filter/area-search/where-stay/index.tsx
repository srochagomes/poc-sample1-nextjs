
import ButtonPrimary from '@/components/button/primary-button';
import style from './whereStay.module.scss'
import Typography from '@/components/text/typography';
interface Props{

}

function WhereStay(props:Props) {

    return (
            <div className={style['whereStay']} >
                <span>WhereStay</span>
                <ButtonPrimary >
                    <Typography fontSize="button-primary" color="white">Avançar</Typography>
                </ButtonPrimary>
            </div>
    )
}

export default WhereStay;
