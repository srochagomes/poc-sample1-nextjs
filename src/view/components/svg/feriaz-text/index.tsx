import style from "./feriaz-name.module.scss"

export enum FeriazSizeEnum {
    NORMAL = "normal",
    BIG = "big"
}

interface Props {
    sizeType? : FeriazSizeEnum      
}
function FeriazText(props:Props) {
    const { sizeType } = props;

    return (        
        <div className={style.feriazName} 
        data-size={(!sizeType)?FeriazSizeEnum.NORMAL:sizeType}></div>
    );
  }
  
  export default FeriazText;