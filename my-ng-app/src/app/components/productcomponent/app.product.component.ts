import { Component, OnInit } from "@angular/core";
import { Logic } from './../../models/app.logic';
import {ProductInfo} from './../../models/app.product.model';
import { Categories, Manufacturers } from "./../../models/app.constants";
@Component({
  selector: 'app-product-component',
  templateUrl:'app.product.view.html'
})
export class ProductComponent implements OnInit{  // the OnInit is implemented by Component
    product: ProductInfo;
    products: Array<ProductInfo>;
    private logic:Logic;
    columnHeaders:Array<string>;
    // save constants array data into local public properties
    categories = Categories;
    manufacturers = Manufacturers;
    isDelete:boolean=false;
    selIndex:number=0;
    constructor(){
      this.product = new ProductInfo(0, '', '', '', '','',0);
      this.products = new Array<ProductInfo>();
      this.logic = new Logic();
      this.columnHeaders = new Array<string>();
      console.log('Constructor Called');
    }

    ngOnInit():void {
      console.log('ng on init Called');
      // read all public data members' name of the ProductInfo class and add
      // it in columnHeaders array
      this.columnHeaders = Object.keys(this.product);
      console.log(this.columnHeaders);
        // read all products
      this.products = this.logic.getProducts();
    }

    clear():void {
      this.product = new ProductInfo(0, '', '', '', '','',0);
      this.isDelete=false;
      this.selIndex=0;
    }
    save():void {
      this.products = this.logic.addProduct(this.product,this.isDelete,this.selIndex);
      
      this.clear();

    }
    getSelectedProduct(prd:ProductInfo):void {
      this.isDelete=true;
      this.selIndex = this.products.indexOf(prd);
      // this.product = prd;
      // use Object.assign(target, source);
      // target is an object in which source will be copied with its schema and values
      // but source and target are physicallyu different objects
      console.log('iSDelete:' + this.isDelete);
      console.log('index:' + this.selIndex);
      this.product = Object.assign({}, prd);
    }

    sort1(): Array<ProductInfo> {
      return this.products.sort((a,b)=> a.ProductName.localeCompare(b.ProductName));
      // this.products.sort((a, b) => a.BasePrice - b.BasePrice);
      // return this.products.sort((a, b) => { if (a.BasePrice < 0) {return -1; } if (b.BasePrice <0 ) {return 1;} return b.BasePrice - a.BasePrice });
     
    }

    sort2(): Array<ProductInfo> {
     return this.products.sort((a,b)=> b.ProductName.localeCompare(a.ProductName));
    }

    delete(prd:ProductInfo):void {
      this.product = prd;
      if(confirm("Do you want to delete this record?")) {
        this.logic.deleteProduct(this.product);
        this.product = new ProductInfo(0, '', '', '', '','',0);
      }
    }
    
}
