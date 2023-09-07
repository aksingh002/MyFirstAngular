import { Component } from '@angular/core';

interface book {
  name:string;
  rate:number;
  image:string;
}

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent {
  name:string = 'karan singh'
  src:string= ''
  is:boolean=false

  book:book[] = [{name:"this is asweme ",rate:200,image:"/assets/images/PXL_20230218_164053220.jpg"},{ name:" this is cool",rate:200,image:"/assets/images/karan_singh_image.png"}]

 
  
}
