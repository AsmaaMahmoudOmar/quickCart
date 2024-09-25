import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-allcategory',
  templateUrl: './allcategory.component.html',
  styleUrls: ['./allcategory.component.scss']
})
export class AllcategoryComponent {
constructor(private title:Title ){
  title.setTitle('Category')
}
}
