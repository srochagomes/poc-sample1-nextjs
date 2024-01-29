
import ButtonPrimary from '@/view/components/button/primary-button';
import style from './HowGo.module.scss'
import Typography from '@/view/components/text/typography';
import IconClick from '@/view/components/button/icon-click';
import InputField from '@/view/components/input/text';
import { FieldIconPath } from "@/types/enums/FieldIconPath";
import { FieldIconEnum } from "@/types/enums/FieldIconEnum";
import { FieldTypeEnum } from "@/types/enums/FieldTypeEnum";
import { FieldRoundEnum } from "@/types/enums/FieldRoundEnum";
import SimpleDropdow from '@/view/components/input/dropdow/simple';
import FormGroup from '@/view/components/form/group';
import dropdownVeiculosItems from '@/types/date/TripeVehicleSelect';
import CalendarField from '@/view/components/input/calendar';
import TripPeopleDetail from '@/view/components/input/trip/people-detail';
import { useTranslation } from 'next-i18next';

interface Props{

}

function HowGo(props:Props) {
    const common = useTranslation('common');

    const handleAccessConfirm = () =>{

    }

    return (
            <div className={style['HowGo']} >
                <div className={style['HowGo-title']}>
                    <Typography fontSize="caption2" color="white">{common.t('message.howtogo.title')}</Typography>
                </div>
                
                <FormGroup>
                    <div className={style['HowGo-fields']} >
                        <div className={style['HowGo-broke-resolution']} >
                            <div className={style['HowGo-fields-group']} >
                                <div className={style['HowGo-fields-move-data']} >
                                     <div className={style['HowGo-fields-move-data-image']} />
                                        
                                    <div className={style['HowGo-field-location']} >
                                        <InputField  
                                            id='city_origem'
                                            type={FieldTypeEnum.Text}  
                                            roundType={FieldRoundEnum.Left}
                                            placeholder={common.t('city-origin.placeholder')}   
                                            caption={common.t('city-origin.caption')}   
                                            iconLeft={FieldIconEnum.Circle}
                                            
                                        />

                                    </div>
                                    <div className={style['HowGo-field-location']} >
                                        <InputField  
                                            id='city_destiny'
                                            type={FieldTypeEnum.Text}  
                                            roundType={FieldRoundEnum.Right}
                                            placeholder={common.t('city-destiny.placeholder')}   
                                            caption={common.t('city-destiny.caption')}   
                                            iconLeft={FieldIconEnum.Location}
                                        />

                                    </div>
                                </div>
                            
                            </div>
                        </div>
                        

                        <div className={style['HowGo-broke-resolution']} >

                            <div className={style['HowGo-fields-group']} >
                                
                                <div className={style['HowGo-field-period']} >
                                    <CalendarField 
                                        id='calendar_when'                                         
                                        roundType={FieldRoundEnum.Left}
                                        placeholder={common.t('calendar.when.placeholder')}   
                                        caption={common.t('calendar.go.caption')}   
                                        iconLeft={FieldIconEnum.Calendar}
                                        hasFlexibleDate={true}
                                        monthsShow={2}                                
                                        permitPeriodChoice={true}
                                        
                                        
                                    />

                                </div>
                                
                                <div className={style['HowGo-field-period']} >
                                    <CalendarField 
                                        id='calendar_back'                                         
                                        roundType={FieldRoundEnum.Right}
                                        placeholder={common.t('calendar.when.placeholder')}   
                                        caption={common.t('calendar.back.caption')}   
                                        iconLeft={FieldIconEnum.Calendar}
                                        hasFlexibleDate={true}
                                        monthsShow={2}
                                        permitPeriodChoice={true}
                                        
                                    /> 

                                </div>
                            </div>
                        </div>

                        <div className={style['HowGo-broke-resolution']} >

                            <div className={style['HowGo-fields-group']} >
                                <div className={style['HowGo-field-room']} >
                                    <TripPeopleDetail  
                                            id='people_detail'
                                            type={FieldTypeEnum.Text}  
                                            roundType={FieldRoundEnum.All}
                                            placeholder={common.t('trip-people-detail.component.placeholder')}   
                                            caption={common.t('trip-people-detail.component.caption')}     
                                            iconLeft={FieldIconEnum.User}
                                            
                                        />

                                </div>
                            </div>

                            
                            <div className={style['HowGo-fields-group']} >
                                <div className={style['HowGo-field-vehicle']} >
                                    <SimpleDropdow
                                        id='vehicle'
                                        roundType={FieldRoundEnum.All}
                                        caption={common.t('simpledropdow.howtogo.caption')}                                   
                                        
                                        itens={dropdownVeiculosItems}/>                                
                                </div>
                            </div>
                        </div>
                        <div className={style['HowGo-button-plus']} >
                            <IconClick path={FieldIconPath.plus} 
                                       widthSize={30}
                                       heightSize={30}
                                       caption={common.t('button.patchs.caption')}  
                                       captionColor="white"
                            
                            />
                        </div> 
                    </div>
                </FormGroup>
                
                <div className={style['HowGo-button-next']} >
                    <ButtonPrimary >
                        <Typography fontSize="button-primary" color="white">{common.t('button.next-process.caption')} </Typography>
                    </ButtonPrimary>
                </div>
            </div>
    )
}


export default HowGo;
