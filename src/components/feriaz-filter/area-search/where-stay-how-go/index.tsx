
import ButtonPrimary from '@/components/button/primary-button';
import style from './whereStayHowGo.module.scss'
import Typography from '@/components/text/typography';
import InputField, { FieldIconEnum, FieldRoundEnum, FieldTypeEnum } from '@/components/input/text';
import FormGroup from '@/components/form/group';
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
                </FormGroup>
                
                <ButtonPrimary >
                    <Typography fontSize="button-primary" color="white">Avançar</Typography>
                </ButtonPrimary>
            </div>
    )
}

export default WhereStayHowGo;
