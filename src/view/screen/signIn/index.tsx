import { useTranslation } from "next-i18next"

import style from "./SignIn.module.scss"
import FeriazText from "@/view/components/svg/feriaz-text";
import Typography from "@/view/components/text-container/typography";
import FormGroup from "@/view/components/form/group";

import { FieldTypeEnum } from "@/types/enums/FieldTypeEnum";
import { FieldRoundEnum } from "@/types/enums/FieldRoundEnum";
import ButtonPrimary from "@/view/components/button/primary-button";
import ButtonStyle, { ButtonStyleIconEnum } from "@/view/components/button/style-buton";
import { FieldIconPath } from "@/types/enums/FieldIconPath";
import { FieldIconEnum } from "@/types/enums/FieldIconEnum";
import LinkFoward from "@/view/components/link/foward";
import InputField from "@/view/components/input/text";



export default function SignIn() {
  const common = useTranslation('common')
  const field = useTranslation('field')
  const btn = useTranslation('button')
  

  const handleAccessConfirm = (dataForm:any) => {  
  }

  return (
    <>      
      <section className={style.body}>
        <div className={style['body-feriaz']}><FeriazText/></div>
        <div className={style['body-welcome']}>
          <Typography fontSize="H2" color="white" weight="extrabold">{common.t('welcome.traveler')}</Typography>
        </div>
        <div className={style['body-welcome-login-caption']}>
          <Typography fontSize="caption1" color="white">{common.t('login.caption')}</Typography>
        </div>

        <div className={style['body-form-login']}>
          <FormGroup>
              <InputField  
                      id="email"
                      iconLeft={FieldIconEnum.Email}
                      type={FieldTypeEnum.Email} 
                      caption={field.t('email.caption')} 
                      placeholder={field.t('email.placehold')} 
                      roundType={FieldRoundEnum.Top}/>
              <InputField  
                id="password"
                iconLeft={FieldIconEnum.Password}
                type={FieldTypeEnum.Password} 
                caption={field.t('password.caption')} 
                placeholder={field.t('password.placehold')} 
                roundType={FieldRoundEnum.Button}/>              
              <div className={style['body-form-login-forgot-password']}>
                <Typography fontSize="caption2" color="white">{common.t('login.forgot.caption')}</Typography>
              </div>

          </FormGroup>          
          <div className={style['body-form-login-button']}>
            <ButtonPrimary>
              {btn.t('login.button')}
            </ButtonPrimary>
          </div>
        </div>
          <div className={style['body-or-login-social-caption']}>
            <Typography fontSize="caption2" color="white">{common.t('login.or-login-social.caption')}</Typography>
          </div>
          <div className={style['body-button-login-google']}>
            <ButtonStyle icon={ButtonStyleIconEnum.Google}>              
              {btn.t('login.goole.button')}
            </ButtonStyle>
          </div>

          <div className={style['body-button-login-facebook']}>
            <ButtonStyle icon={ButtonStyleIconEnum.Facebook}>              
              {btn.t('login.facebook.button')}
            </ButtonStyle>
          </div>

          <div className={style['body-invite-signin']}>
            <Typography fontSize="caption1" color="white">{common.t('user.without.account.caption')}</Typography>
            <LinkFoward href="/signUp" linkDecorator="hidden">
              <Typography fontSize="caption2" color="white">{common.t('user.should-create.account.caption')}</Typography>
            </LinkFoward>
            
          </div>
        
      </section>
    </>
  )
}
