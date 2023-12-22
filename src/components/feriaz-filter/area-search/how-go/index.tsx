
import ButtonPrimary from '@/components/button/primary-button';
import style from './HowGo.module.scss'
import Typography from '@/components/text/typography';
import IconClick from '@/components/button/icon-click';
import InputField, { FieldIconEnum, FieldIconPath, FieldRoundEnum, FieldTypeEnum } from '@/components/input/text';
import SimpleDropdow from '@/components/input/dropdow/simple';
import FormGroup from '@/components/form/group';
interface Props{

}

function HowGo(props:Props) {

    const handleAccessConfirm = () =>{

    }

    return (
            <div className={style['HowGo']} >
                <div className={style['HowGo-title']}>
                    <Typography fontSize="caption2" color="white">Descubra o transporte e a hospedagem ideais</Typography>
                </div>
                
                <FormGroup applyOnValidForm={handleAccessConfirm}>
                    <div className={style['HowGo-fields']} >
                        <div className={style['HowGo-fields-move-data']} >
                            <IconClick path={FieldIconPath.moveside} 
                                       widthSize={25}
                                       heightSize={25}/>
                            <div className={style['HowGo-fields-group']} >
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
                        <div className={style['HowGo-fields-group']} >
                            <SimpleDropdow
                                roundType={FieldRoundEnum.All}
                                caption='COMO CHEGAR'  
                                iconLeft={FieldIconEnum.Airplane}
                                iconRight={FieldIconEnum.ArrowDownward}
                                width="18vh"/>
                        </div>
                        <div className={style['HowGo-fields-group']} >
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
                                placeholder='Quando'   
                                caption='VOLTA'  
                                iconLeft={FieldIconEnum.Calendar}
                                width="8vh"
                            />
                        </div>

                        <div className={style['HowGo-fields-group']} >
                            <InputField  
                                type={FieldTypeEnum.Text}  
                                roundType={FieldRoundEnum.All}
                                placeholder='1 adulto, 1 quarto'   
                                caption='QUEM VAI'  
                                iconLeft={FieldIconEnum.User}
                                width="13vh"
                            />
                        </div>
                        <div className={style['HowGo-button-plus']} >
                            <IconClick path={FieldIconPath.plus} 
                                       widthSize={30}
                                       heightSize={30}
                                       caption='Trechos'
                                       captionColor="white"
                            
                            />
                        </div>
                    </div>
                </FormGroup>
                
                <div className={style['HowGo-button-next']} >
                    <ButtonPrimary >
                        <Typography fontSize="button-primary" color="white">Avançar</Typography>
                    </ButtonPrimary>
                </div>
            </div>
    )
}


export default HowGo;
