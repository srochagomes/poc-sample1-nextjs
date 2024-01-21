
import ButtonPrimary from '@/components/button/primary-button';
import style from './HowGo.module.scss'
import Typography from '@/components/text/typography';
import IconClick from '@/components/button/icon-click';
import InputField from '@/components/input/text';
import { FieldIconPath } from "@/types/enums/FieldIconPath";
import { FieldIconEnum } from "@/types/enums/FieldIconEnum";
import { FieldTypeEnum } from "@/types/enums/FieldTypeEnum";
import { FieldRoundEnum } from "@/types/enums/FieldRoundEnum";
import SimpleDropdow from '@/components/input/dropdow/simple';
import FormGroup from '@/components/form/group';
import dropdownVeiculosItems from '@/types/date/TripeVehicleSelect';
import CalendarField from '@/components/input/calendar';
import TripPeopleDetail from '@/components/input/trip/people-detail';
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
                
                <FormGroup applyOnValidForm={handleAccessConfirm}>
                    <div className={style['HowGo-fields']} >
                        <div className={style['HowGo-fields-move-data']} >
                            <IconClick path={FieldIconPath.moveside} 
                                       widthSize={25}
                                       heightSize={25}/>
                            <div className={style['HowGo-fields-group']} >
                                <InputField  
                                    id='city_origin'
                                    type={FieldTypeEnum.Text}  
                                    roundType={FieldRoundEnum.Left}
                                    placeholder={common.t('city-origin.placeholder')}   
                                    caption={common.t('city-origin.caption')}   
                                    iconLeft={FieldIconEnum.Circle}
                                />
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
                        <div className={style['HowGo-fields-group']} >
                            <SimpleDropdow
                                id='vehicles'
                                roundType={FieldRoundEnum.All}
                                caption={common.t('simpledropdow.howtogo.caption')}
                                width="12vw"
                                itens={dropdownVeiculosItems}/>
                        </div>
                        <div className={style['HowGo-fields-group']} >
                            <CalendarField  
                                id='calendar_when'
                                type={FieldTypeEnum.Text}  
                                roundType={FieldRoundEnum.Left}
                                placeholder={common.t('calendar.when.placeholder')}   
                                caption={common.t('calendar.go.caption')}   
                                iconLeft={FieldIconEnum.Calendar}
                                hasFlexibleDate={true}
                                monthsShow={2}
                                permitPeriodChoice={true}
                                width="10vw"
                            />
                            <CalendarField  
                                id='calendar_back'
                                type={FieldTypeEnum.Text}  
                                roundType={FieldRoundEnum.Right}
                                placeholder={common.t('calendar.when.placeholder')}   
                                caption={common.t('calendar.back.caption')}   
                                iconLeft={FieldIconEnum.Calendar}
                                hasFlexibleDate={true}
                                monthsShow={2}
                                permitPeriodChoice={true}
                                width="10vw"
                            />
                        </div>

                         <div className={style['HowGo-fields-group']} >
                            <TripPeopleDetail 
                                id='people_detail' 
                                type={FieldTypeEnum.Text}  
                                roundType={FieldRoundEnum.All}
                                placeholder={common.t('trip-people-detail.component.placeholder')}   
                                caption={common.t('trip-people-detail.component.caption')}     
                                iconLeft={FieldIconEnum.User}
                                width="13vw"
                            />
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
