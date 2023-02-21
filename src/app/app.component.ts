import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ecomExample';
<<<<<<< Updated upstream
=======

  ngOnInit():void{
    // this.authService.refresh()


    
  }

  updateCartCount(count:number){
    count = 0;
    this.cartItemTotal = count;
  }

  componentAdded(event: any){
    console.log(event)
    console.log(event.isLoading)
    // this.cartItemTotal = event.allCartItems
    // console.log(this.cartItemTotal)
  }
>>>>>>> Stashed changes
}
