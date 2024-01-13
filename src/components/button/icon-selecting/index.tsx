import React from "react";
import style from "./IconSelecting.module.scss"


interface Props{
    normal: React.ReactElement;
    whenSelected : React.ReactElement;
    isSelected: boolean;
    caption?: string;
    onClick?: ()=>void;
}



function IconSelecting(props:Props) {
    const {caption, onClick, isSelected, normal, whenSelected} = props;
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
                {(selected?whenSelected:normal)}
                {caption && (
                    <>
                    <span>{caption}</span>
                    <div className={style['iconSelectButton-underlined']} 
                        data-selected={selected}/>
                    </>
                )}
            </div>
        </>
  );
}

export default IconSelecting;