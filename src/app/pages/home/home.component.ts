import { Component, OnInit } from '@angular/core';
import { NikitService } from 'src/app/nikit.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public data;
  public Biodata = [];

  private _products = [
    { "name": "Licensed Frozen Hat", "description": "Incidunt et magni", "price": "170.00", "quantity": 56840 },
    { "name": "Rustic Concrete Chicken", "description": "Sint libero mollitia", "price": "302.00", "quantity": 9358 },
    { "name": "Fantastic Metal Computer", "description": "In consequuntur cupiditat", "price": "279.00", "quantity": 90316 },
    { "name": "Refined Concrete Chair", "description": "Saepe nemo praesentium", "price": "760.00", "quantity": 5899 }
  ];
  public get products() {
    return this._products;
  }
 

  constructor(private nikitservice:NikitService) { }

  ngOnInit(): void {
    this.data = this.nikitservice.work();
    this.Biodata = this.nikitservice.Biodata();
  }

}
