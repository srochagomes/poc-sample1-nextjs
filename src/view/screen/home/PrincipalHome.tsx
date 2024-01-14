import { useTranslation } from "next-i18next"
import style from "./PrincipalHome.module.scss"
import FeriazText, { FeriazSizeEnum } from "@/components/svg/feriaz-text"
import HeaderMenu from "./header/menu"
import FeriazFilter from "@/components/feriaz-filter"
import AreaLogin from "./header/area-login"
import { FieldVideoPath } from "@/types/enums/FieldVideoPath"
import dynamic from 'next/dynamic'
import VideoPlayer from "@/components/video"
import CardInformation from "../cards"
import { FieldIconPath } from "@/types/enums/FieldIconPath"
const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });
 


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
          <VideoPlayer
              url={FieldVideoPath.Apresentation} />          
        </div>
                        
        <div className={`${style['body-area-cards']} ${style['body-area-cards-visible']}`}>
          <CardInformation icon={FieldIconPath.car} header={common.t('home.cards.first.header')} content={common.t('home.cards.first.content')}/>          
          <CardInformation icon={FieldIconPath.car} header={common.t('home.cards.second.header')} content={common.t('home.cards.second.content')}/>          
          <CardInformation icon={FieldIconPath.car} header={common.t('home.cards.third.header')} content={common.t('home.cards.third.content')}/>          
          <CardInformation icon={FieldIconPath.car} header={common.t('home.cards.fourth.header')} content={common.t('home.cards.fourth.content')}/>          
        </div>
        
        
      </section>
      
    </>
  )
}
