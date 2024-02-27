import { useEffect, useState } from "react";
import style from "./MultipleCheckDropdown.module.scss"
import Typography from "@/view/components/text-container/typography";
import IconSVG from "@/view/components/icons/icon-svg";
import { FieldIconPath } from "@/types/enums/FieldIconPath";
import { FieldIconEnum } from "@/types/enums/FieldIconEnum";
import MultipleCheckDropdownPopup from "./pop-up";
import { ComponentTypeEnum } from "@/types/enums/ComponentTypeEnum";
import DrodownItem  from '@/view/components/input/dropdown/ItemDropdown';
import FieldData from "@/types/structure/FieldData";





interface Props {  
    id: string   
    required?:boolean
    dataSource?: FieldData[],
    roundType?:string
    iconLeftPath?:string
    placeholder?:string
    caption?:string
    colorCaprion?:string    
    width?:string
    itens: DrodownItem[]
    
}



function MultipleCheckDropdow(props:Props) {
  const {id, caption, placeholder, roundType, width, itens = [], iconLeftPath='', required, dataSource} = props;
  const [openOptions, setOpenOptions] = useState(false);
  const [itensSelectd, setItensSelected] = useState<DrodownItem[]>([]);
  const [textValue, setTextValue] = useState<string>("");
  const [textJson, setTextJson] = useState<string>('');
  const [fieldValid, setFieldValid] = useState(true);

  const isValid = () : boolean =>{

    if (required && (itensSelectd.length<1)){
       return false;  
    }

    return true;  
  }
  const applyValidation = () : void =>{
    setFieldValid(isValid());
  }

  const dataSourceItem : FieldData = {name:id, isValid , value:textJson, applyValidation};

  const onItensSelected = (itens:DrodownItem[]): void  => {
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
    setTextJson(JSON.stringify(itensSelectd.map((item)=>item.key)));     
  }, [itensSelectd]);

  
  if (dataSource){
    const existingIndex = dataSource.findIndex(item => item.name === dataSourceItem.name);
    // Se não existir, adiciona o novo item
    if (existingIndex === -1) {
        dataSource.push(dataSourceItem);
    } else {
        // Se existir, substitui o objeto existente pelo novo objeto
        dataSource[existingIndex] = dataSourceItem;
    }
  
  }

  const iconRight= openOptions? FieldIconEnum.UpDownward:FieldIconEnum.ArrowDownward;
  
  const iconLeftComponent =  <div className={style['multipleCheckDropdownContainer-iconleft']}>                                
                                  <div className={style['multipleCheckDropdownContainer-iconleft-area']}>
                                    <IconSVG path={iconLeftPath} alt={placeholder} isFill={true} />
                                  </div>
                              </div>;

  const iconRightComponent = iconRight ?
                              <div className={style['multipleCheckDropdownContainer-iconright']}>        
                                  <div className={style['multipleCheckDropdownContainer-iconright-area']}>
                                    <IconSVG path={FieldIconPath[iconRight]} alt={placeholder} isFill={true} />
                                  </div>
                                      
                                </div>                                
                              
                              : <></>;


  const captionComponent = caption ? <Typography 
                                        idLink={id}
                                        type={ComponentTypeEnum.Label} fontSize="input-box" >{caption}</Typography>
                                     : <></>;

  return (
    
    <div className={style['multipleCheckDropdownContainer']}
          style={{ width: `${width}` }}
          data-iconleft={'true'}
          data-iconright={iconRight?'true':'false'}
          data-round={roundType}          
          onClick={clickOpen}
          >
             {iconLeftComponent}

            <div className={style['multipleCheckDropdownContainer-groupField']} >
              {captionComponent}
              <input id={id} type="text" readOnly={true} value={textValue} />
            </div>
            {iconRightComponent}
            {openOptions && (<MultipleCheckDropdownPopup show={openOptions} 
                                itens={itens} 
                                itensSelected={itensSelectd} 
                                onClose={onClosePopup}
                                onItensSelected={onItensSelected}/>)}
    </div>
    
    
    
  );
}

export default MultipleCheckDropdow;