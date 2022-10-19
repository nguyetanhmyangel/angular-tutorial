import { IDepartment } from "./department";
import { IEmployee } from "./employee";

export interface ITeam {
	teamName: string;
	noOfEmp: number;
	teamLead: IEmployee;
	department: IDepartment;
}
