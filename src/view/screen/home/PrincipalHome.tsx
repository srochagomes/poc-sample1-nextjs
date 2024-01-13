import { useTranslation } from "next-i18next"
import style from "./PrincipalHome.module.scss"
import FeriazText, { FeriazSizeEnum } from "@/components/svg/feriaz-text"
import HeaderMenu from "./header/menu"
import FeriazFilter from "@/components/feriaz-filter"
import AreaLogin from "./header/area-login"
import { FieldVideoPath } from "@/types/enums/FieldVideoPath"
import VideoPlay from "@/components/video"
import ReactPlayer from "react-player";
 


export default function PrincipalHome() {
  const common = useTranslation('common')

  return (
    <>      
      <section className={style.body}>
        <div className={style['body-area-top']}>          
          <HeaderMenu/>
          <FeriazText sizeType={FeriazSizeEnum.BIG} /> 
          <AreaLogin />
        </div>
        <div className={style['body-area-search']}>
          <FeriazFilter/>
        </div>
        <div className={style['body-area-text']}>
          <span>{common.t('message.feriaz.brand')}</span>
        </div>

        <div className={style['body-area-video']}>
          <ReactPlayer
              url={FieldVideoPath.Apresentation}
              width='100%'
              height='100%'
              controls={true}
              loop={true}
              muted={true}
              light={false}
              // picture in picture
              pip={true}
            />
          
        </div>
        
      </section>
      
    </>
  )
}
