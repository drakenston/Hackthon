import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
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
  
  private baseUrl = 'http://localhost:8080/springboot-crud-rest/api/v1/employees';

  constructor(private http: HttpClient) { }

  getEmployee(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  createEmployee(employee: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, employee);
  }

  updateEmployee(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }

  deleteEmployee(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }

  getEmployeesList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }
}