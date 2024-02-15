import { useTranslation } from "next-i18next"

import style from "./SignUp.module.scss"
import FeriazText, { FeriazSizeEnum } from "@/view/components/svg/feriaz-text";
import Typography from "@/view/components/text-container/typography";
import FormGroup from "@/view/components/form/group";
import { FieldTypeEnum } from "@/types/enums/FieldTypeEnum";
import { FieldRoundEnum } from "@/types/enums/FieldRoundEnum";
import ButtonPrimary from "@/view/components/button/primary-button";

import { FieldIconEnum } from "@/types/enums/FieldIconEnum";
import CalendarField from "@/view/components/input/calendar";
import InputField from "@/view/components/input/text";
import FieldData from "@/types/structure/FieldData";
import FormDiv from "@/view/components/form/div-container";
import FormManagerType from "@/types/structure/FormManageType";
import account from "@/domain/model/account/Account";
import { AxiosResponse, HttpStatusCode } from "axios";
import applicationSession from "@/domain/model/session/ApplicationSession";
import { useDispatch, useSelector } from "react-redux";
import { openMessage } from "@/manager-state/reducers/message/MessageState";
import { MessageStyle } from "@/types/enums/MessageStyles";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { encryptData } from "@/types/utils/CryptoValue";
import userSession from "@/domain/model/session/UserSession";
import { verifyUserLogged } from "@/manager-state/reducers/logged/LoggedState";
import { JwtPayload } from "jsonwebtoken";



export default function SignUp() {
  const common = useTranslation('common')
  const field = useTranslation('field')
  const btn = useTranslation('button')
  const requiredSign = ' *';  
  let formManager: FormManagerType;
  const [emailSended,setEmailSended] = useState('');
  const [accountCreateSuccess, setAccountCreateSuccess] = useState(false);
  const router = useRouter();
  const { pathname, query } = router;
  let { requiredUser, emailConfirmed, socialLogin, code } = query;    
  const [emailConfirmedByUser, setEmailConfirmedByUser] = useState(false);
  const [keyEmailConfirmedByUser, setKeyEmailConfirmedByUser] = useState<string|string>('');
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
      
    if(emailConfirmed){         
      setKeyEmailConfirmedByUser(emailConfirmed.toString());
      setEmailConfirmedByUser(true);
      delete query.emailConfirmed;
      router.replace({
        pathname,
        query
      });
    }
          
  }, [requiredUser, emailConfirmed, socialLogin, code])


  const dispatch = useDispatch();
    

  const tryErrorApiFlow = (body:IAPIReturn) : void =>{
    if (body.status == HttpStatusCode.Unauthorized){
      dispatch(openMessage({type:MessageStyle.WARN, title:'Cadastro',message:[common.t('message.feriaz.warn-default.message')]}))
      console.error('Tentativa negada.',body?.data);
    }else if (body.status == HttpStatusCode.Forbidden) {
      dispatch(openMessage({type:MessageStyle.WARN, title:'Cadastro',message:[common.t('message.feriaz.warn-default.message')]}))
      console.error('Tentativa negada.',body?.data);

    }else {
      let messageAPI: string[] = body?.data?.message ? [body.data.message] : [common.t('message.feriaz.warn-default.message')];            
      dispatch(openMessage({type:MessageStyle.WARN, title:'Cadastro',message: messageAPI}))
      console.error('Tentativa negada.',body?.data);          
    }
    router.push('/');
  }
    
  const onValidForm = (formMng: FormManagerType):void=>{
    formManager = formMng;
  }
  
  const handleCreatePassword = (dataForm:FieldData[]) => {   

    let accessConfirm : IAccessConfirm = {
      key: keyEmailConfirmedByUser,
      value: dataForm[0]?.value?dataForm[0].value:''
    }
    
    account.confirmAccess(accessConfirm)
    .then((body)=>{            
      if (body.status !== HttpStatusCode.Ok){
        tryErrorApiFlow(body);
        
      }else{
        
        let data = process.env.NEXT_PUBLIC_KEY_CRIPTO;
        if(!data){
          throw new Error('Key encript should be informed.');
        }

        let user : IUserAuth = {
          username: body?.data?.userLogin,
          password: encryptData(dataForm[0]?.value?dataForm[0].value: '', data)
        }

        
    
        userSession.register(user)
              .then((body)=>{            
                if (body.status !== HttpStatusCode.Ok){
                  tryErrorApiFlow(body);                    
                }else{
                  dispatch(openMessage({type:MessageStyle.INFO, title:'Cadastro',message:[common.t('message.feriaz.success-password.message')]}))
                  dispatch(verifyUserLogged());
                  router.push('/');
                }
            });  
        
      }
    });    

  };

  const handleNewAccount = (dataForm:FieldData[]) => {   
    
    
    let data = process.env.NEXT_PUBLIC_KEY_CRIPTO;
    if(!data){
      throw new Error('Key encript should be informed.');
    }

    let applicationData : JwtPayload|null = applicationSession.getData();
    
    
    if(!applicationData){
      throw new Error('Application not identified, please, refresh the application.');
    }
    
    
    let newAccount : INewAccount = {
      application: applicationData.client_id,
      name: dataForm[0]?.value || '',
      username: dataForm[1]?.value || '',
      email: dataForm[1]?.value || '',
      phone: dataForm[2]?.value || '',
      dateBirth: dataForm[3]?.value || '',
      termAccept: false
    }
    
    
    account.create(newAccount)
    .then((body)=>{            
      if (body.status !== HttpStatusCode.Created && body.status !== HttpStatusCode.Ok){        
        tryErrorApiFlow(body);
      }else{             
        setEmailSended(dataForm[1].value || '');
        dispatch(openMessage({type:MessageStyle.INFO, title:'Cadastro',message:[common.t('message.feriaz.success-default.message')]}))
        setAccountCreateSuccess(true);          
      }
    });    
    
  };
  const onFeriazClick  = (event:React.MouseEvent<HTMLDivElement>): void =>{        
        router.push('/');
  }
  const handleConfirm = () => {  
    
    formManager.applyValidation();
    if (formManager.isValidFields()){
      handleNewAccount(formManager.dataSource);
    }

  }

  const handleConfirmPassword = () => {  
    
    formManager.applyValidation();
    if (formManager.isValidFields()){
      let ds = formManager.dataSource;  
      if (ds[0].value !== ds[1].value){
        dispatch(openMessage({type:MessageStyle.WARN, title:field.t('signup.passwords-requires.caption'),
        message:[field.t('signup.passwords-patterns-6.caption')]}));
        return;

      }
      handleCreatePassword(formManager.dataSource);
    }else{      
      dispatch(openMessage({type:MessageStyle.WARN, title:field.t('signup.passwords-requires.caption'),
            message:[field.t('signup.passwords-patterns-1.caption'),
                     field.t('signup.passwords-patterns-2.caption'),
                     field.t('signup.passwords-patterns-3.caption'),
                     field.t('signup.passwords-patterns-4.caption'),
                     field.t('signup.passwords-patterns-5.caption')
            ]}))
    }

  }

  return (
    <>      
      <section className={style.body}>
        <div className={style['body-feriaz']} onClick={onFeriazClick}><FeriazText sizeType={FeriazSizeEnum.BIG}/></div>
        <div className={style['body-welcome']}>
          <Typography fontSize="H2" color="white" weight="extrabold">{common.t('welcome.traveler')}</Typography>
        </div>
        {!accountCreateSuccess && !emailConfirmedByUser &&
        (<div className={style['body-welcome-login-caption']}>
          <Typography fontSize="caption1" color="white">{common.t('sign-up.caption')}</Typography>
        </div>)}
        {emailConfirmedByUser &&
        (<div className={style['body-welcome-login-caption']}>
          <Typography fontSize="caption1" color="white">{common.t('sign-up.new-password-caption')}</Typography>
        </div>)}


        {accountCreateSuccess?
        ( <div className={style['body-record-success-caption']}>
            <Typography fontSize="H5" color="white">{common.t('sign-up.email-sended.caption')}</Typography>
            <Typography fontSize="H2" color="white" weight="bold">{emailSended}</Typography>
            <Typography fontSize="H5"   color="white">{common.t('sign-up.email-sended-confirm.caption')}</Typography>
          </div>)
        : emailConfirmedByUser ?
        (
          <div className={style['body-form-login']}>
            <FormGroup applyOnValidForm={onValidForm}>
            <InputField  
                id="traveler_password"                
                iconLeft={FieldIconEnum.Password}
                type={FieldTypeEnum.PasswordCreate} 
                required={true}
                caption={field.t('signup.password.caption')+requiredSign} 
                placeholder={field.t('signup.password.placehold')}
                roundType={FieldRoundEnum.Top}/>
              <InputField  
                id="traveler_password_confirm"                
                iconLeft={FieldIconEnum.Password}
                type={FieldTypeEnum.PasswordCreate} 
                required={true}
                caption={field.t('signup.password-confirm.caption')+requiredSign} 
                placeholder={field.t('signup.password-confirm.placehold')} 
                roundType={FieldRoundEnum.Button}/>
            </FormGroup>          
            
            <div className={style['body-form-login-button']}>
              <ButtonPrimary onClick={handleConfirmPassword}>
                {btn.t('confirm.button')}
              </ButtonPrimary>
            </div>
          </div>
    )
          :(
              <div className={style['body-form-login']}>
                <FormGroup applyOnValidForm={onValidForm}>
                    <InputField
                            id="traveler_name"                      
                            iconLeft={FieldIconEnum.FingerPrint}                      
                            type={FieldTypeEnum.Text} 
                            required={true}
                            caption={field.t('signup.name.caption')+requiredSign} 
                            placeholder={field.t('signup.name.placehold')} 
                            roundType={FieldRoundEnum.Top}/>
                    <InputField  
                            id="traveler_email"                      
                            iconLeft={FieldIconEnum.Email}
                            required={true}
                            type={FieldTypeEnum.Email} 
                            caption={field.t('email.caption')+requiredSign} 
                            placeholder={field.t('email.placehold')} />
                    <FormDiv className={style['body-form-login-group-row-two']}>
                        <InputField                    
                                id="traveler_phone"                          
                                iconLeft={FieldIconEnum.PhoneCall}
                                type={FieldTypeEnum.Phone} 
                                required={true}
                                caption={field.t('signup.phone.caption')+requiredSign} 
                                placeholder={field.t('signup.phone.placehold')}
                                roundType={FieldRoundEnum.BottonLeft}               
                                />

                          <CalendarField
                                      id="traveler_born"
                                      caption={field.t('signup.born.caption')+requiredSign}                                
                                      placeholder={field.t('signup.born.placehold')}
                                      required={true} 
                                      iconLeft={FieldIconEnum.Calendar}
                                      roundType={FieldRoundEnum.BottonRight}
                                  />
                    </FormDiv>
                      <div className={style['body-form-login-field-required']}>
                        <Typography fontSize="caption3-a" color="white">{field.t('field.required.caption')}</Typography>
                      </div>
                </FormGroup>          
                
                <div className={style['body-form-login-button']}>
                  <ButtonPrimary onClick={handleConfirm}>
                    {btn.t('confirm.button')}
                  </ButtonPrimary>
                </div>
              </div>
        )}
          
        
      </section>
    </>
  )
}
