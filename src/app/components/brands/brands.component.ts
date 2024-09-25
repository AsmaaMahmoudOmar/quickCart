import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { brand } from 'src/app/Interfaces/brand';
import { BrandService } from 'src/app/Services/brand.service';

@Component({
  selector: 'app-brands',
  templateUrl: './brands.component.html',
  styleUrls: ['./brands.component.scss']
})
export class BrandsComponent implements OnInit{
constructor(private _BrandService:BrandService,private title:Title ){
  title.setTitle('Brands')
}
brands :brand [] =[];
//pagination
pageNumber:number =1
itemsPerPage:number = 10

ngOnInit(): void {
  this._BrandService.getBrand().subscribe({
    next:(res)=>{
      console.log(res);
      this.brands=res.data
      
    }
  })
}


}
