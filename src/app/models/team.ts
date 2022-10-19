import { IEmployee } from "./employee";

export interface ITeam {
	teamName: string;
	employees: IEmployee[];
}
