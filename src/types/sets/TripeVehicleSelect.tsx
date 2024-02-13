

import DrodownItem  from '@/view/components/input/dropdown/ItemDropdown';
import { FieldIconPath } from "@/types/enums/FieldIconPath";

const dropdownVeiculosItems: DrodownItem[] = [
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