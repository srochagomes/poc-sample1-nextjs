import React from "react";
import IconSelecting from "../button/icon-selecting";
import IconSVG from "../icons/icon-svg";

import style from "./FeriazFilter.module.scss"
import TripTypeButtons from "./trip-type-buttons";
import AreaSearch from "./area-search";

interface Props{

}

function FeriazFilter(props:Props) {
    const [indiceSelected, setIndiceSelected] = React.useState(0);

    const feriazIconTypeClick = (indice:number) => {   
        setIndiceSelected(indice);
    };

    return (
        <section className={style['feriazFilterContainer']}  >
            <TripTypeButtons selectButton={feriazIconTypeClick}/> 
             <div className={style['feriazFilterContainer-parameters']}  >
                <AreaSearch indice={indiceSelected}/>
            </div> 
        </section>
    );
}


export default FeriazFilter;