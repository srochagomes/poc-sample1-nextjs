
import ButtonPrimary from '@/components/button/primary-button';
import style from './RentCar.module.scss'
import Typography from '@/components/text/typography';
import FormGroup from '@/components/form/group';
import IconClick from '@/components/button/icon-click';
import InputField from '@/components/input/text';
import { FieldIconPath } from "@/types/enums/FieldIconPath";
import { FieldIconEnum } from "@/types/enums/FieldIconEnum";
import { FieldTypeEnum } from "@/types/enums/FieldTypeEnum";
import { FieldRoundEnum } from "@/types/enums/FieldRoundEnum";
import SimpleDropdow from '@/components/input/dropdow/simple';
import SwitchLight from '@/components/input/switch';
interface Props{

}

function RentCar(props:Props) {

    const handleAccessConfirm = () =>{

    }

    return (
            <div className={style['RentCar']} >
                <div className={style['RentCar-title']}>
                    <Typography fontSize="caption2" color="white">Descubra o transporte e a hospedagem ideais</Typography>
                </div>
                
                <FormGroup applyOnValidForm={handleAccessConfirm}>
                    <div className={style['RentCar-fields']} >
                        <div className={style['RentCar-fields-move-data']} >
                            <IconClick path={FieldIconPath.moveside} 
                                       widthSize={25}
                                       heightSize={25}/>
                            <div className={style['RentCar-fields-group']} >
                                <InputField  
                                    type={FieldTypeEnum.Text}  
                                    roundType={FieldRoundEnum.Left}
                                    placeholder='Insira cidade de origem'   
                                    caption='SAINDO DE'  
                                    iconLeft={FieldIconEnum.Circle}
                                />
                                <InputField  
                                    type={FieldTypeEnum.Text}  
                                    roundType={FieldRoundEnum.Right}
                                    placeholder='Insira cidade de destino'   
                                    caption='INDO PARA'  
                                    iconLeft={FieldIconEnum.Location}
                                />
                            </div>                        
                        </div>
                        
                        <div className={style['RentCar-fields-group']} >
                            <InputField  
                                type={FieldTypeEnum.Text}  
                                roundType={FieldRoundEnum.Left}
                                placeholder='Quando'   
                                caption='IDA'  
                                iconLeft={FieldIconEnum.Calendar}
                                width="8vh"
                            />
                            <InputField  
                                type={FieldTypeEnum.Text}  
                                roundType={FieldRoundEnum.Right}
                                placeholder='Que horas'   
                                caption='RETIRADA'  
                                iconLeft={FieldIconEnum.Timer}
                                width="8vh"
                            />
                        </div>

                        <div className={style['RentCar-fields-group']} >
                            <InputField  
                                type={FieldTypeEnum.Text}  
                                roundType={FieldRoundEnum.Left}
                                placeholder='Quando'   
                                caption='IDA'  
                                iconLeft={FieldIconEnum.Calendar}
                                width="8vh"
                            />
                            <InputField  
                                type={FieldTypeEnum.Text}  
                                roundType={FieldRoundEnum.Right}
                                placeholder='Que horas'   
                                caption='RETIRADA'  
                                iconLeft={FieldIconEnum.Timer}
                                width="8vh"
                            />
                        </div>
                        
                    </div>
                    <div className={style['RentCar-fields']} >
                            <SwitchLight caption="Devolver veículo em outro lugar"/>
                        </div>
                </FormGroup>
                
                <div className={style['RentCar-button-next']} >
                    <ButtonPrimary >
                        <Typography fontSize="button-primary" color="white">Avançar</Typography>
                    </ButtonPrimary>
                </div>
            </div>
    )
}

export default RentCar;
