import { Component, OnInit } from '@angular/core';
import { Employee } from '../ventass';
import { Router } from '@angular/router';
import { ventasService } from '../ventas.service';

@Component({
  selector: 'app-create-ventass',
  templateUrl: './create-ventass.component.html',
  styleUrls: ['./create-ventass.component.css']
})
export class CreateEmployeeComponent implements OnInit {

  employee: Employee = new Employee();
  submitted = false;

  constructor(private employeeService: ventasService,
    private router: Router) { }

  ngOnInit() {
  }

  newEmployee(): void {
    this.submitted = false;
    this.employee = new Employee();
  }

  save() {
    this.employeeService.crearVenta(this.employee)
      .subscribe(data => console.log(data), error => console.log(error));
    this.employee = new Employee();
    this.gotoList();
  }

  onSubmit() {
    this.submitted = true;
    this.save();    
  }

  gotoList() {
    this.router.navigate(['/venta']);
  }
}
