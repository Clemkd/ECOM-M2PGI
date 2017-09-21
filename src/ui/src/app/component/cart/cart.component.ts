import { Component, OnInit } from '@angular/core';
import { CartService } from '../../service/cart.service';
import { Cart } from '../../model/cart';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cart : Cart;
  constructor(private cartService : CartService) { }

  ngOnInit() {
    this.cartService.getCart().subscribe(cartRes => {
          if(!cartRes.err){
            this.cart.cartItems = cartRes.cartItems;
            this.cart.totalprice = 0;
            for(let cartItem of this.cart.cartItems){
              this.cart.totalprice += cartItem.bungalow.price * cartItem.duration;
            }
      }
      else console.log(cartRes.err);
    });
  }

}