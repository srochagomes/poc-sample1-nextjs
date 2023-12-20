
import ButtonPrimary from '@/components/button/primary-button';
import style from './whereStayHowGo.module.scss'
import Typography from '@/components/text/typography';
import InputField, { FieldIconEnum, FieldIconPath, FieldRoundEnum, FieldTypeEnum } from '@/components/input/text';
import FormGroup from '@/components/form/group';
import SimpleDropdow from '@/components/input/dropdow/simple';
import IconClick from '@/components/button/icon-click';
import IconSVG from '@/components/icons/icon-svg';

interface Props{

}


function WhereStayHowGo(props:Props) {
    
    const handleAccessConfirm = () =>{

    }

    return (
            <div className={style['whereStayHowGo']} >
                <div className={style['whereStayHowGo-title']}>
                    <Typography fontSize="caption2" color="white">Descubra o transporte e a hospedagem ideais</Typography>
                </div>
                
                <FormGroup applyOnValidForm={handleAccessConfirm}>
                    <div className={style['whereStayHowGo-fields']} >
                        <div className={style['whereStayHowGo-fields-group']} >
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
                        <div className={style['whereStayHowGo-fields-group']} >
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

                        <div className={style['whereStayHowGo-fields-group']} >
                            <InputField  
                                type={FieldTypeEnum.Text}  
                                roundType={FieldRoundEnum.All}
                                placeholder='1 adulto, 1 quarto'   
                                caption='QUEM VAI'  
                                iconLeft={FieldIconEnum.User}
                                width="13vh"
                            />
                        </div>
                        <div className={style['whereStayHowGo-fields-group']} >
                            <SimpleDropdow
                                roundType={FieldRoundEnum.All}
                                caption='QUEM VAI'  
                                iconLeft={FieldIconEnum.Airplane}
                                iconRight={FieldIconEnum.ArrowDownward}
                                width="10vw"/>
                        </div>
                        <div className={style['whereStayHowGo-button-plus']} >
                            <IconClick path={FieldIconPath.plus} 
                                       widthSize={30}
                                       heightSize={30}
                                       caption='Trechos'
                                       captionColor="white"
                            
                            />
                        </div>
                    </div>
                </FormGroup>
                
                <div className={style['whereStayHowGo-button-next']} >
                    <ButtonPrimary >
                        <Typography fontSize="button-primary" color="white">Avançar</Typography>
                    </ButtonPrimary>
                </div>
            </div>
    )
}

export default WhereStayHowGo;
