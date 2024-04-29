import { IModifier, IModifierDTO } from "./modifier.model";

export interface IModifierGroups {
  id: string;
  name: string;
  modifier: IModifier[];
  min: number;
  max: number;
}

export interface IModifierGroupsDTO {
  name: string;
  modifier: IModifierDTO[];
  min: number;
  max: number;
}
