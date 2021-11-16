import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Serve1Service {
  public employees=[
    {"name":"Roshni","id":194,"dept":"CSE"},
    {"name":"Grishma","id":587,"dept":"ECE"},
    {"name":"Yunas","id":849,"dept":"IT"}
  ]
getEmployee(){
  return this.employees
}

  constructor() { }
}
