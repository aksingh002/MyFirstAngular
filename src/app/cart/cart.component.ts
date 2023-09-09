import { Component, OnInit } from '@angular/core';
import { CartService } from '../Types/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  
  constructor(private cartServices:CartService) {
  }
  ngOnInit(): void {
    
  }  
  getCart(){
    return this.cartServices.giveComponent();
    
    
    
  }
  
}
