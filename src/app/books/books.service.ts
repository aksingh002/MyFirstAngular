import { Injectable } from '@angular/core';

@Injectable()
export class BooksService {
  getbooks(){
    return [{name:"this is asweme ",rate:200,image:"/assets/images/PXL_20230218_164053220.jpg"},{ name:" this is cool",rate:200,image:"/assets/images/karan_singh_image.png"}]
  }
  constructor() { }
}
