import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-c1',
  templateUrl: './c1.component.html',
  styleUrls: ['./c1.component.css']
})
export class C1Component implements OnInit {
Data=[];

  constructor(private apiCaller:HttpClient ) { }

  ngOnInit(): void {
    this.getData();
  }

  getData()
  {
this.apiCaller.get('https://test2612021.herokuapp.com/')
.subscribe((apiResponse:[])=>{
  this.Data=apiResponse;
})
  }}
