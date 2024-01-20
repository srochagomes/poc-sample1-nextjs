
import React from 'react';
import style from './AreaSearch.module.scss'

import dynamic from 'next/dynamic'
const WhereStay = dynamic(() => import("./where-stay"), { ssr: false });
const WhereStayHowGo = dynamic(() => import("./where-stay-how-go"), { ssr: false });
const HowGo = dynamic(() => import("./how-go"), { ssr: false });
const RentCar = dynamic(() => import("./rent-car"), { ssr: false });
const DestinyDiscovery = dynamic(() => import("./destiny-discovery"), { ssr: false });



interface Props{
    indice:number

}

const componentSearch = [
            <WhereStayHowGo/>,
            <WhereStay/>,
            <HowGo/>,
            <RentCar/>,
            <DestinyDiscovery/>
        ]

function AreaSearch(props:Props) {
    const {indice} = props;
    const [indiceSelected, setIndiceSelected] = React.useState(indice);
    
    

    React.useEffect(() => {        
        setIndiceSelected(indice);
    }, [indice]);
    

    return (
            <div className={style['areaSearch']} >
                {componentSearch[indiceSelected]}
            </div>
    )
}

export default AreaSearch;
