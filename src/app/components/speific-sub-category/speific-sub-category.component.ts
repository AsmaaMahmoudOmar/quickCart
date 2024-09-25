import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CategoryService } from 'src/app/Services/category.service';

@Component({
  selector: 'app-speific-sub-category',
  templateUrl: './speific-sub-category.component.html',
  styleUrls: ['./speific-sub-category.component.scss']
})
export class SpeificSubCategoryComponent implements OnInit {
  constructor(
    private _CategoryService: CategoryService,
    private _ActivatedRoute: ActivatedRoute
  ) { }
  specSubId: any = '';
  ngOnInit(): void {
    this._ActivatedRoute.paramMap.subscribe({
      next: (parma) => {
        this.specSubId = parma.get('id')
        console.log(this.specSubId);
        
      }
    })
    this._CategoryService.getAllSubCategoryOfSpecic(this.specSubId).subscribe({
      next:(res)=>{
        console.log(res);
        
      }
    })
  }

}
