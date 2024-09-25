import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CartComponent } from './components/cart/cart.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { BrandsComponent } from './components/brands/brands.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import { BlankLayoutComponent } from './layouts/blank-layout/blank-layout.component';
import { authGuard } from './guards/auth.guard';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { PaymentComponent } from './components/payment/payment.component';
import { AllordersComponent } from './components/allorders/allorders.component';
import { UserOrderComponent } from './components/user-order/user-order.component';
import { WishlistComponent } from './components/wishlist/wishlist.component';
import { SpecificcategoryComponent } from './components/specificcategory/specificcategory.component';
import { SubcategoryComponent } from './components/subcategory/subcategory.component';
import { AllcategoryComponent } from './components/allcategory/allcategory.component';
import { SpeificSubCategoryComponent } from './components/speific-sub-category/speific-sub-category.component';
import { SpecificBrandComponent } from './components/specific-brand/specific-brand.component';
import { ForgetPasswordComponent } from './components/forget-password/forget-password.component';
import { RestCodeComponent } from './components/rest-code/rest-code.component';
import { RestPasswordComponent } from './components/rest-password/rest-password.component';

const routes: Routes = [
  {
    path: "", component: BlankLayoutComponent, children: [
      { path: "", redirectTo: "home", pathMatch: "full" },
      { path: "home", component: HomeComponent, canActivate: [authGuard] },
      { path: "cart", component: CartComponent, canActivate: [authGuard] },
      {
        path: "all", component: AllcategoryComponent, canActivate: [authGuard], children: [
          { path: "", redirectTo: "categories", pathMatch: "full" },
          { path: "sub", component: SubcategoryComponent, canActivate: [authGuard] },
          { path: "categories", component: CategoriesComponent, canActivate: [authGuard] }
      ,{ path: "categories/specific/:id", component: SpecificcategoryComponent, canActivate: [authGuard] },
      { path: "sub/specSub/:id", component: SpeificSubCategoryComponent, canActivate: [authGuard] },
    
        ]
      },
      { path: "brands", component: BrandsComponent, canActivate: [authGuard] },
      { path: "brand/:id", component: SpecificBrandComponent, canActivate: [authGuard] },

      { path: "details/:id", component: ProductDetailsComponent, canActivate: [authGuard] },
      { path: "payment/:id", component: PaymentComponent, canActivate: [authGuard] },
      { path: "allorders", component: AllordersComponent, canActivate: [authGuard] },
      { path: "userorder/:id", component: UserOrderComponent, canActivate: [authGuard] },
      { path: "wishlist", component: WishlistComponent, canActivate: [authGuard] },





    ]
  },
  {
    path: "", component: AuthLayoutComponent, children: [
      { path: "login", component: LoginComponent },
      { path: "register", component: RegisterComponent },
      { path: "forget", component: ForgetPasswordComponent },
      { path: "code", component: RestCodeComponent },
      {path:"resetPass",component:RestPasswordComponent}
    ]
  },

  { path: "**", component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
