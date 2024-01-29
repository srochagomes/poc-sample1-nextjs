
import { SimpleDrodownItem } from "@/view/components/input/dropdow/simple/pop-up";
import { FieldIconPath } from "../enums/FieldIconPath";

const dropdownVeiculosItems: SimpleDrodownItem[] = [
    {
      key: "item1",
      icon: FieldIconPath.airplane,
      caption: "Avião"
    },
    {
      key: "item2",
      icon: FieldIconPath.bus,
      caption: "Onibus"
    },
    {
      key: "item3",
      icon: FieldIconPath.car,
      caption: "Carro Alugado"
    }
  ];


  export default dropdownVeiculosItems;  