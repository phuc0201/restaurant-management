import { Modifier, ModifierDTO } from "./modifier.model";

export class ModifierGroups {
  _id: string = '';
  name: string = '';
  min: number = 0;
  max: number = 1;
  modifier: Modifier[] = [];
}


export class ModifierGroupsDTO {
  _id?: string = '';
  name: string = '';
  min: number = 0;
  max: number = 1;
  modifier: ModifierDTO[] = [];
}
