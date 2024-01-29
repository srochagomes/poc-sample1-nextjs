import React from "react";
import style from "./IconSelecting.module.scss"


interface Props{
    normal: React.ReactElement;
    whenSelected : React.ReactElement;
    isSelected: boolean;
    caption?: string;
    width?: string;
    height?: string;
    onClick?: ()=>void;
}



function IconSelecting(props:Props) {
    const {caption, width, height, onClick, isSelected, normal, whenSelected} = props;
    const [selected, setSelected] = React.useState(isSelected);

    React.useEffect(() => {
        setSelected(isSelected);
    }, [isSelected]);
    
    let onClickButton = ():void => {
        
        if (onClick){
            onClick();
        }
    }

    
  
    return (
        <>
            <div  className={style['iconSelectButton']} onClick={onClickButton}>
                <div  className={style['iconSelectButton-image']} onClick={onClickButton} 
                style={{ width: width, height: height }}>
                    {(selected?whenSelected:normal)}
                </div>                
                {caption && (
                    <div className={style['iconSelectButton-footer']}>
                        <span>{caption}</span>
                        <div className={style['iconSelectButton-underlined']} 
                            data-selected={selected}/>

                    </div> 
                )}
            </div>
        </>
  );
}

export default IconSelecting;