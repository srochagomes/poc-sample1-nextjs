
import ButtonPrimary from '@/components/button/primary-button';
import style from './whereStayHowGo.module.scss'
import Typography from '@/components/text/typography';
import InputField, { FieldRoundEnum, FieldTypeEnum } from '@/components/input/text';
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
                    <InputField  
                    type={FieldTypeEnum.Text}  
                    roundType={FieldRoundEnum.Left}
                    placeholder='Insira cidade de origem'   
                    caption='SAINDO DE'                 
                    />

                </FormGroup>
                
                <ButtonPrimary >
                    <Typography fontSize="button-primary" color="white">Avançar</Typography>
                </ButtonPrimary>
            </div>
    )
}

export default WhereStayHowGo;
