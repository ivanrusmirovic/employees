import { Component, OnInit } from '@angular/core';
import { IEntity } from '../models/entityModel';
import { EmployeeService } from '../services/employee.service';
import {PieData} from '../models/pieModel';


@Component({
  selector: 'app-employeetable',
  templateUrl: './employeetable.component.html',
  styleUrls: ['./employeetable.component.scss'],
})
export class EmployeetableComponent implements OnInit {
  constructor(private employeeService: EmployeeService) {}
  public timeEntities: IEntity[] = [];
  public employeeList: string[] = [];
  public pieData: PieData[] = [];

  ngOnInit(): void {
    this.employeeService.getEmployees().subscribe((employees) => {
      this.timeEntities = employees;
      this.getEmployeeList();
    });
  }
  
  private getEmployeeList(): void {
    this.timeEntities.forEach(element => {
      if(this.employeeList.indexOf(element.EmployeeName) === -1) {
        this.employeeList.push(element.EmployeeName);
      }
    });
  }

  public getEmployeeTime(employee: string): number {
    let totalTime: number = 0;
    
      this.timeEntities.forEach((entity) => {
        let tempStartTime: number = new Date(entity.StarTimeUtc).getTime();
        let tempEndTime: number = new Date(entity.EndTimeUtc).getTime();
      if(entity.EmployeeName === employee) {
          totalTime += this.calculateTimeDifferance(tempStartTime, tempEndTime)
        } 
      })
      this.pieData.push({employeeName: employee, totalTime: totalTime});
    return totalTime;
  }

  private calculateTimeDifferance(startTime: number, endTime: number) {
    return Math.abs(endTime - startTime) / 36e5;
  }
}
