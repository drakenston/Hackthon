import { Component, OnInit } from '@angular/core';

import { Observable } from "rxjs";
import { ventasService } from "../ventas.service";
import { Ventas } from "../ventas";
import { Router } from '@angular/router';

@Component({
  selector: 'app-ventass-list',
  templateUrl: './ventass-list.component.html',
  styleUrls: ['./ventass-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  objeto=[{
    Region: "Prueba;",
    Country:"string",
    ItemType:"string",	 
    SalesChannel:"string",
    OrderPriority:"string",	
    OrderDate: "Date",
    OrderID: 1, 
    ShipDate:"Date",
    UnitsSold:"number",
    UnitPrice:"number",
    UnitCost:"number",	
    TotalRevenue:"number",
    TotalCost:"number",
    TotalProfit:"number"
  },{
    Region: "Prueba;",
    Country:"string",
    ItemType:"string",	 
    SalesChannel:"string",
    OrderPriority:"string",	
    OrderDate: "Date",
    OrderID: 2, 
    ShipDate:"Date",
    UnitsSold:"number",
    UnitPrice:"number",
    UnitCost:"number",	
    TotalRevenue:"number",
    TotalCost:"number",
    TotalProfit:"number"
  },{
    Region: "Prueba;",
    Country:"string",
    ItemType:"string",	 
    SalesChannel:"string",
    OrderPriority:"string",	
    OrderDate: "Date",
    OrderID: 3, 
    ShipDate:"Date",
    UnitsSold:"number",
    UnitPrice:"number",
    UnitCost:"number",	
    TotalRevenue:"number",
    TotalCost:"number",
    TotalProfit:"number"
  },{
    Region: "Prueba;",
    Country:"string",
    ItemType:"string",	 
    SalesChannel:"string",
    OrderPriority:"string",	
    OrderDate: "Date",
    OrderID: 4, 
    ShipDate:"Date",
    UnitsSold:"number",
    UnitPrice:"number",
    UnitCost:"number",	
    TotalRevenue:"number",
    TotalCost:"number",
    TotalProfit:"number"
  },{
    Region: "Prueba;",
    Country:"string",
    ItemType:"string",	 
    SalesChannel:"string",
    OrderPriority:"string",	
    OrderDate: "Date",
    OrderID: 5, 
    ShipDate:"Date",
    UnitsSold:"number",
    UnitPrice:"number",
    UnitCost:"number",	
    TotalRevenue:"number",
    TotalCost:"number",
    TotalProfit:"number"
  },{
    Region: "Prueba;",
    Country:"string",
    ItemType:"string",	 
    SalesChannel:"string",
    OrderPriority:"string",	
    OrderDate: "Date",
    OrderID: 6, 
    ShipDate:"Date",
    UnitsSold:"number",
    UnitPrice:"number",
    UnitCost:"number",	
    TotalRevenue:"number",
    TotalCost:"number",
    TotalProfit:"number"
  }]

  venta: Observable<Ventas[]>;

  constructor(private ventaService: ventasService,
    private router: Router) {}

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.venta = this.ventaService.getEmployeesList();
  }

  borrarVenta(id: number) {
    this.ventaService.borrarVenta(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }

  employeeDetails(id: number){
    this.router.navigate(['details', id]);
  }
}