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
import IconSVG from "@/components/icons/icon-svg"
import { FieldImagePath } from "@/types/enums/FieldImagePath"
import Typography from "@/components/text/typography"
import InstructionsFeriaz from "./instructions"
import SimpleCarousel from "@/components/carousel/simple"
const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });
 


export default function PrincipalHome() {
  const common = useTranslation('common')

  const imagesPatners = [
    FieldImagePath.Patner123,
    FieldImagePath.PatnerExpedia,
    FieldImagePath.PatnerHoteis,
    FieldImagePath.PatnerSkyScanner,
    FieldImagePath.PatnerTripAdvisor,
    FieldImagePath.PatnerZarpo
    
  ];

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
          <Typography fontSize="H1" weight="bold" color="white">
              {common.t('message.feriaz.brand')}
          </Typography> 
          
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

        <div className={style['body-area-banner']}>
          <IconSVG path={FieldImagePath.BannerFino} isFill={true}/>
        </div>

        <div className={style['body-area-instructionVacation']}>
            <Typography fontSize="H1" weight="bold" color="white">
              {common.t('message.feriaz.instruction.caption')}
            </Typography> 
            <InstructionsFeriaz>
              <IconSVG path={FieldImagePath.FiveSteps} width={400} height={500} />
            </InstructionsFeriaz>
        </div>

        <div className={style['body-area-knowingPatners']}>
            <Typography fontSize="H1" weight="bold" color="white">
              {common.t('message.feriaz.knowing-pattners.caption')}
            </Typography> 
            <SimpleCarousel images={imagesPatners}/>
        </div>

        
        
        
      </section>
      
      
    </>
  )
}
