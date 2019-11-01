import { Component, OnInit } from "@angular/core";
import { IProduct } from "./iproduct";
import { ProductService } from './product.service';


@Component({
  selector: "pm-products",
  templateUrl: "./product-list.component.html",
  styleUrls: ["./product-list.component.css"]
})

export class ProductListComponent implements OnInit {

  imageWidth: number = 50;

  imageMargin: number = 2;

  showImage: boolean = false;

  filteredProducts: IProduct[];

  pageTitle: string = "Product List";

  private _listFilter: string;
  public get listFilter(): string {
    return this._listFilter;
  }

  public set listFilter(value: string) {
    this._listFilter = value;
    this.filteredProducts = this.listFilter
      ? this.performFilter(this.listFilter)
      : this.products;
  }

  products: IProduct[];

  constructor(private productService:ProductService) {
   // this.listFilter = "cart";
  }

  ngOnInit(): void {
    this.products = this.productService.getProducts();
    this.filteredProducts = this.products;

  }

  toggleImage(): void {
    this.showImage = !this.showImage;
  }

  performFilter(filterBy: string): IProduct[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.products.filter(
      (product: IProduct) =>
        product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1
    );
  }
  onRatingClicked(message:string):void{
    this.pageTitle = 'Product list ' + message;
  }
}
