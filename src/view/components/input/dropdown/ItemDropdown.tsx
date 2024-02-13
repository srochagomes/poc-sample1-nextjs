import { FieldIconPath } from "@/types/enums/FieldIconPath";

export default interface DrodownItem {
    key: string;
    icon?: FieldIconPath;
    caption?: string;
    onlyChoose?:boolean;
    
  }