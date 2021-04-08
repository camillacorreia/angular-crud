import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

  propLegal = "qualquer coisa"

  constructor() { }

  ngOnInit(): void {
  }

  toDo(): void {
    console.log('Fazendo algo')
  }

}
