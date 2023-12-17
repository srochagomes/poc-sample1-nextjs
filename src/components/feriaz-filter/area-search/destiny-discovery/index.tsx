
import ButtonPrimary from '@/components/button/primary-button';
import style from './DestinyDiscovery.module.scss'
import Typography from '@/components/text/typography';
interface Props{

}

function DestinyDiscovery(props:Props) {

    return (
            <div className={style['DestinyDiscovery']} >
                <span>DestinyDiscovery</span>
                <ButtonPrimary >
                    <Typography fontSize="button-primary" color="white">Avançar</Typography>
                </ButtonPrimary>

            </div>
    )
}

export default DestinyDiscovery;
