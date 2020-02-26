import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ventasService {
  
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
  
  private remoto = 'http://localhost:8080/springboot-crud-rest/api/v1/ventas';

  constructor(private http: HttpClient) { }

  getVenta(OrderId: number): Observable<any> {
    return this.http.get(`${this.remoto}/${OrderId}`);
  }

  crearVenta(venta: Object): Observable<Object> {
    return this.http.post(`${this.remoto}`, venta);
  }

  actualizaVenta(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.remoto}/${id}`, value);
  }

  borrarVenta(id: number): Observable<any> {
    return this.http.delete(`${this.remoto}/${id}`, { responseType: 'text' });
  }

  getEmployeesList(): Observable<any> {
    return this.http.get(`${this.remoto}`);
  }
}