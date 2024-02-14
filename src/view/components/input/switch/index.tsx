
import Typography from "@/view/components/text-container/typography";
import style from "./SwitchLight.module.scss"

interface Props {
    caption?: string;
    id: string;
}

function SwitchLight(props:Props) {
    const {caption} = props;    
    return (
    
        <>
      <div className={style['switchLight']}>
        <label className={style['switchLight-switch']}>
          <input type="checkbox" />
          <span className={style['switchLight-switch-slider']}></span>
        </label>
        {caption && (<Typography fontSize="caption1" color="white">{caption}</Typography>)}
      
      </div>
      </>
    );
}

export default SwitchLight;