import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  public name: string;
  public last_name: string;
  public department: string;
  public empId: number;

  constructor() { 
    this.name = 'Jane';
    this.last_name='Doe';
    this.department='IT';
    this.empId=10956378;
    console.log("componente empleado cargado");
  }

  ngOnInit(): void {
  }

}
