import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ProductListComponent } from "./product-list.component";
import { ProductDetailComponent } from "./product-detail.component";
import { ConvertToSpaces } from "../shared/convert-to-spaces.pipe";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { ProductDetailGuard } from "./product-detail.guard";
import { SharedModule } from "../shared/shared.module";
import { ProductRoutingModule } from './product-routing.module';

@NgModule({
  declarations: [ProductListComponent, ProductDetailComponent, ConvertToSpaces],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    ProductRoutingModule
  ]
})
export class ProductModule {}
