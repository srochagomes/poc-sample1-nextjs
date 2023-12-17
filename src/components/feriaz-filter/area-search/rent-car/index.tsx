
import ButtonPrimary from '@/components/button/primary-button';
import style from './RentCar.module.scss'
import Typography from '@/components/text/typography';
interface Props{

}

function RentCar(props:Props) {

    return (
            <div className={style['RentCar']} >
                <span>RentCar</span>
                <ButtonPrimary >
                    <Typography fontSize="button-primary" color="white">Avançar</Typography>
                </ButtonPrimary>

            </div>
    )
}

export default RentCar;
