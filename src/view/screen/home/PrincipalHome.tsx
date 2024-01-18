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
            <div className={style['body-area-knowingPatners-carousel']}>
              <SimpleCarousel images={imagesPatners} minImagesToShow={4}/>
            </div>
            
        </div>
        <div className={style['body-area-sol']}>
            <div className={style['body-area-sol-message']}>
              <Typography fontSize="H1" weight="bold" color="primary">
                  {common.t('message.feriaz.sol-detail.caption')}
                </Typography> 
                <Typography fontSize="H3" >
                  {common.t('message.feriaz.sol-detail.message')}
                </Typography>
            </div>
            <div className={style['body-area-sol-image']}>
              <IconSVG path={FieldImagePath.SolPicture3} isFill={true} />
            </div>
            
            
        </div>

        <div className={style['body-area-guicare']}>
            <div className={style['body-area-guicare-image']}>
              <IconSVG path={FieldImagePath.GuiPicture1} isFill={true} />
            </div>
            <div className={style['body-area-guicare-message']}>
              <Typography fontSize="H1" weight="bold" color="primary">
                  {common.t('message.feriaz.gui-detail.caption')}
                </Typography> 
                <Typography fontSize="H3" >
                  {common.t('message.feriaz.gui-detail.message')}
                </Typography>
            </div>
            
        </div>

        <div className={style['body-area-tripplan']}>
            <div className={style['body-area-tripplan-message']}>
                <Typography fontSize="H1" weight="bold" color="primary">
                  {common.t('message.feriaz.tripplan.caption')}
                </Typography> 
            </div>
            <div className={style['body-area-tripplan-image']}>
              <IconSVG path={FieldImagePath.BannenrHomeTransparencia} isFill={true} />
            </div>
            
        </div>
        
        <div className={style['body-area-links']}>
            <nav>
                <ul>
                    <li><a href="https://www.feriaz.ai/termos-legais">{common.t('link.feriaz.legal terms.caption')}</a></li>
                    <li><a href="https://www.feriaz.ai/perguntas-feriaz">{common.t('link.feriaz.common-questions.caption')}</a></li>
                    <li><a href="https://www.feriaz.ai/contato-feriaz">{common.t('link.feriaz.contact.caption')}</a></li>            
                    <li><a href="https://www.feriaz.ai/mundo-de-feriaz">{common.t('link.feriaz.world.caption')}</a></li>
                </ul>
            </nav>
        </div>

        <div className={style['body-area-advertising']}>
                <Typography fontSize="H4" color="white" >
                    {common.t('message.feriaz.advertising.caption')}
                </Typography>
        </div>

        <footer  className={style['body-area-footer']}>
                <ul>
                  <li>
                    <Typography fontSize="H6" >
                      {common.t('feriaz.company.name.caption')}
                    </Typography>
                  </li>
                  <li>                    
                    <Typography fontSize="H6" >
                      -
                    </Typography>
                  </li>
                  <li>
                    <Typography fontSize="H6" >
                      {common.t('feriaz.company.documents.caption')}                      
                    </Typography>
                  </li>
                  <li>
                    <Typography fontSize="H6" >
                      -
                    </Typography>
                  </li>
                  <li>
                    <Typography fontSize="H6" >
                        {common.t('feriaz.company.address.caption')}                      
                    </Typography>
                  </li>
                </ul>
                
        </footer>
      </section>
      
      
    </>
  )
}
