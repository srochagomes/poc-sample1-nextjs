import React from "react";

import style from "./TripTypeButtons.module.scss"
import IconSelecting from "@/view/components/button/icon-selecting";
import IconSVG from "@/view/components/icons/icon-svg";

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
        
        
    }, [btnIndiceSelected]);

    const clearButtonSelected = () => {
        btnSetSelected.forEach(elemento => elemento(false));
    } 

    const setButtonSelected = (indice:number) => {
        btnSetSelected[indice](true);
    } 


    const feriazIconTypeClick = (indice:number) => {   
        setBtnIndiceSelected(indice);     
        
    };

    return (    
        <div className={style['buttonsTripType']} >
            <IconSelecting isSelected={btnFirstSelected} 
                    normal={IconesEnum.FERIAZ_ONDE_FICA_COMO_CHEGAR.normal} 
                    whenSelected={IconesEnum.FERIAZ_ONDE_FICA_COMO_CHEGAR.selected}
                    caption="Onde ficar e como chegar"
                    onClick={()=>feriazIconTypeClick(0)} 
                    width="8rem"
                    height="3rem"
                    />
            <IconSelecting isSelected={btnSecondSelected} 
                    normal={IconesEnum.FERIAZ_ONDE_FICA.normal} 
                    whenSelected={IconesEnum.FERIAZ_ONDE_FICA.selected}
                    caption="Onde ficar"
                    onClick={()=>feriazIconTypeClick(1)} 
                    width="3rem"
                    height="3rem"
                    />
            <IconSelecting isSelected={btnThirdSelected} 
                    normal={IconesEnum.FERIAZ_COMO_CHEGAR.normal} 
                    whenSelected={IconesEnum.FERIAZ_COMO_CHEGAR.selected}
                    caption="Como chegar"
                    onClick={()=>feriazIconTypeClick(2)} 
                    width="3rem"
                    height="3rem"
                    />
            <IconSelecting isSelected={btnFourthSelected} 
                    normal={IconesEnum.FERIAZ_ALUGAR_CARRO.normal} 
                    whenSelected={IconesEnum.FERIAZ_ALUGAR_CARRO.selected}
                    caption="Alugar Carro"
                    onClick={()=>feriazIconTypeClick(3)} 
                    width="3rem"
                    height="3rem"
                    />                    
            <IconSelecting isSelected={btnFifthSelected} 
                    normal={IconesEnum.FERIAZ_DESCOBRIR_DESTINO.normal} 
                    whenSelected={IconesEnum.FERIAZ_DESCOBRIR_DESTINO.selected}
                    caption="Descobrir Destino"
                    onClick={()=>feriazIconTypeClick(4)}
                    width="3rem"
                    height="3rem"
                     />                    

        </div>
    
    );
}


const IconesEnum = {
    FERIAZ_ONDE_FICA_COMO_CHEGAR: { selected: (
                                                <IconSVG path="/images/icons/onde-fica-como-chega-preenchido.svg" alt="Como Chegar e onde ficar" width={93} height={50}/>
                                                ),
                                    normal: (
                                             <IconSVG path="/images/icons/onde-fica-como-chega.svg" alt="Como Chegar e onde ficar" width={93} height={50}/>
                                            )
                                  },
    FERIAZ_ONDE_FICA: { selected: (
                                        <IconSVG path="/images/icons/onde-fica-preenchido.svg" alt="Onde ficar" isFill={true}/>
                                                ),
                                    normal: (
                                             <IconSVG path="/images/icons/onde-fica.svg" alt="Onde ficar" isFill={true}/>
                                            )
                                  },
    FERIAZ_COMO_CHEGAR: { selected: (
                                                <IconSVG path="/images/icons/como-chegar-preenchido.svg" alt="Como Chegar" isFill={true}/>
                                                ),
                                    normal: (
                                             <IconSVG path="/images/icons/como-chegar.svg" alt="Como Chegar" isFill={true}/>
                                            )
                                  },                                   
    FERIAZ_ALUGAR_CARRO: { selected: (
                                                <IconSVG path="/images/icons/alugar-carro-preenchido.svg" alt="Alugar Carro" isFill={true}/>
                                                ),
                                    normal: (
                                            <IconSVG path="/images/icons/alugar-carro.svg" alt="Alugar Carro" isFill={true}/>
                                            )
                                },                                                                     
    FERIAZ_DESCOBRIR_DESTINO: { selected: (
                                                <IconSVG path="/images/icons/descobrir-destino-preenchido.svg" alt="Descobrir Destino" isFill={true}/>
                                                ),
                                    normal: (
                                            <IconSVG path="/images/icons/descobrir-destino.svg" alt="Descobrir Destino" isFill={true}/>
                                            )
                                },                                                                     


}

export default TripTypeButtons;