import { AbstractControl, FormGroup } from "@angular/forms";
import { ITeam } from "./team";

export interface ITeamFormGroup extends FormGroup {
  value: ITeam;

  // We need to add these manually again, same fields as ITeam
  controls: {
    teamName: AbstractControl;
    employees: AbstractControl;
  };
}
