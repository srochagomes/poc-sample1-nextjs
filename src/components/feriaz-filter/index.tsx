import React from "react";
import IconSelecting from "../button/icon-selecting";
import IconSVG from "../icons/icon-svg";

import style from "./FeriazFilter.module.scss"
import TripTypeButtons from "./trip-type-buttons";

interface Props{

}

function FeriazFilter(props:Props) {


    const feriazIconTypeClick = (indice:number) => {   
        console.log("Click teste");
    };

    return (
    <section className={style['feriazFilterContainer']}  >
        <TripTypeButtons/>
        <div className={style['feriazFilterContainer-parameters']}  >

        </div>
    </section>
    );
}


export default FeriazFilter;