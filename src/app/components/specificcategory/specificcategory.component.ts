import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { CategoryService } from 'src/app/Services/category.service';

@Component({
  selector: 'app-specificcategory',
  templateUrl: './specificcategory.component.html',
  styleUrls: ['./specificcategory.component.scss']
})
export class SpecificcategoryComponent implements OnInit {
  constructor(private _CategoryService: CategoryService,
    private _ActivatedRoute: ActivatedRoute,
    private title:Title
  ) { }

  cateID: any = '';
  data :any = {}
  ngOnInit(): void {
    this._ActivatedRoute.paramMap.subscribe({
      next: (param) => {
        this.cateID = param.get('id')
        console.log(this.cateID);
        
      }
    })

      this._CategoryService.getSpecificCategory(this.cateID).subscribe({
        next:(res)=>{
          console.log(res);
          this.data =res.data
          console.log(this.data);
          this.title.setTitle(`Specific Category | ${this.data?.name}`)
          
          
        }
      })
    
  }
 
}
