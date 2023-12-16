import React from "react";
import style from "./IconSelecting.module.scss"


interface Props{
    normal: React.ReactElement;
    whenSelected : React.ReactElement;
    isSelected: boolean;
    onClick?: (data:any)=>void;
}



function IconSelecting(props:Props) {
    const {onClick, isSelected, normal, whenSelected} = props;
    const [selected, setSelected] = React.useState(isSelected);

    let onClickButton = (data:any):void => {
        setSelected(!selected);    
    }

    if(onClick){
        onClickButton =  onClick;
    }

    
  
    return (
        <>
            <div className={style['iconSelectButton']} onClick={onClickButton}>
                {(selected?whenSelected:normal)}
            </div>
        </>
  );
}

export default IconSelecting;