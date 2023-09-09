import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Book } from '../../Types/book';
import { CartService } from 'src/app/Types/cart.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent {
@Input() book:Book = {} as Book;

// @Output() emitbook = new EventEmitter<Book>();

constructor(private Cartservice:CartService){}
  addToCart(){
    this.Cartservice.add(this.book)
    // this.emitbook.emit(this.book)
  }
}
