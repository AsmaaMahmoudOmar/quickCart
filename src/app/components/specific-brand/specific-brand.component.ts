import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { BrandService } from './../../Services/brand.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-specific-brand',
  templateUrl: './specific-brand.component.html',
  styleUrls: ['./specific-brand.component.scss']
})
export class SpecificBrandComponent implements OnInit {
  constructor(
    private _BrandService: BrandService,
     private _ActivatedRoute: ActivatedRoute,
    private title:Title
    ) { }
  brandId: any = ''
  brandData :any ={}
  ngOnInit(): void {
    this._ActivatedRoute.paramMap.subscribe({
      next: (param) => {
        this.brandId = param.get('id')
      }
    })
    this._BrandService.getSpecificCategory(this.brandId).subscribe({
      next:(res)=>{
        console.log(res);
        this.brandData = res.data
        this.title.setTitle(`${this.brandData?.name} | Brand`)
      }
    })
  }
}
