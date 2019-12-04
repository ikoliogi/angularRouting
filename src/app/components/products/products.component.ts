import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  public products: any = [];
  public AddedToCart: any = [];

  /* dhmioyrgoume private metavlhth http sto constructor
  afou kanoume import to HttpClient gia na mporoun na ginoun ta requests */
  constructor(
    private http: HttpClient
  ) { }

  ngOnInit() {

    // me to subscribe to kanoume activate
    this.http.get('http://localhost:3000/products')
      .subscribe(response => {
        this.products = response;
        console.log(this.products);
      });
  }

  public addToCart(id) {
    const p = this.products.find(i => i._id === id);
    const exists = this.AddedToCart.find(a => a.prod._id === id);
    if (!exists) {
      const added = {
        prod: p,
        quantity: 1
      };
      this.AddedToCart.push(added);
    } else {
      exists.quantity = exists.quantity + 1;
    }
  }

  public showCart() {
    console.log(this.AddedToCart);
  }
}
