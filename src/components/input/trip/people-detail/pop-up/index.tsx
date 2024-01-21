import { useEffect, useRef, useState } from "react";
import style from './TripPeoplePopup.module.scss'
import StepperControl from "@/components/input/stepper";
import { ItemPositionEnum } from "@/types/enums/ItemPosition";
import LinkAction from "@/components/link/action";
import Typography from "@/components/text/typography";
import ButtonPrimary from "@/components/button/primary-button";
import { MinorAgeData, PeopleData } from "..";



interface Props {
  show: boolean;
  onClickConfirm: (event: React.MouseEvent<HTMLButtonElement>, peopleData:PeopleData) => void;
}

function TripPeoplePopup(props: Props) {
  let { show, onClickConfirm } = props;
  const [componentShow, setComponentShow] = useState(show);
  const [peopleMinorQuantity, setPeopleMinorQuantity] = useState(0);
  const [peopleOlderQuantity, setPeopleOlderQuantity] = useState(0);
  const [peopleRoomQuantity, setPeopleRoomQuantity] = useState(0);
  const [minorAges, setMinorAges] = useState<MinorAgeData[]>([]);

  const changeMinorAge = (value: number, index: number) => {
    setMinorAges(minorAges.filter((item)=> item.index !== index));    
    setMinorAges((prevItems) => [...prevItems, {index:index, value:value}]);
  };

  const onClick = (event: React.MouseEvent<HTMLButtonElement>) : void =>{
      const peopleData:PeopleData = {
        olderQuantity: peopleOlderQuantity,
        minorQuantity:peopleMinorQuantity,
        roomQuantity:peopleRoomQuantity};        
        peopleData.agesMinors = minorAges;
        onClickConfirm(event, peopleData);
  }

  const divRef = useRef<HTMLDivElement>(null);

  const changeMinorPeople = (value: number) => {
    setPeopleMinorQuantity(value);
  };

  const changeOlderPeople = (value: number) => {
    setPeopleOlderQuantity(value);
  };

  const changeRoomPeople = (value: number) => {
    setPeopleRoomQuantity(value);
  };

  const pageClickPopupEvent = (e: MouseEvent) => {
    if (divRef.current !== null && !divRef.current.contains(e.target as Node)) {
      setComponentShow(false);
      window.removeEventListener('click', pageClickPopupEvent);
    }
  };

  useEffect(() => {
    if (show && !componentShow) {
      setComponentShow(show);
    }
  }, [show]);

  useEffect(() => {
    setPeopleMinorQuantity(peopleMinorQuantity);
  }, [peopleMinorQuantity]);

  const handleDivClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
  };

  useEffect(() => {
    window.removeEventListener('click', pageClickPopupEvent);
    const configureEvent = () => {
      if (componentShow) {
        window.addEventListener('click', pageClickPopupEvent);
      }
    };

    const timeoutId = setTimeout(configureEvent, 100);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [componentShow]);

  const minorOptions = Array.from({ length: 18 }, (_, index) => index);

  return (
    <div
      className={componentShow ? `${style['tripPeoplePopup']} ${style['tripPeoplePopup-show']}`
        : `${style['tripPeoplePopup']}`}
      ref={divRef}
      onClick={handleDivClick}
    >
      <div className={style['tripPeoplePopup-peopleCount']}>
        <StepperControl id="roons" caption="Números de quartos" captionPosition={ItemPositionEnum.Left} changeValue={changeRoomPeople} />
        <StepperControl id="olders" caption="Maiores de 18" captionPosition={ItemPositionEnum.Left} changeValue={changeOlderPeople} />
        <StepperControl id="minors" caption="Menores de 18" captionPosition={ItemPositionEnum.Left} changeValue={changeMinorPeople} />        
      </div>

      <div className={style['tripPeoplePopup-menores']}>
        {peopleMinorQuantity>0 && Array.from({ length: peopleMinorQuantity }, (_, index) => (
            <select key={index} placeholder="Idade menor"
              onChange={(e) => changeMinorAge(Number(e.target.value), index)}
            >
              <option disabled defaultValue={""}>Idade menore</option>
              {minorOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
          </select>
        ))}
      </div>

      <div className={style['tripPeoplePopup-confirmar']}>
        <ButtonPrimary onClick={onClick} >
          <Typography fontSize="caption3" color="white">Confirmar</Typography>
        </ButtonPrimary>
      </div>

    </div>
  );
}

export default TripPeoplePopup;
