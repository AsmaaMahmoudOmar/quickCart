import { Component, OnInit, Renderer2 } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { WishlistService } from 'src/app/Services/wishlist.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.scss']
})
export class WishlistComponent implements OnInit {
  constructor
  (
    private _WishlistService: WishlistService, 
    private _Renderer: Renderer2,
    private title:Title
  ) {title.setTitle('WishLists') }
  wishInfo: any[] = [
    {}
  ];
  ngOnInit(): void {
    this._WishlistService.getWishlist().subscribe({
      next: (res) => {
        console.log(res);
        this.wishInfo = res.data

      }
    })
  }
  deleteItem(ProdID: string, btnRemove: HTMLButtonElement): void {
    this._Renderer.setAttribute(btnRemove, 'disabled', 'true')
    this._WishlistService.deleteFromWishlist(ProdID).subscribe({
      next: ({ data }) => {
        console.log({ data });
        this._WishlistService.getWishlist().subscribe({
          next: (res) => {
            console.log(res);
            this.wishInfo = res.data
        this._WishlistService.wishNum.next(this.wishInfo.length)

          }

        })

        this._Renderer.removeAttribute(btnRemove, 'disabled')
      },
      error: (err) => {
        console.log(err);

      }

    })
  }


}
