
import ButtonPrimary from '@/components/button/primary-button';
import style from './whereStay.module.scss'
import Typography from '@/components/text/typography';
import FormGroup from '@/components/form/group';
import IconClick from '@/components/button/icon-click';
import InputField from '@/components/input/text';
import { FieldIconPath } from "@/types/enums/FieldIconPath";
import { FieldIconEnum } from "@/types/enums/FieldIconEnum";
import { FieldTypeEnum } from "@/types/enums/FieldTypeEnum";
import { FieldRoundEnum } from "@/types/enums/FieldRoundEnum";
import SimpleDropdow from '@/components/input/dropdow/simple';
import CalendarField from '@/components/input/calendar';
import TripPeopleDetail from '@/components/input/trip/people-detail';
interface Props{

}

function WhereStay(props:Props) {

    const handleAccessConfirm = () =>{

    }

    return (
            <div className={style['whereStay']} >
                <div className={style['whereStay-title']}>
                    <Typography fontSize="caption2" color="white">Descubra o transporte e a hospedagem ideais</Typography>
                </div>
                
                <FormGroup applyOnValidForm={handleAccessConfirm}>
                    <div className={style['whereStay-fields']} >
                        
                            <div className={style['whereStay-fields-group']} >
                                <InputField  
                                    type={FieldTypeEnum.Text}  
                                    roundType={FieldRoundEnum.All}
                                    placeholder='Insira cidade de destino'   
                                    caption='INDO PARA'  
                                    iconLeft={FieldIconEnum.Location}
                                    width='50vh'
                                />
                        
                        
                        </div>
                        <div className={style['whereStay-fields-group']} >
                            <CalendarField  
                                type={FieldTypeEnum.Text}  
                                roundType={FieldRoundEnum.Left}
                                placeholder='Quando'   
                                caption='IDA'  
                                iconLeft={FieldIconEnum.Calendar}
                                width="8vh"
                            />
                            <CalendarField  
                                type={FieldTypeEnum.Text}  
                                roundType={FieldRoundEnum.Right}
                                placeholder='Quando'   
                                caption='VOLTA'  
                                iconLeft={FieldIconEnum.Calendar}
                                width="8vh"
                            />
                        </div>

                        <div className={style['whereStay-fields-group']} >
                            <TripPeopleDetail  
                                type={FieldTypeEnum.Text}  
                                roundType={FieldRoundEnum.All}
                                placeholder='1 adulto, 1 quarto'   
                                caption='QUEM VAI'  
                                iconLeft={FieldIconEnum.User}
                                width="13vh"
                            />
                        </div>
                        <div className={style['whereStay-button-plus']} >
                            <IconClick path={FieldIconPath.plus} 
                                       widthSize={30}
                                       heightSize={30}
                                       caption='Trechos'
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
