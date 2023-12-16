import IconSelecting from "../button/icon-selecting";
import IconSVG from "../icons/icon-svg";

import style from "./FeriazFilter.module.scss"

interface Props{

}

function FeriazFilter(props:Props) {

    const feriazOndeFicaComoChegarSelect = <IconSVG path="/images/icons/onde-fica-como-chega-preenchido.svg" alt="Como Chegar e onde ficar"/>
    const feriazOndeFicaComoChegar = <IconSVG path="/images/icons/onde-fica-como-chega.svg" alt="Como Chegar e onde ficar"/>

    const feriazIconTypeClick = () => {        
        console.log("Click")
    };

    return (
    <section className={style['feriazFilterContainer']}  >
        <IconSelecting isSelected={false} normal={feriazOndeFicaComoChegar} whenSelected={feriazOndeFicaComoChegarSelect} />
    </section>
    );
}

export default FeriazFilter;