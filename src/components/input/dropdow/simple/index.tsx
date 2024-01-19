import { useEffect, useState } from "react";
import style from "./SimpleDropdown.module.scss"
import Typography from "@/components/text/typography";
import IconSVG from "@/components/icons/icon-svg";
import { FieldIconPath } from "@/types/enums/FieldIconPath";
import { FieldIconEnum } from "@/types/enums/FieldIconEnum";
import SimpleDropdownPopup, { SimpleDrodownItem } from "./ pop-up";
import { ComponentTypeEnum } from "@/types/enums/ComponentTypeEnum";
import { generateInputRandomId } from "@/types/utils/MathFunctions";





interface Props {  
    id?: string   
    roundType?:String
    placeholder?:string
    caption?:string
    colorCaprion?:string    
    width?:string
    itens: SimpleDrodownItem[]
    
}



function SimpleDropdow(props:Props) {
  const {id = generateInputRandomId(), caption, placeholder, roundType, width, itens = []} = props;
  const [openOptions, setOpenOptions] = useState(false);
  const [itensSelectd, setItensSelected] = useState<SimpleDrodownItem[]>([]);
  const [textValue, setTextValue] = useState<string>("");


  const onItensSelected = (itens:SimpleDrodownItem[]): void  => {
    setItensSelected(itens);
  }

  const onClosePopup = (value:boolean): void  => {
    setOpenOptions(value);
  }
  const clickOpen = (event:React.MouseEvent<HTMLDivElement>): void =>{
    setOpenOptions(!openOptions);

  }
  
  
  useEffect(() => {
    setTextValue(itensSelectd.map((item) => item.caption).join(", "));
  }, [itensSelectd]);

  const iconLeft=FieldIconEnum.Airplane;
  
  const iconRight= openOptions? FieldIconEnum.UpDownward:FieldIconEnum.ArrowDownward;
  
  const iconLeftComponent = iconLeft ?
                              <div className={style['simpleDropdownContainer-iconleft']}>
                                {itensSelectd.length>0 && (
                                  <div className={style['simpleDropdownContainer-iconleft-area']}>
                                    <IconSVG path={itensSelectd[0].icon} alt={placeholder} isFill={true} />
                                  </div>)}                                
                              </div>
                              : <></>;

  const iconRightComponent = iconRight ?
                              <div className={style['simpleDropdownContainer-iconright']}>        
                                  <div className={style['simpleDropdownContainer-iconright-area']}>
                                    <IconSVG path={FieldIconPath[iconRight]} alt={placeholder} isFill={true} />
                                  </div>
                                      
                                </div>                                
                              
                              : <></>;


  const captionComponent = caption ? <Typography 
                                        idLink={id}
                                        type={ComponentTypeEnum.Label} fontSize="input-box" >{caption}</Typography>
                                     : <></>;

  return (
    
    <div className={style['simpleDropdownContainer']}
          style={{ width: `${width}` }}
          data-iconleft={iconLeft?'true':'false'}
          data-iconright={iconRight?'true':'false'}
          data-round={roundType}          
          onClick={clickOpen}
          >
             {iconLeftComponent}

            <div className={style['simpleDropdownContainer-groupField']} >
              {captionComponent}
              <input id={id} type="text" readOnly={true} value={textValue} />
            </div>
            {iconRightComponent}
            <SimpleDropdownPopup show={openOptions} 
                itens={itens} 
                onClose={onClosePopup}
                onItensSelected={onItensSelected}/>
    </div>
    
    
    
  );
}

export default SimpleDropdow;