import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { OrderService } from 'src/app/Services/order.service';

@Component({
  selector: 'app-allorders',
  templateUrl: './allorders.component.html',
  styleUrls: ['./allorders.component.scss']
})
export class AllordersComponent implements OnInit{
constructor(private _OrderService:OrderService,private title:Title ){
  title.setTitle('All Order ')
}
Allorders : any =[{}]
cartItems :any;
// pagnation
pageNumber :number=1
itemsPerPage:number =10

ngOnInit(): void {
  this._OrderService.AllOrder().subscribe({
    next:(res)=>{
      console.log(res);
      this.Allorders=res?.data
      // console.log(res);
      
    }
  })

}


}
