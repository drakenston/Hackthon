import { Employee } from '../ventass';
import { Component, OnInit, Input } from '@angular/core';
import { EmployeeService } from '../ventass.service';
import { EmployeeListComponent } from '../ventass-list/ventass-list.component';
import { Router, ActivatedRoute } from '@angular/router';
import { Ventas } from '../ventas';


@Component({
  selector: 'app-ventass-details',
  templateUrl: './ventass-details.component.html',
  styleUrls: ['./ventass-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {

  id: number;
  venta: Ventas;

  constructor(private route: ActivatedRoute,private router: Router,
    private employeeService: EmployeeService) { }

  ngOnInit() {
    this.venta = new Ventas();

    this.id = this.route.snapshot.params['id'];
    
    this.employeeService.getEmployee(this.id)
      .subscribe(data => {
        console.log(data)
        this.venta = data;
      }, error => console.log(error));
  }

  list(){
    this.router.navigate(['employees']);
  }
}
