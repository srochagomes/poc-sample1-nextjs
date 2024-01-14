
import IconSVG from '@/components/icons/icon-svg';
import style from './CardInformation.module.scss'


interface Props{
    icon:string 
    header:string
    content:string
}

export default function CardInformation(props:Props) {
    const {icon, header, content} = props;
  
    return (
        <div className={style['cardInformation']}>
            <div className={style['cardInformation-icon']}>
               <IconSVG path={icon} />
            </div>
            <div className={style['cardInformation-header']}>
                {header}
            </div>
            <div className={style['cardInformation-content']}>
                {content}
            </div>


        </div>
    )
}