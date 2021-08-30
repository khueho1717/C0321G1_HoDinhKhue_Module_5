import {EducationDegree} from "./education-degree";
import {Position} from "./position";
import {Division} from "./division";

export interface Employee {
  id: number;
  employeeCode: string;
  employeeName: string;
  employeeBirthday: string;
  employeeGender: number;
  employeeIdCard: string;
  employeePhone: string;
  employeeEmail: string;
  employeeAddress: string;
  educationDegree: EducationDegree;
  position: Position;
  division: Division;
  employeeSalary: number;
}
