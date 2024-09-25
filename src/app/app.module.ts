import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule}  from '@angular/platform-browser/animations';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { CartComponent } from './components/cart/cart.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { BrandsComponent } from './components/brands/brands.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { FooterComponent } from './components/footer/footer.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { NavbarBlankComponent } from './components/navbarBlank/navbar-blank.component';
import { NavbarAuthComponent } from './components/navbarAuth/navbar-auth.component';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import { BlankLayoutComponent } from './layouts/blank-layout/blank-layout.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { SliceTextPipe } from './pipe/slice-text.pipe';
import { ToastrModule } from 'ngx-toastr';
import { provideToastr } from 'ngx-toastr';
import { PaymentComponent } from './components/payment/payment.component';
import { AllordersComponent } from './components/allorders/allorders.component';
import { UserOrderComponent } from './components/user-order/user-order.component';
import {NgxPaginationModule} from 'ngx-pagination';
import { WishlistComponent } from './components/wishlist/wishlist.component';
import { SubcategoryComponent } from './components/subcategory/subcategory.component';
import { SpecificcategoryComponent } from './components/specificcategory/specificcategory.component';
import { AllcategoryComponent } from './components/allcategory/allcategory.component';
import { SpeificSubCategoryComponent } from './components/speific-sub-category/speific-sub-category.component';
import { SpecificBrandComponent } from './components/specific-brand/specific-brand.component';
import { ForgetPasswordComponent } from './components/forget-password/forget-password.component';
import { RestCodeComponent } from './components/rest-code/rest-code.component';
import { RestPasswordComponent } from './components/rest-password/rest-password.component';
import { SearchPipe } from './pipe/search.pipe';
import { HeaderInterceptor } from './interceptors/header.interceptor';
import { SliderComponent } from './components/slider/slider.component';
import { NgxSpinnerModule } from "ngx-spinner";
import { LoadingInterceptor } from './interceptors/loading.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CartComponent,
    CategoriesComponent,
    BrandsComponent,
    LoginComponent,
    RegisterComponent,
    FooterComponent,
    NotFoundComponent,
    NavbarBlankComponent,
    NavbarAuthComponent,
    AuthLayoutComponent,
    BlankLayoutComponent,
    ProductDetailsComponent,
    SliceTextPipe,
    PaymentComponent,
    AllordersComponent,
    UserOrderComponent,
    WishlistComponent,
    SubcategoryComponent,
    SpecificcategoryComponent,
    AllcategoryComponent,
    SpeificSubCategoryComponent,
    SpecificBrandComponent,
    ForgetPasswordComponent,
    RestCodeComponent,
    RestPasswordComponent,
    SearchPipe,
    SliderComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule ,
    CarouselModule,
    ReactiveFormsModule,
    HttpClientModule,
    ToastrModule.forRoot(),
    NgxPaginationModule,
    FormsModule,
    NgxSpinnerModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [{
    provide:HTTP_INTERCEPTORS,
    useClass:HeaderInterceptor,
    multi:true

  },{
    provide:HTTP_INTERCEPTORS,
    useClass:LoadingInterceptor,
    multi:true
  }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
