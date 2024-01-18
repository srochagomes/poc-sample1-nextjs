import { useEffect, useState } from "react";
import style from "./SimpleDropdown.module.scss"
import Typography from "@/components/text/typography";
import IconSVG from "@/components/icons/icon-svg";
import { FieldIconPath } from "@/types/enums/FieldIconPath";
import { FieldIconEnum } from "@/types/enums/FieldIconEnum";
import SimpleDropdownPopup, { SimpleDrodownItem } from "./ pop-up";





interface Props {     
    roundType?:String
    placeholder?:string
    caption?:string
    colorCaprion?:string    
    width?:string
    itens: SimpleDrodownItem[]
    
}



function SimpleDropdow(props:Props) {
  const {caption, placeholder, roundType, width, itens = []} = props;
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
                                <IconSVG path={itensSelectd[0].icon} alt={placeholder} height={18} width={18} />)}
                              </div>
                              : <></>;

  const iconRightComponent = iconRight ?
                              <div className={style['simpleDropdownContainer-iconright']}>
                                <IconSVG path={FieldIconPath[iconRight]} alt={placeholder} height={18} width={18} />
                              </div>
                              : <></>;


  const captionComponent = caption ? <Typography fontSize="input-box" >{caption}</Typography>
                                     : <></>;

  return (
    
    <div className={style['simpleDropdownContainer']}
          style={{ width: `${width}` }}
          data-iconleft={iconLeft?'true':'false'}
          data-iconright={iconRight?'true':'false'}
          data-round={roundType}
          
          onClick={clickOpen
          }
          >    
            
            
            {iconLeftComponent}

            <div className={style['simpleDropdownContainer-groupField']} >
              {captionComponent}
              <input type="text" readOnly={true} value={textValue} />
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