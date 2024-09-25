import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { OrderService } from 'src/app/Services/order.service';

@Component({
  selector: 'app-user-order',
  templateUrl: './user-order.component.html',
  styleUrls: ['./user-order.component.scss']
})
export class UserOrderComponent implements OnInit{
constructor(
  private _ActivatedRoute:ActivatedRoute,
  private _OrderService:OrderService,
  private title :Title

){ title.setTitle('User Order')}
userId :any =''
userOrder :any[]=[];
term:string =''
// pagination
itemsPerPage:number= 3;
pageNumber :number =1;
ngOnInit(): void {
  this._ActivatedRoute.paramMap.subscribe({
    next:(param)=>{
      console.log(param);
      this.userId = param.get('id')
      
    }
  })

this._OrderService.UserOrders(this.userId).subscribe(
  {
    next:(res)=>{

      this.userOrder= res
      console.log(this.userOrder);
      
      
    }
  }
)
}

}

