import { ArrayType } from '@angular/compiler';
import { ProductInfo } from './app.product.model';
export class Logic {
  private products: Array<ProductInfo>;
  constructor(){
    setTimeout(()=>{
      console.log('wait for soke time');
    }, 9000);
    this.products = new Array<ProductInfo>();
    this.products.push(new ProductInfo(1, 'Prd001', 'Laptop', 'Electronics', 'HP', 'Gaming',120000));
    this.products.push(new ProductInfo(2, 'Prd002', 'Iron', 'Electrical', 'Bajaj', 'Power Press',2000));
    this.products.push(new ProductInfo(3, 'Prd003', 'Lays', 'Food', 'TATA', 'Energy',20));
  }

  getProducts(): Array<ProductInfo> {
    return this.products;
  }

  addProduct(prd:ProductInfo,isDelete:boolean,selIndex:number): Array<ProductInfo> {
    if(isDelete==true)  //this logic is for udtaing the existing records
    {
      this.products.splice(selIndex, 1);   
    } 
    
    console.log(Math.max(prd.ProductRowId));
    //console.log(Math.max(this.products.map(prd.ProductRowId)));
    console.log('Max RowID:' + Math.max.apply(Math, this.products.map(function(o) { return o.ProductRowId; })));
    
    prd.ProductRowId = Math.max.apply(Math, this.products.map(function(o) { return o.ProductRowId; }))+1;
    this.products.push(prd);
    isDelete=false;   
    return this.products;
  }
  
  deleteProduct(selIndex:number):void{
    //const index: number = this.products.indexOf(prd);
     console.log(selIndex);
     this.products.splice(selIndex, 1);
  }
  
}
