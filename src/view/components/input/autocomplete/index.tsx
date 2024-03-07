import { FieldIconEnum } from "@/types/enums/FieldIconEnum"
import { FieldTypeDetail, FieldTypeEnum } from "@/types/enums/FieldTypeEnum"
import FieldData from "@/types/structure/FieldData"
import { KeyboardEvent, useEffect, useRef, useState } from "react"
import style from "./InputAutoCompleteField.module.scss"
import IconSVG from "../../icons/icon-svg"
import { FieldIconPath } from "@/types/enums/FieldIconPath"
import Typography from "../../text-container/typography"
import { ComponentTypeEnum } from "@/types/enums/ComponentTypeEnum"
import IconSelecting from "../../button/icon-selecting"
import { IMaskInput } from "react-imask"
import InputAutoClompletePopup from "./pop-up"

export interface SearchBody{
  search:string
}

export interface SearchItens{
  id:string
  value:string
}

export interface FieldsProps {
    id: string
    required?:boolean    
    roundType?:String
    placeholder?:string
    caption?:string
    colorCaprion?:string
    iconLeft?:FieldIconEnum
    width?:string
    dataSource?: FieldData[]
    processItens:(body:SearchBody)=>Promise<SearchItens[]> 
    attributeItemDisplay?:string
}

function InputAutoCompleteField(props:FieldsProps) {

    const { caption, 
        width, 
        iconLeft, 
        colorCaprion, 
        required = false,
        attributeItemDisplay,
        processItens,
        roundType, 
        placeholder, 
        id,
        dataSource
      } = props;
      
      const [fieldValid, setFieldValid] = useState(true);
      const [showPopup, setShowPopup] = useState(false);
      
      const [fieldType, setFieldType] = useState(FieldTypeEnum.Text);
      const [isItemSelected, setIsItermSelected] = useState<boolean>(false);
      const [value, setValue] = useState("");
      const [itensSearched, setItensSearched] = useState<SearchItens[]>([]);
      const popupSearch = useRef<HTMLDivElement>(null);

      const isValid = () : boolean =>{

        if (required && (value.length<1 || value.trim().length < 1)){
           return false;  
        }else if (!required && (value.length<1 || value.trim().length < 1)){
          return true;  
        }

        return FieldTypeDetail[fieldType].regex.test(value);
      }
      
      const applyValidation = () : void =>{
        setFieldValid(isValid());
      }


      const eventAssociado = (text:string) : void =>{
        console.log('Evento ',text);

      }
      
      

      useEffect(() => {
        setShowPopup(itensSearched.length>0)
      }, [itensSearched]);

      function handleKeyDown(event:KeyboardEvent<HTMLInputElement>) {
        if (event.key === 'ArrowDown') {
          event.preventDefault(); // Evita que o comportamento padrão da seta para baixo seja acionado (por exemplo, rolagem da página)
          popupSearch?.current?.focus();          
        }
      }

      const dataSourceItem : FieldData = {name:id, isValid , value, applyValidation};
      

      const iconLeftComponent = iconLeft ?
      <div className={style['inputAutoCompleteContainer-iconleft']}>
        <div className={style['inputAutoCompleteContainer-iconleft-area']}>
            <IconSVG path={FieldIconPath[iconLeft]} alt={placeholder} isFill={true} />
        </div>
        
      </div>
      : <></>;

      const captionComponent = caption ? <div className={style['inputAutoCompleteContainer-caption']}>
                            <Typography type={ComponentTypeEnum.Label}
                            idLink={id}
                                fontSize="input-box" color={colorCaprion?colorCaprion:'black'}>{caption}</Typography>
                        </div> 
                        : <></>;



        const onChange = (event: React.ChangeEvent<HTMLInputElement>): void => {                    
            if (isItemSelected && value !== event.target.value){
              setIsItermSelected(false);
              setValue('')          
            }
  
            const valorInput: string = event.target.value;
            setValue(valorInput);
            setFieldValid(true);
            
            if(valorInput.length>3 && processItens){           
              
              processItens({search:valorInput})
                .then((value)=>setItensSearched([...value]))          
                .catch((value)=>setItensSearched([...value]))          
            }else{
              setShowPopup(false)
            }
    
        }

        const onComplete = (event: React.ChangeEvent<HTMLInputElement>): void => {          
            console.log('Evento ','onComplete');

        }

        const itemSelectedSearch = (item : SearchItens) : void =>{
          if (item && item.value){
            setValue(item.value); 
            setIsItermSelected(true);
          }
            
        }

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



        return (
    
            <div className={style['inputAutoCompleteContainer']} data-round={roundType} 
                    style={{ width: `${width}` }}
                    data-iconleft={iconLeft?'true':'false'}>
                    {iconLeftComponent}
                    
                    <div className={fieldValid?
                          `${style['inputAutoCompleteContainer-inputArea']}`
                          : `${style['inputAutoCompleteContainer-inputArea']} ${style['inputAutoCompleteContainer-inputArea-error']}`} >
                        {captionComponent}
                        
                        
                        <IMaskInput 
                            id={id}                    
                            mask={FieldTypeDetail[fieldType].pattern as string}
                            type={FieldTypeDetail[fieldType].type}
                            required={required}
                            autoComplete="off"
                            placeholder={placeholder}
                            className={style['inputAutoCompleteContainer-inputText']}   
                            onChange={onChange}
                            value={value}
                            onInvalid={()=>eventAssociado('onInvalid')}
                            onComplete={(event)=>onComplete}
                            onCopyCapture={()=>eventAssociado('onCopyCapture')}
                            onKeyDown={handleKeyDown}
                            onCopy={()=>eventAssociado('onCopy')}
                            />
                            
                    </div>
                    {showPopup && 
                              (<InputAutoClompletePopup 
                                tabIndex={0} // Torna o elemento focável
                                reference={popupSearch}
                                itens={itensSearched}
                                attributeDisplay={attributeItemDisplay||''}
                                show={showPopup}
                                onItensSelected={itemSelectedSearch}
                                />
                              )}
                    
            </div>
          );
        }
        
export default InputAutoCompleteField;
        