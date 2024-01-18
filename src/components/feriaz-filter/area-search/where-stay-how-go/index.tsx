
import ButtonPrimary from '@/components/button/primary-button';
import style from './whereStayHowGo.module.scss'
import Typography from '@/components/text/typography';
import InputField from '@/components/input/text';
import { FieldIconPath } from "@/types/enums/FieldIconPath";
import { FieldIconEnum } from "@/types/enums/FieldIconEnum";
import { FieldTypeEnum } from "@/types/enums/FieldTypeEnum";
import { FieldRoundEnum } from "@/types/enums/FieldRoundEnum";
import FormGroup from '@/components/form/group';
import SimpleDropdow from '@/components/input/dropdow/simple';
import IconClick from '@/components/button/icon-click';
import CalendarField from '@/components/input/calendar';
import TripPeopleDetail from '@/components/input/trip/people-detail';
import { SimpleDrodownItem } from '@/components/input/dropdow/simple/ pop-up';
import dropdownVeiculosItems from '@/types/date/TripeVehicleSelect';
import { useTranslation } from 'next-i18next';


interface Props{

}


function WhereStayHowGo(props:Props) {
    const common = useTranslation('common');
    
    const handleAccessConfirm = () =>{

    }

    



    return (
            <div className={style['whereStayHowGo']} >
                <div className={style['whereStayHowGo-title']}>
                    <Typography fontSize="caption2" color="white">{common.t('message.wherestayhowtogo.title')}</Typography>
                </div>
                
                <FormGroup applyOnValidForm={handleAccessConfirm}>
                    <div className={style['whereStayHowGo-fields']} >
                        <div className={style['whereStayHowGo-fields-move-data']} >
                            <IconClick path={FieldIconPath.moveside} 
                                       widthSize={25}
                                       heightSize={25}/>
                            <div className={style['whereStayHowGo-fields-group']} >
                                <InputField  
                                    type={FieldTypeEnum.Text}  
                                    roundType={FieldRoundEnum.Left}
                                    placeholder={common.t('city-origin.placeholder')}   
                                    caption={common.t('city-origin.caption')}   
                                    iconLeft={FieldIconEnum.Circle}
                                />
                                <InputField  
                                    type={FieldTypeEnum.Text}  
                                    roundType={FieldRoundEnum.Right}
                                    placeholder={common.t('city-destiny.placeholder')}   
                                    caption={common.t('city-destiny.caption')}   
                                    iconLeft={FieldIconEnum.Location}
                                />
                        </div>
                        
                        </div>
                        <div className={style['whereStayHowGo-fields-group']} >
                            <CalendarField  
                                type={FieldTypeEnum.Text}  
                                roundType={FieldRoundEnum.Left}
                                placeholder={common.t('calendar.when.placeholder')}   
                                caption={common.t('calendar.go.caption')}   
                                iconLeft={FieldIconEnum.Calendar}
                                width="8vw"
                            />
                            <CalendarField  
                                type={FieldTypeEnum.Text}  
                                roundType={FieldRoundEnum.Right}
                                placeholder={common.t('calendar.when.placeholder')}   
                                caption={common.t('calendar.back.caption')}   
                                iconLeft={FieldIconEnum.Calendar}
                                width="8vw"
                            />
                        </div>

                        <div className={style['whereStayHowGo-fields-group']} >
                            <TripPeopleDetail  
                                type={FieldTypeEnum.Text}  
                                roundType={FieldRoundEnum.All}
                                placeholder={common.t('trip-people-detail.component.placeholder')}   
                                caption={common.t('trip-people-detail.component.caption')}     
                                iconLeft={FieldIconEnum.User}
                                width="13vw"
                            />
                        </div>
                        <div className={style['whereStayHowGo-fields-group']} >
                            <SimpleDropdow
                                roundType={FieldRoundEnum.All}
                                caption={common.t('simpledropdow.howtogo.caption')}                                   
                                width="18vw"
                                itens={dropdownVeiculosItems}/>
                        </div>
                        <div className={style['whereStayHowGo-button-plus']} >
                            <IconClick path={FieldIconPath.plus} 
                                       widthSize={30}
                                       heightSize={30}
                                       caption={common.t('button.patchs.caption')}  
                                       captionColor="white"
                            
                            />
                        </div>
                    </div>
                </FormGroup>
                
                <div className={style['whereStayHowGo-button-next']} >
                    <ButtonPrimary >
                        <Typography fontSize="button-primary" color="white">{common.t('button.next-process.caption')} </Typography>
                    </ButtonPrimary>
                </div>
            </div>
    )
}

export default WhereStayHowGo;
