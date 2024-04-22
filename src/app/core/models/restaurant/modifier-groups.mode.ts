import { IModifier } from "./modifier.model";

export interface IModifierGroups {
  id: string;
  name: string;
  modifier: IModifier[];
  min: number;
  max: number;
}
