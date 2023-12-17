import React from "react";

import style from "./TripTypeButtons.module.scss"
import IconSelecting from "@/components/button/icon-selecting";
import IconSVG from "@/components/icons/icon-svg";

interface Props{
    selectButton?: (indice:number)=>void
}

function TripTypeButtons(props:Props) {
    const {selectButton} = props
    const [btnIndiceSelected, setBtnIndiceSelected] = React.useState(0);
    const [btnFirstSelected, setBtnFirstSelected] = React.useState(true);
    const [btnSecondSelected, setBtnSecondSelected] = React.useState(false);
    const [btnThirdSelected, setBtnThirdSelected] = React.useState(false);
    const [btnFourthSelected, setBtnFourthSelected] = React.useState(false);
    const [btnFifthSelected, setBtnFifthSelected] = React.useState(false);
    
    const btnSetSelected = [setBtnFirstSelected, 
                           setBtnSecondSelected,
                           setBtnThirdSelected,
                           setBtnFourthSelected, 
                           setBtnFifthSelected];

    React.useEffect(() => {
        clearButtonSelected();
        setButtonSelected(btnIndiceSelected);
        if (selectButton){
            selectButton(btnIndiceSelected);
        }
        console.log("Mudou estado");
        
    }, [btnIndiceSelected]);

    const clearButtonSelected = () => {
        btnSetSelected.forEach(elemento => elemento(false));
    } 

    const setButtonSelected = (indice:number) => {
        btnSetSelected[indice](true);
    } 


    const feriazIconTypeClick = (indice:number) => {   
        setBtnIndiceSelected(indice);     
        console.log("Click teste");
    };

    return (    
        <div className={style['buttonsTripType']} >
            <IconSelecting isSelected={btnFirstSelected} 
                    normal={IconesEnum.FERIAZ_ONDE_FICA_COMO_CHEGAR.normal} 
                    whenSelected={IconesEnum.FERIAZ_ONDE_FICA_COMO_CHEGAR.selected}
                    caption="Onde ficar e como chegar"
                    onClick={()=>feriazIconTypeClick(0)} />
            <IconSelecting isSelected={btnSecondSelected} 
                    normal={IconesEnum.FERIAZ_ONDE_FICA.normal} 
                    whenSelected={IconesEnum.FERIAZ_ONDE_FICA.selected}
                    caption="Onde ficar"
                    onClick={()=>feriazIconTypeClick(1)} />
            <IconSelecting isSelected={btnThirdSelected} 
                    normal={IconesEnum.FERIAZ_COMO_CHEGAR.normal} 
                    whenSelected={IconesEnum.FERIAZ_COMO_CHEGAR.selected}
                    caption="Como chegar"
                    onClick={()=>feriazIconTypeClick(2)} />
            <IconSelecting isSelected={btnFourthSelected} 
                    normal={IconesEnum.FERIAZ_ALUGAR_CARRO.normal} 
                    whenSelected={IconesEnum.FERIAZ_ALUGAR_CARRO.selected}
                    caption="Alugar Carro"
                    onClick={()=>feriazIconTypeClick(3)} />                    
            <IconSelecting isSelected={btnFifthSelected} 
                    normal={IconesEnum.FERIAZ_DESCOBRIR_DESTINO.normal} 
                    whenSelected={IconesEnum.FERIAZ_DESCOBRIR_DESTINO.selected}
                    caption="Descobrir Destino"
                    onClick={()=>feriazIconTypeClick(4)} />                    

        </div>
    
    );
}


const IconesEnum = {
    FERIAZ_ONDE_FICA_COMO_CHEGAR: { selected: (
                                                <IconSVG path="/images/icons/onde-fica-como-chega-preenchido.svg" alt="Como Chegar e onde ficar" height={50} width={90}/>
                                                ),
                                    normal: (
                                             <IconSVG path="/images/icons/onde-fica-como-chega.svg" alt="Como Chegar e onde ficar" height={50} width={90} />
                                            )
                                  },
    FERIAZ_ONDE_FICA: { selected: (
                                        <IconSVG path="/images/icons/onde-fica-preenchido.svg" alt="Onde ficar" />
                                                ),
                                    normal: (
                                             <IconSVG path="/images/icons/onde-fica.svg" alt="Onde ficar" />
                                            )
                                  },
    FERIAZ_COMO_CHEGAR: { selected: (
                                                <IconSVG path="/images/icons/como-chegar-preenchido.svg" alt="Como Chegar" />
                                                ),
                                    normal: (
                                             <IconSVG path="/images/icons/como-chegar.svg" alt="Como Chegar" />
                                            )
                                  },                                   
    FERIAZ_ALUGAR_CARRO: { selected: (
                                                <IconSVG path="/images/icons/alugar-carro-preenchido.svg" alt="Alugar Carro" />
                                                ),
                                    normal: (
                                            <IconSVG path="/images/icons/alugar-carro.svg" alt="Alugar Carro" />
                                            )
                                },                                                                     
    FERIAZ_DESCOBRIR_DESTINO: { selected: (
                                                <IconSVG path="/images/icons/descobrir-destino-preenchido.svg" alt="Descobrir Destino" />
                                                ),
                                    normal: (
                                            <IconSVG path="/images/icons/descobrir-destino.svg" alt="Descobrir Destino" />
                                            )
                                },                                                                     


}

export default TripTypeButtons;