import { Injectable } from '@angular/core';
import { Book } from './book';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  
  
  cart:Book[]=[]
  constructor() { }
  add(book:Book){
    this.cart.push(book)
  }

  giveComponent() {
    return this.cart 
  }
}
