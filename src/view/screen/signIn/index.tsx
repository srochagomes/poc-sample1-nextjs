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
import FormManagerType from "@/types/structure/FormManageType";
import FieldData from "@/types/structure/FieldData";
import userSession from "@/domain/model/session/UserSession";
import { HttpStatusCode } from "axios";
import { useDispatch, useSelector } from "react-redux";
import { openMessage } from "@/manager-state/reducers/message/MessageState";
import { MessageStyle } from "@/types/enums/MessageStyles";
import { encryptData } from "@/types/utils/CryptoValue";
import { verifyUserLogged } from "@/manager-state/reducers/logged/LoggedState";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import loginSocialRedirect from "@/types/utils/LoginSocialRedirect";



export default function SignIn() {
  const common = useTranslation('common')
  const field = useTranslation('field')
  const btn = useTranslation('button')
  const [urlLoginSocial, setUrlLoginSocial] = useState('');
  let formManager: FormManagerType;
  const dispatch = useDispatch();
  const router = useRouter();
  const loggedState = useSelector((state:any) => state.userLoggedContainerState);     

  
  

  useEffect(() => {      
    
    dispatch(verifyUserLogged());
    if(loggedState.logged){         
      router.push({
        pathname: '/'
      })
      dispatch(openMessage({type:MessageStyle.WARN, title:common.t('message.feriaz.login-area.not-permited.caption'),message:[common.t('message.feriaz.login-area.not-permited.message')]}))                    
   }
          
  }, [loggedState.logged])

  useEffect(() => {      
    let rootIDP = process.env.NEXT_PUBLIC_IDP_BASE_URL
    let loginSocial = process.env.NEXT_PUBLIC_LOGIN_SOCIAL_START    
    let clientId = process.env.NEXT_PUBLIC_APP_CLIENT_ID
    if (!rootIDP){
      throw new Error("NEXT_PUBLIC_IDP_BASE_URL not found to use");
    }
  
    if (!loginSocial){
      throw new Error("NEXT_PUBLIC_LOGIN_SOCIAL_START not found to use");
    }
  
    if (!clientId){
      throw new Error("NEXT_PUBLIC_APP_CLIENT_ID not found to use");
    }
    
    loginSocial = rootIDP+loginSocial.replace(/{{clientId}}/g, clientId).replace(/{{urlRedirect}}/g, loginSocialRedirect.getUrl(window)) 
    setUrlLoginSocial(loginSocial);
          
  }, [])

  
  
  const onValidForm = (formMng: FormManagerType):void=>{
    formManager = formMng;
  }

  const processLogin = (dataForm:FieldData[]) => {  
    let data = process.env.NEXT_PUBLIC_KEY_CRIPTO;
    if(!data){
      throw new Error('Key encript should be informed.');
    }

    console.log('valor ',dataForm)
    let user : IUserAuth = {
      username: dataForm[0].value,
      password: encryptData(dataForm[1].value, data)
    }

    userSession.register(user)
          .then((body)=>{            
            if (body.status !== HttpStatusCode.Ok){
               if (body.status == HttpStatusCode.NotFound) 
                  dispatch(openMessage({type:MessageStyle.WARN, title:'Login',message:[common.t('message.feriaz.login.notfound.message')]}))               
               if (body.status == HttpStatusCode.Unauthorized) 
                  dispatch(openMessage({type:MessageStyle.WARN, title:'Login',message:[common.t('message.feriaz.login.notpermitedd.message')]}))
               else if (body.status == HttpStatusCode.Forbidden) 
                  dispatch(openMessage({type:MessageStyle.WARN, title:'Login',message:[common.t('message.feriaz.login.notpermitedd.message')]}))
               else 
                  dispatch(openMessage({type:MessageStyle.WARN, title:'Login',message:[common.t('message.feriaz.login.unexpected.message')]}))
            }else{             
              dispatch(openMessage({type:MessageStyle.INFO, title:'Login',message:[common.t('message.feriaz.login.success.message')]}))              
              dispatch(verifyUserLogged());
              router.push('/');
            }
          });    
    

  }

  const handleConfirmLogin = () => { 
    
    formManager.applyValidation();
    if (formManager.isValidFields()){
      let ds = formManager.dataSource;  
      processLogin(ds);
    }

  }

  const handleLoginSocialStart = (provider:string) => {
    
    let urlLoginSocialIdentityProvider = urlLoginSocial?.replace(/{{identityProvider}}/g, provider)

    console.log('url-login-social', urlLoginSocialIdentityProvider)

    if (urlLoginSocialIdentityProvider){
      console.log('url login social',urlLoginSocialIdentityProvider);
      router.push(new URL(urlLoginSocialIdentityProvider));            
    }
    
  };


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
          <FormGroup applyOnValidForm={onValidForm}>
              <InputField  
                      id="email"
                      required={true}
                      iconLeft={FieldIconEnum.Email}
                      type={FieldTypeEnum.Email} 
                      caption={field.t('email.caption')} 
                      placeholder={field.t('email.placehold')} 
                      roundType={FieldRoundEnum.Top}/>
              <InputField  
                id="password"
                required={true}
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
            <ButtonPrimary onClick={handleConfirmLogin}>
              {btn.t('login.button')}
            </ButtonPrimary>
          </div>
        </div>
          <div className={style['body-or-login-social-caption']}>
            <Typography fontSize="caption2" color="white">{common.t('login.or-login-social.caption')}</Typography>
          </div>
          <div className={style['body-button-login-google']}>
            <ButtonStyle icon={ButtonStyleIconEnum.Google} onClick={() => handleLoginSocialStart('google')}>              
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
