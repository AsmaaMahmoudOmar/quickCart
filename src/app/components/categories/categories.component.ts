import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Categories } from 'src/app/Interfaces/categories';
import { CategoryService } from 'src/app/Services/category.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {

  constructor(private _CategoryService:CategoryService,private title:Title){
    title.setTitle('Caterory')
  }

   cateData : Categories []=[]
  ngOnInit(): void {
    this._CategoryService.getCategory().subscribe({
      next:(res)=>{
        console.log(res);
        this.cateData = res.data
        
        
      }
    })
  }
}
