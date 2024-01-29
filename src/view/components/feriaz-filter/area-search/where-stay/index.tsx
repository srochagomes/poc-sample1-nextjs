
import ButtonPrimary from '@/view/components/button/primary-button';
import style from './whereStay.module.scss'
import Typography from '@/view/components/text/typography';
import FormGroup from '@/view/components/form/group';
import IconClick from '@/view/components/button/icon-click';
import InputField from '@/view/components/input/text';
import { FieldIconPath } from "@/types/enums/FieldIconPath";
import { FieldIconEnum } from "@/types/enums/FieldIconEnum";
import { FieldTypeEnum } from "@/types/enums/FieldTypeEnum";
import { FieldRoundEnum } from "@/types/enums/FieldRoundEnum";
import SimpleDropdow from '@/view/components/input/dropdow/simple';
import CalendarField from '@/view/components/input/calendar';
import TripPeopleDetail from '@/view/components/input/trip/people-detail';
import { useTranslation } from 'next-i18next';

interface Props{

}

function WhereStay(props:Props) {
    const common = useTranslation('common');
    const handleAccessConfirm = () =>{

    }

    return (
            <div className={style['whereStay']} >
                <div className={style['whereStay-title']}>
                    <Typography fontSize="caption2" color="white">{common.t('message.wherestay.title')}</Typography>
                </div>
                
                <FormGroup>
                    <div className={style['whereStay-fields']} >
                        <div className={style['whereStay-broke-resolution']} >
                            <div className={style['whereStay-fields-group']} >
                                <div className={style['whereStay-field-location']} >
                                    <InputField  
                                            id='city_destiny'
                                            type={FieldTypeEnum.Text}  
                                            roundType={FieldRoundEnum.All}
                                            placeholder={common.t('city-destiny.placeholder')}   
                                            caption={common.t('city-destiny.caption')}   
                                            iconLeft={FieldIconEnum.Location}
                                            />
                                </div>
                            </div>
                        </div>
                        <div className={style['whereStay-broke-resolution']} >

                            <div className={style['whereStay-fields-group']} >
                                <div className={style['whereStay-field-period']} >
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
                                <div className={style['whereStay-field-period']} >
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

                            <div className={style['whereStay-fields-group']} >
                                <div className={style['whereStay-field-room']} >
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
                        </div>
                        <div className={style['whereStay-button-plus']} >
                            <IconClick path={FieldIconPath.plus} 
                                       widthSize={30}
                                       heightSize={30}
                                       caption={common.t('button.patchs.caption')}  
                                       captionColor="white"
                            
                            />
                        </div>
                    </div>
                </FormGroup>
                
                <div className={style['whereStay-button-next']} >
                    <ButtonPrimary >
                        <Typography fontSize="button-primary" color="white">Avançar</Typography>
                    </ButtonPrimary>
                </div>
            </div>
    )
}

export default WhereStay;
