import style from './InstructionsFeriaz.module.scss'


interface Props{
    children: React.ReactElement | string;
}

const InstructionsFeriaz = (props:Props) =>{
    const {children} = props;

    return (
        <div className={style['instructionsFeriaz']}>
            <div className={style['instructionsFeriaz-top-left']}></div>
            <div className={style['instructionsFeriaz-top-right']}></div>
            <div className={style['instructionsFeriaz-middle-left']}></div>
            <div className={style['instructionsFeriaz-middle-right']}></div>
            <div className={style['instructionsFeriaz-bottom-left']}></div>
            <div className={style['instructionsFeriaz-bottom-right']}></div>            
            <div className={style['instructionsFeriaz-area-central']}>
                <div className={style['instructionsFeriaz-area-central-content']}>
                    {children}
                </div>                
            </div>            
            <div className={style['instructionsFeriaz-tail']}></div>
        </div>
    );

}

export default InstructionsFeriaz;