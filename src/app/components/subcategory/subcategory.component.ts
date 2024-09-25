import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Categories } from 'src/app/Interfaces/categories';
import { CategoryService } from 'src/app/Services/category.service';

@Component({
  selector: 'app-subcategory',
  templateUrl: './subcategory.component.html',
  styleUrls: ['./subcategory.component.scss']
})
export class SubcategoryComponent implements OnInit{
constructor(private _CategoryService:CategoryService,
  private title:Title
){ title.setTitle('Category')}

subData :Categories [] =[]
ngOnInit(): void {
  this._CategoryService.getAllSubCategory().subscribe({
    next:(res)=>{
      console.log(res);
      this.subData =res.data
      
    }
  })
}
}
