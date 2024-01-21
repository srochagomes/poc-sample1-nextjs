
import React from 'react';
import style from './AreaSearch.module.scss'
import WhereStayHowGo from './where-stay-how-go';
import WhereStay from './where-stay';
import HowGo from './how-go';
import RentCar from './rent-car';
import DestinyDiscovery from './destiny-discovery';





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
